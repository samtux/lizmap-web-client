"use strict";WYMeditor.editor.prototype.resizable=function(options){var wym=this,$iframe=jQuery(wym._box).find('iframe'),$iframeDiv=jQuery(wym._box).find('.wym_iframe'),defaultOptions={resize:function(){$iframeDiv.height($iframe.height())},alsoResize:$iframe,handles:"s,e,se",minHeight:250},finalOptions=jQuery.extend(defaultOptions,options);if(jQuery.isFunction(jQuery.fn.resizable)){jQuery(wym._box).resizable(finalOptions)}else{WYMeditor.console.error('Oops, jQuery UI.resizable unavailable.')}};