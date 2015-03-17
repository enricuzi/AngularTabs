/* Define the module used with ng-app, no other dependencies */
angular.module('App', [])

    /* Define the controller for the first example */
    .controller('TabCtrlOne', ['$scope', function ($scope) {

        /* Add to the scope this controller the list of tabs  and as url use the html id of the scripts */
        $scope.tabs = [{
            title: 'Lorem ipsum',
            url: 'templateOne'
        }, {
            title: 'Ut enim',
            url: 'templateTwo'
        }, {
            title: 'Duis aute',
            url: 'templateThree'
        }];

        /* Add here a template url to pre-load */
        $scope.view = '';

        /* Add function click to set which template load */
        $scope.onClick = function (tab) {
            $scope.view = tab.url;
        };

        /* Add function to check if a template is loaded */
        $scope.isActive = function (tabUrl) {
            return tabUrl == $scope.view;
        };
    }])

    /* No controller defined for second example */

    /* Define the controller for the third example */
    .controller('TabCtrlThree', function () {

        /* Add init tab to pre-load */
        this.tab = 3;

        /* Add function to set which tab number show */
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        /* Add function to check if a tab is showed */
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });