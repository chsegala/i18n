var i18n_module;

i18n_module = angular.module('i18n', []);

i18n_module.filter('i18n', function($locale) {
  return function(input, locale) {
    if (locale || $locale.id) {
      return translations[locale || $locale.id][input] || input;
    }
    return input;
  };
});

i18n_module.directive('i18nFind', function() {
  return {
    restrict: 'A',
    compile: function(element, attrs) {
      var children = element.find(attrs['i18nFind']);
      return angular.forEach(children, function(item) {
      	var ele, original;

        ele = angular.element(item);
        original = ele.text().trim();

        if(!/\{\{/.test(original))
					angular.element(item).text(('{{\''+original+'\' | i18n}}'));
      });
    }
  };
});