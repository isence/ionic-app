angular.module('myApp.controllers', ["ionic"])


    .controller('tabController', function($scope,$state,$cordovaToast) {


    $scope.title='tabController';
        $scope.clear = function(statename) {
            $state.go(statename);

        };


    })

    .controller('teamController', function($scope) {


    })
    //获取组队中的单项
    .controller('teamDetailCtrl', function($scope, $stateParams, team) {
        $scope.team= team.get($stateParams.id);

    })
    //获取每一个项的每一个动态
    .controller('dataDetailCtrl', function($scope, $stateParams, team) {

        $scope.data=team.get($stateParams.id).date[$stateParams.dataId];
        console.log($scope.data);

    })

    .controller('chatController', [ '$scope','chat',function($scope, chat)  {


        $scope.chats = chat.all();
        // .fromTemplate() method


    }])
    .controller('chatDetailCtrl',[ '$scope','$stateParams','chat',function($scope, $stateParams, chat) {
        $scope.chat= chat.get($stateParams.id);


    }])


    .controller('selfController', function($scope,Self) {

        $scope.selfs=Self.all();

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







