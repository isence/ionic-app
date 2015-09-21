angular.module('myApp.controllers', ["ionic"])


    .controller('tabController', function($scope,$state,$cordovaToast) {


    $scope.title='tabController';
        $scope.clear = function(statename) {
            $state.go(statename);

        };


    })

    .controller('teamController', function($scope) {


    })
    .controller('teamDetailCtrl', function($scope, $stateParams, team) {
        $scope.team= team.get($stateParams.id);
    })

    .controller('chatController', [ '$scope','chat',function($scope, chat)  {


        $scope.chats = chat.all();
        // .fromTemplate() method


    }])
    .controller('chatDetailCtrl',[ '$scope','$stateParams','chat',function($scope, $stateParams, chat) {
        $scope.chat= chat.get($stateParams.id);


    }])

    .controller('findController', function($scope,Find) {


        $scope.finds=Find.all();
    })
    .controller('findDetailCtrl', function($scope, $stateParams, Find) {
        $scope.find= Find.get($stateParams.id);
    })
    .controller('selfController', function($scope,Self,$rootScope) {

        $scope.selfs=Self.all();
        $rootScope.hideNav='true';

    })
    .controller('selfDetailCtrl', function($scope, $stateParams, Self) {
        $scope.self= Self.get($stateParams.id);

    })
    .controller('friendsListCtrl', function($scope, $http) {
        $scope.data = {};

        $scope.submit = function(){
            var link = 'http://localhost:63342/www/2.php?callback=JSON_CALLBACK';

            $http.jsonp(link).success(
                function(data){
                    console.log(data);
                }
            ).error(function(data){
                    console.log("err");
                });
        };
    })





      // $ionicNavBarDelegate.showBar(false);







