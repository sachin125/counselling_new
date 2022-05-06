(function() {
  'use strict';
angular.module('app.core').controller('ProfileControllerCore', ProfileControllerCore);
ProfileControllerCore.$inject= ['$scope', '$mdDialog', '$rootScope', '$filter', 'IndexServiceCore', 'UrlConstantsCore', 'TemplatesConstantsCommon', 'Notification', '$state', 'MsgConstantsCommon', 'GlobalConstantsCore', 'GlobalValuesCore','StatesConstantsCommon','DataById','StatesConstantsCore','UserServiceCore','Upload'];
function ProfileControllerCore($scope, $mdDialog, $rootScope, $filter, IndexServiceCore, UrlConstantsCore, TemplatesConstantsCommon, Notification, $state, MsgConstantsCommon, GlobalConstantsCore, GlobalValuesCore, StatesConstantsCommon,DataById,StatesConstantsCore,UserServiceCore,Upload) {
    
    $rootScope.breadcumb = ["Profile"];
    $scope.userWithAssociateObjectWrapper = DataById;
    console.log(' profile : $scope.userWithAssociateObjectWrapper: ',$scope.userWithAssociateObjectWrapper);
    
    
    $scope.editfamily={};
    function updateEachVariable(){
		$scope.readOnlyUserWithAssociateObjectWrapper = angular.copy($scope.userWithAssociateObjectWrapper);
	}
	updateEachVariable();
    $scope.files = [];
    
    $scope.editButtonVisible = false;
    var currentUser = GlobalValuesCore.USER_CONTEXT;
    
    $scope.editUserWithAssociateObjectWrapper = angular.copy($scope.userWithAssociateObjectWrapper);

    function editableAsTrue(){
		$scope.IsAccountInformationEditable = true;
	}
	
	function editableAsFalse(){
		$scope.IsAccountInformationEditable = false;
	}
	
	$scope.IsEditButtonClickedToggle = function(IsEditButtonClicked){
			IsEditButtonClicked = !IsEditButtonClicked;
			alert(IsEditButtonClicked);
			return IsEditButtonClicked;
	};
	
	$scope.goToViewProfile = function(){
	   var username = $scope.user.username;
	   $state.go(StatesConstantsCore.profile, {username:username});
	};
	
	$scope.editProfile = function(tab) {
		editableAsFalse();
		if(tab=='IsAccountInformationEditable'){
			$scope.IsAccountInformationEditable = true;
		}
    };
	$scope.cancelEditProfile = function(tab) {
		if(tab=='IsAccountInformationEditable'){
			$scope.IsAccountInformationEditable = false;
		}
    };
    		
    $scope.saveProfile = function(tab) {
		if(tab=='IsAccountInformationEditable'){
			updateUserAccountInfo();
			$scope.IsAccountInformationEditable = false;
		}
    };
    		
	function updateUserAccountInfo(){
		var json = $scope.editUserWithAssociateObjectWrapper;
		// json.checksum =  IndexServiceCore.getBash64Encode(json.checksum);	
		console.log('@class ProfileControllerCore @method updateUserAccountInfo json: ',json);
		var url = UrlConstantsCore.student_update;
		console.log('StatesConstantsCore.PROFILE url: ',url);
		var promise = IndexServiceCore.sendPOSTRequest(url,json);
	    promise.then(function(response) {
			if ($filter('HasValueFilterCore')(response)) {
				$scope.userWithAssociateObjectWrapper = response;
				updateEachVariable();
				Notification.displayToast("success", 'Successfully Data Updated');
			}
		},function(error) {
			//$scope.cancel();
		});
	}
	
	function updateUserProfileInfo(){
		var json = $scope.editUserWithAssociateObjectWrapper.userProfile;
		var promise = UserServiceCore.updateUserProfileInfo(json);
	    promise.then(function(response) {
			if ($filter('HasValueFilterCore')(response)) {
				$scope.userWithAssociateObjectWrapper.userProfile = response;
				$scope.userProfile = angular.copy($scope.userWithAssociateObjectWrapper.userProfile);
				Notification.displayToast("success", 'Successfully Data Updated');
			}
		},function(error) {
			//$scope.cancel();
		});
	}
	
	function mergePersonalInfo(){
		var editUserJson = $scope.editUserWithAssociateObjectWrapper;
		delete editUserJson.family;
		delete editUserJson.work;
		delete editUserJson.works;
		delete editUserJson.education;
		delete editUserJson.educations;
		var promise = UserServiceCore.mergePersonalInfo(editUserJson);
	    promise.then(function(response) {
			if ($filter('HasValueFilterCore')(response)) {
				Notification.displayToast("success", 'Successfully Data Updated');
			}
		},function(error) {
			//$scope.cancel();
		});
	};
	
	
	
}
})();
