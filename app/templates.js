angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('screens/home.view.html','<div>HOME</div>');
$templateCache.put('screens/landing.view.html','<div ui-view="loader"></div><div ui-view="header"></div><div ui-view=""></div><div ui-view="footer"></div>');
$templateCache.put('templates/landing-footer.tpl.html','');
$templateCache.put('templates/landing-header.tpl.html','');
$templateCache.put('templates/loader.tpl.html','');}]);