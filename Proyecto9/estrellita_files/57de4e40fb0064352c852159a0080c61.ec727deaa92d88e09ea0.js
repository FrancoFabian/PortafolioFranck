(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["57de4e40fb0064352c852159a0080c61"],{WGxL:function(e,r,n){"use strict";n("pNMO");n("ma9I");n("TeQF");n("yq1k");n("5DmW");n("07d7");n("5s+n");n("UxlC");n("hByQ");n("FZtP");Object.defineProperty(r,"__esModule",{value:true});r.USERNAME_VALIDATION_STRINGS=r.USERNAME_MAX_LENGTH=r.USERNAME_MIN_LENGTH=r.NICKNAME_MAX_LENGTH=r.signupUnder13=r.signup=r.LOGIN_ERROR_STRINGS=r.login=r.isUsernameAvailable=r.isUsernameValid=r.isEmailValid=r.getLoginErrorString=r.getcontinueUrlFromQueryString=r.EMAIL_REGEX=r.cleverSignup=void 0;var t=s(n("4PhQ"));var o=n("skGw");var a=u(n("i4iA"));var i=u(n("/eLw"));var i18n=s(n("HEOz"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule){return e}else{var r={};if(e!=null){for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};if(t.get||t.set){Object.defineProperty(r,n,t)}else{r[n]=e[n]}}}}r.default=e;return r}}function c(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};var t=Object.keys(n);if(typeof Object.getOwnPropertySymbols==="function"){t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))}t.forEach(function(e){l(r,e,n[e])})}return r}function l(e,r,n){if(r in e){Object.defineProperty(e,r,{value:n,enumerable:true,configurable:true,writable:true})}else{e[r]=n}return e}var E=["/coaches"];var f=function e(){var r=(0,i.default)(window.location.search);var n=r.continue||"";var t=n.replace(location.protocol+"//","").replace(location.host,"");if(E.includes(t)||(0,i.default)(window.location.search).alwayscontinue){return t}return null};r.getcontinueUrlFromQueryString=f;function R(t,a){return function(e){return new Promise(function(r,n){return(0,o.khanFetch)(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(0,o.encodeParams)(a(e))}).then(function(e){return e.json()}).then(function(e){if(e.errors){n(e)}else{r(e)}}).catch(function(e){if(e.response){e.response.json().then(function(e){return n(e)}).catch(function(e){return n(e)})}else{n(e)}})})}}var O=R("/signup/under13",function(e){return e});r.signupUnder13=O;var d=R("/signup",function(e){return c({},e,{isteacher:e.role==="teacher"?1:0,isparent:e.role==="parent"?1:0})});r.signup=d;var p=R("/signup/clever",function(e){return e});r.cleverSignup=p;var A=R("/login",function(e){return e});r.login=A;var g={BAD_LOGIN:i18n._("Tu nombre de usuario o contrase\u00f1a son incorrectos."),DUPLICATE_USERNAME:i18n._("\u00a1Ups! No podemos iniciar sesi\u00f3n con ese nombre de usuario. Por favor, inicia sesi\u00f3n con tu direcci\u00f3n de correo electr\u00f3nico y luego cambia tu nombre de usuario para solucionar este problema. Si no tienes una direcci\u00f3n de correo electr\u00f3nico, por favor escr\u00edbenos a trav\u00e9s de nuestro Centro de ayuda."),GENERIC_ERROR:i18n._("Error al iniciar sesi\u00f3n. Por favor int\u00e9ntalo nuevamente.")};r.LOGIN_ERROR_STRINGS=g;var N=function e(r){var n=r.badlogin,t=r.duplicateusername;if(n){return g.BAD_LOGIN}if(t){return g.DUPLICATE_USERNAME}return g.GENERIC_ERROR};r.getLoginErrorString=N;var h=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;r.EMAIL_REGEX=h;var v=function e(r){return r&&h.test(r)};r.isEmailValid=v;var T=40;r.NICKNAME_MAX_LENGTH=T;var m=3;r.USERNAME_MIN_LENGTH=m;var L=40;r.USERNAME_MAX_LENGTH=L;var I={ALPHANUMERIC_ONLY:i18n._("Solo letras y n\u00fameros."),GENERIC_ERROR:i18n.ngettext({"lang": "es", "messages": ["Los nombres de usuario deben ser alfanum\u00e9ricos, comenzar con una letra y tener entre %(min)s y %(num)s car\u00e1cter.", "Los nombres de usuario deben ser alfanum\u00e9ricos, comenzar con una letra y tener entre %(min)s y %(num)s caracteres."]},L,{min:m}),START_WITH_LETTER:i18n._("Empieza con una letra."),TOO_SHORT:i18n._("Demasiado corto."),TOO_LONG:i18n._("Demasiado largo."),UNAVAILABLE:i18n._("Este nombre de usuario no est\u00e1 disponible."),UNEXPECTED_ERROR:i18n._("Algo sali\u00f3 mal."),VALID:i18n._("\u00a1Se ve bien!")};r.USERNAME_VALIDATION_STRINGS=I;var w=function e(r){switch(r){case"BAD_CHARACTERS":return I.GENERIC_ERROR;case"INTERNAL":return I.UNEXPECTED_ERROR;case"TOO_SHORT":return I.TOO_SHORT;case"UNAVAILABLE":return I.UNAVAILABLE;default:r;t.default.error("CheckUsernameError code not supported: ".concat(r),t.Errors.Internal);return I.GENERIC_ERROR}};var S=function e(r){var n=r.replace(/\./g,"").toLowerCase();if(n.length<m){return{result:false,reason:I.TOO_SHORT}}if(n.length>L){return{result:false,reason:I.TOO_LONG}}if(!/^[a-zA-Z]/.test(r)){return{result:false,reason:I.START_WITH_LETTER}}if(!/^[a-z0-9]+$/.test(n)){return{result:false,reason:I.ALPHANUMERIC_ONLY}}return{result:true,reason:I.VALID}};r.isUsernameValid=S;var U=function e(r){var n=S(r);if(!n.result){return Promise.resolve(n)}return(0,a.default)(r).then(function(e){var r=e.data;var n=r&&r.checkUsername&&r.checkUsername.error&&r.checkUsername.error.code;if(n){return{result:false,reason:w(n)}}return{result:true,reason:I.VALID}}).catch(function(e){t.default.error("An unexpected error occurred while validating a username",t.Errors.Internal,e,{sentry:{extras:{username:r}}});return{result:false,reason:I.UNEXPECTED_ERROR}})};r.isUsernameAvailable=U}}]);
//# sourceMappingURL=../../sourcemaps/en/57de4e40fb0064352c852159a0080c61.6d54c6832198d504b827.js.map