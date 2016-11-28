(function() {
    angular.module('app', ['ngMaterial', 'angular.filter'])
        .config(['$mdIconProvider', '$mdThemingProvider', function ($mdIconProvider, $mdThemingProvider) {
            $mdIconProvider.fontSet('i8', 'icons8');
            $mdThemingProvider.definePalette('dark-violet', {
                '50': '6b6b99',
                '100': '6b6b99',
                '200': '6b6b99',
                '300': '6b6b99',
                '400': '6b6b99',
                '500': '6b6b99',
                '600': '6b6b99',
                '700': '6b6b99',
                '800': '6b6b99',
                '900': '6b6b99',
                'A100': '6b6b99',
                'A200': '6b6b99',
                'A400': '6b6b99',
                'A700': '6b6b99',
                'contrastDefaultColor': 'dark',
                'contrastDarkColors': [],
                'contrastLightColors': []
            });
            $mdThemingProvider.definePalette('dark-grey', {
                '50': '292c33',
                '100': '292c33',
                '200': '292c33',
                '300': '292c33',
                '400': '292c33',
                '500': '292c33',
                '600': '292c33',
                '700': '292c33',
                '800': '292c33',
                '900': '292c33',
                'A100': '292c33',
                'A200': '292c33',
                'A400': '292c33',
                'A700': '292c33',
                'contrastDefaultColor': 'dark',
                'contrastDarkColors': [],
                'contrastLightColors': []
            });
            $mdThemingProvider.theme('default')
                .primaryPalette('dark-grey')
                .accentPalette('dark-violet');
        }])
        .controller('AppController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

            //search bar visibility; off by default
            $scope.searchBarIsOn = false;

            var originatorEv;

            $scope.openMenu = function($mdOpenMenu, ev) {
                originatorEv = ev;
                $mdOpenMenu(ev);
            };

            var countTasksByProject = function (projectId) {
                return _.size(_.where($scope.tasks, { projectId: projectId }));
            };

            //project list
            $scope.projects = [
                {
                    id: 1,
                    name: 'Private',
                    count: 8
                },
                {
                    id: 2,
                    name: 'Decode',
                    count: 25
                },
                {
                    id: 3,
                    name: 'Family',
                    count: 3
                },
                {
                    id: 4,
                    name: 'Cookie',
                    count: 13
                }
            ];

            // task list
            $scope.tasks = [
                {
                    name: 'Create a company',
                    dateName: 'Today',
                    projectId: 1,
                    id: 1
                },
                {
                    name: 'Call in barber shop',
                    dateName: 'Tomorrow',
                    projectId: 1,
                    id: 2
                },
                {
                    name: 'Earn a lot of money',
                    dateName: 'Friday',
                    date: '09.06.2016',
                    projectId: 1,
                    id: 3
                },
                {
                    name: 'Go to the shop',
                    dateName: 'Friday',
                    date: '09.06.2016',
                    projectId: 1,
                    id: 4
                },
                {
                    name: 'Buy gifts',
                    dateName: 'Saturday',
                    date: '10.06.2016',
                    projectId: 1,
                    id: 5
                },
                {
                    name: 'Brush teeth',
                    dateName: 'Sunday',
                    date: '11.06.2016',
                    projectId: 1,
                    id: 6
                },
                {
                    name: 'Buy a plane tickets',
                    dateName: 'Monday',
                    date: '12.06.2016',
                    projectId: 1,
                    id: 7
                },
                {
                    name: 'Fly away to the Thailand',
                    dateName: 'Monday',
                    date: '12.06.2016',
                    projectId: 1,
                    id: 8
                }
            ];

            /**
             * Remove task from task list and task panel
             * @param {integer} taskId
             */
            $scope.completeTask = function (taskId) {
                var index = _.findIndex($scope.tasks, {id: taskId});
                $scope.tasks.splice(index, 1);
                index = _.findIndex($scope.currentTaskList, {id: taskId});
                $scope.currentTaskList.splice(index, 1);
            };

            // tasks shown in list
            $scope.currentTaskList = {

            };

            // currently open task
            $scope.currentTask = {
                name: ''
            };

            // count tasks by projects
            $scope.taskCount = {};
            _.each($scope.projects, function(item, index) {
                $scope.taskCount[item.id] = _.size(_.where($scope.tasks, { projectId: item.id }));
            });

            /**
             * Filter tasks by project and show 'em inside panel
             * @param {integer} projectId
             */
            $scope.showTasksByProject = function (projectId) {
                $scope.currentProject = projectId;
                $scope.currentTaskList = _.where($scope.tasks, { projectId: projectId });
            };

            /**
             * Detect if panel contains any tasks
             * @returns {boolean}
             */
            $scope.hasTasks = function() {
                return _.size($scope.currentTaskList) > 0;
            };

            /**
             * Panel togglers
             */

            $scope.toggleTaskPanel = function () {
                $mdSidenav('tasks').toggle();
            };

            $scope.toggleProjectPanel = function () {
                $mdSidenav('projects').toggle();
            };

            $scope.viewTask = function (id) {
                $mdSidenav('view-task').toggle();
                $scope.currentTask.name = _.findWhere($scope.tasks, { id: id }).name;
            };

            $scope.closeTask = function () {
                $mdSidenav('view-task').close();
            };

            $scope.toggleSearchBar = function () {
                $scope.searchBarIsOn = !$scope.searchBarIsOn;
            };

        }]);
})();