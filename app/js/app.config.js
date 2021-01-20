var configBlock = function ($translateProvider, $locationProvider) {
  // Our translation config  will go in here
  $translateProvider
    .useStaticFilesLoader({
      prefix: '/locale/',
      suffix: '.json'
    })
    .useLocalStorage()
    .useSanitizeValueStrategy(null)
    .preferredLanguage('en')
    .fallbackLanguage(['en']);

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
configBlock.$inject = ['$translateProvider', '$locationProvider'];
brandApp.config(configBlock);
