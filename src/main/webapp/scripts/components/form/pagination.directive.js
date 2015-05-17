/* globals $ */
'use strict';

angular.module('trendsApp')
    .directive('trendsAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
