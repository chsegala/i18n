function I18nCtrl($scope, $locale){
	$locale.id = 'en-us'
	$scope.items = [1,2,3,4]
		
	$scope.set_locale = function(locale){
		$locale.id = locale;
	}
}