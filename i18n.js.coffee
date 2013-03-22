i18n_module = angular.module('i18n', [])

i18n_module.filter('i18n', ($locale)->
  return (input, locale) ->
    if locale || $locale.id
      return translations[locale || $locale.id][input] || input
    return input
)

i18n_module.directive('i18nFind', () ->
  restrict: 'A'
  compile: (element, attrs) ->
    children = element.find(attrs['i18nFind'])

    angular.forEach(children, (item)->
      ele = angular.element(item)
      original = ele.text().trim()

      ele.text('{{\'' + original + '\' | i18n}}')
    )
)