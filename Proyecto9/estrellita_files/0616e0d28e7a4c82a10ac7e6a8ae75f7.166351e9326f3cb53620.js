(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0616e0d28e7a4c82a10ac7e6a8ae75f7"],{"1+Ti":function(e,r,t){"use strict";t("pNMO");t("ma9I");t("TeQF");t("yXV3");t("+2oP");t("3KgV");t("5DmW");t("07d7");t("5s+n");t("FZtP");Object.defineProperty(r,"__esModule",{value:true});r.loadGoogleAuthApi=r.loginWithGoogle=r.GOOGLE_LOGIN_MUTATION=r.getErrorMessageByCode=void 0;t("ls82");var p=t("4PhQ");var g=t("o1mU");var n=a(t("lTCR"));var o=i(t("whzC"));var h=t("Y8R6");var v=t("MVfM");var y=t("c+8j");var i18n=i(t("HEOz"));function i(e){if(e&&e.__esModule){return e}else{var r={};if(e!=null){for(var t in e){if(Object.prototype.hasOwnProperty.call(e,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};if(n.get||n.set){Object.defineProperty(r,t,n)}else{r[t]=e[t]}}}}r.default=e;return r}}function a(e){return e&&e.__esModule?e:{default:e}}function b(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};var n=Object.keys(t);if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))}n.forEach(function(e){l(r,e,t[e])})}return r}function l(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}function w(e,r){if(e==null)return{};var t=u(e,r);var n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++){n=i[o];if(r.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;t[n]=e[n]}}return t}function u(e,r){if(e==null)return{};var t={};var n=Object.keys(e);var o,i;for(i=0;i<n.length;i++){o=n[i];if(r.indexOf(o)>=0)continue;t[o]=e[o]}return t}function c(e,r,t,n,o,i,a){try{var l=e[i](a);var u=l.value}catch(e){t(e);return}if(l.done){r(u)}else{Promise.resolve(u).then(n,o)}}function s(l){return function(){var e=this,a=arguments;return new Promise(function(r,t){var n=l.apply(e,a);function o(e){c(n,r,t,o,i,"next",e)}function i(e){c(n,r,t,o,i,"throw",e)}o(undefined)})}}function f(){var r=d(['\n    mutation loginWithGoogleMutation(\n        $token: String!\n        $birthdate: String\n        $linkClever: Boolean\n        $cleverLibrary: Boolean\n        $role: UserRole\n        $cleverTransferToken: String\n        $inviteId: String\n    ) {\n        loginWithGoogle(\n            token: $token\n            birthdate: $birthdate\n            linkClever: $linkClever\n            cleverLibrary: $cleverLibrary\n            role: $role\n            cleverTransferToken: $cleverTransferToken\n            inviteId: $inviteId\n        ) {\n            user {\n                id\n                kaid\n                canAccessDistrictsHomepage\n                isTeacher\n                hasUnresolvedInvitations\n                transferAuthUrl(pathname: "")\n                preferredKaLocale {\n                    id\n                    kaLocale\n                }\n            }\n            isFirstLogin\n            error {\n                code\n            }\n        }\n    }\n']);f=function e(){return r};return r}function d(e,r){if(!r){r=e.slice(0)}return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var O=function e(r){switch(r){case"popup_blocked_by_browser":return i18n._("Tu navegador bloque\u00f3 una ventana emergente necesaria para iniciar sesi\u00f3n. Por favor, haz clic en el nuevo bot\u00f3n Contin\u00faa con Google e intenta iniciar sesi\u00f3n de nuevo.");case"idpiframe_initialization_failed":return i18n._("Tu navegador bloque\u00f3 las cookies de terceros necesarias para iniciar sesi\u00f3n. Por favor, cambia la configuraci\u00f3n de tu navegador para permitir las cookies en khanacademy.org.");case"popup_closed_by_user":return i18n._("Cerraste la ventana emergente antes de iniciar sesi\u00f3n. Si fue un error, intenta iniciar sesi\u00f3n de nuevo.");case"ALREADY_LOGGED_IN":return i18n._("Ya est\u00e1s conectado con otra cuenta de Google. Por favor, cierra sesi\u00f3n de esa cuenta e int\u00e9ntalo de nuevo.");case"Failed to link the current user to an UDI":return i18n.doNotTranslateYet("You have been logged in / signed up with Google, but there's a problem linking this account to your class.");case"INVITE_NOT_FOUND":return i18n._("Your invitation was not found. Please try clicking the link in your email again.");case"INVALID_TOKEN":default:return i18n._("\u00a1Ups! Algo fall\u00f3. Por favor intenta de nuevo.")}};r.getErrorMessageByCode=O;var m=(0,n.default)(f());r.GOOGLE_LOGIN_MUTATION=m;var k=function(){var t=s(regeneratorRuntime.mark(function e(t){var n,o,i,a,l,u,c,s,f,d;return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:n=t.role,o=t.signupCodes,i=w(t,["role","signupCodes"]);a=b({},i,{role:(0,y.roleToUserRole)(n)});r.prev=2;r.next=5;return(0,g.apolloMutate)(m,{variables:a});case 5:l=r.sent;if(!l.data.loginWithGoogle.error){r.next=10;break}u=l.data.loginWithGoogle.error.code;if(u==="SHADOWS_EXISTING_ACCOUNT"){(0,h.redirect)("/login/oauth/verify?oauth_type=google&google_access_token=".concat(t.token))}throw new p.KAError(l.data.loginWithGoogle.error.code,p.Errors.Internal);case 10:c=l.data.loginWithGoogle,s=c.user,f=c.isFirstLogin;d={user:s,isFirstLogin:f};if(!(o&&o.length>0)){r.next=16;break}r.next=15;return(0,v.joinClassroomsPostlogin)(o);case 15:d.joinClassrooms=r.sent;case 16:(0,y.setAnalyticsCookies)(f,s.kaid);return r.abrupt("return",d);case 20:r.prev=20;r.t0=r["catch"](2);if(!(r.t0 instanceof p.KAError)){r.next=24;break}throw r.t0;case 24:throw new p.KAError("Failed to login",p.Errors.Internal);case 25:case"end":return r.stop()}}},e,null,[[2,20]])}));return function e(r){return t.apply(this,arguments)}}();r.loginWithGoogle=k;var C=function e(){if(window.gapi){return Promise.resolve(window.gapi)}return new Promise(function(e,r){var t=document.createElement("script");t.src=o.safeLinkTo("https://apis.google.com/js/api:client.js");t.onload=function(){e(window.gapi)};t.onerror=function(e){r(e)};document.body.appendChild(t)})};var P=function e(){return C().then(function(n){return new Promise(function(t,r){n.load("auth2",{callback:function e(){var r=n.auth2.init({client_id:"124072386181-eogtmmv0qose5ovudl946d83miv1ia89.apps.googleusercontent.com",cookie_policy:"single_host_origin"});t(r)},onerror:function e(){r(new p.KAError("auth2 api failed to load",p.Errors.Internal))}})})})};r.loadGoogleAuthApi=P},ANZR:function(e,r,t){"use strict";t("+2oP");t("3KgV");Object.defineProperty(r,"__esModule",{value:true});r.createReauthUrl=r.reauthWithThirdParty=r.THIRD_PARTY_REAUTH_MUTATION=void 0;var n=t("o1mU");var o=a(t("lTCR"));var i=a(t("gXb0"));function a(e){return e&&e.__esModule?e:{default:e}}function l(){var r=u(["\n    mutation reauthWithThirdPartyMutation(\n        $loginType: String!\n        $token: String!\n    ) {\n        reauthWithThirdParty(loginType: $loginType, token: $token) {\n            error {\n                code\n            }\n            user {\n                id\n                kaid\n            }\n        }\n    }\n"]);l=function e(){return r};return r}function u(e,r){if(!r){r=e.slice(0)}return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var c=(0,o.default)(l());r.THIRD_PARTY_REAUTH_MUTATION=c;var s=function e(r,t){return(0,n.apolloMutate)(c,{variables:{loginType:r,token:t}}).then(function(e){if(e.errors&&e.errors.length>0){throw new Error("Failed to login")}if(e.data.reauthWithThirdParty.error){throw new Error(e.data.reauthWithThirdParty.error.code)}return{user:e.data.reauthWithThirdParty.user}})};r.reauthWithThirdParty=s;var f=function e(r){switch(r){case"google":return"you_can_now_login_with_google";case"facebook":return"you_can_now_login_with_facebook";case"apple":return"you_can_now_login_with_apple";case"clever":return"you_can_now_login_with_clever";case"clever_library":return"you_can_now_login_with_clever_library";case"clever_district":case"password":return"N/A";default:r;throw new Error("Unsupported third party login type: ".concat(r))}};var d=function e(r,t){switch(r){case"ACCOUNT_ALREADY_LINKED":if(t==="apple"){return"already_linked_an_apple_account"}if(t==="facebook"){return"already_linked_a_facebook_account"}return"account_already_linked";case"DIDNT_LOGIN_SUCCESSFULLY":return"didnt_login_successfully";case"REAUTH_REQUIRED":return"reauth_required";case"NOT_LOGGED_IN":return"didnt_login_successfully";default:return"link_account_error"}};var p=function e(r,t){var n=t?d(t,r):f(r);return"/settings/account?".concat((0,i.default)({messageKey:n}))};r.createReauthUrl=p},Rry3:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});r.faceIconColor=void 0;var n=t("Pwnf");var o=function e(r){return r?function(e){return(0,n.fade)(e,.32)}:function(e){return e}};r.faceIconColor=o},YmN9:function(e,r,t){"use strict";t("ma9I");t("5DmW");t("NBAS");Object.defineProperty(r,"__esModule",{value:true});r.default=void 0;var n=h(t("q1tI"));var a=h(t("ZpD3"));var l=t("1+Ti");var u=t("VmSZ");var c=t("ANZR");var s=t("sPtk");var f=t("Y8R6");var d=i(t("4PhQ"));var o=i(t("4Du/"));var p=i(t("etw9"));var g=i(t("i0nR"));var i18n=h(t("HEOz"));function i(e){return e&&e.__esModule?e:{default:e}}function h(e){if(e&&e.__esModule){return e}else{var r={};if(e!=null){for(var t in e){if(Object.prototype.hasOwnProperty.call(e,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};if(n.get||n.set){Object.defineProperty(r,t,n)}else{r[t]=e[t]}}}}r.default=e;return r}}function v(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}function y(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function b(e,r,t){if(r)y(e.prototype,r);if(t)y(e,t);return e}function w(e,r){if(r&&(typeof r==="object"||typeof r==="function")){return r}return m(e)}function O(e){O=Object.setPrototypeOf?Object.getPrototypeOf:function e(r){return r.__proto__||Object.getPrototypeOf(r)};return O(e)}function m(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function k(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:true,configurable:true}});if(r)C(e,r)}function C(e,r){C=Object.setPrototypeOf||function e(r,t){r.__proto__=t;return r};return C(e,r)}function P(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}var E=function(e){k(i,e);function i(){var e;var n;v(this,i);for(var r=arguments.length,t=new Array(r),o=0;o<r;o++){t[o]=arguments[o]}n=w(this,(e=O(i)).call.apply(e,[this].concat(t)));P(m(n),"state",{error:null,loading:true,loggingIn:false});P(m(n),"preloadGoogleAuthApi",function(){n.setState({loading:true});n._gapi=(0,l.loadGoogleAuthApi)().then(function(e){n.setState({loading:false});return e}).catch(function(e){if(e.error){n.setState({error:new Error(e.error),loading:false})}})});P(m(n),"handleError",function(e){var r=n.props.onError;var t=(0,l.getErrorMessageByCode)(e.message);d.default.log("Something unexpected happened!",{code:e.message,message:t});if(r){r(t)}n.setState({error:null,loading:false,loggingIn:false})});P(m(n),"handleLinkError",function(e){var r=n.props.onError;d.default.log("Something unexpected happened!",{code:e.message,message:e.message});if(r){r(e.message)}n.setState({error:null,loading:false,loggingIn:false})});P(m(n),"signIn",function(e){var r=n.props.forceSelectAccount?{prompt:"select_account"}:{};return e.signIn(r)});P(m(n),"handleClick",function(e){if(!n._gapi){return}if(n.state.error){n.handleError(n.state.error);return}n.setState({loading:true});var r=n.props.minorConversions;if(r){a.markMinorConversions(r)}n._gapi.then(function(e){return n.signIn(e)}).then(function(e){var r=e.getAuthResponse().id_token;n.setState({loggingIn:true});if(n.props.reauth){n.doReauth(r)}else{n.doLogin(r)}},function(e){if(e.error){n.handleError(new Error(e.error))}})});P(m(n),"completeLogin",function(e){var r=n.props.postLoginContinueUrl||"/";var t=(0,s.calculateNextUrl)({location:n.props.location,userData:e.user,loginType:"google",continueUrl:r,isFirstLogin:e.isFirstLogin,joinClassrooms:e.joinClassrooms,cleverLibrary:n.props.cleverLibrary,linkClever:n.props.linkClever});(0,f.redirect)(t)});P(m(n),"doLogin",function(e){var r={token:e,signupCodes:n.props.classCodes,birthdate:n.props.birthdate,cleverLibrary:n.props.cleverLibrary,linkClever:n.props.linkClever,cleverTransferToken:n.props.cleverTransferToken,role:n.props.role,inviteId:n.props.inviteId};(0,l.loginWithGoogle)(r).then(function(r){var e=n.props.udi;if(e){(0,u.linkCurrentUserToUDIByUUID)({uuid:e,loginType:"google"}).then(function(e){if(e){n.completeLogin(r)}}).catch(n.handleLinkError)}else{n.completeLogin(r)}}).catch(function(e){if(e.message==="SHADOWS_EXISTING_ACCOUNT"){n.setState({loggingIn:true})}else{n.handleError(e)}})});P(m(n),"doReauth",function(e){(0,c.reauthWithThirdParty)("google",e).then(function(e){var r=(0,c.createReauthUrl)("google");if(n.props.onSuccess){n.props.onSuccess(r)}else{(0,f.redirect)(r)}n.setState({loading:false})}).catch(function(e){n.handleError(e);var r=(0,c.createReauthUrl)("google",e.message);if(n.props.onReauthError){n.props.onReauthError(r)}else{(0,f.redirect)(r)}n.setState({loading:false})})});return n}b(i,[{key:"componentDidMount",value:function e(){this.preloadGoogleAuthApi()}},{key:"render",value:function e(){var r=!this._gapi||this.state.loading||!!this.props.disabled;return n.createElement(p.default,{title:!this.state.loggingIn?i18n._("Contin\u00faa con Google"):i18n._("Iniciando tu sesi\u00f3n..."),iconComponent:g.default,disabled:r,onClick:this.handleClick,width:this.props.width,grow:this.props.grow,shrink:this.props.shrink,size:this.props.size})}}]);return i}(n.Component);P(E,"defaultProps",{forceSelectAccount:true});var T=(0,o.default)(E);r.default=T},etw9:function(e,r,t){"use strict";t("5DmW");Object.defineProperty(r,"__esModule",{value:true});r.default=void 0;var o=c(t("q1tI"));var i=t("JimW");var n=t("mR6N");var a=u(t("Pwnf"));var l=u(t("Nw73"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if(e&&e.__esModule){return e}else{var r={};if(e!=null){for(var t in e){if(Object.prototype.hasOwnProperty.call(e,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};if(n.get||n.set){Object.defineProperty(r,t,n)}else{r[t]=e[t]}}}}r.default=e;return r}}var s=function e(r){switch(r){case"xsmall":return 24;case"small":return 32;case"large":return 48;case"xlarge":return 60;case"default":case null:case undefined:return 40;default:r;return 40}};var f=function e(r){if(r==="xsmall"){return 12}if(r==="small"){return 16}if(r==="large"){return 24}if(r==="xlarge"){return 30}return 20};var d=function e(r){var t=s(r.size);var n=f(r.size);return o.createElement(l.default,{colors:{backgroundColor:a.default.white,borderColor:a.default.offBlack64,textColor:a.default.offBlack},hoverColors:{backgroundColor:a.default.offBlack8,borderColor:a.default.offBlack64,textColor:a.default.offBlack},disabled:!!r.disabled,disabledStateIsOpaque:true,onClick:r.onClick,width:r.width,grow:r.grow,shrink:r.shrink,size:r.size,testId:r.testId},o.createElement(i.View,{style:[p.iconContainer,{height:t-2,width:t-2,padding:(t-n-2)/2}]},r.iconComponent!=null?o.createElement(r.iconComponent,{disabled:!!r.disabled}):null),r.title)};var p=n.StyleSheet.create({iconContainer:{position:"absolute",top:0,left:0}});var g=d;r.default=g},i0nR:function(e,r,t){"use strict";t("5DmW");Object.defineProperty(r,"__esModule",{value:true});r.default=void 0;var i=n(t("q1tI"));var a=t("Rry3");function n(e){if(e&&e.__esModule){return e}else{var r={};if(e!=null){for(var t in e){if(Object.prototype.hasOwnProperty.call(e,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};if(n.get||n.set){Object.defineProperty(r,t,n)}else{r[t]=e[t]}}}}r.default=e;return r}}var o=function e(r){var t=r.disabled,n=t===void 0?false:t;var o=(0,a.faceIconColor)(n);return i.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M21.43 12.62C21.43 11.95 21.37 11.31 21.26 10.69H12.40V14.33H17.46C17.25 15.51 16.58 16.50 15.59 17.17V19.53H18.63C20.40 17.89 21.43 15.48 21.43 12.62Z",fill:o("#4285F4")}),i.createElement("path",{d:"M12.40 21.81C14.94 21.81 17.07 20.96 18.63 19.53L15.59 17.17C14.75 17.73 13.67 18.07 12.40 18.07C9.95 18.07 7.88 16.41 7.14 14.19H4.00V16.63C5.55 19.70 8.73 21.81 12.40 21.81Z",fill:o("#34A853")}),i.createElement("path",{d:"M7.14 14.19C6.95 13.63 6.85 13.02 6.85 12.40C6.85 11.78 6.95 11.18 7.14 10.62V8.18H4.00C3.36 9.45 3 10.89 3 12.40C3 13.92 3.36 15.36 4.00 16.63L7.14 14.19Z",fill:o("#FBBC05")}),i.createElement("path",{d:"M12.40 6.74C13.78 6.74 15.02 7.21 16.00 8.15L18.69 5.45C17.07 3.93 14.94 3 12.40 3C8.73 3 5.55 5.11 4.00 8.18L7.14 10.62C7.88 8.39 9.95 6.74 12.40 6.74Z",fill:o("#EA4335")}))};var l=o;r.default=l}}]);
//# sourceMappingURL=../../sourcemaps/en/0616e0d28e7a4c82a10ac7e6a8ae75f7.b2fda8e77a87b30d86b3.js.map