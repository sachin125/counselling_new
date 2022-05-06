(function() {
    'use strict';
    angular.module('app.common').controller('CollegeController', CollegeController);
    CollegeController.$inject = [ '$translate','$scope', '$rootScope', 'StatesConstantsCommon', 'GlobalValuesCore', 'TemplatesConstantsCore', 'GlobalConstantsCore', '$filter', 'UrlConstantsCommon', '$timeout', '$state','breadcumb','CollegeServiceCommon','StatesConstantsCore','WishServiceCommon'];

    function CollegeController($translate, $scope, $rootScope,StatesConstantsCommon, GlobalValuesCore, TemplatesConstantsCore, GlobalConstantsCore, $filter, UrlConstantsCommon, $timeout, $state,breadcumb,CollegeServiceCommon,StatesConstantsCore,WishServiceCommon) {
        var self = this;
        $rootScope.breadcumb = breadcumb;
        var originatorEv;
        
        $scope.openTableMenu = function($mdOpenMenu, ev) {
		  originatorEv = ev;
		  $mdOpenMenu(ev);
		};
        
        console.log('GlobalValuesCore.USER_CONTEXT::: ',GlobalValuesCore.USER_CONTEXT);
        
        $scope.viewProfile = function(user){
		   var username = user.username;
		   $state.go(StatesConstantsCore.profile, {username:username});
		};
        
        $scope.userList=[];
		$scope.collegeList=[];
        $scope.userWrapper={};
		$scope.IsViewMore=false;
         		
		$scope.searchUser = function(){
			var url = UrlConstantsCommon.COLLEGE_SEARCH_URL+"?&llimit=0&ulimit=1000";
			console.log('CollegeController url::::: ',url)
			CollegeServiceCommon.search(url).then(function(response) {
				console.log(response);
				$scope.collegeList=[];	
				if ($filter('HasValueFilterCore')(response)) {	
					$scope.collegeList = response;
				}
			},function(error) {
				//$scope.cancel();
			});
		};
        $scope.searchUser();
       
		$scope.viewProfile = function(collegeId){
			$scope.IsViewMore=!$scope.IsViewMore;
		}

        $scope.addToWish = function(collegeId){
			var promise = WishServiceCommon.addToWish(collegeId);
			console.log('promise:: ',promise);
		}
		
		$scope.deleteWish = function(collegeId){
			var promise = WishServiceCommon.deleteWish(collegeId);
			console.log('promise:: ',promise);
		}        
        
    }
})();
