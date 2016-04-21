(function() {
    'use strict';

    angular
        .module('tour')
        .controller('EventsListController', EventsListController)
        .controller('EventsDetailController', EventsDetailController);

    /** @ngInject */
    function EventsListController($timeout, $scope, EventSvc, NgMap) {
        var vm = this;
        var eventFilter = 'app/data/event/event-filter.json'
        EventSvc.getEventList(eventFilter).get(function(data) {
            // $log.log('filter', data.data)
            vm.filters = data.data
        })

        var eventContent = 'app/data/event/event-content.json'
        EventSvc.getEventList(eventContent).get(function(data) {
            // $log.log('content', data.data)
            vm.contents = data.data
        })
       
        // map
        NgMap.getMap().then(function(map) {
            vm.map = map;
            // console.log(map.getCenter());
            // console.log('markers', map.markers);
            // console.log('shapes', map.shapes);
        });

    }

    function EventsDetailController($timeout, webDevTec, toastr) {
        var vm = this;


    }


})();
