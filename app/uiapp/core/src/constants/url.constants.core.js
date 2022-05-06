(function() {
'use strict';

var BASE_URL = context+"/rest";
angular.module('app.core')
	.constant('UrlConstantsCore', {
		
		J_SPRING_SECURITY_LOGOUT_URL : "./../j_spring_security_logout",
		LOGOUT_URL : "./../logout",
		USER_CONTEXT_URL : BASE_URL+"/User/userincontext",
		student_findByPk :BASE_URL+'/student/findByPk',
		student_update :BASE_URL+'/student/update',
		student_findByName :BASE_URL+'/student/findByName',
		USER_SEARCH_URL:BASE_URL+'/User/search',
		USER_CREATE_URL: BASE_URL+'/User/createUser/',
		UPDATE_USER_INFORMATION_URL: BASE_URL+'/User/update',
		USER_CREATE_URL:BASE_URL+'/User/create',

		
		
		
});

})();
