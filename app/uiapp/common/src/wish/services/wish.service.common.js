(function() {
  'use strict';

  angular.module('app.common')
  .service('WishServiceCommon', WishServiceCommon);

	WishServiceCommon.$inject = [ '$translate', '$resource', '$http','$filter', 'UrlConstantsCore', 'GlobalConstantsCore','$rootScope','$state','IndexServiceCore','UrlConstantsCommon','GlobalValuesCore'];

  function WishServiceCommon($translate, $resource, $http,$filter, UrlConstantsCore, GlobalConstantsCore,$rootScope,$state,IndexServiceCore,UrlConstantsCommon,GlobalValuesCore) {

	var service = {
        search: search,
        addToWish:addToWish,
        deleteWish:deleteWish,
        updateWish:updateWish,
        
    };
    return service;

    function search(url){
		if($filter('HasValueFilterCore')(url)){
			var promise = IndexServiceCore.sendGETRequest(url);
			console.log('promise: ',promise);
			return promise;
		}
    }
    
    function addToWish(collegeId){
		var url = "";
		url = UrlConstantsCommon.COLLEGESTUDENT_createCollegeStudent+"/"+collegeId;
		
		if($filter('HasValueFilterCore')(url)){
			var promise = IndexServiceCore.sendGETRequest(url);
			console.log('promise: ',promise);
			return promise;
		}
    }

	function deleteWish(collegeId){
		var url = UrlConstantsCommon.COLLEGESTUDENT_removeCollegeStudent+"/"+collegeId;
		if($filter('HasValueFilterCore')(url)){
			var promise = IndexServiceCore.sendGETRequest(url);
			console.log('promise: ',promise);
			return promise;
		}
    }
    
    function updateWish(wishJson){
		var url = UrlConstantsCommon.WISH_UPDATE_URL+"/"+wishId;
		if($filter('HasValueFilterCore')(url)){
			var promise = IndexServiceCore.sendPOSTRequest(url,data);
			console.log('promise: ',promise);
			return promise;
		}
    }

  }
})();
