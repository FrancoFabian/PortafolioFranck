(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["8dc10bc842cd344307f6d723d70e3c6d"],{Sxes:function(t,e,s){window.PooledWorker=function(t,e){this.pool=[];this.curID=0;this.filename=t;this.onExec=e||function(){}};PooledWorker.prototype.getURL=function(){return this.workersDir+this.filename+"?cachebust=G"+(new Date).toDateString()};PooledWorker.prototype.getWorkerFromPool=function(){var t=this.pool.shift();if(!t){t=new window.Worker(this.getURL())}this.curID+=1;t.id=this.curID;return t};PooledWorker.prototype.isCurrentWorker=function(t){return this.curID===t.id};PooledWorker.prototype.addWorkerToPool=function(t){this.pool.push(t)};PooledWorker.prototype.exec=function(){this.onExec.apply(this,arguments)};PooledWorker.prototype.kill=function(){this.pool.forEach(function(t){t.terminate()},this);this.pool=[]};window.OutputTester=function(){};OutputTester.prototype={initialize:function t(e){var o=this;this.tests=[];this.testContext={};for(var s in this.testMethods){if(this.testMethods.hasOwnProperty(s)){this.testContext[s]=this.testMethods[s]}}for(var s in this.defaultTestContext){if(!(s in this.testContext)){this.testContext[s]=this.defaultTestContext[s]}}if(typeof PooledWorker==="undefined"){return}this.testWorker=new PooledWorker(e.workerFile,function(t,e,s,i){var r=this;try{o.exec(e)}catch(t){console.warn(t.message);return}if(!window.Worker||s.length>0){return o.test(t,e,s,i)}var n=this.getWorkerFromPool();n.onmessage=function(t){if(t.data.type==="test"){r.addWorkerToPool(n);if(r.isCurrentWorker(n)){var e=t.data.message;i(e.errors,e.testResults)}}};n.postMessage({code:t,validate:e,errors:s,externalsDir:this.externalsDir})})},bindTestContext:function t(e){e=e||this.testContext;for(var s in e){if(typeof e[s]==="object"){this.bindTestContext(e[s])}else if(typeof e[s]==="function"){e[s]=e[s].bind(this)}}},test:function t(e,s,i,r){var n=[];i=this.errors=i||[];this.userCode=e;this.tests=[];this.exec(s);this.curTask=null;this.curTest=null;for(var o=0;o<this.tests.length;o++){n.push(this.runTest(this.tests[o],o))}r(i,n)},runTest:function t(e,s){var i={name:e.name,state:"pass",results:[]};this.curTest=i;e.fn.call(this);this.curTest=null;return i},exec:function t(e){if(!e){return true}e="with(arguments[0]){\n"+e+"\n}";new Function(e).call({},this.testContext);return true},defaultTestContext:{test:function t(e,s,i){if(!s){s=e;e=i18n._("Evaluar caso")}this.tests.push({name:e,type:i||"default",fn:function t(){try{return s.apply(this,arguments)}catch(t){console.warn(t)}}})},staticTest:function t(e,s){this.testContext.test(e,s,"static")},log:function t(e,s,i,r,n){r=r||"info";var o={type:r,msg:e,state:s,expected:i,meta:n||{}};if(this.curTest){if(s!=="pass"){this.curTest.state=s}this.curTest.results.push(o)}return o},task:function t(e,s){this.curTask=this.testContext.log(e,"pass",s,"task");this.curTask.results=[]},endTask:function t(){this.curTask=null},assert:function t(e,s,i,r){e=!!e;this.testContext.log(s,e?"pass":"fail",i,"assertion",r);return e},isEqual:function t(e,s,i){return this.testContext.assert(e===s,i,[e,s])},pass:function t(e){return{success:true,message:e}},fail:function t(e){return{success:false,message:e}},anyPass:function t(){return _.find(arguments,this.testContext.passes)||arguments[0]||this.testContext.fail()},allPass:function t(){return _.find(arguments,this.testContext.fails)||arguments[0]||this.testContext.pass()},passes:function t(e){return e.success},fails:function t(e){return!e.success}}};$._=i18n._;window.LiveEditorOutput=Backbone.View.extend({recording:false,loaded:false,outputs:{},lintErrors:[],runtimeErrors:[],lintWarnings:[],initialize:function t(e){this.render();this.setPaths(e);this.config=new ScratchpadConfig({});if(e.outputType){this.setOutput(e.outputType,true,e.loopProtectTimeouts)}this.lintErrors.timestamp=0;this.runtimeErrors.timestamp=0;this.lintWarnings.timestamp=0;this.bind()},render:function t(){this.$el.html('<div class="output"></div>')},bind:function t(){window.addEventListener("message",this.handleMessage.bind(this),false)},setOutput:function t(e,s,i){var r=this.outputs[e];this.output=new r({el:this.$el.find(".output"),config:this.config,output:this,type:e,enableLoopProtect:s,loopProtectTimeouts:i})},setPaths:function t(e){if(e.workersDir){this.workersDir=this._qualifyURL(e.workersDir);PooledWorker.prototype.workersDir=this.workersDir}if(e.externalsDir){this.externalsDir=this._qualifyURL(e.externalsDir);PooledWorker.prototype.externalsDir=this.externalsDir}if(e.imagesDir){this.imagesDir=this._qualifyURL(e.imagesDir)}if(e.soundsDir){this.soundsDir=this._qualifyURL(e.soundsDir)}if(e.redirectUrl){this.redirectUrl=e.redirectUrl}if(e.jshintFile){this.jshintFile=this._qualifyURL(e.jshintFile);PooledWorker.prototype.jshintFile=this.jshintFile}},_qualifyURL:function t(e){var s=document.createElement("a");s.href=e;return s.href},handleMessage:function t(e){var s;this.frameSource=e.source;this.frameOrigin=e.origin;this.notifyActive();if(typeof e.data==="object"){return}try{s=JSON.parse(e.data)}catch(t){return}if(!this.output){var i=s.outputType||_.keys(this.outputs)[0];var r=true;if(s.enableLoopProtect!=null){r=s.enableLoopProtect}var n={initialTimeout:2e3,frameTimeout:500};if(s.loopProtectTimeouts!=null){n=s.loopProtectTimeouts}this.setOutput(i,r,n)}this.setPaths(s);if(s.validate!=null){this.initTests(s.validate)}if(s.settings!=null){this.settings=s.settings}if(s.code!=null){this.config.switchVersion(s.version);this.runCode(s.code,undefined,s.noLint)}if(s.onlyRunTests!=null){this.onlyRunTests=!!s.onlyRunTests}else{this.onlyRunTests=false}if(s.restart){this.restart()}if(s.recording!=null){this.recording=s.recording}if(s.screenshot!=null){var o=s.screenshotSize||200;this.output.getScreenshot(o,function(t){this.postParent(t)}.bind(this))}if(this.output.messageHandlers){for(var u in s){if(u in this.output.messageHandlers){this.output.messageHandlers[u].call(this.output,s)}}}},postParent:function t(e){if(this.frameSource){var s=this.frameSource;if(this.frameSource===window){return}s.postMessage(typeof e==="string"?e:JSON.stringify(e),this.frameOrigin)}},notifyActive:_.once(function(){this.postParent({active:true})}),initTests:function t(e){if(this.validate===e){return}this.validate=e},jsonifyError:function t(e){if(typeof e!=="object"||$.isPlainObject(e)){return e}else{return{row:e.lineno?e.lineno-2:-1,column:0,text:e.message,type:"error",source:"native",priority:3}}},runCode:function t(e,s,i){this.currentCode=e;var r=Date.now();this.results={timestamp:r,code:e,errors:[],assertions:[],warnings:[]};var n=i&&this.firstLint;this.output.lint(e,n).then(function(t){this.lintErrors=t.errors;this.lintErrors.timestamp=r;this.lintWarnings=t.warnings;this.lintWarnings.timestamp=r;return this.lintDone(e,r)}.bind(this)).then(function(){this.buildDone(e,s)}.bind(this));this.firstLint=true},lintDone:function t(e,s){var i=$.Deferred();if(this.lintErrors.length>0||this.onlyRunTests){i.resolve();return i}try{this.output.runCode(e,function(t){this.runtimeErrors=t;this.runtimeErrors.timestamp=s;i.resolve()}.bind(this))}catch(t){if(this.outputs.hasOwnProperty("pjs")){this.runtimeErrors=[t]}i.resolve()}return i},buildDone:function t(e,s){var i=[];var r=[];if(this.results.timestamp===this.lintErrors.timestamp){i=i.concat(this.lintErrors)}if(this.results.timestamp===this.runtimeErrors.timestamp){i=i.concat(this.runtimeErrors)}if(this.results.timestamp===this.lintWarnings.timestamp){r=r.concat(this.lintWarnings)}i=i||[];i=i.map(this.jsonifyError);if(!this.loaded){this.postParent({loaded:true});this.loaded=true}this.results.errors=i;this.results.warnings=r;this.phoneHome();this.toggle(!i.length);if(s){this._test(e,this.validate,i,function(t,e){s(t,e)})}else{if(this.validate!==""){this.test(e,this.validate,i,function(t,e){this.results.errors=t;this.results.tests=e;this.phoneHome()}.bind(this))}}},phoneHome:function t(){this.postParent({results:this.results})},test:_.throttle(function(){this._test.apply(this,arguments)},200),_test:function t(e,s,i,r){this.output.test(e,s,i,r)},lint:function t(e,s){this.output.lint(e,s)},getUserCode:function t(){return this.currentCode||""},toggle:function t(e){if(this.output.toggle){this.output.toggle(e)}},restart:function t(){if(!this.output){return}if(this.output.restart){this.output.restart()}this.runCode(this.getUserCode())}});LiveEditorOutput.registerOutput=function(t,e){LiveEditorOutput.prototype.outputs[t]=e};if(true){e.LiveEditorOutput=LiveEditorOutput}}}]);
//# sourceMappingURL=../../sourcemaps/en/8dc10bc842cd344307f6d723d70e3c6d.347994bc39a40564e1cb.js.map