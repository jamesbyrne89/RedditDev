(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{113:function(e,t,n){"use strict";(function(t){var r=n(12),o=n(286),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,u={adapter:("undefined"!=typeof XMLHttpRequest?s=n(165):void 0!==t&&(s=n(165)),s),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){u.headers[e]={}}),r.forEach(["post","put","patch"],function(e){u.headers[e]=r.merge(i)}),e.exports=u}).call(this,n(73))},12:function(e,t,n){"use strict";var r=n(164),o=n(284),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===i.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},127:function(e,t,n){e.exports=n(281)},128:function(e,t,n){e.exports=n(283)},164:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},165:function(e,t,n){"use strict";var r=n(12),o=n(287),i=n(289),a=n(290),s=n(291),u=n(166),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(292);e.exports=function(e){return new Promise(function(t,f){var p=e.data,l=e.headers;r.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var v=e.auth.username||"",y=e.auth.password||"";l.Authorization="Basic "+c(v+":"+y)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,f,r),d=null}},d.onerror=function(){f(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var w=n(293),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?w.read(e.xsrfCookieName):void 0;g&&(l[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(l,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===p&&(p=null),d.send(p)})}},166:function(e,t,n){"use strict";var r=n(288);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},167:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},168:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},280:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(376),{page:e.exports.default}})},281:function(e,t,n){"use strict";var r=n(28),o=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=x,t.Container=t.default=void 0;var i=o(n(66)),a=o(n(67)),s=o(n(282)),u=o(n(10)),c=o(n(11)),f=o(n(25)),p=o(n(26)),l=o(n(27)),d=o(n(20)),h=r(n(0)),m=o(n(35)),v=n(34),y=n(55),w=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,c.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,y.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=x(t);return h.default.createElement(g,null,h.default.createElement(n,(0,s.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:function(){var e=(0,a.default)(i.default.mark(function e(t){var n,r,o;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,v.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(h.Component);t.default=w,(0,d.default)(w,"childContextTypes",{headManager:m.default.object,router:m.default.object});var g=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=g;var b=(0,v.execOnce)(function(){0});function x(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return b(),r},get pathname(){return b(),t},get asPath(){return b(),n},back:function(){b(),e.back()},push:function(t,n){return b(),e.push(t,n)},pushTo:function(t,n){b();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return b(),e.replace(t,n)},replaceTo:function(t,n){b();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},282:function(e,t,n){var r=n(112);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o},283:function(e,t,n){"use strict";var r=n(12),o=n(164),i=n(285),a=n(113);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=s(a);u.Axios=i,u.create=function(e){return s(r.merge(a,e))},u.Cancel=n(168),u.CancelToken=n(299),u.isCancel=n(167),u.all=function(e){return Promise.all(e)},u.spread=n(300),e.exports=u,e.exports.default=u},284:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},285:function(e,t,n){"use strict";var r=n(113),o=n(12),i=n(294),a=n(295);function s(e){this.defaults=e,this.interceptors={request:new i,response:new i}}s.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(r,this.defaults,{method:"get"},e)).method=e.method.toLowerCase();var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){s.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=s},286:function(e,t,n){"use strict";var r=n(12);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},287:function(e,t,n){"use strict";var r=n(166);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},288:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},289:function(e,t,n){"use strict";var r=n(12);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,function(e,t){null!=e&&(r.isArray(e)&&(t+="[]"),r.isArray(e)||(e=[e]),r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},290:function(e,t,n){"use strict";var r=n(12),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}}),a):a}},291:function(e,t,n){"use strict";var r=n(12);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},292:function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,i=String(e),a="",s=0,u=r;i.charAt(0|s)||(u="=",s%1);a+=u.charAt(63&t>>8-s%1*8)){if((n=i.charCodeAt(s+=.75))>255)throw new o;t=t<<8|n}return a}},293:function(e,t,n){"use strict";var r=n(12);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},294:function(e,t,n){"use strict";var r=n(12);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},295:function(e,t,n){"use strict";var r=n(12),o=n(296),i=n(167),a=n(113),s=n(297),u=n(298);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!s(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},296:function(e,t,n){"use strict";var r=n(12);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},297:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},298:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},299:function(e,t,n){"use strict";var r=n(168);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},300:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},376:function(e,t,n){"use strict";n.r(t);var r=n(14),o=n.n(r),i=n(0),a=n.n(i),s=n(127),u=n.n(s),c=n(128),f=n.n(c),p={webdev:"https://www.reddit.com/r/webdev.json?",web_design:"https://www.reddit.com/r/web_design.json?",frontend:"https://www.reddit.com/r/frontend.json?",css:"https://www.reddit.com/r/css.json?",javascript:"https://www.reddit.com/r/javascript.json?",react_js:"https://www.reddit.com/r/reactjs.json?",graphql:"https://www.reddit.com/r/graphql.json?",node:"https://www.reddit.com/r/node.json?",typescript:"https://www.reddit.com/r/typescript.json?",vue:"https://www.reddit.com/r/vuejs.json?"},l=n(5),d=n(47),h=n(2),m=n(1);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function b(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){g(i,r,o,a,s,"next",e)}function s(e){g(i,r,o,a,s,"throw",e)}a(void 0)})}}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C="redditdev-display-mode",O=function(e){function t(){var e,n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return r=this,i=(e=j(t)).call.apply(e,[this].concat(s)),n=!i||"object"!==v(i)&&"function"!=typeof i?S(r):i,E(S(n),"state",{loading:!0,posts:[],filteredPosts:[],isFiltered:!1,favourites:[],theme:m.c,themeName:"light"}),E(S(n),"getFavourites",function(){d.a.collection("favourites").onSnapshot(function(e){var t=e.docs.map(function(e){return{doc_id:e.id,data:e.data().data}});t.length!==n.state.favourites.length&&n.setState({favourites:t})})}),E(S(n),"getPosts",b(o.a.mark(function e(){var t,r,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.all(Object.keys(p).map(function(e){return f.a.get(p[e])}));case 2:t=e.sent,r=t.reduce(function(e,t){return[].concat(w(t.data.data.children),w(e))},[]),i=r.sort(l.h),n.setState({posts:i,loading:!1});case 6:case"end":return e.stop()}},e)}))),E(S(n),"getDisplayPreference",function(){var e=localStorage.getItem(C);e&&n.setState({themeName:e})}),E(S(n),"setDisplayPreference",function(e){localStorage.setItem(C,e)}),E(S(n),"filterPosts",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!e&&0===t.length)return n.setState({filteredPosts:n.state.posts,isFiltered:!1});n.setState({loading:!0});var r=n.state.posts.filter(Object(l.b)(e,t));n.setState({filteredPosts:r,loading:!1,isFiltered:!0})}),E(S(n),"addToFavourites",function(e){if(e.doc_id)return n.removeFromFavourites(e);d.a.collection("favourites").add(e).then(function(t){console.log("added",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){E(e,t,n[t])})}return e}({},e,{doc_id:t.id}))}).catch(function(e){console.error("Error adding document: ",e)})}),E(S(n),"removeFromFavourites",function(e){d.a.collection("favourites").doc(e.doc_id).delete()}),E(S(n),"toggleTheme",function(){n.setState(function(e){return{theme:e.theme==m.b?m.c:m.b,themeName:"light"==e.themeName?"dark":"light"}})}),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,u.a),n=t,r=[{key:"componentDidMount",value:function(){var e=b(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getPosts(),this.getFavourites(),this.getDisplayPreference();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.setDisplayPreference(this.state.themeName)}},{key:"render",value:function(){var e=this.state,t=e.posts,n=e.filteredPosts,r=e.isFiltered,o=e.theme,i=e.themeName,u=this.props,c=u.Component,f=u.pageProps;return a.a.createElement(s.Container,null,a.a.createElement(h.a,{theme:o},a.a.createElement(c,y({posts:r?n:t,loading:this.state.loading,onSearchSubmit:this.filterPosts,onAddToFavourites:this.addToFavourites,favourites:this.state.favourites,toggleTheme:this.toggleTheme,themeName:i},f))))}}],i=[{key:"getInitialProps",value:function(){var e=b(o.a.mark(function e(t){var n,r,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,r=t.ctx,i={favourites:[]},!n.getInitialProps){e.next=6;break}return e.next=5,n.getInitialProps(r);case 5:i=e.sent;case 6:return e.abrupt("return",{pageProps:i});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}],r&&x(n.prototype,r),i&&x(n,i),t}();t.default=O}},[[280,1,0]]]);