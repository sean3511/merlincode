(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1984],{42720:function(t,e,i){"use strict";var r=Object.create?function(t,e,i,r){void 0===r&&(r=i);var n=Object.getOwnPropertyDescriptor(e,i);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[i]}}),Object.defineProperty(t,r,n)}:function(t,e,i,r){void 0===r&&(r=i),t[r]=e[i]},n=function(t,e){for(var i in t)"default"===i||Object.prototype.hasOwnProperty.call(e,i)||r(e,t,i)};Object.defineProperty(e,"__esModule",{value:!0}),n(i(19010),e),n(i(62522),e),n(i(61032),e)},19010:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useBreakpoints=e.useBreakpoint=void 0;var r=i(61032);e.useBreakpoint=function(t){return(0,r.useWindowSize)().width<t},e.useBreakpoints=function(t){var e=(0,r.useWindowSize)().width;return t.map(function(t){return e<t})}},62522:function(t,e,i){"use strict";var r=function(){return(r=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},n=Object.create?function(t,e,i,r){void 0===r&&(r=i);var n=Object.getOwnPropertyDescriptor(e,i);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[i]}}),Object.defineProperty(t,r,n)}:function(t,e,i,r){void 0===r&&(r=i),t[r]=e[i]},a=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};Object.defineProperty(e,"__esModule",{value:!0}),e.useComponentSize=void 0;var s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&n(e,t,i);return a(e,t),e}(i(90402));e.useComponentSize=function(){var t=s.useState({height:0,width:0}),e=t[0],i=t[1],n=s.useRef(),a=s.useCallback(function(){if(n.current){var t=n.current.offsetHeight,r=n.current.offsetWidth;(t!==e.height||r!==e.width)&&i({height:t,width:r})}},[e.height,e.width]);return s.useLayoutEffect(function(){if(n&&n.current){var t=new ResizeObserver(a);return t.observe(n.current),function(){return t.disconnect()}}},[n,a]),r({ref:n},e)}},61032:function(t,e,i){"use strict";var r=Object.create?function(t,e,i,r){void 0===r&&(r=i);var n=Object.getOwnPropertyDescriptor(e,i);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[i]}}),Object.defineProperty(t,r,n)}:function(t,e,i,r){void 0===r&&(r=i),t[r]=e[i]},n=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};Object.defineProperty(e,"__esModule",{value:!0}),e.useWindowSize=void 0;var a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&r(e,t,i);return n(e,t),e}(i(90402));function s(){return{height:window.innerHeight,width:window.innerWidth}}e.useWindowSize=function(){var t=a.useState(s()),e=t[0],i=t[1];return a.useLayoutEffect(function(){function t(){i(s())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}},[]),e}},21670:function(t){t.exports={style:{fontFamily:"'__font_ba605b', '__font_Fallback_ba605b'"},className:"__className_ba605b"}},89793:function(t,e,i){"use strict";i.d(e,{$:function(){return o}});var r=i(41961),n="#1A1B1F",a={blue:{accentColor:"#3898FF",accentColorForeground:"#FFF"},green:{accentColor:"#4BD166",accentColorForeground:n},orange:{accentColor:"#FF983D",accentColorForeground:n},pink:{accentColor:"#FF7AB8",accentColorForeground:n},purple:{accentColor:"#7A70FF",accentColorForeground:"#FFF"},red:{accentColor:"#FF6257",accentColorForeground:"#FFF"}},s=a.blue,o=function(){let{accentColor:t=s.accentColor,accentColorForeground:e=s.accentColorForeground,...i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...(0,r.w)(i),colors:{accentColor:t,accentColorForeground:e,actionButtonBorder:"rgba(255, 255, 255, 0.04)",actionButtonBorderMobile:"rgba(255, 255, 255, 0.08)",actionButtonSecondaryBackground:"rgba(255, 255, 255, 0.08)",closeButton:"rgba(224, 232, 255, 0.6)",closeButtonBackground:"rgba(255, 255, 255, 0.08)",connectButtonBackground:n,connectButtonBackgroundError:"#FF494A",connectButtonInnerBackground:"linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",connectButtonText:"#FFF",connectButtonTextError:"#FFF",connectionIndicator:"#30E000",downloadBottomCardBackground:"linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",downloadTopCardBackground:"linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",error:"#FF494A",generalBorder:"rgba(255, 255, 255, 0.08)",generalBorderDim:"rgba(255, 255, 255, 0.04)",menuItemBackground:"rgba(224, 232, 255, 0.1)",modalBackdrop:"rgba(0, 0, 0, 0.5)",modalBackground:"#1A1B1F",modalBorder:"rgba(255, 255, 255, 0.08)",modalText:"#FFF",modalTextDim:"rgba(224, 232, 255, 0.3)",modalTextSecondary:"rgba(255, 255, 255, 0.6)",profileAction:"rgba(224, 232, 255, 0.1)",profileActionHover:"rgba(224, 232, 255, 0.2)",profileForeground:"rgba(224, 232, 255, 0.05)",selectedOptionBorder:"rgba(224, 232, 255, 0.1)",standby:"#FFD641"},shadows:{connectButton:"0px 4px 12px rgba(0, 0, 0, 0.1)",dialog:"0px 8px 32px rgba(0, 0, 0, 0.32)",profileDetailsAction:"0px 2px 6px rgba(37, 41, 46, 0.04)",selectedOption:"0px 2px 6px rgba(0, 0, 0, 0.24)",selectedWallet:"0px 2px 6px rgba(0, 0, 0, 0.24)",walletLogo:"0px 2px 16px rgba(0, 0, 0, 0.16)"}}};o.accentColors=a},20554:function(t,e,i){"use strict";i.d(e,{S:function(){return N}});var r,n,a,s,o,l,u,c,h,d,f,p,g,_,y,b,w,m,F,O,k,M,P=i(44149),A=i(272),C=i(48585),q=i(31945);function S(t,e){var i=(0,q.J)(t,e,"update");return function(t,e){if(e.set){if(!e.get)throw TypeError("attempted to read set only private field");return"__destrWrapper"in e||(e.__destrWrapper={set value(v){e.set.call(t,v)},get value(){return e.get.call(t)}}),e.__destrWrapper}if(!e.writable)throw TypeError("attempted to set read only private field");return e}(t,i)}var D=i(83985),B=i(29652),E=i(20885),Q=i(79886),j=i(57852),W=i(83126),x=(r=new WeakMap,n=new WeakMap,a=new WeakMap,s=new WeakMap,o=new WeakMap,l=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakSet,d=new WeakSet,class extends W.F{get meta(){return this.options.meta}optionalRemove(){(0,P._)(this,l).length||"idle"!==this.state.fetchStatus||(0,P._)(this,a).remove(this)}setData(t,e){let i=(0,D.oE)(this.state.data,t,this.options);return(0,B._)(this,d,R).call(this,{data:i,type:"success",dataUpdatedAt:null==e?void 0:e.updatedAt,manual:null==e?void 0:e.manual}),i}setState(t,e){(0,B._)(this,d,R).call(this,{type:"setState",state:t,setStateOptions:e})}cancel(t){var e;let i=(0,P._)(this,s);return null===(e=(0,P._)(this,o))||void 0===e||e.cancel(t),i?i.then(D.ZT).catch(D.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState((0,P._)(this,r))}isActive(){return(0,P._)(this,l).some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||void 0===this.state.data||(0,P._)(this,l).some(t=>t.getCurrentResult().isStale)}isStaleByTime(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.state.isInvalidated||void 0===this.state.data||!(0,D.Kp)(this.state.dataUpdatedAt,t)}onFocus(){var t;let e=(0,P._)(this,l).find(t=>t.shouldFetchOnWindowFocus());null==e||e.refetch({cancelRefetch:!1}),null===(t=(0,P._)(this,o))||void 0===t||t.continue()}onOnline(){var t;let e=(0,P._)(this,l).find(t=>t.shouldFetchOnReconnect());null==e||e.refetch({cancelRefetch:!1}),null===(t=(0,P._)(this,o))||void 0===t||t.continue()}addObserver(t){(0,P._)(this,l).includes(t)||((0,P._)(this,l).push(t),this.clearGcTimeout(),(0,P._)(this,a).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){(0,P._)(this,l).includes(t)&&((0,C._)(this,l,(0,P._)(this,l).filter(e=>e!==t)),(0,P._)(this,l).length||((0,P._)(this,o)&&((0,P._)(this,c)?(0,P._)(this,o).cancel({revert:!0}):(0,P._)(this,o).cancelRetry()),this.scheduleGc()),(0,P._)(this,a).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return(0,P._)(this,l).length}invalidate(){this.state.isInvalidated||(0,B._)(this,d,R).call(this,{type:"invalidate"})}fetch(t,e){var i,r,u,f;if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&(null==e?void 0:e.cancelRefetch))this.cancel({silent:!0});else if((0,P._)(this,s))return null===(u=(0,P._)(this,o))||void 0===u||u.continueRetry(),(0,P._)(this,s)}if(t&&(0,B._)(this,h,T).call(this,t),!this.options.queryFn){let t=(0,P._)(this,l).find(t=>t.options.queryFn);t&&(0,B._)(this,h,T).call(this,t.options)}let p=new AbortController,g={queryKey:this.queryKey,meta:this.meta},_=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>((0,C._)(this,c,!0),p.signal)})};_(g);let y={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?((0,C._)(this,c,!1),this.options.persister)?this.options.persister(this.options.queryFn,g,this):this.options.queryFn(g):Promise.reject(Error("Missing queryFn: '".concat(this.options.queryHash,"'")))};_(y),null===(i=this.options.behavior)||void 0===i||i.onFetch(y,this),(0,C._)(this,n,this.state),("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null===(r=y.fetchOptions)||void 0===r?void 0:r.meta))&&(0,B._)(this,d,R).call(this,{type:"fetch",meta:null===(f=y.fetchOptions)||void 0===f?void 0:f.meta});let b=t=>{if((0,j.DV)(t)&&t.silent||(0,B._)(this,d,R).call(this,{type:"error",error:t}),!(0,j.DV)(t)){var e,i,r,n;null===(e=(i=(0,P._)(this,a).config).onError)||void 0===e||e.call(i,t,this),null===(r=(n=(0,P._)(this,a).config).onSettled)||void 0===r||r.call(n,this.state.data,t,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return(0,C._)(this,o,(0,j.Mz)({fn:y.fetchFn,abort:p.abort.bind(p),onSuccess:t=>{var e,i,r,n;if(void 0===t){b(Error("".concat(this.queryHash," data is undefined")));return}this.setData(t),null===(e=(i=(0,P._)(this,a).config).onSuccess)||void 0===e||e.call(i,t,this),null===(r=(n=(0,P._)(this,a).config).onSettled)||void 0===r||r.call(n,t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:b,onFail:(t,e)=>{(0,B._)(this,d,R).call(this,{type:"failed",failureCount:t,error:e})},onPause:()=>{(0,B._)(this,d,R).call(this,{type:"pause"})},onContinue:()=>{(0,B._)(this,d,R).call(this,{type:"continue"})},retry:y.options.retry,retryDelay:y.options.retryDelay,networkMode:y.options.networkMode})),(0,C._)(this,s,(0,P._)(this,o).promise),(0,P._)(this,s)}constructor(t){super(),(0,E._)(this,h),(0,E._)(this,d),(0,A._)(this,r,{writable:!0,value:void 0}),(0,A._)(this,n,{writable:!0,value:void 0}),(0,A._)(this,a,{writable:!0,value:void 0}),(0,A._)(this,s,{writable:!0,value:void 0}),(0,A._)(this,o,{writable:!0,value:void 0}),(0,A._)(this,l,{writable:!0,value:void 0}),(0,A._)(this,u,{writable:!0,value:void 0}),(0,A._)(this,c,{writable:!0,value:void 0}),(0,C._)(this,c,!1),(0,C._)(this,u,t.defaultOptions),(0,B._)(this,h,T).call(this,t.options),(0,C._)(this,l,[]),(0,C._)(this,a,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,(0,C._)(this,r,t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,r=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?null!=r?r:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}(this.options)),this.state=(0,P._)(this,r),this.scheduleGc()}});function T(t){this.options={...(0,P._)(this,u),...t},this.updateGcTime(this.options.gcTime)}function R(t){this.state=(e=>{var i,r;switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!==(i=t.meta)&&void 0!==i?i:null,fetchStatus:(0,j.Kw)(this.options.networkMode)?"fetching":"paused",...void 0===e.data&&{error:null,status:"pending"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:null!==(r=t.dataUpdatedAt)&&void 0!==r?r:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let a=t.error;if((0,j.DV)(a)&&a.revert&&(0,P._)(this,n))return{...(0,P._)(this,n),fetchStatus:"idle"};return{...e,error:a,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),Q.V.batch(()=>{(0,P._)(this,l).forEach(t=>{t.onQueryUpdate()}),(0,P._)(this,a).notify({query:this,type:"updated",action:t})})}var K=i(6524),H=(f=new WeakMap,class extends K.l{build(t,e,i){var r;let n=e.queryKey,a=null!==(r=e.queryHash)&&void 0!==r?r:(0,D.Rm)(n,e),s=this.get(a);return s||(s=new x({cache:this,queryKey:n,queryHash:a,options:t.defaultQueryOptions(e),state:i,defaultOptions:t.getQueryDefaults(n)}),this.add(s)),s}add(t){(0,P._)(this,f).has(t.queryHash)||((0,P._)(this,f).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=(0,P._)(this,f).get(t.queryHash);e&&(t.destroy(),e===t&&(0,P._)(this,f).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Q.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return(0,P._)(this,f).get(t)}getAll(){return[...(0,P._)(this,f).values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,D._x)(e,t))}findAll(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,D._x)(t,e)):e}notify(t){Q.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){Q.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Q.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}constructor(t={}){super(),(0,A._)(this,f,{writable:!0,value:void 0}),this.config=t,(0,C._)(this,f,new Map)}}),V=i(5698),U=(p=new WeakMap,g=new WeakMap,_=new WeakMap,class extends K.l{build(t,e,i){let r=new V.m({mutationCache:this,mutationId:++S(this,g).value,options:t.defaultMutationOptions(e),state:i});return this.add(r),r}add(t){(0,P._)(this,p).push(t),this.notify({type:"added",mutation:t})}remove(t){(0,C._)(this,p,(0,P._)(this,p).filter(e=>e!==t)),this.notify({type:"removed",mutation:t})}clear(){Q.V.batch(()=>{(0,P._)(this,p).forEach(t=>{this.remove(t)})})}getAll(){return(0,P._)(this,p)}find(t){let e={exact:!0,...t};return(0,P._)(this,p).find(t=>(0,D.X7)(e,t))}findAll(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,P._)(this,p).filter(e=>(0,D.X7)(t,e))}notify(t){Q.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){var t;return(0,C._)(this,_,(null!==(t=(0,P._)(this,_))&&void 0!==t?t:Promise.resolve()).then(()=>{let t=(0,P._)(this,p).filter(t=>t.state.isPaused);return Q.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(D.ZT)),Promise.resolve()))}).then(()=>{(0,C._)(this,_,void 0)})),(0,P._)(this,_)}constructor(t={}){super(),(0,A._)(this,p,{writable:!0,value:void 0}),(0,A._)(this,g,{writable:!0,value:void 0}),(0,A._)(this,_,{writable:!0,value:void 0}),this.config=t,(0,C._)(this,p,[]),(0,C._)(this,g,0)}}),I=i(11664),Z=i(419);function z(t,e){let{pages:i,pageParams:r}=e,n=i.length-1;return t.getNextPageParam(i[n],i,r[n],r)}var N=(y=new WeakMap,b=new WeakMap,w=new WeakMap,m=new WeakMap,F=new WeakMap,O=new WeakMap,k=new WeakMap,M=new WeakMap,class{mount(){S(this,O).value++,1===(0,P._)(this,O)&&((0,C._)(this,k,I.j.subscribe(()=>{I.j.isFocused()&&(this.resumePausedMutations(),(0,P._)(this,y).onFocus())})),(0,C._)(this,M,Z.N.subscribe(t=>{t&&(this.resumePausedMutations(),(0,P._)(this,y).onOnline())})))}unmount(){var t,e;S(this,O).value--,0===(0,P._)(this,O)&&(null===(t=(0,P._)(this,k))||void 0===t||t.call(this),(0,C._)(this,k,void 0),null===(e=(0,P._)(this,M))||void 0===e||e.call(this),(0,C._)(this,M,void 0))}isFetching(t){return(0,P._)(this,y).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return(0,P._)(this,b).findAll({...t,status:"pending"}).length}getQueryData(t){var e;let i=this.defaultQueryOptions({queryKey:t});return null===(e=(0,P._)(this,y).get(i.queryHash))||void 0===e?void 0:e.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);return void 0!==e?Promise.resolve(e):this.fetchQuery(t)}getQueriesData(t){return this.getQueryCache().findAll(t).map(t=>{let{queryKey:e,state:i}=t;return[e,i.data]})}setQueryData(t,e,i){let r=this.defaultQueryOptions({queryKey:t}),n=(0,P._)(this,y).get(r.queryHash),a=null==n?void 0:n.state.data,s=(0,D.SE)(e,a);if(void 0!==s)return(0,P._)(this,y).build(this,r).setData(s,{...i,manual:!0})}setQueriesData(t,e,i){return Q.V.batch(()=>this.getQueryCache().findAll(t).map(t=>{let{queryKey:r}=t;return[r,this.setQueryData(r,e,i)]}))}getQueryState(t){var e;let i=this.defaultQueryOptions({queryKey:t});return null===(e=(0,P._)(this,y).get(i.queryHash))||void 0===e?void 0:e.state}removeQueries(t){let e=(0,P._)(this,y);Q.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let i=(0,P._)(this,y),r={type:"active",...t};return Q.V.batch(()=>(i.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(r,e)))}cancelQueries(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={revert:!0,...e};return Promise.all(Q.V.batch(()=>(0,P._)(this,y).findAll(t).map(t=>t.cancel(i)))).then(D.ZT).catch(D.ZT)}invalidateQueries(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Q.V.batch(()=>{var i,r;if((0,P._)(this,y).findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let n={...t,type:null!==(r=null!==(i=t.refetchType)&&void 0!==i?i:t.type)&&void 0!==r?r:"active"};return this.refetchQueries(n,e)})}refetchQueries(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,r={...i,cancelRefetch:null===(t=null==i?void 0:i.cancelRefetch)||void 0===t||t};return Promise.all(Q.V.batch(()=>(0,P._)(this,y).findAll(e).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,r);return r.throwOnError||(e=e.catch(D.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(D.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let i=(0,P._)(this,y).build(this,e);return i.isStaleByTime(e.staleTime)?i.fetch(e):Promise.resolve(i.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(D.ZT).catch(D.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,i)=>{let r=async()=>{var i,r,n,a,s,o;let l;let u=t.options,c=null===(n=t.fetchOptions)||void 0===n?void 0:null===(r=n.meta)||void 0===r?void 0:null===(i=r.fetchMore)||void 0===i?void 0:i.direction,h=(null===(a=t.state.data)||void 0===a?void 0:a.pages)||[],d=(null===(s=t.state.data)||void 0===s?void 0:s.pageParams)||[],f=!1,p=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?f=!0:t.signal.addEventListener("abort",()=>{f=!0}),t.signal)})},g=t.options.queryFn||(()=>Promise.reject(Error("Missing queryFn: '".concat(t.options.queryHash,"'")))),_=async(e,i,r)=>{if(f)return Promise.reject();if(null==i&&e.pages.length)return Promise.resolve(e);let n={queryKey:t.queryKey,pageParam:i,direction:r?"backward":"forward",meta:t.options.meta};p(n);let a=await g(n),{maxPages:s}=t.options,o=r?D.Ht:D.VX;return{pages:o(e.pages,a,s),pageParams:o(e.pageParams,i,s)}};if(c&&h.length){let t="backward"===c,e={pages:h,pageParams:d},i=(t?function(t,e){var i;let{pages:r,pageParams:n}=e;return null===(i=t.getPreviousPageParam)||void 0===i?void 0:i.call(t,r[0],r,n[0],n)}:z)(u,e);l=await _(e,i,t)}else{l=await _({pages:[],pageParams:[]},null!==(o=d[0])&&void 0!==o?o:u.initialPageParam);let t=null!=e?e:h.length;for(let e=1;e<t;e++){let t=z(u,l);l=await _(l,t)}}return l};t.options.persister?t.fetchFn=()=>{var e,n;return null===(e=(n=t.options).persister)||void 0===e?void 0:e.call(n,r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},i)}:t.fetchFn=r}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(D.ZT).catch(D.ZT)}resumePausedMutations(){return Z.N.isOnline()?(0,P._)(this,b).resumePausedMutations():Promise.resolve()}getQueryCache(){return(0,P._)(this,y)}getMutationCache(){return(0,P._)(this,b)}getDefaultOptions(){return(0,P._)(this,w)}setDefaultOptions(t){(0,C._)(this,w,t)}setQueryDefaults(t,e){(0,P._)(this,m).set((0,D.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...(0,P._)(this,m).values()],i={};return e.forEach(e=>{(0,D.to)(t,e.queryKey)&&(i={...i,...e.defaultOptions})}),i}setMutationDefaults(t,e){(0,P._)(this,F).set((0,D.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...(0,P._)(this,F).values()],i={};return e.forEach(e=>{(0,D.to)(t,e.mutationKey)&&(i={...i,...e.defaultOptions})}),i}defaultQueryOptions(t){if(t._defaulted)return t;let e={...(0,P._)(this,w).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,D.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e}defaultMutationOptions(t){return(null==t?void 0:t._defaulted)?t:{...(0,P._)(this,w).mutations,...(null==t?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){(0,P._)(this,y).clear(),(0,P._)(this,b).clear()}constructor(t={}){(0,A._)(this,y,{writable:!0,value:void 0}),(0,A._)(this,b,{writable:!0,value:void 0}),(0,A._)(this,w,{writable:!0,value:void 0}),(0,A._)(this,m,{writable:!0,value:void 0}),(0,A._)(this,F,{writable:!0,value:void 0}),(0,A._)(this,O,{writable:!0,value:void 0}),(0,A._)(this,k,{writable:!0,value:void 0}),(0,A._)(this,M,{writable:!0,value:void 0}),(0,C._)(this,y,t.queryCache||new H),(0,C._)(this,b,t.mutationCache||new U),(0,C._)(this,w,t.defaultOptions||{}),(0,C._)(this,m,new Map),(0,C._)(this,F,new Map),(0,C._)(this,O,0)}})},70539:function(t,e,i){"use strict";i.r(e),i.d(e,{Analytics:function(){return l},track:function(){return o}});var r=i(90402),n=()=>{window.va||(window.va=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];(window.vaq=window.vaq||[]).push(e)})};function a(){return window.vam||"production"}function s(){return"development"===a()}function o(t,e){var i,r;if(!e){null==(i=window.va)||i.call(window,"event",{name:t});return}try{let i=function(t,e){if(!t)return;let i=t,r=[];for(let[n,a]of Object.entries(t))"object"==typeof a&&null!==a&&(e.strip?i=function(t,e){let{[t]:i,...r}=e;return r}(n,i):r.push(n));if(r.length>0&&!e.strip)throw Error("The following properties are not valid: ".concat(r.join(", "),". Only strings, numbers, booleans, and null are allowed."));return i}(e,{strip:"production"===a()});null==(r=window.va)||r.call(window,"event",{name:t,data:i})}catch(t){t instanceof Error&&s()&&console.error(t)}}function l(t){return(0,r.useEffect)(()=>{!function(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";if("auto"===t){window.vam="production";return}window.vam=t})(e.mode),n(),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));let i=e.scriptSrc||(s()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js");if(document.head.querySelector('script[src*="'.concat(i,'"]')))return;let r=document.createElement("script");r.src=i,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(e.framework?"/".concat(e.framework):""),r.dataset.sdkv="1.2.2",e.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),e.endpoint&&(r.dataset.endpoint=e.endpoint),e.dsn&&(r.dataset.dsn=e.dsn),r.onerror=()=>{let t=s()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log("[Vercel Web Analytics] Failed to load script from ".concat(i,". ").concat(t))},s()&&!1===e.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}({framework:t.framework||"react",...void 0!==t.route&&{disableAutoTrack:!0},...t})},[]),(0,r.useEffect)(()=>{t.route&&t.path&&function(t){var e;let{route:i,path:r}=t;null==(e=window.va)||e.call(window,"pageview",{route:i,path:r})}({route:t.route,path:t.path})},[t.route,t.path]),null}}}]);