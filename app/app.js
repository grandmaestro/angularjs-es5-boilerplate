var appComponents = angular.module('appComponents', []);
var appConstants = angular.module('appConstants', []);
var appControllers = angular.module('appControllers', []);
var appDirectives = angular.module('appDirectives', []);
var appFactories = angular.module('appFactories', []);
var appFilters = angular.module('appFilters', []);
var appServices = angular.module('appServices', []);

var appDependencies = ['appServices', 'appFilters', 'appFactories', 'appDirectives', 'appControllers', 'appComponents', 'appConstants', 'ui.router','pascalprecht.translate','ngCookies'],
  brandApp = angular.module('brandApp', appDependencies);
