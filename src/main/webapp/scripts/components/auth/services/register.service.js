'use strict';

angular.module('trendsApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


