(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b43e1a2e75011374d6d9f51e557ad7cb"],{t0Si:function(e,t){window.PJSUtils={codeFromFunction:function e(t){var n=t.toString();n=n.substr(n.indexOf("{")+1);return n.substr(0,n.length-1)},cleanupCode:function e(t){var n=t.split("\n").filter(function(e){return e!==""});var r=n[0].length-n[0].trim().length;return n.map(function(e){return e.substring(r)}).join("\n").trim()}};var c=function(){function n(e,t){var n=[];var r=true;var i=false;var s=undefined;try{for(var o=e[Symbol.iterator](),a;!(r=(a=o.next()).done);r=true){n.push(a.value);if(t&&n.length===t)break}}catch(e){i=true;s=e}finally{try{if(!r&&o["return"])o["return"]()}finally{if(i)throw s}}return n}return function(e,t){if(Array.isArray(e)){return e}else if(Symbol.iterator in Object(e)){return n(e,t)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}();var n=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(e,t,n){if(t)r(e.prototype,t);if(n)r(e,n);return e}}();function r(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var a=function(){function x(e){r(this,x);var t={sandboxed:true,envName:"__env__"};Object.assign(this,t,e);this.DUMMY=this.processing.draw;this.seed=null;this.globals={};this.addMethods(this.additionalMethods);this.reseedRandom();this.drawLoopMethods=["draw","mouseClicked","mouseDragged","mouseMoved","mousePressed","mouseReleased","mouseScrolled","mouseOver","mouseOut","touchStart","touchEnd","touchMove","touchCancel","keyPressed","keyReleased","keyTyped"];this.liveReset={background:[255,255,255],colorMode:[1],ellipseMode:[3],fill:[255,255,255],frameRate:[60],imageMode:[0],rectMode:[0],stroke:[0,0,0],strokeCap:["round"],strokeWeight:[1],textAlign:[37,0],textAscent:[9],textDescent:[12],textFont:["Arial",12],textLeading:[14],textSize:[12]};this.idempotentCalls=["createFont"];if(!this.props){this.initializeProps()}this.loopProtector=new LoopProtector(this.infiniteLoopCallback,this.loopProtectTimeouts,true);this.hintWorker=new PooledWorker("pjs/jshint-worker.js",function(e,n){if(!window.Worker){JSHINT(e);n(JSHINT.data(),JSHINT.errors);return}var r=this.getWorkerFromPool();r.onmessage=function(e){if(e.data.type==="jshint"){if(this.isCurrentWorker(r)){var t=e.data.message;n(t.hintData,t.hintErrors)}this.addWorkerToPool(r)}}.bind(this);r.postMessage({code:e,externalsDir:this.externalsDir,jshintFile:this.jshintFile})})}n(x,[{key:"addMethods",value:function e(t){var n=this;if(this.sandboxed){this.processing.Object=window.Object;this.processing.RegExp=window.RegExp;this.processing.Math=window.Math;this.processing.Array=window.Array;this.processing.String=window.String;this.processing.isNaN=window.isNaN;this.processing.Number=window.Number;this.processing.Date=window.Date}Object.assign(this.processing,{getImage:function e(t){return n.resourceCache.getImage(t)},loadImage:function e(t){throw{message:"Use getImage instead of loadImage."}},requestImage:function e(t){throw{message:"Use getImage instead of requestImage."}},link:function e(){throw{message:i18n._("el m\u00e9todo link() est\u00e1 deshabilitado.")}},getSound:function e(t){return n.resourceCache.getSound(t)},playSound:function e(t){if(t&&t.audio&&t.audio.play){t.audio.currentTime=0;t.audio.play()}else{throw{message:i18n._("No se proporcion\u00f3 archivo de sonido.")}}},debug:function e(){console.log.apply(console,arguments)}});Object.assign(this.processing,t)}},{key:"initializeProps",value:function e(){var t=this.props={},n=this.safeCalls={};for(var r in this.processing){if(r.indexOf("__")<0){var i=this.processing[r],s=typeof i==="function";t[r]=!(/^[A-Z]/.test(r)||r==="height"||r==="width"||r==="key"||s&&r.indexOf("key")<0);if(s){try{var o=String(i);if(this.idempotentCalls.indexOf(r)!==-1||/native code/.test(o)||/return /.test(o)&&!/p\./.test(o)&&!/new P/.test(o)){n[r]=true}}catch(e){}}}}n.PVector=true;n.color=true;n.arc=true;n.createGraphics=true;t.draw=true}},{key:"restoreRandomSeed",value:function e(){this.processing.randomSeed(this.seed)}},{key:"reseedRandom",value:function e(){this.seed=Math.floor(Math.random()*4294967296)}},{key:"clear",value:function e(){var t=this;Object.keys(this.liveReset).forEach(function(e){t.processing[e].apply(t.processing,t.liveReset[e])})}},{key:"restart",value:function e(){this.lastGrab=null;this.lastGrabObj=null;this.reseedRandom();this.processing.frameCount=0;this.processing._clearLogs()}},{key:"propListString",value:function e(t){var n={externals:true};var r=[];Object.keys(t).forEach(function(e){if(!n[e]){r.push(e+":"+t[e])}});return r.join(",")}},{key:"lint",value:function e(t,r){var i=this;return new Promise(function(n){if(r||!t){n([]);return}var e="/*jshint "+i.propListString(i.JSHint)+" */"+("/*global "+i.propListString(i.props)+" */\n")+t;i.hintWorker.exec(e,function(e,t){i.globals=i.extractGlobals(e);n(t)})})}},{key:"extractGlobals",value:function e(t){var n={};var r=this.props;if(t&&t.globals){for(var i=0,s=t.globals.length;i<s;i++){var o=t.globals[i];if(!r[o]&&!(o in this.processing)){this.processing[o]=undefined}n[o]=true}}return n}},{key:"objectExtract",value:function e(t,n,r){if(!this.processing[t]){if(Array.isArray(n)){this.processing[t]=[]}else if(typeof n==="function"){this.processing[t]=function(){}}else{this.processing[t]={}}}if(r){n=n[r]}for(var i in n){if(n.hasOwnProperty(i)&&i.indexOf("__")<0){if(typeof n[i]==="function"){this.grabObj[t+(r?"."+r:"")+"['"+i+"']"]=x.stringify(n[i])}else{var s=this.processing[t];if(r){s=s[r]}s[i]=n[i]}}}}},{key:"hasOrHadDrawLoop",value:function e(){for(var t=0,n=this.drawLoopMethods.length;t<n;t++){var r=this.drawLoopMethods[t];if(this.globals[r]||this.lastGrab&&this.lastGrab[r]){return true}}return false}},{key:"drawLoopMethodDefined",value:function e(){for(var t=0,n=this.drawLoopMethods.length;t<n;t++){var r=this.drawLoopMethods[t];if(this.processing[r]!==this.DUMMY&&this.processing[r]!==undefined){return true}}return false}},{key:"runCode",value:function e(t,n){var r=this;try{var i=f.findResources(t);this.resourceCache.cacheResources(i).then(function(){r.injectCode(t,n)})}catch(e){var s=e.message.split(":");var o=c(s,2);var a=o[0];var u=o[1];if(u.trim()==="Unexpected token ILLEGAL"){u=i18n._("Caracter inesperado.")}else{u=i18n._("Error de sintaxis.")}n([{type:"error",source:"esprima",column:0,row:parseInt(/[1-9][0-9]*/.exec(a),10)-1,text:u}])}}},{key:"injectCode",value:function e(t,n){var i=this;var r={};var s=[];var o=[];var a=false;var u={};var c={};var f=this.props;var l="";this.grabObj={};x.instances=[];var h=this.hasOrHadDrawLoop();if(h){_.each(this.globals,function(e,t){var n=this.processing[t];r[t]=typeof n==="function"&&!this.safeCalls[t]?function(){if(typeof s!=="undefined"){s.push([t,arguments])}return 0}:n}.bind(this));var d=this.exec(t,r);if(d){return n([d])}_.each(r,function(e,t){if(typeof e==="function"){e.__name=t}});for(var p=0,g=x.instances.length;p<g;p++){c[x.instances[p].constructor.__name]=true}if(this.oldInstances&&x.stringifyArray(this.oldInstances)!==x.stringifyArray(x.instances)){a=true}if(/createGraphics[\s\n]*\(/.test(t)){a=true}this.oldInstances=x.instances;x.instances=[];var v=function(r){m=Array.prototype.slice.call(s[r][1]);w=m.map(function(e,t){if(!_.isArray(e)&&_.isObject(e)){var n="__obj__"+s[r][0]+"__"+t;i.processing[n]=e;return n}else{return x.stringify(e)}});o.push(s[r][0]+"("+w.join(", ")+");")};for(var p=0;p<s.length;p++){var m;var w;v(p)}_.each(r,function(t,n){if(/^KAInfiniteLoop/.test(n)){return}if(/^PJSCodeInjector/.test(n)){return}try{r[n]=x.stringify(r[n]);if(this.lastGrab&&f[n]!==false&&(!(n in this.lastGrab)||r[n]!==this.lastGrab[n])){if(typeof t==="function"){if(c[n]){a=true}u[n]=true;l+="var "+n+" = "+r[n]+";\n";l+=n+".__name = '"+n+"';\n"}else{if(!_.isArray(t)&&_.isObject(t)&&!_.isArray(this.processing[n])&&_.isObject(this.processing[n])){for(var e in t){if(t.hasOwnProperty(e)){this.processing[n][e]=t[e]}}}else{this.processing[n]=t}}}if(typeof t==="function"&&f[n]!==false){this.objectExtract(n,t);this.objectExtract(n,t,"prototype")}}catch(e){this.objectExtract(n,t)}}.bind(this));_.each(this.grabObj,function(e,t){var n=/^[^.[]*/.exec(t)[0];if(!this.lastGrabObj||this.lastGrabObj[t]!==e||u[n]){l+=t+" = "+e+";\n"}}.bind(this));for(var y in this.lastGrabObj){if(!(y in this.grabObj)){l+="delete "+y+";\n"}}for(var b in this.lastGrab){if(/^KAInfiniteLoop/.test(b)){continue}if(!(b in r)&&(!(b in this.props)||_.contains(this.drawLoopMethods,b))){l+="delete "+b+";\n";if(b==="draw"){this.clear();this.processing.draw=this.DUMMY}}}}this.processing.resetMatrix();this.restoreRandomSeed();if(this.lastGrab){Object.keys(this.liveReset).forEach(function(e){if(!i.globals[e]&&i.lastGrab[e]){i.processing[e].apply(i.processing,i.liveReset[e])}})}if(!h||!this.drawLoopMethodDefined()||!this.lastGrab||a){this.clear();this.processing._clearLogs();if(this.globals.draw){t+="\ndraw();"}var d=this.exec(t,this.processing);if(d){return n([d])}_.each(this.globals,function(e,t){if(typeof e==="function"){e.__name=t}})}else if(l||o.length>0){if(this.globals.draw){l+="\ndraw();"}var d=this.exec(l,this.processing,o);if(d){return n([d])}}if(!this.processing.draw){this.processing.draw=this.DUMMY}if(h){this.lastGrab=r;this.lastGrabObj=this.grabObj}if(n){try{n([])}catch(e){}}}},{key:"transformCode",value:function e(t,n,r){var i=arguments.length<=3||arguments[3]===undefined?{}:arguments[3];var s=this.envName;var o=this.enableLoopProtect;var a=this.loopProtector;var u=true;if(i.hasOwnProperty("rewriteNewExpression")){u=i.rewriteNewExpression}n.KAInfiniteLoopProtect=this.loopProtector.KAInfiniteLoopProtect;n.KAInfiniteLoopSetTimeout=this.loopProtector.KAInfiniteLoopSetTimeout;n.KAInfiniteLoopCount=0;n.PJSCodeInjector=x;var c=new RegExp(s+"\\.","g");var f=esprima.parse(t.replace(c,""),{loc:true});var l=[];if(!r){l.push(ASTTransforms.checkForBannedProps(["__env__","KAInfiniteLoopCount","KAInfiniteLoopProtect","KAInfiniteLoopSetTimeout"]))}else{l.push(ASTTransforms.checkForBannedProps(["__env__"]))}l.push(ASTTransforms.rewriteFunctionDeclarations);if(o&&!r){l.push(a)}l.push(ASTTransforms.rewriteAssertEquals);if(u){l.push(ASTTransforms.rewriteNewExpressions(s,n))}try{walkAST(f,null,l)}catch(e){return e}walkAST(f,null,[ASTTransforms.rewriteContextVariables(s,n)]);t="";if(r){t+=r.map(function(e){e=e.replace(/__obj__/g,s+".__obj__");return s+"."+e}).join("\n")}return t+escodegen.generate(f)}},{key:"exportCode",value:function e(t,i,o){var n={rewriteNewExpression:false};var r=this.transformCode(t,this.processing,null,n);var s="";var a=f.findResources(r);s+="var resources = "+JSON.stringify(a)+";\n";s+=PJSUtils.cleanupCode(PJSUtils.codeFromFunction(function(){var s=[];var r=document.createElement("div");r.style.height=0;r.style.width=0;r.style.overflow="hidden";r.style.position="absolute";document.body.appendChild(r);var t=function e(n){return new Promise(function(e){var t=document.createElement("img");t.onload=function(){s[n]=t;e()};t.onerror=function(){e()};t.src=i+n;r.appendChild(t);s[n]=t})};var n=function e(i){return new Promise(function(e){var t=document.createElement("audio");var n=i.split("/");var r=_.findWhere(OutputSounds[0].groups,{groupName:n[0]});if(!r||r.sounds.indexOf(n[1].replace(".mp3",""))===-1){e();return}t.preload="auto";t.oncanplaythrough=function(){s[i]=t;e()};t.onerror=function(){e()};t.src=o+i})};var e=Object.keys(a).map(function(e){if(e.indexOf(".png")!==-1){return t(e)}else if(e.indexOf(".mp3")!==-1){return n(e)}});Promise.all(e).then(function(){var e=document.createElement("canvas");e.width=400;e.height=400;var t=new Processing(e);t.width=400;t.height=400;t.getSound=function(e){return s[e+".mp3"]};t.playSound=function(e){if(e&&e.play){e.currentTime=0;e.play()}else{throw new Error("No sound file provided.")}};t.getImage=function(e){return new t.PImage(s[e+".png"])};if(t.draw){t.loop()}})}))+"\n";return s.replace(/\/\/ __USERCODE__/g,r).replace(/\/\/ __IMAGEDIR__/g,'var imageDir = "'+i+'"').replace(/\/\/ __SOUNDDIR__/g,'var soundDir = "'+o+'"')}},{key:"exec",value:function e(t,n,r){if(!t){return}var i=i18n._("Este programa utiliza capacidades que deshabilitamos por razones de seguridad. Khan Academy proh\u00edbe mostrar im\u00e1genes externas, reproducir sonidos o desplegar ventanas emergentes.");var s="{ get externals() { throw { message: "+JSON.stringify(i)+" } } }";try{var o=this.transformCode(t,n,r);var a="var "+this.envName+" = context;\n"+("(function(){\n"+o+"\n}).apply("+s+");");var u=new Function("context",a);u(n)}catch(e){return e}}}],[{key:"stringify",value:function e(t){if(typeof t==="function"){return t.toString()}else if(t&&t.__id){return t.__id()}else if(t&&Object.prototype.toString.call(t)==="[object Array]"){return this.stringifyArray(t)}else if(typeof t==="undefined"){return"undefined"}return JSON.stringify(t,function(e,t){if(t&&(t.id!==undefined&&t.id==="output-canvas"||typeof CanvasRenderingContext2D!=="undefined"&&t instanceof CanvasRenderingContext2D)){return undefined}return t})}},{key:"stringifyArray",value:function e(t){var n=[];for(var r=0,i=t.length;r<i;r++){n.push(this.stringify(t[r]))}return n.join(", ")}},{key:"applyInstance",value:function e(r,i){try{var t=(/^function\s*(\w+)/.exec(r)||[])[1];if(t&&window[t]===r){return r}}catch(e){}return function(){var e=arguments;function t(){r.apply(this,e)}t.prototype=r.prototype;var n=new t;this.newCallback(r,i,n,e);return n}.bind(this)}},{key:"newCallback",value:function e(t,n,r,i){if(!t.__name&&n){t.__name=n}r.constructor=t;r.__id=function(){return"new "+t.__name+"("+this.stringifyArray(i)+")"}.bind(this);if(this.instances){this.instances.push(r)}}}]);return x}();a.instances=[];window.PJSCodeInjector=a;window.PJSTester=function(e){this.initialize(e);this.bindTestContext()};PJSTester.prototype=new OutputTester;PJSTester.prototype.testMethods={firstMatchingPattern:function e(t){return _.find(t,_.bind(function(e){return this.testContext.matches(e)},this))},hasFnCall:function e(t,n){for(var r=0,i=this.fnCalls.length;r<i;r++){var s=this.testContext.checkFn(this.fnCalls[r],t,n);if(s===true){return}}this.testContext.assert(false,i18n._("La llamada a la funci\u00f3n esperada '%(name)s' no fue realizada.",{name:t}))},orderedFnCalls:function e(t){var n=0;for(var r=0,i=this.fnCalls.length;r<i;r++){var s=this.testContext.checkFn(this.fnCalls[r],t[n][0],t[n][1]);if(s===true){n+=1;if(n===t.length){return}}}this.testContext.assert(false,i18n._("La llamada a la funci\u00f3n esperada '%(name)s' no fue realizada.",{name:t[n][0]}))},checkFn:function e(t,n,r){if(t.name!==n){return}var i=true;if(typeof r==="object"){if(r.length!==t.args.length){i=false}else{for(var s=0;s<r.length;s++){if(r[s]!==null&&r[s]!==t.args[s]){i=false}}}}else if(typeof r==="function"){i=r(t)}if(i){this.testContext.assert(true,i18n._("Funci\u00f3n de llamada correcta hecha a %(name)s.",{name:n}))}return i},_isVarName:function e(t){return _.isString(t)&&t.length>0&&t[0]==="$"},_assertVarName:function e(t){if(!this.testContext._isVarName(t)){throw new Error(i18n._("Se esperaba que '%(name)s' fuera un nombre de variable v\u00e1lido.",{name:t}))}},unaryOp:function e(t,n){this.testContext._assertVarName(t);return this.testContext.constraint([t],function(e){return!!(e&&!_.isUndefined(e.value)&&n(e.value))})},isLiteral:function e(t){function n(){return true}return this.testContext.unaryOp(t,n)},isNumber:function e(t){return this.testContext.unaryOp(t,_.isNumber)},isIdentifier:function e(t){return this.testContext.constraint([t],function(e){return!!(e&&e.type&&e.type==="Identifier")})},isBoolean:function e(t){return this.testContext.unaryOp(t,_.isBoolean)},isString:function e(t){return this.testContext.unaryOp(t,_.isString)},binaryOp:function e(t,n,r){var i=[];var s;if(this.testContext._isVarName(t)){i.push(t);if(this.testContext._isVarName(n)){i.push(n);s=function(e,t){return!!(e&&t&&!_.isUndefined(e.value)&&!_.isUndefined(t.value)&&r(e.value,t.value))}}else{s=function(e){return!!(e&&!_.isUndefined(e.value)&&r(e.value,n))}}}else if(this.testContext._isVarName(n)){i.push(n);s=function(e){return!!(e&&!_.isUndefined(e.value)&&r(t,e.value))}}else{throw new Error(i18n._("Se esperaba que uno de '%(first)s' o '%(second)s' fuera un nombre de variable v\u00e1lido.",{first:t,second:n}))}return this.testContext.constraint(i,s)},lessThan:function e(t,n){return this.testContext.binaryOp(t,n,function(e,t){return e<t})},lessThanOrEqual:function e(t,n){return this.testContext.binaryOp(t,n,function(e,t){return e<=t})},greaterThan:function e(t,n){return this.testContext.binaryOp(t,n,function(e,t){return e>t})},positive:function e(t){return this.testContext.unaryOp(t,function(e){return e>0})},negative:function e(t){return this.testContext.unaryOp(t,function(e){return e<0})},greaterThanOrEqual:function e(t,n){return this.testContext.binaryOp(t,n,function(e,t){return e>=t})},inRange:function e(t,n,r){return this.testContext.and(this.testContext.greaterThanOrEqual(t,n),this.testContext.lessThanOrEqual(t,r))},equal:function e(t,n){return this.testContext.binaryOp(t,n,function(e,t){return e===t})},notEqual:function e(t,n){return this.testContext.binaryOp(t,n,function(e,t){return e!==t})},not:function e(t){return this.testContext.constraint(t.variables,function(){return!t.fn.apply({},arguments)})},_naryShortCircuitingOp:function e(t,r){var n=_.union.apply({},_.pluck(r,"variables"));var i=_.object(_.map(n,function(e,t){return[e,t]}));return this.testContext.constraint(n,function(){var n=arguments;return t(r,function(e){var t=_.map(e.variables,function(e){return n[i[e]]});return e.fn.apply({},t)})})},and:function e(){return this.testContext._naryShortCircuitingOp(_.all,arguments)},or:function e(){return this.testContext._naryShortCircuitingOp(_.any,arguments)},structure:function e(t,n){return{pattern:t,constraint:n}},constraint:function e(t,n){return{variables:t,fn:n}},match:function e(t){if(this.errors.length){return{success:false,message:i18n._("\u00a1Error de sintaxis!")}}if(t&&_.isUndefined(t.pattern)){t={pattern:t}}if(!t||!t.pattern){return{success:false,message:""}}try{var n=t.constraint;var r=Structured.match(this.userCode,t.pattern,{varCallbacks:n});return{success:r,message:n&&n.failure}}catch(e){console.warn(e);return{success:true,message:i18n._("Mmh, estamos teniendo algunos problemas para verificar tu respuesta en este paso, as\u00ed que te daremos el beneficio de la duda mientras trabajamos para arreglarlo. Por favor, haz clic en \"Reporta un problema\" para notificarnos.")}}},matches:function e(t){if(typeof t!=="object"){t=this.testContext.structure(t)}return this.testContext.match(t).success},_checkSyntaxErrors:function e(t){if(!t)return;var n=_.any(this.errors,function(e){return e.lint});if(n){_.each(t,function(e){var n=this.userCode.search(e.re);var r=-1,i=-1,t;if(n>-1){t=e.msg;var s=this.userCode.split("\n");var o=0;_.each(s,function(e,t){if(r===-1&&n<o+e.length){r=t;i=n-o}o+=e.length});this.errors.splice(0,1,{text:t,row:r,col:i,type:"error"})}}.bind(this))}},assertMatch:function e(t,n,r,i,s){this.testContext._checkSyntaxErrors(s);var o;var a;if(t.success){o=t.message}else{a=t.message}this.testContext.assert(t.success,n,"",{structure:_.isString(r)?"function() {"+r+"}":r.toString(),alternateMessage:o,alsoMessage:a,image:i})}};var C={EDIT_DISTANCE_THRESHOLD:2,keywords:["break","case","catch","continue","default","do","else","finally","for","function","if","in","instanceof","new","return","switch","this","throw","try","typeof","var","while","charAt","charCodeAt","fromCharCode","indexOf","lastIndexOf","length","pop","prototype","push","replace","search","shift","slice","substring","toLowerCase","toUpperCase","unshift"],functionParamCount:{acos:1,asin:1,atan:1,atan2:2,background:[1,2,3,4],beginShape:[0,1],bezier:8,bezierVertex:[6],box:[1,2,3],color:[1,2,3,4],colorMode:[1,2,4,5],createFont:[1,2],cos:1,curve:8,cursor:[0,1,2,3],endShape:[0,1],dist:[4,6],fill:[1,2,3,4],filter:[1,2],get:[0,2,3,4,5],image:[3,5],line:4,loadImage:[1,3],getImage:1,mag:[2,3],max:2,min:2,noise:[1,2,3],PVector:[0,2,3],random:[0,1,2],RegExp:[1,2],rect:[4,5,8],scale:[1,2],set:[3,4],sin:1,stroke:[1,2,3,4],tan:1,text:[3,5],textAlign:[1,2],textFont:[1,2],translate:[2,3],vertex:[2,4],Date:[0,1,2,3,4,5,6,7]},functionFormSuggestion:{function:"var drawWinston = function() { ... };",while:"while (x < 20) { ... };"},functionParamBlacklist:["debug","max","min"],bannedProperties:{location:true,document:true,ownerDocument:true,createElement:true},variables:[],errors:[],inComment:false,spellChecked:false,init:function e(t){for(var n in t.context){if(typeof t.context[n]==="function"){C.keywords.push(n);if(!(n in C.functionParamCount)&&!_.include(C.functionParamBlacklist,n)){C.functionParamCount[n]=t.context[n].length}}}},initDocumentation:function e(t){for(var n=0;n<t.length;n++){var r=t[n];var i=r.indexOf("(");var s=r;if(i>=0){s=s.substring(0,i).trim();C.functionFormSuggestion[s]=r}}},babyErrors:function e(t,n){var r={};var i=(t||"").split("\n");C.errors=[];C.variables=[];C.inComment=false;C.spellChecked=false;_.each(n,function(e){if(e){r[e.line-2]=true}});_.each(i,function(e,t){C.errors=C.errors.concat(C.parseLine(e,t,r[t]))});return C.errors},parseLine:function e(t,n,r){var i=[];if(C.inComment){t=C.removeEndOfMultilineComment(t)}if(!C.inComment){t=C.removeStrings(t);t=C.removeComments(t);i=i.concat(C.checkTrailingEquals(t,n)).concat(C.checkFunctionParams(t,n)).concat(C.checkBannedProperties(t,n));if(r){i=i.concat(C.checkSpaceAfterVar(t,n));if(!C.spellChecked){i=i.concat(C.checkSpelling(t,n));C.spellChecked=true}}C.variables=C.variables.concat(C.getVariables(t))}return i},removeComments:function e(t){var n=t.indexOf("//");if(n!==-1){t=t.slice(0,n)}while(t.indexOf("/*")!==-1){n=t.indexOf("/*");var r=t.indexOf("*/");while(r!==-1&&r<=n+1){t=t.slice(0,r)+"  "+t.slice(r+2);r=t.indexOf("*/")}if(r>n+1){var i=t.slice(n,r+2);t=t.slice(0,n)+i.replace(/./g," ")+t.slice(r+2)}else if(r===-1){C.inComment=true;t=t.slice(0,n)}}return t},removeEndOfMultilineComment:function e(t){var n=t.indexOf("*/");if(n!==-1){C.inComment=false;t=t.slice(0,n+2).replace(/./g," ")+t.slice(n+2)}return t},removeStrings:function e(t){var n=-1;var r=null;for(var i=0;i<t.length;i++){var s=t[i];if(n===-1){if(s==='"'){n=i;r='"'}else if(s==="'"){n=i;r="'"}}else if(s===r){var o=t.slice(n+1,i);t=t.slice(0,n+1)+o.replace(/./g," ")+t.slice(i);n=-1}}return t},checkFunctionDecl:function e(r,i){var s=[];var t=r.match(/function\s+\w+/g);_.each(t,function(e){var t=e.split(/\s+/g)[1];var n={row:i,column:r.indexOf(e),text:i18n._("\u00a1Si quieres definir una funci\u00f3n, deber\u00edas usar \"var %(name)s = funci\u00f3n() {}; \" en su lugar!",{name:t}),breaksCode:true,source:"funcdeclaration",context:{name:t}};s.push(n)});return s},checkBannedProperties:function e(n,r){var i=[];var t=n.split(/[^~`@#\$\^\w]/g);_.each(t,function(e){if(C.bannedProperties.hasOwnProperty(e)){var t={row:r,column:n.indexOf(e),text:i18n._("%(word)s es una palabra reservada.",{word:e}),breaksCode:true,source:"bannedwords",context:{word:e}};i.push(t)}});return i},checkSpelling:function e(s,o){var a=[];var t=s.split(/[^~`@#\$\^\w]/g);var u=false;var c=-1;_.each(t,function(e){if(e.length>0&&!u){var t=C.editDistance(e);var n=t.editDistance;var r=t.keyword;if(n>0&&n<=C.EDIT_DISTANCE_THRESHOLD&&n<r.length-1&&C.keywords.indexOf(e)===-1){c=s.indexOf(e,c+1);var i={row:o,column:c,text:i18n._("\u00bfQuer\u00edas escribir \"%(keyword)s\" en lugar de \"%(word)s\"?",{keyword:r,word:e}),breaksCode:false,source:"spellcheck",context:{keyword:r,word:e}};if(C.functionFormSuggestion[r]){i.text+=" "+i18n._("En caso de que lo olvidaras, puedes usarlo como \"%(usage)s\"",{usage:C.functionFormSuggestion[r]})}a.push(i)}}u=e==="var"||e==="function"});return a},editDistance:function e(l){var h=l;l=l.toLowerCase();var d=function e(t,n,r){r=typeof r==="undefined"?0:r;var i=[];for(var s=0;s<t;s++){i[s]=[];for(var o=0;o<n;o++){i[s][o]=r}}return i};var p=Infinity;var g="";_.each(C.keywords.concat(C.variables),function(e){if(e===h){p=0;g=e;return}if(e.toLowerCase()===l&&e!==h){p=1;g=e;return}if(Math.abs(e.length-l.length)>C.EDIT_DISTANCE_THRESHOLD){return}var t=e.length;var n=l.length;var r=d(t,n,1);if(e[0]===l[0]){r[0][0]=0}for(var i=1;i<n;i++){var s=e[0]===l[i]?0:1;r[0][i]=r[0][i-1]+s}for(var o=1;o<t;o++){var s=e[o]===l[0]?0:1;r[o][0]=r[o-1][0]+s}for(var a=1;a<t;a++){var u=Number.MAX_VALUE;for(var c=1;c<n;c++){var s=e[a]===l[c]?0:1;var f=_.min([r[a-1][c]+1,r[a][c-1]+1,r[a-1][c-1]+s]);u=Math.min(u,f);r[a][c]=f}if(u>C.EDIT_DISTANCE_THRESHOLD){return}}if(r[t-1][n-1]<p){p=r[t-1][n-1];g=e}});return{editDistance:p,keyword:g}},checkSpaceAfterVar:function e(t,n){var r=[];var i=/var\w+/g;var s=t.match(i);if(s){var o=s[0].slice(3);var a={row:n,column:t.search(i)+3,text:i18n._("\u00bfOlvidaste un espacio entre \"var\" y \"%(variable)s\"?",{variable:o}),breaksCode:false};r.push(a)}return r},checkTrailingEquals:function e(t,n){var r=[];var i=t.length-1;while(t[i]===" "){i--}if(t[i]==="="){var s={row:n,column:i,text:i18n._("No puedes terminar una l\u00ednea con \"=\""),breaksCode:true};r.push(s)}return r},getVariables:function e(t){var n=[];var r=/\s*var\s*([A-z]\w*)\s*(;|=)/;if(r.exec(t)){var i=r.exec(t)[1];n.push(i)}var s=/function\s*\(([\w\s,]*)\)/;if(s.exec(t)){var o=RegExp.$1;var a=o.split(/\s*,\s*/);_.each(a,function(e){if(e){n.push(e)}})}return n},countCommas:function e(t){var n={"(":")","{":"}","[":"]"},r={")":"(","}":"{","]":"["};var i=[];var s=[];var o=0;for(var a=0;a<t.length;a++){if(n.hasOwnProperty(t[a])){i.push(t[a]);s.push(a)}else if(r.hasOwnProperty(t[a])){if(r[t[a]]===i[i.length-1]){i.pop();s.pop()}else{return{error:{message:i18n._("\"%(token)s\" inesperados",{token:t[a]}),index:a}}}}else if(i.length===0&&t[a]===","){o++}}return i.length>0?{error:{message:i18n._("\"%(token)s\" no coinciden",{token:i.pop()}),index:s.pop()}}:{count:o}},checkFunctionParams:function e(t,n){var r=[];var i={};var s=[];for(var o=0;o<t.length;o++){if(t[o]==="("){s.push(o)}else if(t[o]===")"){if(s.length===0){var a={row:n,column:o,text:i18n._("Parece que tienes un \")\" de m\u00e1s"),breaksCode:false,source:"paramschecker",context:{}};r.push(a);return r}else{i[s.pop()]=o}}}if(s.length>0){var a={row:n,column:s.pop(),text:i18n._("Parece que te falta un \")\",  \u00bftodo \"(\" tiene un correspondiente \")\" que cierre?"),breaksCode:false,source:"paramschecker",context:{}};r.push(a);return r}var u=t.match(/\w+\s*\(/g)||[];var c=t.match(/\.\s*\w+\s*\(/g)||[];c=_.map(c,function(e){var t=e.indexOf(e.match(/\w/g)[0]);return e.slice(t)});for(var o=u.length-1;o>=0;o--){var f=t.lastIndexOf(u[o]);var l=u[o].split(/\(\s*/g)[0];if(["for","if","while"].indexOf(l.trim())!==-1){continue}f+=l.length;var h=t.slice(f,i[f]+1);var d=h.match(/[A-z0-9]+\s+[A-z0-9]+/g);if(d){var p=t.indexOf(d[0]);while(t[p]!==" "){p++}var a={row:n,column:p,text:i18n._("\u00bfOlvidaste agregar una coma entre dos par\u00e1metros?"),breaksCode:false,source:"paramschecker",context:{}};r.push(a);break}var g,v=this.countCommas(h.substring(1,h.length-1));if(v.error){r.push({row:n,column:f+2+v.error.index,text:v.error.message,breaksCode:false,source:"paramschecker",context:{}});return r}if(v.count){g=v.count+1}else{g=h.match(/[^\s()]/g)?1:0}if(!_.include(c,u[o])){l=l.replace(/\s/g,"");var m=C.functionParamCount[l];var w;var y;if(typeof m!=="undefined"){y='"'+l+'()"';if(typeof m==="number"&&g!==m){w=i18n.ngettext({"lang": "es", "messages": ["\u00a1%(name)s toma 1 par\u00e1metro, no %(given)s!", "\u00a1%(name)s toma %(num)s par\u00e1metros, no %(given)s!"]},m,{name:y,given:g})}else if(typeof m!=="number"&&!_.include(m,g)){var b=""+m[0];for(var x=1;x<m.length-1;x++){b+=", "+m[x]}b+=" "+i18n._("o")+" "+m[m.length-1];w=i18n._("\u00a1%(name)s toma %(list)s par\u00e1metros, no %(given)s!",{name:y,list:b,given:g})}}if(w){var k=C.functionFormSuggestion[l];if(k){w=i18n._("Parece que est\u00e1s tratando de usar %(name)s. En caso de que lo olvidaras, puedes usarlo como: %(usage)s",{name:y,usage:'"'+k+'"'})}}if(w){var a={row:n,column:f,text:w,breaksCode:true,source:"paramschecker",context:{}};r.push(a)}}t=t.slice(0,f)+h.replace(/./g,"0")+t.slice(i[f]+1)}return r}};window.BabyHint=C;function f(e){this.canvas=e.canvas;this.output=e.output;this.cache={};this.imageHolder=null;if(!this.imageHolder){this.imageHolder=document.createElement("div");this.imageHolder.style.height=0;this.imageHolder.style.width=0;this.imageHolder.style.overflow="hidden";this.imageHolder.style.position="absolute";document.body.appendChild(this.imageHolder)}}f.prototype.cacheResources=function(e){var t=this;var n=Object.keys(e).map(function(e){return t.loadResource(e)});return Promise.all(n)};f.prototype.loadResource=function(e){if(e.endsWith(".png")){return this.loadImage(e)}else if(e.endsWith(".mp3")){return this.loadSound(e)}};f.prototype.loadImage=function(r){var i=this;return new Promise(function(e){var t=i.output.imagesDir+r;var n=document.createElement("img");n.onload=function(){i.cache[r]=n;e()};n.onerror=function(){e()};n.src=t;i.imageHolder.appendChild(n)})};f.prototype.loadSound=function(s){var o=this;return new Promise(function(e){var t=document.createElement("audio");var n=s.split("/");var r=_.findWhere(OutputSounds[0].groups,{groupName:n[0]});var i=r&&r.sounds.includes(n[1].replace(".mp3",""));if(!i){e();return}t.preload="auto";t.oncanplaythrough=function(){o.cache[s]={audio:t,__id:function e(){return"getSound('"+s.replace(".mp3","")+"')"}};e()};t.onerror=function(){e()};t.src=o.output.soundsDir+s})};f.prototype.getResource=function(e,t){switch(t){case"image":return this.getImage(e);case"sound":return this.getSound(e);default:throw"we can't load '"+t+"' resources yet"}};f.prototype.getImage=function(e){var t=this.cache[e+".png"];if(!t){throw{message:i18n._("La imagen '%(file)s' no se encontr\u00f3.",{file:e})}}var n=new this.canvas.PImage(t);n.__id=function(){return"getImage('"+e+"')"};return n};f.prototype.getSound=function(e){var t=this.cache[e+".mp3"];if(!t){throw{message:i18n._("No se encontr\u00f3 el archivo de sonido '%(file)s'.",{file:e})}}return t};f.findResources=function(e){var t=esprima.parse(e,{loc:true});var n={};walkAST(t,null,[ASTTransforms.findResources(n)]);return n};window.PJSOutput=Backbone.View.extend({trackedMouseEvents:["move","over","out","down","up"],bannedProps:{externals:true},initialize:function e(t){this.handlers={};this.config=t.config;this.output=t.output;this.tester=new PJSTester(_.extend(t,{workerFile:"pjs/test-worker.js"}));this.render();this.bind();this.build(this.$canvas[0],t.enableLoopProtect,t.loopProtectTimeouts);this.config.on("versionSwitched",function(e,t){this.config.runVersion(t,"processing",this.processing)}.bind(this));C.init({context:this.processing});return this},render:function e(){this.$el.empty();this.$canvas=$("<canvas>").attr("id","output-canvas").appendTo(this.el).show()},bind:function e(){if(window!==window.top){var t=["alert","open","showModalDialog","confirm","prompt","eval"];for(var n=0,r=t.length;n<r;n++){window.constructor.prototype[t[n]]=$.noop}}if(window!==window.top&&Object.freeze&&Object.getOwnPropertyDescriptor){for(var i in window){if(window.hasOwnProperty(i)){try{var s=Object.getOwnPropertyDescriptor(window,i);if(!s||s.configurable){Object.defineProperty(window,i,{value:window[i],writable:false,configurable:false})}}catch(e){}}}var s=Object.getOwnPropertyDescriptor(window);if(!s||s.configurable){Object.freeze(window)}Object.freeze(Object.getPrototypeOf(window))}var u=this.$canvas.offset();_.each(this.trackedMouseEvents,function(r){var a="mouse"+r;this.$canvas.on(a,function(e){if(this.output.recording){var t=e.pageX-u.left;var n=e.pageY-u.top;this.output.postParent({log:[r,t,n]})}}.bind(this));this.handlers[r]=function(e,t){var n=e+u.left;var r=t+u.top;var i=n-$(window).scrollLeft();var s=r-$(window).scrollTop();var o=document.createEvent("MouseEvents");o.initMouseEvent(a,true,true,window,0,0,0,i,s,false,false,false,false,0,document.documentElement);this.$canvas[0].dispatchEvent(o)}.bind(this)}.bind(this));$(window).on("resize",this.setDimensions)},build:function e(t,n,r){var i=this;this.processing=new Processing(t,function(e){e.draw=i.DUMMY});var s=new f({canvas:this.processing,output:this.output});var o={Program:{}};Object.keys(this.ProgramMethods).forEach(function(e){o.Program[e]=i.ProgramMethods[e].bind(i)});this.config.runCurVersion("jshint",this);this.injector=new a({processing:this.processing,resourceCache:s,infiniteLoopCallback:this.infiniteLoopCallback.bind(this),enableLoopProtect:n,JSHint:this.JSHint,additionalMethods:o,loopProtectTimeouts:r});this.config.runCurVersion("processing",this.processing);this.injector.clear();this.setDimensions()},DUMMY:function e(){},setDimensions:function e(){var t=$(window);var n=t.width();var r=t.height();if(this.processing&&(n!==this.processing.width||r!==this.processing.height)){this.$canvas.width(n).height(r);this.processing.size(n,r);this.output.restart()}},messageHandlers:{mouseAction:function e(t){t=t.mouseAction;this.handlers[t.name](t.x,t.y)},documentation:function e(t){C.initDocumentation(t.documentation)}},getScreenshot:function e(t,n){var r=document.createElement("canvas");r.width=t;r.height=t;r.getContext("2d").drawImage(this.$canvas[0],0,0,t,t);n(r.toDataURL("image/png"))},ProgramMethods:{settings:function e(){return this.output.settings||{}},restart:function e(){this.output.restart()},runTests:function e(t){return this.output.test(this.output.getUserCode(),this.output.validate,[],t)},assertEqual:function e(t,n,r,i){if(_.isEqual(t,n)){return}var s=i18n._("Falla de la aserci\u00f3n: %(actual)s no es igual a %(expected)s.",{actual:JSON.stringify(t),expected:JSON.stringify(n)});this.output.results.assertions.push({row:r-1,column:i,text:s})},runTest:function e(t,n){if(arguments.length===1){n=t;t=""}var r=!!n();this.output.postParent({results:{code:this.output.getUserCode(),errors:[],tests:[{name:t,state:r?"pass":"fail",results:[]}]},pass:r})}},lint:function e(n,t){var r=this;return this.injector.lint(n,t).then(function(e){var t=C.babyErrors(n,e);return{errors:r.mergeErrors(e,t),warnings:[]}})},mergeErrors:function e(t,n){var r=[];var i={};var s=[];_.each(t,function(e){if(e&&e.line&&e.character&&e.reason&&!/unable to continue/i.test(e.reason)){var t=e.line-2;r.push(t);if(e.code==="W112"){e.character=e.evidence.indexOf('"');if(!i[t]||i[t]>e.character-1){i[t]=e.character-1}}s.push({row:t,column:e.character-1,text:e.reason,type:"error",lint:e,source:"jshint",priority:2})}});n=n.filter(function(e){return(_.include(r,e.row)||e.breaksCode)&&(!i[e.row]||i[e.row]>e.column)}).map(function(e){return{row:e.row,column:e.column,text:e.text,type:"error",source:e.source,context:e.context,priority:1}});_.each(s,function(t){_.each(n,function(e){if(t.row===e.row&&t.column===e.column){if(t.lint.code==="W117"&&e.source==="spellcheck"){e.text=i18n._("\"%(word)s\" no est\u00e1 definido. Tal vez quisiste escribir \"%(keyword)s\", o est\u00e1s usando una variable que no definiste.",{word:t.lint.a,keyword:e.context.keyword})}}})});var o=n;var a=_.uniq(n.map(function(e){return e.row}));s.forEach(function(e){if(!_.contains(a,e.row)){o.push(e)}});var u=function e(t,n){if(t==="column"||t==="lint"){return}return n};return _.uniq(o,false,function(e){return JSON.stringify(e,u)})},test:function e(t,n,r,i){var s=r.length;this.tester.testWorker.exec(t,n,r,function(e,t){if(s!==e.length){var n=i18n._("Error: %(message)s",{message:e[e.length-1].message});console.warn(n);this.tester.testContext.assert(false,n,i18n._("Un problema cr\u00edtico ocurri\u00f3 en tu programa por lo que es incapaz de ejecutarse."))}i(e,t)}.bind(this))},runCode:function e(t,n){this.injector.runCode(t,n)},restart:function e(){this.injector.restart()},toggle:function e(t){if(t){this.processing.loop()}else{this.processing.noLoop()}},kill:function e(){this.tester.testWorker.kill();this.injector.hintWorker.kill();this.processing.exit()},initTests:function e(t){return this.exec(t,this.tester.testContext)},infiniteLoopCallback:function e(t){this.output.postParent({results:{code:this.output.currentCode,errors:[t]}});this.KA_INFINITE_LOOP=true}});_.extend(PJSOutput,{});LiveEditorOutput.registerOutput("pjs",PJSOutput)}}]);
//# sourceMappingURL=../../sourcemaps/en/b43e1a2e75011374d6d9f51e557ad7cb.ee13587d584bc8d7d140.js.map