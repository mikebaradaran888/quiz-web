angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quizapimb-env.eba-8sfsiyex.us-east-2.elasticbeanstalk.com';

    return service;
}]);