angular.module('biz.index').config(
    function ($routeProvider, $locationProvider) {
        // @todo
        //$routeProvider
        //    .when(
        //        '/Overview', {
        //            templateUrl: '/biz/overview/page.html',
        //        }
        //    )
        //    .otherwise(
        //        '/Overview', {
        //            templateUrl: '/biz/overview/page.html',
        //        }
        //    );

        $locationProvider.html5Mode(true);
    }
);
