(function() {
  'use strict';

  angular.module('app.common')
  .service('StudentServiceCommon', StudentServiceCommon);

	StudentServiceCommon.$inject = [ '$translate', '$resource', '$http','$filter', 'UrlConstantsCore', 'GlobalConstantsCore','$rootScope','$state','IndexServiceCore','UrlConstantsCommon','GlobalValuesCore'];

  function StudentServiceCommon($translate, $resource, $http,$filter, UrlConstantsCore, GlobalConstantsCore,$rootScope,$state,IndexServiceCore,UrlConstantsCommon,GlobalValuesCore) {

	var service = {
        search: search,
        approve:approve,
        reject:reject,
        
    };
    return service;

    function search(url){
		if($filter('HasValueFilterCore')(url)){
			var promise = IndexServiceCore.sendGETRequest(url);
			console.log('promise: ',promise);
			return promise;
		}
    }

    function approve(collegeStudentId){
      var url = "";
      url = UrlConstantsCommon.COLLEGESTUDENT_approve+"/"+collegeStudentId;
      
      if($filter('HasValueFilterCore')(url)){
        var promise = IndexServiceCore.sendGETRequest(url);
        console.log('promise: ',promise);
        return promise;
      }
      }
  
    function reject(collegeStudentId){
      var url = UrlConstantsCommon.COLLEGESTUDENT_reject+"/"+collegeStudentId;
      if($filter('HasValueFilterCore')(url)){
        var promise = IndexServiceCore.sendGETRequest(url);
        console.log('promise: ',promise);
        return promise;
      }
      }
  }
})();
