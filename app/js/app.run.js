var runBlock = function ($window, $state, $rootScope) {

  $rootScope.$on('$translateChangeSuccess', function (event, data) {
    document.documentElement.setAttribute('lang', data.language);
  });
  $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {

  });

}
runBlock.$inject = ['$window', '$state', '$rootScope'];

brandApp.run(runBlock);
