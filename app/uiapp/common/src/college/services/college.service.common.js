(function() {
  'use strict';

  angular.module('app.common')
  .service('CollegeServiceCommon', CollegeServiceCommon);

	CollegeServiceCommon.$inject = [ '$translate', '$resource', '$http','$filter', 'UrlConstantsCore', 'GlobalConstantsCore','$rootScope','$state','IndexServiceCore','UrlConstantsCommon','GlobalValuesCore'];

  function CollegeServiceCommon($translate, $resource, $http,$filter, UrlConstantsCore, GlobalConstantsCore,$rootScope,$state,IndexServiceCore,UrlConstantsCommon,GlobalValuesCore) {

	var service = {
        search: search,
        
    };
    return service;

    function search(url){
		if($filter('HasValueFilterCore')(url)){
			var promise = IndexServiceCore.sendGETRequest(url);
			console.log('promise: ',promise);
			return promise;
		}
    }
  }
})();
