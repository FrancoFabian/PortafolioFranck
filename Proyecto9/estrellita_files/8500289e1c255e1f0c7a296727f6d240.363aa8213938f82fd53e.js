(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["8500289e1c255e1f0c7a296727f6d240"],{OWSb:function(e,n,t){"use strict";t("hByQ");Object.defineProperty(n,"__esModule",{value:true});n.init=a;var r=t("k6la");var i=t("PkRj");function a(e){var t=e.pathname,n=e.search;return(0,r.getUrgentNotifications)(t,n).then(function(e){var n=e.urgentNotifications;if(n.length){(0,i.renderUrgent)(n,t)}})}},k6la:function(e,n,t){"use strict";t("yq1k");t("+2oP");t("3KgV");t("07d7");t("5s+n");Object.defineProperty(n,"__esModule",{value:true});n.getUrgentNotifications=l;n.URGENT_NOTIFICATION_QUERY=void 0;var r=o(t("lTCR"));var i=o(t("o1mU"));var a=o(t("/eLw"));function o(e){return e&&e.__esModule?e:{default:e}}function u(){var n=c(["\n    query getUrgentNotifications($pathname: String!, $queryString: String!) {\n        urgentNotifications(pathname: $pathname, queryString: $queryString)\n    }\n"]);u=function e(){return n};return n}function c(e,n){if(!n){n=e.slice(0)}return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var f=["/completesignup","/about/tos","/about/privacy-policy","/translations","/devadmin/content"];function s(e,n){var t=(0,a.default)(n),r=t.embedded,i=t.learn;return f.includes(e)||r||i}function l(e){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";if(s(e,n)){return Promise.resolve({loading:false,urgentNotifications:[]})}var t=n.charAt(0)==="?"?n.slice(1):n;return(0,i.default)(g,{variables:{pathname:e,queryString:t}}).then(function(e){return d(e)}).catch(function(){return d({errors:null,loading:false,data:null})})}var d=function e(n){var t=n.errors,r=n.loading,i=n.data;if(r||t||!i||!i.urgentNotifications){return{loading:r,urgentNotifications:[]}}return{loading:r,urgentNotifications:JSON.parse(i.urgentNotifications)}};var g=(0,r.default)(u());n.URGENT_NOTIFICATION_QUERY=g}}]);
//# sourceMappingURL=../../sourcemaps/en/8500289e1c255e1f0c7a296727f6d240.363aa8213938f82fd53e.js.map