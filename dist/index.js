(()=>{var L=Object.create;var j=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var B=Object.getOwnPropertyNames;var W=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty;var k=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var J=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of B(e))!G.call(t,s)&&s!==r&&j(t,s,{get:()=>e[s],enumerable:!(n=z(e,s))||n.enumerable});return t};var Q=(t,e,r)=>(r=t!=null?L(W(t)):{},J(e||!t||!t.__esModule?j(r,"default",{value:t,enumerable:!0}):r,t));var F=k(o=>{"use strict";var _=Symbol.for("react.element"),X=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),tt=Symbol.for("react.provider"),et=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),st=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),x=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=x&&t[x]||t["@@iterator"],typeof t=="function"?t:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,N={};function d(t,e,r){this.props=t,this.context=e,this.refs=N,this.updater=r||$}d.prototype.isReactComponent={};d.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};d.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function I(){}I.prototype=d.prototype;function v(t,e,r){this.props=t,this.context=e,this.refs=N,this.updater=r||$}var S=v.prototype=new I;S.constructor=v;P(S,d.prototype);S.isPureReactComponent=!0;var C=Array.isArray,V=Object.prototype.hasOwnProperty,E={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function T(t,e,r){var n,s={},i=null,u=null;if(e!=null)for(n in e.ref!==void 0&&(u=e.ref),e.key!==void 0&&(i=""+e.key),e)V.call(e,n)&&!q.hasOwnProperty(n)&&(s[n]=e[n]);var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){for(var a=Array(c),l=0;l<c;l++)a[l]=arguments[l+2];s.children=a}if(t&&t.defaultProps)for(n in c=t.defaultProps,c)s[n]===void 0&&(s[n]=c[n]);return{$$typeof:_,type:t,key:i,ref:u,props:s,_owner:E.current}}function ut(t,e){return{$$typeof:_,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function R(t){return typeof t=="object"&&t!==null&&t.$$typeof===_}function ct(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var O=/\/+/g;function m(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ct(""+t.key):e.toString(36)}function g(t,e,r,n,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case _:case X:u=!0}}if(u)return u=t,s=s(u),t=n===""?"."+m(u,0):n,C(s)?(r="",t!=null&&(r=t.replace(O,"$&/")+"/"),g(s,e,r,"",function(l){return l})):s!=null&&(R(s)&&(s=ut(s,r+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+t)),e.push(s)),1;if(u=0,n=n===""?".":n+":",C(t))for(var c=0;c<t.length;c++){i=t[c];var a=n+m(i,c);u+=g(i,e,r,a,s)}else if(a=ot(t),typeof a=="function")for(t=a.call(t),c=0;!(i=t.next()).done;)i=i.value,a=n+m(i,c++),u+=g(i,e,r,a,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return u}function y(t,e,r){if(t==null)return t;var n=[],s=0;return g(t,n,"","",function(i){return e.call(r,i,s++)}),n}function at(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var f={current:null},b={transition:null},ft={ReactCurrentDispatcher:f,ReactCurrentBatchConfig:b,ReactCurrentOwner:E};function D(){throw Error("act(...) is not supported in production builds of React.")}o.Children={map:y,forEach:function(t,e,r){y(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return y(t,function(){e++}),e},toArray:function(t){return y(t,function(e){return e})||[]},only:function(t){if(!R(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};o.Component=d;o.Fragment=Y;o.Profiler=Z;o.PureComponent=v;o.StrictMode=K;o.Suspense=nt;o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ft;o.act=D;o.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=P({},t.props),s=t.key,i=t.ref,u=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,u=E.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(a in e)V.call(e,a)&&!q.hasOwnProperty(a)&&(n[a]=e[a]===void 0&&c!==void 0?c[a]:e[a])}var a=arguments.length-2;if(a===1)n.children=r;else if(1<a){c=Array(a);for(var l=0;l<a;l++)c[l]=arguments[l+2];n.children=c}return{$$typeof:_,type:t.type,key:s,ref:i,props:n,_owner:u}};o.createContext=function(t){return t={$$typeof:et,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tt,_context:t},t.Consumer=t};o.createElement=T;o.createFactory=function(t){var e=T.bind(null,t);return e.type=t,e};o.createRef=function(){return{current:null}};o.forwardRef=function(t){return{$$typeof:rt,render:t}};o.isValidElement=R;o.lazy=function(t){return{$$typeof:it,_payload:{_status:-1,_result:t},_init:at}};o.memo=function(t,e){return{$$typeof:st,type:t,compare:e===void 0?null:e}};o.startTransition=function(t){var e=b.transition;b.transition={};try{t()}finally{b.transition=e}};o.unstable_act=D;o.useCallback=function(t,e){return f.current.useCallback(t,e)};o.useContext=function(t){return f.current.useContext(t)};o.useDebugValue=function(){};o.useDeferredValue=function(t){return f.current.useDeferredValue(t)};o.useEffect=function(t,e){return f.current.useEffect(t,e)};o.useId=function(){return f.current.useId()};o.useImperativeHandle=function(t,e,r){return f.current.useImperativeHandle(t,e,r)};o.useInsertionEffect=function(t,e){return f.current.useInsertionEffect(t,e)};o.useLayoutEffect=function(t,e){return f.current.useLayoutEffect(t,e)};o.useMemo=function(t,e){return f.current.useMemo(t,e)};o.useReducer=function(t,e,r){return f.current.useReducer(t,e,r)};o.useRef=function(t){return f.current.useRef(t)};o.useState=function(t){return f.current.useState(t)};o.useSyncExternalStore=function(t,e,r){return f.current.useSyncExternalStore(t,e,r)};o.useTransition=function(){return f.current.useTransition()};o.version="18.3.1"});var A=k((pt,H)=>{"use strict";H.exports=F()});var p=class{data={};triggers={};ctr=0;constructor(e){typeof e=="object"&&(this.data=e)}setState=e=>{Object.assign(this.data,e);let r=Object.getOwnPropertyNames(e);for(let n of r)this.triggerEvent(n,this.data[n]);if(this.triggers[h]){let n=i=>{i(e)},s=this.triggers[h].length;for(let i=s-1;i>=0;i--)n(this.triggers[h][i].onchange)}return this.data};setValue=(e,r)=>{this.data[e]=r,this.triggerEvent(e,r)};triggerEvent=(e,r)=>{if(this.triggers[e]){let n=i=>{i.onchange(r)},s=this.triggers[e].length;for(let i=s-1;i>=0;i--)n(this.triggers[e][i])}};subscribeState=e=>this.subscribeEvent(h,e);unsubscribeState=e=>this.unsubscribeEvent(h,e);subscribeEvent=(e,r,n,s)=>{if(e){n&&s&&!this.triggers[e]&&Object.defineProperty(this.data,e,{get:()=>n[s],set:u=>{n[s]=u},enumerable:!0,configurable:!0}),this.triggers[e]||(this.triggers[e]=[]);let i=this.ctr;return this.ctr++,this.triggers[e].push({sub:i,onchange:r}),i}else return};unsubscribeEvent=(e,r)=>{let n=this.triggers[e];if(n)if(r===void 0)delete this.triggers[e],delete this.data[e];else{let s,i=n.find((u,c)=>{if(u.sub===r)return s=c,!0});return i&&n.splice(s,1),Object.keys(n).length===0&&(delete this.triggers[e],delete this.data[e]),this.onRemoved&&this.onRemoved(i),!0}};subscribeEventOnce=(e,r)=>{let n,s=i=>{r(i),this.unsubscribeEvent(e,n)};return n=this.subscribeEvent(e,s),n};getEvent=(e,r)=>{if(typeof r!="number")return this.triggers[e];for(let n in this.triggers[e])if(this.triggers[e][n].sub===r)return this.triggers[e][n]};getSnapshot=()=>{let e={};for(let r in this.data)e[r]=this.data[r]};onRemoved},h="*s";var M=Q(A(),1);var U=new p,w=class extends M.Component{__statemgr=U;__state_subs={};__updated=[];__unique=`component${Math.floor(Math.random()*1e15)}`;react_setState=e=>{};setState=e=>{this.__updated=Object.keys(e),this.react_setState(e),typeof e=="object"&&this.__statemgr.setState(e)};constructor(e={}){super(e),this.react_setState=this.setState.bind(this),e.state&&(this.__statemgr=e.state);let r={};for(let n in this.state)e?.doNotSubscribe&&e.doNotSubscribe.indexOf(n)>-1||n in this.__statemgr.data&&(r[n]=this.__statemgr.data[n]);Object.keys(r).length>0&&Object.assign(this.state,r),setTimeout(()=>{for(let n in this.state)e?.doNotSubscribe&&e.doNotSubscribe.indexOf(n)>-1||(n in this.__statemgr.data&&(r[n]=this.__statemgr.data[n]),this.__subscribeComponent(n));Object.keys(r).length>0&&this.react_setState(r)},.001)}__subscribeComponent(e,r){let n=this.__statemgr.subscribeEvent(e,s=>{if(typeof this>"u")this.__statemgr.unsubscribeEvent(e,n);else{r&&r(s);let u=this.__updated.indexOf(e);u>-1?this.__updated.splice(u,1):this.react_setState({[e]:s})}});return this.__state_subs[e]=n,n}__unsubscribeComponent(e){if(e)this.__statemgr.unsubscribeEvent(e,this.__state_subs[e]);else for(let r in this.__state_subs)this.__statemgr.unsubscribeEvent(r,this.__state_subs[r])}};})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
