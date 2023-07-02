"use strict";(()=>{var M=Object.create;var x=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var B=Object.getPrototypeOf,W=Object.prototype.hasOwnProperty;var C=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var G=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of z(e))!W.call(t,s)&&s!==n&&x(t,s,{get:()=>e[s],enumerable:!(r=L(e,s))||r.enumerable});return t};var J=(t,e,n)=>(n=t!=null?M(B(t)):{},G(e||!t||!t.__esModule?x(n,"default",{value:t,enumerable:!0}):n,t));var V=C(o=>{"use strict";var y=Symbol.for("react.element"),Q=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),tt=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),nt=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),O=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,N={};function h(t,e,n){this.props=t,this.context=e,this.refs=N,this.updater=n||P}h.prototype.isReactComponent={};h.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};h.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function T(){}T.prototype=h.prototype;function E(t,e,n){this.props=t,this.context=e,this.refs=N,this.updater=n||P}var S=E.prototype=new T;S.constructor=E;D(S,h.prototype);S.isPureReactComponent=!0;var $=Array.isArray,A=Object.prototype.hasOwnProperty,R={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function U(t,e,n){var r,s={},i=null,u=null;if(e!=null)for(r in e.ref!==void 0&&(u=e.ref),e.key!==void 0&&(i=""+e.key),e)A.call(e,r)&&!I.hasOwnProperty(r)&&(s[r]=e[r]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var a=Array(c),l=0;l<c;l++)a[l]=arguments[l+2];s.children=a}if(t&&t.defaultProps)for(r in c=t.defaultProps,c)s[r]===void 0&&(s[r]=c[r]);return{$$typeof:y,type:t,key:i,ref:u,props:s,_owner:R.current}}function ot(t,e){return{$$typeof:y,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function w(t){return typeof t=="object"&&t!==null&&t.$$typeof===y}function ut(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var k=/\/+/g;function _(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ut(""+t.key):e.toString(36)}function b(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case y:case Q:u=!0}}if(u)return u=t,s=s(u),t=r===""?"."+_(u,0):r,$(s)?(n="",t!=null&&(n=t.replace(k,"$&/")+"/"),b(s,e,n,"",function(l){return l})):s!=null&&(w(s)&&(s=ot(s,n+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(k,"$&/")+"/")+t)),e.push(s)),1;if(u=0,r=r===""?".":r+":",$(t))for(var c=0;c<t.length;c++){i=t[c];var a=r+_(i,c);u+=b(i,e,n,a,s)}else if(a=it(t),typeof a=="function")for(t=a.call(t),c=0;!(i=t.next()).done;)i=i.value,a=r+_(i,c++),u+=b(i,e,n,a,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return u}function g(t,e,n){if(t==null)return t;var r=[],s=0;return b(t,r,"","",function(i){return e.call(n,i,s++)}),r}function ct(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var f={current:null},m={transition:null},at={ReactCurrentDispatcher:f,ReactCurrentBatchConfig:m,ReactCurrentOwner:R};o.Children={map:g,forEach:function(t,e,n){g(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return g(t,function(){e++}),e},toArray:function(t){return g(t,function(e){return e})||[]},only:function(t){if(!w(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};o.Component=h;o.Fragment=Y;o.Profiler=X;o.PureComponent=E;o.StrictMode=K;o.Suspense=rt;o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=at;o.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=D({},t.props),s=t.key,i=t.ref,u=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,u=R.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(a in e)A.call(e,a)&&!I.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&c!==void 0?c[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){c=Array(a);for(var l=0;l<a;l++)c[l]=arguments[l+2];r.children=c}return{$$typeof:y,type:t.type,key:s,ref:i,props:r,_owner:u}};o.createContext=function(t){return t={$$typeof:tt,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Z,_context:t},t.Consumer=t};o.createElement=U;o.createFactory=function(t){var e=U.bind(null,t);return e.type=t,e};o.createRef=function(){return{current:null}};o.forwardRef=function(t){return{$$typeof:et,render:t}};o.isValidElement=w;o.lazy=function(t){return{$$typeof:st,_payload:{_status:-1,_result:t},_init:ct}};o.memo=function(t,e){return{$$typeof:nt,type:t,compare:e===void 0?null:e}};o.startTransition=function(t){var e=m.transition;m.transition={};try{t()}finally{m.transition=e}};o.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};o.useCallback=function(t,e){return f.current.useCallback(t,e)};o.useContext=function(t){return f.current.useContext(t)};o.useDebugValue=function(){};o.useDeferredValue=function(t){return f.current.useDeferredValue(t)};o.useEffect=function(t,e){return f.current.useEffect(t,e)};o.useId=function(){return f.current.useId()};o.useImperativeHandle=function(t,e,n){return f.current.useImperativeHandle(t,e,n)};o.useInsertionEffect=function(t,e){return f.current.useInsertionEffect(t,e)};o.useLayoutEffect=function(t,e){return f.current.useLayoutEffect(t,e)};o.useMemo=function(t,e){return f.current.useMemo(t,e)};o.useReducer=function(t,e,n){return f.current.useReducer(t,e,n)};o.useRef=function(t){return f.current.useRef(t)};o.useState=function(t){return f.current.useState(t)};o.useSyncExternalStore=function(t,e,n){return f.current.useSyncExternalStore(t,e,n)};o.useTransition=function(){return f.current.useTransition()};o.version="18.2.0"});var F=C((dt,q)=>{"use strict";q.exports=V()});var p=class{data={};triggers={};ctr=0;constructor(e){typeof e=="object"&&(this.data=e)}setState=e=>{Object.assign(this.data,e);let n=Object.getOwnPropertyNames(e);for(let r of n)this.triggerEvent(r,this.data[r]);if(this.triggers[d]){let r=i=>{i(e)},s=this.triggers[d].length;for(let i=s-1;i>=0;i--)r(this.triggers[d][i].onchange)}return this.data};setValue=(e,n)=>{this.data[e]=n,this.triggerEvent(e,n)};triggerEvent=(e,n)=>{if(this.triggers[e]){let r=i=>{i.onchange(n)},s=this.triggers[e].length;for(let i=s-1;i>=0;i--)r(this.triggers[e][i])}};subscribeState=e=>this.subscribeEvent(d,e);unsubscribeState=e=>this.unsubscribeEvent(d,e);subscribeEvent=(e,n,r,s)=>{if(e){r&&s&&!this.triggers[e]&&Object.defineProperty(this.data,e,{get:()=>r[s],set:u=>{r[s]=u},enumerable:!0,configurable:!0}),this.triggers[e]||(this.triggers[e]=[]);let i=this.ctr;return this.ctr++,this.triggers[e].push({sub:i,onchange:n}),i}else return};unsubscribeEvent=(e,n)=>{let r=this.triggers[e];if(r)if(n===void 0)delete this.triggers[e],delete this.data[e];else{let s,i=r.find((u,c)=>{if(u.sub===n)return s=c,!0});return i&&r.splice(s,1),Object.keys(r).length===0&&(delete this.triggers[e],delete this.data[e]),this.onRemoved&&this.onRemoved(i),!0}};subscribeEventOnce=(e,n)=>{let r,s=i=>{n(i),this.unsubscribeEvent(e,r)};return r=this.subscribeEvent(e,s),r};getEvent=(e,n)=>{for(let r in this.triggers[e])if(this.triggers[e][r].sub===n)return this.triggers[e][r]};getSnapshot=()=>{let e={};for(let n in this.data)e[n]=this.data[n]};onRemoved},d="*s";var H=J(F(),1);var v=new p,j=class extends H.Component{statemgr=v;state_subs={};UPDATED=[];unique=`component${Math.floor(Math.random()*1e15)}`;react_setState=this.setState.bind(this);constructor(e={state:v}){super(e),e.state&&(this.statemgr=e.state),this.setState=r=>{this.UPDATED=Object.keys(r),this.react_setState(r),typeof r=="object"&&v.setState(r)};let n={};for(let r in this.state)e?.doNotSubscribe&&e.doNotSubscribe.indexOf(r)>-1||r in this.statemgr.data&&(n[r]=this.statemgr.data[r]);Object.keys(n).length>0&&Object.assign(this.state,n),setTimeout(()=>{for(let r in this.state)e?.doNotSubscribe&&e.doNotSubscribe.indexOf(r)>-1||(r in this.statemgr.data&&(n[r]=this.statemgr.data[r]),this.__subscribeComponent(r));Object.keys(n).length>0&&this.react_setState(n)},.001)}__subscribeComponent(e,n){console.log("subbing",e);let r=this.statemgr.subscribeEvent(e,s=>{if(typeof this>"u")this.statemgr.unsubscribeEvent(e,r);else{n&&n(s);let u=this.UPDATED.indexOf(e);u>-1?this.UPDATED.splice(u,1):this.react_setState({[e]:s})}});return this.state_subs[e]=r,r}__unsubscribeComponent(e){if(e)this.statemgr.unsubscribeEvent(e,this.state_subs[e]);else for(let n in this.state_subs)this.statemgr.unsubscribeEvent(n,this.state_subs[n])}};})();
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