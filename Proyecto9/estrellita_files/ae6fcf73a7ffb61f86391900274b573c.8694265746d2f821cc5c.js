(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ae6fcf73a7ffb61f86391900274b573c"],{WjuW:function(e,t,r){"use strict";r("ma9I");r("5DmW");r("NBAS");r("07d7");r("5s+n");r("JfAA");r("UxlC");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var P=i(r("q1tI"));var j=r("mR6N");var l=n(r("9/5/"));var C=r("Vxy9");var N=n(r("eM5Q"));var F=n(r("3sfC"));var a=r("JimW");var i18n=i(r("HEOz"));function n(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(a.get||a.set){Object.defineProperty(t,r,a)}else{t[r]=e[r]}}}}t.default=e;return t}}function o(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function u(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}function f(e,t,r){if(t)u(e.prototype,t);if(r)u(e,r);return e}function s(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return c(e)}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return d(e)}function c(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)v(e,t)}function v(e,t){v=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return v(e,t)}function h(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var b={UNKNOWN:i18n._("Ocurri\u00f3 un error mientras este campo se validaba."),EMPTY:i18n._("Este campo no puede permanecer vac\u00edo.")};var m=function(e){p(i,e);function i(){var e;var n;o(this,i);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++){r[a]=arguments[a]}n=s(this,(e=d(i)).call.apply(e,[this].concat(r)));h(c(n),"state",{focused:false,validation:null,value:null});h(c(n),"debouncedValidate",(0,l.default)(n.validate,250));h(c(n),"handleValueChange",function(e){var t=n.props,r=t.normalizer,a=t.useDebouncedValidate;if(r){e=r(e)}n.setState({value:e});if(a){n.debouncedValidate(e)}else{n.validate(e)}});h(c(n),"handleChange",function(e){var t=n.props.onChange;if(t){t(e)}n.handleValueChange(e.target.value)});h(c(n),"handleFocus",function(e){var t=n.props.onFocus;n.setState({focused:true});if(t){t(e)}});h(c(n),"handleBlur",function(e){n.setState({focused:false,validation:null});n.validate(e.target.value);var t=n.props.onBlur;if(t){t(e)}});h(c(n),"_formatStringForId",function(e){return e.toString().toLowerCase().replace(/[^a-zA-Z0-9 ]/g,"").replace(/ /g,"-")});return n}f(i,[{key:"componentDidMount",value:function e(){var t=this.props.initialValue||this.props.value;if(t){this.handleValueChange(t)}}},{key:"UNSAFE_componentWillUpdate",value:function e(t,r){var a=t.value;if(a&&t.value!==this.props.value){this.handleValueChange(a)}}},{key:"validate",value:function e(a){var n=this;var t=this.props,r=t.allowEmpty,i=t.emptyMessage,l=t.validator;var o=function e(t){var r=n.props.onValidation;if(r){r(!t,a,t)}n.setState({validation:t})};if(a===""&&!r){o(i||b.EMPTY)}else if(l){var u=l(a);if(u instanceof Promise){u.then(o).catch(function(e){return n.setState({validation:b.UNKNOWN})})}else{o(u)}}}},{key:"shouldShowError",value:function e(){var t=this.props,r=t.showValidationWhileFocused,a=t.error;var n=this.state,i=n.focused,l=n.validation;return a||(!i||r)&&l}},{key:"_internalRender",value:function e(t){var r=this.props,a=r.error,n=r.fieldType,i=r.label,l=r.maxLength,o=r.notice,u=r.onSubmit,f=r.placeholder,s=r.suggestion,d=r.testId,c=r.disabled,p=r.innerRef,v=r.labelStyle;var h=this.state,b=h.value,m=h.validation,y=h.focused;var g=this.shouldShowError();var w=g?F.default.fieldError:s?F.default.fieldWarning:F.default.hiddenFieldError;var O=null;if(i){O=t.get(this._formatStringForId(i))}var S=a||m||s;var E=null;if(S&&typeof S==="string"){E=t.get(this._formatStringForId(S))}return P.createElement("div",{className:(0,j.css)(F.default.fieldWrapper,F.default.label)},P.createElement(C.LabelLarge,{style:[I.label,v],htmlFor:O,tag:"label"},i),o&&P.createElement("div",{className:(0,j.css)(F.default.fieldRequirement)},o),P.createElement(N.default,{className:(0,j.css)(F.default.textInput,g&&F.default.errorInput,g&&!y&&F.default.errorInputShake),type:n,placeholder:f,maxLength:l,value:b||"",width:"100%",onFocus:this.handleFocus,onChange:this.handleChange,onBlur:this.handleBlur,onSubmit:u,testId:d,inputId:O,invalid:Boolean(g).toString(),"aria-describedby":E,disabled:c,ref:p}),P.createElement("div",{className:(0,j.css)(F.default.fieldRequirementContainer)},P.createElement("div",{"aria-live":"polite",id:E,className:(0,j.css)(F.default.fieldRequirement,w)},S)))}},{key:"render",value:function e(){var t=this;return P.createElement(a.UniqueIDProvider,{mockOnFirstRender:false,scope:"identity-text-field"},function(e){return t._internalRender(e)})}}]);return i}(P.Component);h(m,"defaultProps",{allowEmpty:false,fieldType:"text",normalizer:function e(t){return t},placeholder:"",validator:function e(t){return null},disabled:false});var I=j.StyleSheet.create({label:{marginBottom:0}});var y=m;t.default=y}}]);
//# sourceMappingURL=../../sourcemaps/en/ae6fcf73a7ffb61f86391900274b573c.43c8cd0a468fc9a83cf1.js.map