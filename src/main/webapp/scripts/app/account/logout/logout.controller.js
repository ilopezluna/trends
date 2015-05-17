'use strict';

angular.module('trendsApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
