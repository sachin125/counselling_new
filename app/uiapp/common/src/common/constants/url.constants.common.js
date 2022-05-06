(function() {
'use strict';

var BASE_URL = context+"/rest";
angular.module('app.common')
	.constant('UrlConstantsCommon', {
		
		USER_SEARCH_URL:BASE_URL+'/User/search',
		COLLEGE_SEARCH_URL:BASE_URL+'/college/search',
		COLLEGESTUDENT_createCollegeStudent:BASE_URL+'/CollegeStudent/createCollegeStudent',
		COLLEGESTUDENT_removeCollegeStudent:BASE_URL+'/CollegeStudent/removeCollegeStudent',
		COLLEGESTUDENT_search:BASE_URL+'/CollegeStudent/search',
		COLLEGESTUDENT_searchCollege:BASE_URL+'/CollegeStudent/searchCollege',
		COLLEGESTUDENT_searchStudent:BASE_URL+'/CollegeStudent/searchStudent',
		COLLEGESTUDENT_findByCollegeId:BASE_URL+'/CollegeStudent/findByCollegeId',
		COLLEGESTUDENT_approve:BASE_URL+'/CollegeStudent/approve',
		COLLEGESTUDENT_reject:BASE_URL+'/CollegeStudent/reject',
		
		
	});

})();

