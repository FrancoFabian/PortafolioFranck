(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["120b50f449bf86f401308d1f54e870f3"],{P6bW:function(e,t,n){"use strict";n("ma9I");n("zKZe");n("5DmW");n("NBAS");n("UxlC");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=c(n("q1tI"));var i=n("mR6N");var o=f(n("CjT8"));var a=f(n("Pwnf"));var u=n("WGxL");var l=f(n("WjuW"));var s=f(n("hrYI"));var i18n=c(n("HEOz"));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};if(r.get||r.set){Object.defineProperty(t,n,r)}else{t[n]=e[n]}}}}t.default=e;return t}}function p(){p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};return p.apply(this,arguments)}function g(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function y(e,t,n){if(t)d(e.prototype,t);if(n)d(e,n);return e}function v(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return h(e)}function b(e){b=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return b(e)}function h(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function m(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)S(e,t)}function S(e,t){S=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return S(e,t)}function O(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var w={EMAIL_INVALID:i18n._("Este correo electr\u00f3nico no parece estar formado correctamente.")};var j=function e(t){return t.toLowerCase().replace(/\s+/g,"")};var E=function(e){m(a,e);function a(){var e;var n;g(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++){r[i]=arguments[i]}n=v(this,(e=b(a)).call.apply(e,[this].concat(r)));O(h(n),"state",{pendingSuggestion:null,appliedSuggestion:null});O(h(n),"handleBlur",function(e){var t=e.target.value;if((0,u.isEmailValid)(t)){o.default.mailcheck.run({email:t,suggested:n.handleSuggestionFromKicksend,empty:n.handleSuggestionFromKicksend})}});O(h(n),"validateEmail",function(e){n.setState({appliedSuggestion:null});if(!(0,u.isEmailValid)(e)){return w.EMAIL_INVALID}return null});O(h(n),"handleSuggestionFromKicksend",function(e){if(e&&e.full){n.setState({pendingSuggestion:e.full})}});O(h(n),"applySuggestion",function(){var e=n.state.pendingSuggestion;var t=n.props.onApplySuggestedEmail;if(t&&e){t(e)}n.setState({appliedSuggestion:e,pendingSuggestion:null})});O(h(n),"resetSuggestion",function(){return n.setState({appliedSuggestion:null})});return n}y(a,[{key:"renderEmailSuggestion",value:function e(){var n=this;var t=this.state.pendingSuggestion;return t&&i18n.$_("\u00bfQuisiste decir %(suggestionSpan)s?",{suggestionSpan:r.createElement("a",{"aria-labelledby":t,className:(0,i.css)(P.emailSuggestion),onClick:this.applySuggestion,onKeyPress:function e(t){if(t.key==="Enter"||t.key===" "){n.applySuggestion();t.preventDefault()}},role:"button",tabIndex:"0",title:s.default.changeEmail},t)})}},{key:"render",value:function e(){return r.createElement(l.default,p({label:i18n._("Tu correo electr\u00f3nico"),allowEmpty:false,emptyMessage:i18n._("Por favor dinos tu direcci\u00f3n de correo electr\u00f3nico."),fieldType:"email",normalizer:j,validator:this.validateEmail,value:this.state.appliedSuggestion,placeholder:i18n._("ejemplo@email.com"),suggestion:this.renderEmailSuggestion()},this.props,{onBlur:this.handleBlur,onChange:this.resetSuggestion}))}}]);return a}(r.Component);var P=i.StyleSheet.create({emailSuggestion:{color:a.default.blue,":hover":{cursor:"pointer",textDecoration:"underline"}}});var k=E;t.default=k}}]);
//# sourceMappingURL=../../sourcemaps/en/120b50f449bf86f401308d1f54e870f3.d60352eb77045c125102.js.map