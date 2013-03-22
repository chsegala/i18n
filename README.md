i18n
====

angularjs module for i18n

This module makes it easier to implement i18n within angularjs applications. It provides 1 filter and 1 directive.

You can use the filter like any other filter "{{elementBind | i18n}}" and the value will be internationalized, or you 			can use the 'i18n-find="[jQuery Selector]"' directive and let the directive apply the filter.<br/>
Just define a "translations" variable on window scope and let angular do the rest



	Ex.:
	
		<ul i18n-find="li">
			<li>text.to.internationalizate</li>
		</ul>
