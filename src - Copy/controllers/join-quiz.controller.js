angular.module('app').controller('JoinQuizController', ['$scope', '$location', '$route', 'PlayService', function ($scope, $location, $route, PlayService) {
    $scope.status = "ready";
    $scope.join = async function() {
        try {
            $scope.status = "joining";
            const state = await PlayService.joinQuiz($scope.roomCode, $scope.playerName);
            const playUrl = `/play/${encodeURIComponent(state.roomCode)}/${encodeURIComponent(state.playerName.toLowerCase())}`;
            $location.path(playUrl).replace();
        } catch (error) {
            $scope.error = error.message;
            $scope.status = "error";
        } finally {
            $scope.$applyAsync();
        }
    };
}]);