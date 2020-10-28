(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.updateText = function () {
            $scope.inputString = $scope.inputText;
        }

        $scope.LunchCheck = function () {
            var LunchCount = 0;
            var stringToSplit = $scope.inputString;
            if (stringToSplit != null) {
                var splitString = stringToSplit.split(',');
                console.log(splitString);

                for (var i = 0; i < splitString.length; i++) {
                    console.log(splitString[i]);
                    if (splitString[i] != "") {
                        LunchCount += 1;
                    }
                };
                $scope.LunchCount = LunchCount;
            }
            else {
                var splitString = "";
                $scope.LunchCount = 0;
            };
            console.log($scope.LunchCount);

        };
        $scope.displayMessage = function () {

            if ($scope.LunchCount > 3) {
                return "Too Much!";
            }
            else if ($scope.LunchCount >= 1 && $scope.LunchCount <= 3) {
                return "Enjoy Your Meal!";
            }
            else {
                return "Please enter data first";
            }

        };

    }
})();
