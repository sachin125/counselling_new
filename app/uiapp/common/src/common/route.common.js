(function() {
   'use strict';
   
   
   angular.module('app.common')
   .config(config);

   config.$inject = ['$stateProvider', '$urlRouterProvider', 'StatesConstantsCommon', 'TemplatesConstantsCommon', 'UrlConstantsCommon'];


function config($stateProvider, $urlRouterProvider, StatesConstantsCommon, TemplatesConstantsCommon, UrlConstantsCommon) {

    $stateProvider
     //Test Don't use this routing
      .state('dashboard.test1', {
        url: "/home",
        templateUrl: "../app/uiapp/core/src/home/views/home.core.html",
        controller: 'DashboardControllerCore as ctrl',
        data: {
          parent: 'Dashboard'
        },
        resolve: {
          breadcumb: function() {
            return ['Dashboard'];
          }
        }
      }) 
      .state(StatesConstantsCommon.DASHBOARD_COMMON_STATE, {
        url: "/dashboardCommon",
        templateUrl: TemplatesConstantsCommon.DASHBOARD_COMMON_HTML,
        controller: 'DashoardControllerCommon as ctrl',
        activetab: StatesConstantsCommon.DASHBOARD_COMMON_STATE,
        data: {
          parent: StatesConstantsCommon.DASHBOARD_COMMON_STATE,
        },
        resolve: {
			breadcumb: function($stateParams) {
				return ['Home'];
			  }
			}
		})
	.state(StatesConstantsCommon.COLLEGE_STATE, {
        url: "/college",
        templateUrl: TemplatesConstantsCommon.COLLEGE_HTML,
        controller: 'CollegeController as ctrl',
        activetab: StatesConstantsCommon.COLLEGE_STATE,
        data: {
          parent: StatesConstantsCommon.COLLEGE_STATE,
        },
        resolve: {
			breadcumb: function($stateParams) {
				return ['College'];
			  }
			}
		})
    .state(StatesConstantsCommon.STUDENT_STATE, {
      url: "/student",
      templateUrl: TemplatesConstantsCommon.STUDENT_HTML,
      controller: 'StudentController as ctrl',
      activetab: StatesConstantsCommon.STUDENT_STATE,
      data: {
        parent: StatesConstantsCommon.STUDENT_STATE,
      },
      resolve: {
    breadcumb: function($stateParams) {
      return ['Student'];
      }
    }
  })
		.state(StatesConstantsCommon.MYCART_STATE, {
        url: "/wish",
        templateUrl: TemplatesConstantsCommon.WISH_LIST_HTML,
        controller: 'WishController as ctrl',
        activetab: StatesConstantsCommon.MYCART_STATE,
        data: {
          parent: StatesConstantsCommon.MYCART_STATE,
        },
        resolve: {
			breadcumb: function($stateParams) {
				return ['My Cart'];
			  }
			}
		})
		.state(StatesConstantsCommon.ABOUTCAST, {
        url: "/wish",
        templateUrl: TemplatesConstantsCommon.ABOUTCAST_HTML,
        controller: 'AboutCastControllerCommon as ctrl',
        activetab: StatesConstantsCommon.ABOUTCAST,
        data: {
          parent: StatesConstantsCommon.ABOUTCAST,
        },
        resolve: {
			breadcumb: function($stateParams) {
				return ['About Cast'];
			  }
			}
		})
		.state(StatesConstantsCommon.ADDUSER_STATE, {
        url: "/addUser",
        templateUrl: TemplatesConstantsCommon.ADD_ANOTHER_USER_HTML,
        controller: 'AddProfileControllerCommon as ctrl',
        activetab: StatesConstantsCommon.ADDUSER_STATE,
        data: {
          parent: StatesConstantsCommon.ADDUSER_STATE,
        },
        resolve: {
			breadcumb: function($stateParams) {
				return ['Add User'];
			  }
			}
		})
		.state(StatesConstantsCommon.PHOTOGRAPHER, {
        url: "/addUser",
        templateUrl: TemplatesConstantsCommon.PHOTOGRAPHER_LIST_HTML,
        controller: 'PhotographerControllerCommon as ctrl',
        activetab: StatesConstantsCommon.PHOTOGRAPHER,
        data: {
          parent: StatesConstantsCommon.PHOTOGRAPHER,
        },
        resolve: {
			breadcumb: function($stateParams) {
				return ['Photographer'];
			  }
			}
		})
      ;
   
}})();
