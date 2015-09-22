// Ionic myApp

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'myApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'myApp.services' is found in services.js
// 'myApp.controllers' is found in controllers.js
//ngCordova.js is imported in index.html
angular.module('myApp', ['ionic', 'myApp.services', 'myApp.controllers','ngCordova'])
    .run(function ($ionicPlatform, $rootScope, $location, $timeout, $ionicHistory, $cordovaToast, $cordovaKeyboard) {

      $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleLightContent();
        }

      });

      //物理返回按钮控制&双击退出应用
      $ionicPlatform.registerBackButtonAction(function (e) {
        //判断处于哪个页面时双击退出
        if ($location.path() == '/tab/team' || $location.path() == '/tab/find' || $location.path() == '/tab/chat' || $location.path() == '/tab/self') {
          if ($rootScope.backButtonPressedOnceToExit) {
            ionic.Platform.exitApp();
          } else {
            $rootScope.backButtonPressedOnceToExit = true;
            $cordovaToast.showShortBottom('再按一次退出系统');
            setTimeout(function () {
              $rootScope.backButtonPressedOnceToExit = false;
            }, 2000);
          }
        } else if ($ionicHistory.backView()) {
          if ($cordovaKeyboard.isVisible()) {
            $cordovaKeyboard.close();
          } else {
            $ionicHistory.goBack();
          }
        }
        else {
          $rootScope.backButtonPressedOnceToExit = true;
          $cordovaToast.showShortBottom('再按一次退出系统');
          setTimeout(function () {
            $rootScope.backButtonPressedOnceToExit = false;
          }, 2000);
        }
        e.preventDefault();
        return false;
      }, 101);
    })

    .directive('hideTabs', function ($rootScope, $state) {
      return {
        restrict: 'AE',
        link: function ($scope) {
          $rootScope.hideTabs = 'tabs-item-hide';
          $scope.$on('$ionicView.beforeLeave', function () {
              //检测下一个状态是什么
            if(!($state.includes('tab.team-detail')||$state.includes('tab.data'))){
              $rootScope.hideTabs = '';
            }
          })}
        }
    })
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
      $ionicConfigProvider.backButton.text('').previousTitleText(false);
      $ionicConfigProvider.platform.ios.tabs.style('standard');
      $ionicConfigProvider.platform.ios.tabs.position('bottom');
      $ionicConfigProvider.platform.android.tabs.style('standard');
      $ionicConfigProvider.platform.android.tabs.position('standard');
      $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
      $ionicConfigProvider.platform.android.navBar.alignTitle('left');
      $ionicConfigProvider.platform.ios.backButton.previousTitleText(false).icon('ion-ios-arrow-thin-left');
      $ionicConfigProvider.platform.android.backButton.previousTitleText(false).icon('ion-chevron-left');
      $ionicConfigProvider.platform.ios.views.transition('ios');
      $ionicConfigProvider.platform.android.views.transition('android');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // 主状态
      .state('tab', {
        url: "/tab",
        abstract:true,
        templateUrl: "templates/tabs.html",
        controller:'tabController'
      })

    //以下每个tab-view都有自己的历史栈
    // chat页状态

      .state('tab.team', {
        url: '/team',
        views:{
          'chat':{
            templateUrl: "templates/team/team.html",
            controller:'teamController'
          }
        }
      })
      .state("tab.team-detail", {
        url: '/team/:id',
        views: {
          'chat': {
            templateUrl: "templates/team/team-detail.html",
            controller: 'teamDetailCtrl'
          }
        }
      })
      .state("tab.data", {
        url: '/team/:id/:dataId',
        views: {
          'chat': {
            templateUrl: "templates/team/data.html",
            controller: 'dataDetailCtrl'
          }
        }
      })


    //clubs页状态
      .state('tab.chat', {
        url: '/chat',
        views:{
          'clubs':{
            templateUrl: "templates/chat/chat.html",
            controller:'chatController'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chat/:id',
        views: {
          'clubs': {
            templateUrl: 'templates/chat/chat-detail.html',
            controller: 'chatDetailCtrl'
          }
        }
      })
      .state("tab.messageList", {
        views: {
          'clubs': {
            url: '/tab/chat/messageList',
            templateUrl: "templates/chat/messageList.html"
          }
        }
      })

    //self页状态
      .state('tab.self', {
        url: '/self',
        views:{
          'self':{
            templateUrl: "templates/self/self.html",
            controller:'selfController'
          }
        }
      })
      .state('tab.self-detail', {
        url: '/self/:id',
        views: {
          'self': {
            templateUrl: 'templates/self/self-detail.html',
            controller: 'selfDetailCtrl'
          }
        }
      })


// if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/team');

});
