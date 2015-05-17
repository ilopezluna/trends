/* globals $ */
'use strict';

angular.module('trendsApp')
    .directive('trendsAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
