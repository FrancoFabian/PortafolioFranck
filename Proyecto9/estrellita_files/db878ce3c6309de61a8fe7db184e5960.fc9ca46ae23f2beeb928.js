(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["db878ce3c6309de61a8fe7db184e5960"],{CKQW:function(e,t,r){"use strict";r("pNMO");r("4Brf");r("4mDm");r("5DmW");r("07d7");r("5s+n");r("3bBZ");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=c(r("e2gc"));var d=o(r("q1tI"));var n=c(r("i8i4"));var l=c(r("Xb39"));function o(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(a.get||a.set){Object.defineProperty(t,r,a)}else{t[r]=e[r]}}}}t.default=e;return t}}function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return f(e)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,t){var r=[];var a=true;var n=false;var o=undefined;try{for(var c=e[Symbol.iterator](),i;!(a=(i=c.next()).done);a=true){r.push(i.value);if(t&&r.length===t)break}}catch(e){n=true;o=e}finally{try{if(!a&&c["return"]!=null)c["return"]()}finally{if(n)throw o}}return r}function f(e){if(Array.isArray(e))return e}var p={_loadComplete:false,_tabHeaderSelector:"#projectfeedback-tab-header",shouldShowTab:function e(){return this.hasHelpRequests()},hasEvalRequests:function e(){return this._projectFeedback.hasEvalRequests()},hasPendingEvalRequests:function e(){return this._projectFeedback.hasPendingEvalRequests()},hasHelpRequests:function e(){return this._projectFeedback.hasHelpRequests()},isLoaded:function e(){return!!this._projectFeedback.fetchedInitial},unmount:function e(){if(this._projectEvaluationMount){n.default.unmountComponentAtNode(this._projectEvaluationMount)}this._loadComplete=false},load:function e(c,i){if(this._loadComplete){return}this._projectEvaluationMount=(0,a.default)("<div>").appendTo(".scratchpad-project-eval-mount")[0];if(!this._projectEvaluationMount){return}var u=this;Promise.all([Promise.all([r.e("corelibs-legacy"),r.e("a4c9f2c8346f59d92cd55f183d0fda98")]).then(r.t.bind(null,"+reu",7)),Promise.all([r.e("corelibs-legacy"),r.e("fdfa1aa0e118170244e2663bb81af06f")]).then(r.t.bind(null,"qgfM",7)),Promise.all([r.e("corelibs-legacy"),r.e("react-components"),r.e("daf7abd750e69442a48333b196fd913e"),r.e("a4c9f2c8346f59d92cd55f183d0fda98"),r.e("fdfa1aa0e118170244e2663bb81af06f"),r.e("5e817b32568569813cd21f487f726c08"),r.e("5f316678acb1606aa3481800c78c5264"),r.e("24a5f45d0c120d8cd0074ba856585ae4")]).then(r.t.bind(null,"E2UL",7)).then(function(e){return e})]).then(function(e){var t=s(e,3),r=t[0].ScratchpadUI,a=t[1],n=t[2].ProjectEvaluationArea;var o=c;u._projectFeedback=new a.DiscussionItemCollection([],{focusKind:"scratchpad",focusId:o.focusId,type:"projectfeedback",sortOrder:2,fetchCount:100});u._projectFeedback.fetch();if(u._projectEvaluationMount){u._component=(0,l.default)(d.createElement(n,{scratchpadId:o.focusId,isProgramOwner:o.isOwner,sendToPeers:r.originScratchpad.get("sendToPeers"),rubric:r.originScratchpad.get("translatedProjectEval"),tips:r.originScratchpad.get("translatedProjectEvalTips"),originTitle:r.originScratchpad.get("translatedTitle"),projectFinished:r.userScratchpad.get("challengeStatus")===5,collection:u._projectFeedback,onLoad:i}),u._projectEvaluationMount)}u._loadComplete=true})}};var h=p;t.default=h}}]);
//# sourceMappingURL=../../sourcemaps/en/db878ce3c6309de61a8fe7db184e5960.fc9ca46ae23f2beeb928.js.map