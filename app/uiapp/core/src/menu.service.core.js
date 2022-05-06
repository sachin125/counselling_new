(function() {
    'use strict';
    angular.module('app.core').service('menuService', MenuService);
    MenuService.$inject = ['$q', '$translate', 'StatesConstantsCommon','StatesConstantsCore','$filter', '$rootScope', 'IndexServiceCore','GlobalConstantsCommon','GlobalValuesCore'];
    /**
     * Menu DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function MenuService($q, $translate, StatesConstantsCommon,StatesConstantsCore, $filter, $rootScope, IndexServiceCore, GlobalConstantsCommon,GlobalValuesCore) {
		//alert(5);
        var menu = [];
        var administration = "";
        
        var homeTab = {
            name: 'Home',
            icon: 'zmdi zmdi-home',
            href : StatesConstantsCore.HOME_VIEW
        };
        
        var collegeTab = {
            name: 'College',
            icon: 'zmdi zmdi-male-female',
            href : StatesConstantsCommon.COLLEGE_STATE
        };

        var studentTab = {
            name: 'Student',
            icon: 'zmdi zmdi-male-female',
            href : StatesConstantsCommon.STUDENT_STATE
        };
        
        var MyCart = {
            name: 'My Cart',
            icon: 'zmdi zmdi-eye',
            href : StatesConstantsCommon.MYCART_STATE
        };
    
        
        var AboutCast = {
            name: 'About the cast',
            icon: 'zmdi zmdi-group-work',
            href : StatesConstantsCommon.ABOUTCAST
        };
        
        var AddAnotherUserTab = {
            name: 'Add User',
            icon: 'zmdi zmdi-male-female',
            href : StatesConstantsCommon.ADDUSER_STATE
        };
        
        var profileTab = {
            name: 'Profile',
            icon: 'zmdi zmdi-male-female',
            href : StatesConstantsCore.PROFILE
        };

        /*******************************************Administration Tab END************************************************/


        if (is_admin) {
            menu.push(homeTab);            
        }else if (is_student) {
            menu.push(collegeTab);
            menu.push(MyCart);
            menu.push(profileTab);
            
        }else if (is_college) {
            menu.push(studentTab);   
        }

      /********** funtion to show menu option for all admin****************/
		function showAdministration() {
            if (is_admin) {
                $rootScope.showAdministrationPanel = true;
                return $rootScope.showAdministrationPanel;
            }
        }

        // Promise-based API
        return {
            // function to show all menu option available
            loadmenu: function() {
                // Simulate async nature of real remote calls
                var deferred = $q.defer();
                setTimeout(function() {
                    deferred.resolve(menu);
                }, 1000);
                return deferred.promise;
            },
            // function to load menu for admin
            loadadminmenu: function() {
             
            }
        };
}})();
