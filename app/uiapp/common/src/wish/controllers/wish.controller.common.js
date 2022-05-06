(function() {
    'use strict';
    angular.module('app.common').controller('WishController', WishController);
    WishController.$inject = [ '$translate','$scope', '$rootScope', 'StatesConstantsCommon', 'GlobalValuesCore', 'TemplatesConstantsCore', 'GlobalConstantsCore', '$filter', 'UrlConstantsCommon', '$timeout', '$state','breadcumb','WishServiceCommon','StatesConstantsCore'];

    function WishController($translate, $scope, $rootScope,StatesConstantsCommon, GlobalValuesCore, TemplatesConstantsCore, GlobalConstantsCore, $filter, UrlConstantsCommon, $timeout, $state,breadcumb,WishServiceCommon,StatesConstantsCore) {
        var self = this;
        $rootScope.breadcumb = breadcumb;
        var originatorEv;
        var currentUser = GlobalValuesCore.USER_CONTEXT;
        $scope.openTableMenu = function($mdOpenMenu, ev) {
		  originatorEv = ev;
		  $mdOpenMenu(ev);
		};
        
        $scope.viewProfile = function(user){
		   var username = user.username;
		   $state.go(StatesConstantsCore.profile, {username:username});
		};
        
		$scope.searchCollege = function(){
			var url = UrlConstantsCommon.COLLEGESTUDENT_searchCollege+"?_s=student.id=="+currentUser.id+"&ulimit=1000&llimit=0";
			WishServiceCommon.search(url).then(function(response) {
				console.log(response);
				$scope.userAOWrapperList=[];
				if ($filter('HasValueFilterCore')(response)) {
					$scope.collegeList = response;
				}
			},function(error) {
				//$scope.cancel();
			});
		};


		$scope.searchCollege();
		
		$scope.deleteWish = function(collegeId){
			var promise = WishServiceCommon.deleteWish(collegeId);
			console.log('promise:: ',promise);
			$scope.searchCollege();
		}   
        
    }
})();
