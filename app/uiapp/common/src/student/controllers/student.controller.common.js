(function() {
    'use strict';
    angular.module('app.common').controller('StudentController', StudentController);
    StudentController.$inject = [ '$translate','$scope', '$rootScope', 'StatesConstantsCommon', 'GlobalValuesCore', 'TemplatesConstantsCore', 'GlobalConstantsCore', '$filter', 'UrlConstantsCommon', '$timeout', '$state','breadcumb','StudentServiceCommon','StatesConstantsCore','WishServiceCommon'];

    function StudentController($translate, $scope, $rootScope,StatesConstantsCommon, GlobalValuesCore, TemplatesConstantsCore, GlobalConstantsCore, $filter, UrlConstantsCommon, $timeout, $state,breadcumb,StudentServiceCommon,StatesConstantsCore,WishServiceCommon) {
        var self = this;
        $rootScope.breadcumb = breadcumb;
        var originatorEv;
        
		$scope.currentUser = GlobalValuesCore.USER_CONTEXT;
		
        $scope.openTableMenu = function($mdOpenMenu, ev) {
		  originatorEv = ev;
		  $mdOpenMenu(ev);
		};
        
       
        
        $scope.viewProfile = function(user){
			var username = user.username;
			$state.go(StatesConstantsCore.profile, {username:username});
		 };
        
		 
		 
		 $scope.searchCollege = function(){
			var url = UrlConstantsCommon.COLLEGE_SEARCH_URL+"?_s=user.id=="+$scope.currentUser.id+"&ulimit=1000&llimit=0";
			
			StudentServiceCommon.search(url).then(function(response) {
				console.log(response);
				$scope.userAOWrapperList=[];
				if ($filter('HasValueFilterCore')(response)) {
					$scope.college = response[0];
					console.log('StudentController: url: ',$scope.college);
					$scope.searchStudent();
				}
			},function(error) {
				//$scope.cancel();
			});
		};

        $scope.searchStudent = function(){
			var url = UrlConstantsCommon.COLLEGESTUDENT_search+"?_s=college.id=="+$scope.college.id+"&ulimit=1000&llimit=0";
			StudentServiceCommon.search(url).then(function(response) {
				console.log(response);
				$scope.userAOWrapperList=[];
				if ($filter('HasValueFilterCore')(response)) {
					$scope.collegeStudentList = response;
					console.log('$scope.collegeStudentList::::::: ',$scope.collegeStudentList);
				}
			},function(error) {
				//$scope.cancel();
			});
		};

		$scope.searchCollege();
		
		$scope.approve = function(collegeStudentId){
			alert(collegeStudentId)
			var promise = StudentServiceCommon.approve(collegeStudentId);
			console.log('promise:: ',promise);
			$scope.searchCollege();
		} 
		
		$scope.reject = function(collegeStudentId){
			var promise = StudentServiceCommon.reject(collegeStudentId);
			console.log('promise:: ',promise);
			$scope.searchCollege();
		} 
        
    }
})();
