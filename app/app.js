(function () {
    'use strict';

    angular.module('app',[])
    .controller("registerController", function($scope, userService) {    
        $scope.saveUser = function() {
            userService.Update($scope.user)
                .then(function () {
                    console.log('User updated');
                })
        };


        function initController() {
            // get current user
            console.log('init controller');            
            $scope.user = {};
        }
        initController();
        
    })
    .factory('userService', function($http, $q) {
        var service = {};

        service.Update = Create;

        return service;

        function Create(user) {
            return $http.post('/api/users', user).then(handleSuccess, handleError);
        }

        // private functions
        function handleSuccess(res) {
            return res.data;
        }
        function handleError(res) {
            return $q.reject(res.data);
        }
    });

    //angular.bootstrap(document, ['app']);    
})();