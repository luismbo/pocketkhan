(function(a,b){function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=
a.length;c<d;c++)b[a[c]]=!0;return b}function l(a,c,d){if(d===b&&a.nodeType===1
){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof 
d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric
(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=
b}return d}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a
[b]))continue;if(b!=="toJSON")return!1}return!0}function n(a,b,c){var d=b+"defer"
,e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(
c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data
(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function J(){return!1}function K
(){return!0}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11
}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d
){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(
a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a)
{return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(
b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function U
(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(
b.length)c.createElement(b.pop());return c}function bi(a,b){return f.nodeName
(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument
.createElement("tbody")):a}function bj(a,b){if(b.nodeType!==1||!f.hasData
(a))return;var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete 
h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add
(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h
.data&&(h.data=f.extend({},h.data))}function bk(a,b){var c;if(b.nodeType!==1
)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes
(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(
c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=
a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue
}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&
(b.value=a.value);b.removeAttribute(f.expando)}function bl(a){return typeof 
a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.
querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bm(a){if(
a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bn
(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof 
a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"
),bm)}function bo(a){var b=c.createElement("div");return bh.appendChild(b
),b.innerHTML=a.outerHTML,b.firstChild}function bp(a,b){b.src?f.ajax({url
:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||
b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild
(b)}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?
bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat
(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0
:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,
b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=
parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css
(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g
]))||0);return d+"px"}function bZ(a){return function(b,c){typeof b!="string"&&
(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length
,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=
a[h]||[],i[j?"unshift":"push"](c)}}}function b$(a,c,d,e,f,g){f=f||c.dataTypes
[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!
l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift
(l),l=b$(a,c,d,e,l,g)));return(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g)),l}function b_
(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d
]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function ca(a,b,c,d){if(f.isArray
(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||
f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(
var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function cb(a,c,d){var e=
a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c
[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader
("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}
if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=
i;break}k||(k=i)}j=j||k}if(j)return j!==f[0]&&f.unshift(j),d[j]}function cc
(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={}
,g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters
)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*"
)k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in 
e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?
n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace
(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ci(){try{return new 
a.XMLHttpRequest}catch(b){}}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP"
)}catch(b){}}function cs(){return setTimeout(ct,0),cr=f.now()}function ct
(){cr=b}function cu(a,b){var c={};return f.each(cq.concat.apply([],cq.slice
(0,b)),function(){c[this]=a}),c}function cv(a){if(!ck[a]){var b=c.body,d=
f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""
){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),
b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument
).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"
),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"
),b.removeChild(cl)}ck[a]=e}return ck[a]}function cy(a){return f.isWindow
(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c=a.document,d=
a.navigator,e=a.location,f=function(){function J(){if(e.isReady)return;try{
c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready
()}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/
,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/
,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/
,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig
,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,
B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype
.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf
,I={};return e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h
,j,k;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1
,this;if(a==="body"&&!d&&c.body)return this.context=c,this[0]=c.body,this
.selector=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&
a.charAt(a.length-1)===">"&&a.length>=3?g=[null,a,null]:g=i.exec(a);if(g&&
(g[1]||!d)){if(g[1])return d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d
:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.
call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=
(j.cacheable?e.clone(j.fragment):j.fragment).childNodes),e.merge(this,a);
h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find
(a);this.length=1,this[0]=h}return this.context=c,this.selector=a,this}return!
d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}return e.isFunction
(a)?f.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.
context),e.makeArray(a,this))},selector:"",jquery:"1.7.1",length:0,size:function(
){return this.length},toArray:function(){return F.call(this,0)},get:function(
a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack
:function(a,b,c){var d=this.constructor();return e.isArray(a)?E.apply(d,a
):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=
this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+
c+")"),d},each:function(a,b){return e.each(this,a,b)},ready:function(a){return e
.bindReady(),A.add(a),this},eq:function(a){return a=+a,a===-1?this.slice(
a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function()
{return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,
arguments),"slice",F.call(arguments).join(","))},map:function(a){return this
.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(
){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice
:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a
,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&
(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={})
,k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=
i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f))
)?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend
(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){return a
.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f),e},isReady:!1,readyWait:1,holdReady
:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--
e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);
e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&
e(c).trigger("ready").off("ready")}},bindReady:function(){if(A)return;A=e
.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(
e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1
),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent
("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a
.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}},isFunction
:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(
a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in 
a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(
a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(
a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(
a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"
))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)}
,isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(
a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null
;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace
(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))()
;e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?
(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"
),d.async="false",d.loadXML(c))}catch(g){d=b}return(!d||!d.documentElement||
d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c)
,d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||
function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace
(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName
.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length
,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)
break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in 
a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++
])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(
a){return a==null?"":a.toString().replace(k,"").replace(l,"")},makeArray:
function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||
d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c
},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length
,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1
},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(
var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];return a
.length=d,a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length
;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){
var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&
(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),
f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length
]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"
){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2
),g=function(){return a.apply(c,f.concat(F.call(arguments)))};return g.guid=
a.guid=a.guid||g.guid||e.guid++,g},access:function(a,c,d,f,g,h){var i=a.length
;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}
if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(
a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new 
Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s
.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser
:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a
.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this
(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){return f&&f instanceof 
e&&!(f instanceof a)&&(f=a(f)),e.fn.init.call(this,d,f,b)},a.fn.init.prototype=
a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object"
.split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch
(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser
.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/
),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded"
,B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&
(c.detachEvent("onreadystatechange",B),e.ready())}),e}(),g={};f.Callbacks=
function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d
,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&
(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[
b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&
a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&
(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length
;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove
:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0
;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);
if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;
for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){return c=[],
this},disable:function(){return c=d=e=b,this},disabled:function(){return!
c},lock:function(){return d=b,(!e||e===!0)&&o.disable(),this},locked:function(
){return!d},fireWith:function(b,c){return d&&(i?a.once||d.push([b,c]):(!a
.once||!e)&&n(b,c)),this},fire:function(){return o.fireWith(this,arguments
),this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred
:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"
),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={
done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved
:b.fired,isRejected:c.fired,then:function(a,b,c){return i.done(a).fail(b)
.progress(c),this},always:function(){return i.done.apply(i,arguments).fail
.apply(i,arguments),this},pipe:function(a,b,c){return f.Deferred(function(
d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(
a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments
),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify
):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(
a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}
),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;return i.done(function(
){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable
,d.lock),a&&a.call(i,i),i},when:function(a){function l(a){return function(
c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}
}function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments
,0):b,j.notifyWith(k,e)}}var b=i.call(arguments,0),c=0,d=b.length,e=new Array
(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise
();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[
c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==
a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g
,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute
("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"
,d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d
.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement
("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild
.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize
:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style"
)),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style
.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:
h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form"
).enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>"
,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent
:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0}
,i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!
h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&
q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1
}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t"
,i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute
("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild
(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked
,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML=""
,a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.
marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=
(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0
)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=
n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"
]=p;return k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i
,j,k,m,n,o,r=c.getElementsByTagName("body")[0];if(!r)return;j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;"
,m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'"
,o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>"
,a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+
j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild
(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>"
,l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display=""
,l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0
,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=
q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline"
,q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display=""
,q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2
),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling
.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells
:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=
e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style
.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=
e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild
(a),q=a=null,f.extend(b,i)}),b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g
;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace
(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
,applet:!0},hasData:function(a){return a=a.nodeType?f.cache[a[f.expando]]
:a[f.expando],!!a&&!m(a)},data:function(a,c,d,e){if(!f.acceptData(a))return;
var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?
a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)
return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop))
;if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n]
.data=f.extend(m[n].data,c);return g=h=m[n],e||(h.data||(h.data={}),h=h.data
),d!==b&&(h[f.camelCase(c)]=d),o&&!h[c]?g.events:(k?(i=h[c],i==null&&(i=h
[f.camelCase(c)])):i=h,i)},removeData:function(a,b,c){if(!f.acceptData(a)
)return;var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j
[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=
f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete 
d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!
m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null
,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute
(h):a[h]=null)},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData
:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b
)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data
:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length)
{h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs"
)){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf
("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(
this[0],"parsedAttrs",!0)}}return h}return typeof a=="object"?this.each(function(
){f.data(this,a)}):(d=a.split("."),d[1]=d[1]?"."+d[1]:"",c===b?(h=this.triggerHandler
("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(
this[0],a,h)),h===b&&d[1]?this.data(d[0]):h):this.each(function(){var b=f
(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c)
,b.triggerHandler("changeData"+d[1]+"!",e)}))},removeData:function(a){return this
.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){
a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(
a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data
(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue
:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=f._data(a,b),c&&
(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c)),d||[]},dequeue
:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&
(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e)
,d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+
b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){return typeof 
a!="string"&&(c=a,a="fx"),c===b?f.queue(this[0],a):this.each(function(){var b=
f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue
:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(
a,b){return a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,
c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue
:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m
(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=
f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(
g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&
f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);return m(),d.promise
()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i
,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f
.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(
){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,
f.prop)},removeProp:function(a){return a=f.propFix[a]||a,this.each(function(
){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c
,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass
(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);
for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&
b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;
h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this
},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this
.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(
a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<
e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" "
).replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ")
;g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(
a,b){var c=typeof a,d=typeof b=="boolean";return f.isFunction(a)?this.each
(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)}):this
.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(
e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||
c==="boolean")this.className&&f._data(this,"__className__",this.className
),this.className=this.className||a===!1?"":f._data(this,"__className__")||""
})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(
this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(
b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];if(!arguments
.length){if(g)return c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g
.type],c&&"get"in c&&(d=c.get(g,"value"))!==b?d:(d=g.value,typeof d=="string"?
d.replace(q,""):d==null?"":d);return}return e=f.isFunction(a),this.each(function(
d){var g=f(this),h;if(this.nodeType!==1)return;e?h=a.call(this,d,g.val())
:h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(
a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f
.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.
value=h})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes
.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b
,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)
return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&
(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!
e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val(
);if(j)return b;h.push(b)}}return j&&!h.length&&i.length?f(i[g]).val():h}
,set:function(a,b){var c=f.makeArray(b);return f(a).find("option").each(function(
){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1
),c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset
:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!a||j===3||j===8||j===2
)return;if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined"
)return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks
[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}return h&&"set"in 
h&&i&&(g=h.set(a,d,c))!==b?g:(a.setAttribute(c,""+d),d)}return h&&"get"in 
h&&i&&(g=h.get(a,c))!==null?g:(g=a.getAttribute(c),g===null?b:g)},removeAttr
:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split
(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a
.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{
set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed"
);else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=
a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(
a,b){return w&&f.nodeName(a,"button")?w.get(a,b):b in a?a.value:null},set
:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=
b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class"
:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding"
,rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder"
,contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType
;if(!a||i===3||i===8||i===2)return;return h=i!==1||!f.isXMLDoc(a),h&&(c=f
.propFix[c]||c,g=f.propHooks[c]),d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?
e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:
{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?
parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}
}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,
e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c
))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?
f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c
.toLowerCase())),c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(
a,c){var d;return d=a.getAttributeNode(c),d&&(y[c]?d.nodeValue!=="":d.specified
)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);return e||
(e=c.createAttribute(d),a.setAttributeNode(e)),e.nodeValue=b+""}},f.attrHooks
.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b
]=f.extend(f.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute
(b,"auto"),c}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b
,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(
["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks
[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f
.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText
.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support
.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(
a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode
.selectedIndex),null}})),f.support.enctype||(f.propFix.enctype="encoding"
),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this
]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}})
,f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks
[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a)
.val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/
,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/
,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a)
;return b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+
b[3]+"(?:\\s|$)")),b},H=function(a,b){var c=a.attributes||{};return(!b[1]||
a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3
]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special
.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(
a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(a.nodeType===3||a.nodeType===8||!
c||!d||!(h=f._data(a)))return;d.handler&&(p=d,d=p.handler),d.guid||(d.guid=
f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(
a){return typeof f=="undefined"||!!a&&f.event.triggered===a.type?b:f.event
.dispatch.apply(i.elem,arguments)},i.elem=a),c=f.trim(I(c)).split(" ");for(
k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort
(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.
special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid
,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],
r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?
a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&
(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++
,0,o):r.push(o),f.event.global[m]=!0}a=null},global:{},remove:function(a,
b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!g||!(
o=g.events))return;b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){
i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b
[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType
)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join
("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s
.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.
selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--
,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||
p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject
(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))
},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,
e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,
n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h
.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort(
));if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?
c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.
exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp
("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+
h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger
(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?
f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger
.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow
(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode
)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||
a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=
r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply
(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault()
;return c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply
(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData
(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow
(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=
b,n&&(e[o]=n)),c.result}return},dispatch:function(c){c=f.event.fix(c||a.event
);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice
.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,
t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click"
)){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=
l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,
o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i
.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(
e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=
p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++
){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re
.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType
]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault
(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
.split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split
(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?
b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
.split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;return a
.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement
,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||
g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-
(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=
i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0
),a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks
[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g)
;for(d=i.length;d;)e=i[--d],a[e]=g[e];return a.target||(a.target=g.srcElement||
c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(
a.metaKey=a.ctrlKey),h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady
},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"
},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=
c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=
null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,
isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch
.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.
event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&
a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent
("on"+b,c)},f.Event=function(a,b){if(this instanceof f.Event)a&&a.type?(this
.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||
a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.
type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.
expando]=!0;else return new f.Event(a,b)},f.Event.prototype={preventDefault
:function(){this.isDefaultPrevented=K;var a=this.originalEvent;if(!a)return;
a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(
){this.isPropagationStopped=K;var a=this.originalEvent;if(!a)return;a.stopPropagation&&
a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(
){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented
:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter
:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType
:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj
,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler
.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.
event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1
;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target
,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&
(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&
f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)}
)},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove
(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup
:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"
)f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&
(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this
._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change"
,this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(
a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b
,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&
f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)}
)},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||
b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this
,arguments)},teardown:function(){return f.event.remove(this,"._change"),z
.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin"
,blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,
a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&
c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener
(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"
){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this
}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d
,d=c,c=b));if(e===!1)e=J;else if(!e)return this;return g===1&&(h=e,e=function(
a){return f().off(a),h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++
)),this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d
){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&
a.handleObj){var e=a.handleObj;return f(a.delegateTarget).off(e.namespace?
e.type+"."+e.namespace:e.type,e.selector,e.handler),this}if(typeof a=="object"
){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function"
)d=c,c=b;return d===!1&&(d=J),this.each(function(){f.event.remove(this,a,
d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(
a,b){return this.off(a,null,b)},live:function(a,b,c){return f(this.context
).on(a,this.selector,b,c),this},die:function(a,b){return f(this.context).
off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this
.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.
off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(
){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f
.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||
f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d
;return f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply
(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this
.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
.split(" "),function(a,b){f.fn[b]=function(a,c){return c==null&&(c=a,a=null
),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn
[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event
.fixHooks[b]=f.event.mouseHooks)}),function(){function w(a,b,c,e,f,g){for(
var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(
j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(
j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}function x(a,b,c,
e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(
j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=
h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0
){k=j;break}}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString
,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){return i=!1,0})
;var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9
)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m
.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(
i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o
.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(
),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}
else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.
ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr
,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length!==1||
w[0]!=="~"&&w[0]!=="+"||!d.parentNode?d:d.parentNode,v),j=n.expr?m.filter
(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,
o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=
[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push
.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||
k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null
;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);return l&&(m(l,h,e
,f),m.uniqueSort(e)),e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h
)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=
function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m
(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)
return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[
h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1
]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h
],"");break}}}}return d||(d=typeof b.getElementsByTagName!="undefined"?b.
getElementsByTagName("*"):[]),{set:d,expr:a}},m.filter=function(a,c,d,e){
var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length
){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter
[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===
r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(
f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&
i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace
(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;
q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+
a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||
d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a
.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;
a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(
b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID"
,"NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/
,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/
,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/
,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO
:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{
href:function(a){return a.getAttribute("href")},type:function(a){return a
.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string"
,d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;
f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&
h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(
a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase
();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase
()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===
b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!
l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(
a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase()
,d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof 
b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&
d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"
){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e
].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},
TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.
getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+
a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&
(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a
)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace
(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:
function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g
,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/
.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2
]&&m.error(a[0]);return a[0]=e++,a},ATTR:function(a,b,c,d,e,f){var g=a[1]=
a[1].replace(j,"");return!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||
a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" "),a},PSEUDO:function(
b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3
]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);return d||
e.push.apply(e,g),!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b
[0]))return!0;return b},POS:function(a){return a.unshift(!0),a}},filters:
{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:
function(a){return a.disabled===!0},checked:function(a){return a.checked===!0
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.
selected===!0},parent:function(a){return!!a.firstChild},empty:function(a)
{return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header
:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute
("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&
(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===
a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===
a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===
a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===
a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||
b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase
()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase
();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a
){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"
},input:function(a){return/input|select|textarea|button/i.test(a.nodeName
)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters
:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1
},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt
:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth
:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}
},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f
(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||""
).indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++
)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,
g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling
)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(
l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3
];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex
)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++
i);g[d]=f}return j=a.nodeIndex-e,c===0?j===0:j%c===0&&j/c>=0}},ID:function(
a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&
a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(
a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1
},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle
[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?
f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?
(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?
e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===
g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(
f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};
for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/
.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source
.replace(/\\(\d+)/g,q));var s=function(a,b){return a=Array.prototype.slice
.call(a,0),b?(b.push.apply(b,a),b):a};try{Array.prototype.slice.call(c.documentElement
.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.
call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof 
a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c]
;c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?
u=function(a,b){return a===b?(h=!0,0):!a.compareDocumentPosition||!b.compareDocumentPosition?
a.compareDocumentPosition?-1:1:a.compareDocumentPosition(b)&4?-1:1}:(u=function(
a,b){if(a===b)return h=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-
b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===
i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode
;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0
;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1
):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(
d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement
("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+
d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(
a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById
(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode
("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof 
a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&
c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement
("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&
(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"
){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c
}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&
a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a
.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=
m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>"
;if(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0)return;m=function(
b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/
.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName
(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName
(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(
h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f)
;if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(
j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e
,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.
replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!
q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{
l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];
b=null}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||
a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement
("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(
f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g
,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c
)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f
}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement
("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!a.getElementsByClassName||a.getElementsByClassName("e").length===0)return;
a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;
o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!
c)return b.getElementsByClassName(a[1])},a=null}(),c.documentElement.contains?
m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement
.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition
(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||
a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,
c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d
[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=
g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors
.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=
m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}()
;var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/
,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next
:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string"
)return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b
[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this
.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length
;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has
:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length
;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this
.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack
(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?
Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this
.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray
(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g)
.is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c
}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this
.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector
(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11
)break}}return c=c.length>1?f.unique(c):c,this.pushStack(c,"closest",a)},
index:function(a){return a?typeof a=="string"?f.inArray(this[0],f(a)):f.inArray
(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1
},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?
[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f
.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each
({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null}
,parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(
a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling"
)},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(
a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling"
)},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(
a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f
.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling
(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||
a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a
]=function(c,d){var e=f.map(this,b,c);return L.test(a)||(d=c),d&&typeof d=="string"&&
(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.
test(d))&&M.test(a)&&(e=e.reverse()),this.pushStack(e,a,P.call(arguments)
.join(","))}}),f.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"
),b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,
b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||
g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth
:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===
b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a
.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
,W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i
,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i
,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>"
,"</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"
],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"
],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1
,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=
bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||
(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f
.isFunction(a)?this.each(function(b){var c=f(this);c.text(a.call(this,b,c
.text()))}):typeof a!="object"&&a!==b?this.empty().append((this[0]&&this[0
].ownerDocument||c).createTextNode(a)):f.text(this)},wrapAll:function(a){
if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this
,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0
].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a
.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this
)}return this},wrapInner:function(a){return f.isFunction(a)?this.each(function(
b){f(this).wrapInner(a.call(this,b))}):this.each(function(){var b=f(this)
,c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=
f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this
,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName
(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(
){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild
(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this
.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){
if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(
a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean
(arguments);return a.push.apply(a,this.toArray()),this.pushStack(a,"before"
,arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this
.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling
)});if(arguments.length){var a=this.pushStack(this,"after",arguments);return a
.push.apply(a,f.clean(arguments)),a}},remove:function(a,b){for(var c=0,d;
(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(
f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&
d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(
b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"
));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(
a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return f.clone
(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?
this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&
(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase
()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this
[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c]
.innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.
each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty
().append(a);return this},replaceWith:function(a){return this[0]&&this[0]
.parentNode?f.isFunction(a)?this.each(function(b){var c=f(this),d=c.html(
);c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=f(a).detach()
),this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove
(),b?f(b).before(a):f(c).append(a)})):this.length?this.pushStack(f(f.isFunction
(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a
,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&
arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(
){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(
e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(
this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes
.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment
,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName
(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this
[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this
}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];return b&&b[0]&&(i=
b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof 
j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support
.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f
.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a
,i,e,d)),g&&(f.fragments[j]=h?e:1),{fragment:e,cacheable:g}},f.fragments=
{},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter
:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=
[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.
childNodes.length===1&&e.length===1)return e[b](this[0]),this;for(var h=0
,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),
d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(
a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode
(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||
a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++
g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++
g)bj(d[g],e[g])}}return d=e=null,h},clean:function(a,b,d,e){var g;b=b||c,typeof 
b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||
c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+=""
);if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k
);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase
(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild
(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!
f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild
.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--
i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild
(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode
(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked
)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(
k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||
be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j]
.type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?
h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=
f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat
(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache
,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null
;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando
];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(
i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete 
i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}
}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i
,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility
:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,
bB;f.fn.css=function(a,c){return arguments.length===2&&c===b?this:f.access
(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.
extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity"
);return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0
,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom
:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:
function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;
var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(
d===b)return k&&"get"in k&&(g=k.get(a,!1,e))!==b?g:j[c];h=typeof d,h==="string"&&
(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(
d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px"
);if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}},css:function(
a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&
(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz
(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style
[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height"
,"width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c)return a
.offsetWidth!==0?bC(a,b,d):(f.swap(a,bw,function(){e=bC(a,b,d)}),e)},set:
function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"
}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.
test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat
(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle
,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||""
;c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter"
);if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f
(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(
a,b){var c;return f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right"
,"marginRight"):c=a.style.marginRight}),c}})}),c.defaultView&&c.defaultView
.getComputedStyle&&(bA=function(a,b){var c,d,e;return b=b.replace(bs,"-$1"
).toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,
null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement
,a)&&(c=f.style(a,b))),c}),c.documentElement.currentStyle&&(bB=function(a
,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;return f===null&&
g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a
.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em"
:f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d)),f===""?"auto"
:f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a)
{var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&
(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=
function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g
,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/
,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/
,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=
c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||
[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.
apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(
e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction
(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional
),h="POST"));var i=this;return f.ajax({url:a,type:h,dataType:"html",data:
c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(
a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each
(d,[c,b,a])}}),this},serialize:function(){return f.param(this.serializeArray
())},serializeArray:function(){return this.map(function(){return this.elements?
f.makeArray(this.elements):this}).filter(function(){return this.name&&!this
.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map
(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map
(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b
.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend"
.split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each
(["get","post"],function(a,c){f[c]=function(a,d,e,g){return f.isFunction(
d)&&(g=g||e,e=d,d=b),f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}
),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON
:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?
b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b),a},ajaxSettings:{url:
bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded"
,processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html"
,text:"text/plain",json:"application/json, text/javascript","*":bX},contents
:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text
:"responseText"},converters:{"* text":a.String,"text html":!0,"text json"
:f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter
:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s===2
)return;s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u
,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=
v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader
("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success"
,o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0
)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith
(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error")
,[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f
.active||f.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||
{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof 
f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||
{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(
a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders
:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2
){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase
()]}return c===b?null:c},overrideMimeType:function(a){return s||(d.mimeType=
a),this},abort:function(a){return a=a||"abort",p&&p.abort(a),w(0,a),this}
};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=
function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status
],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL
,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),
d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||
r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80
:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(
d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d
.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event
.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&"
:"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url
.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:""
)}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader
("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k
]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v
.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept"
,d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes
[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader
(u,d.headers[u]);if(!d.beforeSend||d.beforeSend.call(e,v,d)!==!1&&s!==2){
for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1
,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&
d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{
s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v}return v.abort
(),!1},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b()
:b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=
f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a
))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,
a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified
:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback"
,jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp"
,function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof 
b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url
)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback
)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2"
;return b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l
)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=
k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&
a[h](g[0])}),b.converters["script json"]=function(){return g||f.error(h+" was not called"
),g[0]},b.dataTypes[0]="json","script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},contents:{script:/javascript|ecmascript/},converters:{"text script":function(
a){return f.globalEval(a),a}}}),f.ajaxPrefilter("script",function(a){a.cache===
b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport
("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName
("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement
("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d
.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/
.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e
.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},
abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){
for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?
function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support
,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support
.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d
;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url
,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields
)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&
h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e
["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(
j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j
,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.
noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=
h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=
n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!
c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&
g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload
(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck=
{},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i
,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"
],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"
]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate
(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&
(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""
),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName
)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none"
)d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(
a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=
this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!
f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[
g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle
,toggle:function(a,b,c){var d=typeof a=="boolean";return f.isFunction(a)&&
f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(
){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate
(cu("toggle",3),a,b,c),this},fadeTo:function(a,b,c,d){return this.filter(":hidden"
).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(
a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=
this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties=
{};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray
(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.
specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!
d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=
[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this
,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||
cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style
.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new 
f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?
d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j
[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber
[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style
(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(
l,h,""));return!0}var e=f.speed(b,c,d);return f.isEmptyObject(a)?this.each
(e.complete,[!1]):(a=f.extend({},a),e.queue===!1?this.each(g):this.queue(
e.queue,g))},stop:function(a,c,d){return typeof a!="string"&&(d=c,c=a,a=b
),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){function h(a,b,c
){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data
(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf
(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,
g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?
e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)
})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle"
,1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"
}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),
f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a
):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction
(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in 
f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||
d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(a){
f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&
f._unmark(this)},d},easing:{linear:function(a,b,c,d){return c+d*a},swing:
function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(
a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype=
{update:function(){this.options.step&&this.options.step.call(this.elem,this
.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(
){if(this.elem[this.prop]==null||!!this.elem.style&&this.elem.style[this.
prop]!=null){var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat
(b))?!b||b==="auto"?0:b:a}return this.elem[this.prop]},custom:function(a,
c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||
cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||
this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.
elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+
e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(
h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data
(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this
.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this
.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.
elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem
,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this
.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.
elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end
,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(
b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=
null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style
["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(
b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+
b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call
(h))}return!1}return i.duration==Infinity?this.now=e:(c=e-this.startTime,
this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]
](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*
this.pos),this.update(),!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers
,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||
f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds
:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem
,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop
]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each
(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem
,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=
function(a){return f.grep(f.timers,function(b){return a===b.elem}).length
});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in 
c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this
.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)
return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{
c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement
;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};
var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0
,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||
f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{
top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each
(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null
;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent
,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j
.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while(
(b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed"
)break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.
scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&
(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat
(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent
),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&
(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),
k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i
.offsetLeft;return f.support.fixedPosition&&k.position==="fixed"&&(l+=Math
.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft)),{top
:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft
;return f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(
a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0),{top:b,left:c
}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style
.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"
),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m
,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i
)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+
m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e
.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=
this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top
:0,left:0}:b.offset();return c.top-=parseFloat(f.css(a,"marginTop"))||0,c
.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"
))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top
,left:c.left-d.left}},offsetParent:function(){return this.map(function(){
var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position"
)==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(
a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;return c===b?(e=this[0]
,e?(g=cy(e),g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support
.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]):null):
this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(
g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=
c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?
parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(
a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border"
)):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?
null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c
[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement
["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&
g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement
["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+
c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat
(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px"
)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&
define("jquery",[],function(){return f})})(window),function(a,b){if(a.cleanData
){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;
d++)a(e).triggerHandler("remove");c(b)}}else{var d=a.fn.remove;a.fn.remove=
function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this
]).length)&&a("*",this).add([this]).each(function(){a(this).triggerHandler
("remove")}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split
(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=
function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments
.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.
options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix
:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge
(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof 
e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&
g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(
f?this.each(function(){var d=a.data(this,c);if(!d)throw"cannot call methods on "+
c+" prior to initialization; "+"attempted to call method '"+e+"'";if(!a.isFunction
(d[e]))throw"no such method '"+e+"' for "+c+" widget instance";var f=d[e]
.apply(d,g);if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.
data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}
},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget
.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1
},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=
a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b)
;var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy
()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions
:function(){var b={};return a.metadata&&(b=a.metadata.get(element)[this.widgetName
]),b},_create:function(){},_init:function(){},destroy:function(){this.element
.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind
("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled"
)},widget:function(){return this.element},option:function(c,d){var e=c;if(
arguments.length===0)return a.extend({},this.options);if(typeof c=="string"
){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),
this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c.
_setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b
,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled"
).attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled"
,!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:
function(b,c,d){var e=this.options[b];c=a.Event(c),c.type=(b===this.widgetEventPrefix?
b:this.widgetEventPrefix+b).toLowerCase(),d=d||{};if(c.originalEvent)for(
var f=a.event.props.length,g;f;)g=a.event.props[--f],c[g]=c.originalEvent
[g];return this.element.trigger(c,d),!(a.isFunction(e)&&e.call(this.element
[0],c,d)===!1||c.isDefaultPrevented())}}}(jQuery),function(a,b){a.widget("mobile.widget"
,{_getCreateOptions:function(){var c=this.element,d={};return a.each(this
.options,function(a){var e=c.jqmData(a.replace(/[A-Z]/g,function(a){return"-"+
a.toLowerCase()}));e!==b&&(d[a]=e)}),d}})}(jQuery),function(a,b){function f
(){var b=c.width(),f="min-width-",g="max-width-",h=[],i=[],j="px",k;d.removeClass
(f+e.join(j+" "+f)+j+" "+g+e.join(j+" "+g)+j),a.each(e,function(a,c){b>=c&&
h.push(f+c+j),b<=c&&i.push(g+c+j)}),h.length&&(k=h.join(" ")),i.length&&(
k+=" "+i.join(" ")),d.addClass(k)}var c=a(window),d=a("html"),e=[320,480,768
,1024];a.mobile.media=function(){var b={},c=a("<div id='jquery-mediatest'>"
),e=a("<body>").append(c);return function(a){if(!(a in b)){var f=document
.createElement("style"),g="@media "+a+" { #jquery-mediatest { position:absolute; } }"
;f.type="text/css",f.styleSheet?f.styleSheet.cssText=g:f.appendChild(document
.createTextNode(g)),d.prepend(e).prepend(f),b[a]=c.css("position")==="absolute"
,e.add(f).remove()}return b[a]}}(),a.mobile.addResolutionBreakpoints=function(
b){a.type(b)==="array"?e=e.concat(b):e.push(b),e.sort(function(a,b){return a-
b}),f()},a(document).bind("mobileinit.htmlclass",function(){c.bind("orientationchange.htmlclass resize.htmlclass"
,function(a){a.orientation&&d.removeClass("portrait landscape").addClass(
a.orientation),f()})}),a(function(){c.trigger("orientationchange.htmlclass"
)})}(jQuery),function(a,b){function h(a){var c=a.charAt(0).toUpperCase()+
a.substr(1),f=(a+" "+e.join(c+" ")+c).split(" ");for(var g in f)if(d[g]!==
b)return!0}function i(){var b=location.protocol+"//"+location.host+location
.pathname+"ui-dir/",d=a("head base"),e=null,f="";d.length?f=d.attr("href"
):d=e=a("<base>",{href:b}).appendTo("head");var g=a("<a href='testurl'></a>"
).prependTo(c),h=g[0].href;return d[0].href=f?f:location.pathname,e&&e.remove
(),h.indexOf(b)===0}var c=a("<body>").prependTo("html"),d=c[0].style,e=["webkit"
,"moz","o"],f=window.palmGetResource||window.PalmServiceBridge,g=window.blackberry
;a.mobile.browser={},a.mobile.browser.ie=function(){var a=3,b=document.createElement
("div"),c=b.all||[];while(b.innerHTML="<!--[if gt IE "+ ++a+"]><br><![endif]-->"
,c[0]);return a>4?a:!a}(),a.extend(a.support,{orientation:"orientation"in 
window,touch:"ontouchend"in document,cssTransitions:"WebKitTransitionEvent"in 
window,pushState:!!history.pushState,mediaquery:a.mobile.media("only all"
),cssPseudoElement:!!h("content"),boxShadow:!!h("boxShadow")&&!g,scrollTop
:("pageXOffset"in window||"scrollTop"in document.documentElement||"scrollTop"in 
c[0])&&!f,dynamicBaseTag:i(),eventCapture:"addEventListener"in document})
,c.remove(),a.support.boxShadow||a("html").addClass("ui-mobile-nosupport-boxshadow"
)}(jQuery),function(a,b,c,d){function w(a){while(a&&typeof a.originalEvent!="undefined"
)a=a.originalEvent;return a}function x(b,c){var e=b.type;b=a.Event(b),b.type=
c;var f=b.originalEvent,g=a.event.props;if(f)for(var i=g.length,j;i;)j=g[--
i],b[j]=f[j];if(e.search(/^touch/)!==-1){var k=w(f),e=k.touches,l=k.changedTouches
,m=e&&e.length?e[0]:l&&l.length?l[0]:d;if(m)for(var i=0,n=h.length;i<n;i++
){var j=h[i];b[j]=m[j]}}return b}function y(b){var c={},d=a(b);while(d&&d
.length){var f=d.data(e);for(var g in f)f[g]&&(c[g]=c.hasVirtualBinding=!0
);d=d.parent()}return c}function z(b,c){var d=a(b);while(d&&d.length){var f=
d.data(e);if(f&&(!c||f[c]))return d;d=d.parent()}return null}function A()
{i.touchbindings||(t.bind("touchend",L).bind("touchmove",K).bind("scroll"
,J),i.touchbindings=1)}function B(){i.touchbindings&&(t.unbind("touchmove"
,K).unbind("touchend",L).unbind("scroll",J),i.touchbindings=0)}function C
(){v=0,p.length=0,q=!1,B()}function D(){A()}function E(){F(),j=setTimeout
(function(){j=0,C()},a.vmouse.resetTimerDuration)}function F(){j&&(clearTimeout
(j),j=0)}function G(b,c,d){var e=!1;if(d&&d[b]||!d&&z(c.target,b)){var f=
x(c,b);a(c.target).trigger(f),e=f.isDefaultPrevented()}return e}function H
(b){var c=a(b.target).data(f);!q&&(!v||v!==c)&&G("v"+b.type,b)}function I
(c){var d=w(c).touches;if(d&&d.length===1){var e=c.target,g=y(e);if(g.hasVirtualBinding
){v=u++,a(e).data(f,v),F(),D(),o=!1;var h=w(c).touches[0];k=h.pageX,l=h.pageY
,r&&(m=b.pageXOffset,n=b.pageYOffset),G("vmouseover",c,g),G("vmousedown",
c,g)}}}function J(a){o||G("vmousecancel",a,y(a.target)),o=!0,E()}function K
(c){var d=w(c).touches[0],e=o,f=a.vmouse.moveDistanceThreshold;o=o||r&&(m!==
b.pageXOffset||n!==b.pageYOffset)||Math.abs(d.pageX-k)>f||Math.abs(d.pageY-
l)>f;var g=y(c.target);o&&!e&&G("vmousecancel",c,g),G("vmousemove",c,g),E
()}function L(a){B();var b=y(a.target);G("vmouseup",a,b);if(!o&&G("vclick"
,a,b)){var c=w(a).changedTouches[0];p.push({touchID:v,x:c.clientX,y:c.clientY
}),q=!0}G("vmouseout",a,b),o=!1,E()}function M(a){var b=a.data(e),c;if(b)
for(c in b)if(b[c])return!0;return!1}function N(){}function O(b){var c=b.
substr(1);return{setup:function(d,f){var g=a(this);M(g)||g.data(e,{});var h=
g.data(e);h[b]=!0,i[b]=(i[b]||0)+1,i[b]===1&&t.bind(c,H),g.bind(c,N),s&&(
i.touchstart=(i.touchstart||0)+1,i.touchstart===1&&t.bind("touchstart",I)
)},teardown:function(d,f){--i[b],i[b]||t.unbind(c,H),s&&(--i.touchstart,i
.touchstart||t.unbind("touchstart",I));var g=a(this),h=g.data(e);h[b]=!1,
g.unbind(c,N),M(g)||g.removeData(e)}}}var e="virtualMouseBindings",f="virtualTouchID"
,g="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel"
.split(" "),h="clientX clientY pageX pageY screenX screenY".split(" "),i=
{},j=0,k=0,l=0,m=0,n=0,o=!1,p=[],q=!1,r=a.support.scrollTop,s=a.support.eventCapture
,t=a(c),u=1,v=0;a.vmouse={moveDistanceThreshold:10,clickDistanceThreshold
:10,resetTimerDuration:1500};for(var P=0;P<g.length;P++)a.event.special[g
[P]]=O(g[P]);s&&c.addEventListener("click",function(b){var c=p.length,d=b
.target;if(c){var e=b.clientX,g=b.clientY,h=a.vmouse.clickDistanceThreshold
,i=d;while(i){for(var j=0;j<c;j++){var k=p[j],l=0;if(i===d&&Math.abs(k.x-
e)<h&&Math.abs(k.y-g)<h||a(i).data(f)===k.touchID){b.preventDefault(),b.stopPropagation
();return}}i=i.parentNode}}},!0)}(jQuery,window,document),function(a,b){function h
(b,c,d){var e=d.type;d.type=c,a.event.handle.call(b,d),d.type=e}a.each("touchstart touchmove touchend orientationchange tap taphold swipe swipeleft swiperight scrollstart scrollstop"
.split(" "),function(b,c){a.fn[c]=function(a){return a?this.bind(c,a):this
.trigger(c)},a.attrFn[c]=!0});var c=a.support.touch,d="touchmove scroll",
e=c?"touchstart":"mousedown",f=c?"touchend":"mouseup",g=c?"touchmove":"mousemove"
;a.event.special.scrollstart={enabled:!0,setup:function(){function g(a,c)
{e=c,h(b,e?"scrollstart":"scrollstop",a)}var b=this,c=a(b),e,f;c.bind(d,function(
b){if(!a.event.special.scrollstart.enabled)return;e||g(b,!0),clearTimeout
(f),f=setTimeout(function(){g(b,!1)},50)})}},a.event.special.tap={setup:function(
){var b=this,c=a(b);c.bind("vmousedown",function(a){function i(){d=!1,clearTimeout
(g),c.unbind("vclick",j).unbind("vmousecancel",i)}function j(a){i(),e==a.
target&&h(b,"tap",a)}if(a.which&&a.which!==1)return!1;var d=!0,e=a.target
,f=a.originalEvent,g;c.bind("vmousecancel",i).bind("vclick",j),g=setTimeout
(function(){d&&h(b,"taphold",a)},750)})}},a.event.special.swipe={setup:function(
){var c=this,d=a(c);d.bind(e,function(c){function j(a){if(!h)return;var b=
a.originalEvent.touches?a.originalEvent.touches[0]:a;i={time:(new Date).getTime
(),coords:[b.pageX,b.pageY]},Math.abs(h.coords[0]-i.coords[0])>10&&a.preventDefault
()}var e=c.originalEvent.touches?c.originalEvent.touches[0]:c,h={time:(new 
Date).getTime(),coords:[e.pageX,e.pageY],origin:a(c.target)},i;d.bind(g,j
).one(f,function(a){d.unbind(g,j),h&&i&&i.time-h.time<1e3&&Math.abs(h.coords
[0]-i.coords[0])>30&&Math.abs(h.coords[1]-i.coords[1])<75&&h.origin.trigger
("swipe").trigger(h.coords[0]>i.coords[0]?"swipeleft":"swiperight"),h=i=b
})})}},function(a){function f(){var a=d();a!==e&&(e=a,b.trigger("orientationchange"
))}var b=a(window),c,d,e;a.event.special.orientationchange=c={setup:function(
){if(a.support.orientation)return!1;e=d(),b.bind("resize",f)},teardown:function(
){if(a.support.orientation)return!1;b.unbind("resize",f)},add:function(a)
{var b=a.handler;a.handler=function(a){return a.orientation=d(),b.apply(this
,arguments)}}},c.orientation=d=function(){var a=document.documentElement;
return a&&a.clientWidth/a.clientHeight<1.1?"portrait":"landscape"}}(jQuery
),a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight
:"swipe"},function(b,c){a.event.special[b]={setup:function(){a(this).bind
(c,a.noop)}}})}(jQuery),function(a,b,c){function j(a){return a=a||location
.href,"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var d="hashchange",
e=document,f,g=a.event.special,h=e.documentMode,i="on"+d in b&&(h===c||h>7
);a.fn[d]=function(a){return a?this.bind(d,a):this.trigger(d)},a.fn[d].delay=50
,g[d]=a.extend(g[d],{setup:function(){if(i)return!1;a(f.start)},teardown:
function(){if(i)return!1;a(f.stop)}}),f=function(){function n(){var c=j()
,e=m(h);c!==h?(l(h=c,e),a(b).trigger(d)):e!==h&&(location.href=location.href
.replace(/#.*/,"")+e),g=setTimeout(n,a.fn[d].delay)}var f={},g,h=j(),k=function(
a){return a},l=k,m=k;return f.start=function(){g||n()},f.stop=function(){
g&&clearTimeout(g),g=c},a.browser.msie&&!i&&function(){var b,c;f.start=function(
){b||(c=a.fn[d].src,c=c&&c+j(),b=a('<iframe tabindex="-1" title="empty"/>'
).hide().one("load",function(){c||l(j()),n()}).attr("src",c||"javascript:0"
).insertAfter("body")[0].contentWindow,e.onpropertychange=function(){try{
event.propertyName==="title"&&(b.document.title=e.title)}catch(a){}})},f.
stop=k,m=function(){return j(b.location.href)},l=function(c,f){var g=b.document
,h=a.fn[d].domain;c!==f&&(g.title=e.title,g.open(),h&&g.write('<script>document.domain="'+
h+'"</script>'),g.close(),b.location.hash=c)}}(),f}()}(jQuery,this),function(
a,b){a.widget("mobile.page",a.mobile.widget,{options:{backBtnText:"Back",
addBackBtn:!0,backBtnTheme:null,degradeInputs:{color:!1,date:!1,datetime:!1
,"datetime-local":!1,email:!1,month:!1,number:!1,range:"number",search:!0
,tel:!1,time:!1,url:!1,week:!1},keepNative:null},_create:function(){var b=
this.element,c=this.options;this.keepNative=":jqmData(role='none'), :jqmData(role='nojs')"+
(c.keepNative?", "+c.keepNative:"");if(this._trigger("beforeCreate")===!1
)return;b.find(":jqmData(role='page'), :jqmData(role='content')").andSelf
().each(function(){a(this).addClass("ui-"+a(this).jqmData("role"))}),b.find
(":jqmData(role='nojs')").addClass("ui-nojs");var d=b.find(":jqmData(role)"
).andSelf().each(function(){var d=a(this),e=d.jqmData("role"),f=d.jqmData
("theme");if(e==="header"||e==="footer"){d.addClass("ui-bar-"+(f||d.parent
(":jqmData(role='page')").jqmData("theme")||"a")),d.attr("role",e==="header"?"banner"
:"contentinfo");var g=d.children("a"),h=g.hasClass("ui-btn-left"),i=g.hasClass
("ui-btn-right");h||(h=g.eq(0).not(".ui-btn-right").addClass("ui-btn-left"
).length),i||(i=g.eq(1).addClass("ui-btn-right").length);if(c.addBackBtn&&
e==="header"&&a(".ui-page").length>1&&b.jqmData("url")!==a.mobile.path.stripHash
(location.hash)&&!h&&d.jqmData("backbtn")!==!1){var j=a("<a href='#' class='ui-btn-left' data-"+
a.mobile.ns+"rel='back' data-"+a.mobile.ns+"icon='arrow-l'>"+c.backBtnText+"</a>"
).prependTo(d);c.backBtnTheme&&j.attr("data-"+a.mobile.ns+"theme",c.backBtnTheme
)}d.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({tabindex
:"0",role:"heading","aria-level":"1"})}else e==="content"?(f&&d.addClass("ui-body-"+
f),d.attr("role","main")):e==="page"&&d.addClass("ui-body-"+(f||"c"));switch(
e){case"header":case"footer":case"page":case"content":d.addClass("ui-"+e)
;break;case"collapsible":case"fieldcontain":case"navbar":case"listview":case"dialog"
:d[e]()}});this._enhanceControls(),b.find(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a"
).not(".ui-btn").not(this.keepNative).buttonMarkup(),b.find(":jqmData(role='controlgroup')"
).controlgroup(),b.find("a:not(.ui-btn):not(.ui-link-inherit)").not(this.
keepNative).addClass("ui-link"),b.fixHeaderFooter()},_typeAttributeRegex:/\s+type=["']?\w+['"]?/
,_enhanceControls:function(){var b=this.options,c=this;this.element.find("input"
).not(this.keepNative).each(function(){var d=this.getAttribute("type"),e=
b.degradeInputs[d]||"text";b.degradeInputs[d]&&a(this).replaceWith(a("<div>"
).html(a(this).clone()).html().replace(c._typeAttributeRegex,' type="'+e+'" data-'+
a.mobile.ns+'type="'+d+'" '))});var d=this.element.find("input, textarea, select, button"
),e=d.not(this.keepNative),f=d.filter("input[type=text]");f.length&&typeof 
f[0].autocorrect!="undefined"&&f.each(function(){this.setAttribute("autocorrect"
,"off"),this.setAttribute("autocomplete","off")}),e.filter("[type='radio'], [type='checkbox']"
).checkboxradio(),e.filter("button, [type='button'], [type='submit'], [type='reset'], [type='image']"
).button(),e.filter("input, textarea").not("[type='radio'], [type='checkbox'], [type='button'], [type='submit'], [type='reset'], [type='image'], [type='hidden']"
).textinput(),e.filter("input, select").filter(":jqmData(role='slider'), :jqmData(type='range')"
).slider(),e.filter("select:not(:jqmData(role='slider'))").selectmenu()}}
)}(jQuery),function(a,b,c){a.extend(a.mobile,{ns:"",subPageUrlKey:"ui-page"
,nonHistorySelectors:"dialog",activePageClass:"ui-page-active",activeBtnClass
:"ui-btn-active",ajaxEnabled:!0,hashListeningEnabled:!0,ajaxLinksEnabled:!0
,ajaxFormsEnabled:!0,defaultTransition:"slide",loadingMessage:"loading",pageLoadErrorMessage
:"Error Loading Page",metaViewportContent:"width=device-width, minimum-scale=1, maximum-scale=1"
,gradeA:function(){return a.support.mediaquery||a.mobile.browser.ie&&a.mobile
.browser.ie>=7},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND
:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,
ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL
:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT
:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,
UP:38,WINDOWS:91},silentScroll:function(c){c=c||0,a.event.special.scrollstart
.enabled=!1,setTimeout(function(){b.scrollTo(0,c),a(document).trigger("silentscroll"
,{x:0,y:c})},20),setTimeout(function(){a.event.special.scrollstart.enabled=!0
},150)}}),a.fn.jqmData=function(b,c){return this.data(b?a.mobile.ns+b:b,c
)},a.jqmData=function(b,c,d){return a.data(b,c&&a.mobile.ns+c,d)},a.fn.jqmRemoveData=
function(b){return this.removeData(a.mobile.ns+b)},a.jqmRemoveData=function(
b,c){return a.removeData(b,c&&a.mobile.ns+c)},a.jqmHasData=function(b,c){
return a.hasData(b,c&&a.mobile.ns+c)};var d=a.find;a.find=function(b,c,e,
f){return b=b.replace(/:jqmData\(([^)]*)\)/g,"[data-"+(a.mobile.ns||"")+"$1]"
),d.call(this,b,c,e,f)},a.extend(a.find,d),a.find.matches=function(b,c){return a
.find(b,null,null,c)},a.find.matchesSelector=function(b,c){return a.find(
c,null,null,[b]).length>0}}(jQuery,this),function(a,b){function t(a){var b=
a.jqmData("lastClicked");if(b&&b.length)b.focus();else{var c=a.find(".ui-title:eq(0)"
);c.length?c.focus():a.find(i).eq(0).focus()}}function u(b){!!g&&(!g.closest
(".ui-page-active").length||b)&&g.removeClass(a.mobile.activeBtnClass),g=
null}var c=a(window),d=a("html"),e=a("head"),f={get:function(a){return a===
b&&(a=location.hash),f.stripHash(a).replace(/[^\/]*\.[^\/*]+$/,"")},getFilePath
:function(b){var c="&"+a.mobile.subPageUrlKey;return b&&b.split(c)[0].split
(m)[0]},set:function(a){location.hash=a},origin:"",setOrigin:function(){f
.origin=f.get(location.protocol+"//"+location.host+location.pathname)},makeAbsolute
:function(a){return f.isPath(window.location.hash)?f.get()+a:a},isPath:function(
a){return/\//.test(a)},clean:function(a){var b=new RegExp("^"+location.protocol+"//"+
location.host+location.pathname);return a.replace(b,"")},stripHash:function(
a){return a.replace(/^#/,"")},isExternal:function(a){return f.hasProtocol
(f.clean(a))},hasProtocol:function(a){return/^(:?\w+:)/.test(a)},isRelative
:function(a){return/^[^\/|#]/.test(a)&&!f.hasProtocol(a)},isEmbeddedPage:
function(a){return/^#/.test(a)}},g=null,h={stack:[],activeIndex:0,getActive
:function(){return h.stack[h.activeIndex]},getPrev:function(){return h.stack
[h.activeIndex-1]},getNext:function(){return h.stack[h.activeIndex+1]},addNew
:function(a,b,c,d){h.getNext()&&h.clearForward(),h.stack.push({url:a,transition
:b,title:c,page:d}),h.activeIndex=h.stack.length-1},clearForward:function(
){h.stack=h.stack.slice(0,h.activeIndex+1)},directHashChange:function(c){
var d,e,f;a.each(h.stack,function(a,b){c.currentUrl===b.url&&(d=a<h.activeIndex
,e=!d,f=a)}),this.activeIndex=f!==b?f:this.activeIndex,d?c.isBack():e&&c.
isForward()},ignoreNextHashChange:!0},i="[tabindex],a,button:visible,select:visible,input"
,j=null,k=[],l=!1,m="&ui-state=dialog",n=e.children("base"),o=location.protocol+"//"+
location.host,p=f.get(o+location.pathname),q=p;if(n.length){var r=n.attr("href"
);r&&(r.search(/^[^:\/]+:\/\/[^\/]+\/?/)===-1?r.charAt(0)==="/"?q=o+r:q=p+
r:q=r),q+=q.charAt(q.length-1)==="/"?" ":"/"}var s=a.support.dynamicBaseTag?
{element:n.length?n:a("<base>",{href:q}).prependTo(e),set:function(a){s.element
.attr("href",q+f.get(a))},reset:function(){s.element.attr("href",q)}}:b;f
.setOrigin(),a.fn.animationComplete=function(b){return a.support.cssTransitions?
a(this).one("webkitAnimationEnd",b):(setTimeout(b,0),a(this))},a.mobile.updateHash=
f.set,a.mobile.path=f,a.mobile.base=s,a.mobile.urlstack=h.stack,a.mobile.
urlHistory=h,a.mobile.allowCrossDomainPages=!1,a.mobile.changePage=function(
e,i,n,o,p){function G(){i===b&&(i=j&&j==="dialog"?"pop":a.mobile.defaultTransition
)}function H(){l=!1,k.length>0&&a.mobile.changePage.apply(a.mobile,k.pop(
))}function I(){function l(){o!==!1&&w&&(h.ignoreNextHashChange=!1,f.set(
w));var b=e.jqmData("title")||e.find(".ui-header .ui-title").text();!!b&&
F==document.title&&(F=b),!D&&!E&&h.addNew(w,i,F,e),document.title=h.getActive
().title,u(),a.mobile.silentScroll(e.jqmData("lastScroll")),t(e),v&&v.data
("page")._trigger("hide",null,{nextPage:e}),e.data("page")._trigger("show"
,null,{prevPage:v||a("")}),a.mobile.activePage=e,B!==null&&B.remove(),d.removeClass
("ui-mobile-rendering"),H()}function m(b){a.mobile.pageContainer.addClass
(b),k.push(b)}function p(){a.mobile.pageContainer.removeClass(k.join(" ")
),k=[]}a.mobile.silentScroll();var b=c.scrollTop(),j=["flip"],k=[];w.indexOf
("&"+a.mobile.subPageUrlKey)>-1&&(e=a(":jqmData(url='"+w+"')")),v&&(v.jqmData
("lastScroll",b).jqmData("lastClicked",g),v.data("page")._trigger("beforehide"
,null,{nextPage:e})),e.data("page")._trigger("beforeshow",null,{prevPage:
v||a("")}),i&&i!=="none"?(a.mobile.pageLoading(!0),a.inArray(i,j)>=0&&m("ui-mobile-viewport-perspective"
),m("ui-mobile-viewport-transitioning"),v&&v.addClass(i+" out "+(n?"reverse"
:"")),e.addClass(a.mobile.activePageClass+" "+i+" in "+(n?"reverse":"")),
e.animationComplete(function(){e.add(v).removeClass("out in reverse "+i),
v&&v.removeClass(a.mobile.activePageClass),l(),p()})):(a.mobile.pageLoading
(!0),v&&v.removeClass(a.mobile.activePageClass),e.addClass(a.mobile.activePageClass
),l())}function J(){if(j||e.jqmData("role")==="dialog")w=h.getActive().url+
m,j&&(e.attr("data-"+a.mobile.ns+"role",j),j=null);e.page()}var q=a.type(
e)==="array",r=a.type(e)==="object",v=q?e[0]:a.mobile.activePage;e=q?e[1]
:e;var w=a.type(e)==="string"?f.stripHash(e):"",x=w,y,z="get",A=!1,B=null
,C=h.getActive(),D=!1,E=!1,F=document.title;if(C&&h.stack.length>1&&C.url===
w&&!q&&!r)return;if(l){k.unshift(arguments);return}l=!0,p&&h.directHashChange
({currentUrl:w,isBack:function(){E=!(D=!0),n=!0,i=i||C.transition},isForward
:function(){E=!(D=!1),i=i||h.getActive().transition}}),r&&e.url&&(w=e.url
,y=e.data,z=e.type,A=!0,y&&z==="get"&&(a.type(y)==="object"&&(y=a.param(y
)),w+="?"+y,y=b)),s&&s.reset(),window.document.activeElement&&a(window.document
.activeElement||"").add("input:focus, textarea:focus, select:focus").blur
();if(w)e=a(":jqmData(url='"+w+"')"),x=f.getFilePath(w);else{var K=e.attr
("data-"+a.mobile.ns+"url"),L=f.getFilePath(K);K!==L&&(x=L)}G(),e.length&&!
A?(x&&s&&s.set(x),J(),I()):(e.length&&(B=e),a.mobile.pageLoading(),a.ajax
({url:x,type:z,data:y,dataType:"html",success:function(b){var c=a("<div></div>"
),d,g=b.match(/<title[^>]*>([^<]*)/)&&RegExp.$1,h=new RegExp(".*(<[^>]+\\bdata-"+
a.mobile.ns+"role=[\"']?page[\"']?[^>]*>).*"),i=new RegExp("\\bdata-"+a.mobile
.ns+"url=[\"']?([^\"'>]*)[\"']?");h.test(b)&&RegExp.$1&&i.test(RegExp.$1)&&
RegExp.$1&&(d=RegExp.$1),d?(s&&s.set(d),w=x=f.getFilePath(d)):s&&s.set(x)
,c.get(0).innerHTML=b,e=c.find(":jqmData(role='page'), :jqmData(role='dialog')"
).first(),g&&(F=g);if(!a.support.dynamicBaseTag){var j=f.get(x);e.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]"
).each(function(){var b=a(this).is("[href]")?"href":"src",c=a(this).attr(
b);c=c.replace(location.protocol+"//"+location.host+location.pathname,"")
,/^(\w+:|#|\/)/.test(c)||a(this).attr(b,j+c)})}e.attr("data-"+a.mobile.ns+"url"
,x).appendTo(a.mobile.pageContainer),J(),setTimeout(function(){I()},0)},error
:function(){a.mobile.pageLoading(!0),u(!0),s&&s.set(f.get()),H(),a("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h1>"+
a.mobile.pageLoadErrorMessage+"</h1></div>").css({display:"block",opacity
:.96,top:a(window).scrollTop()+100}).appendTo(a.mobile.pageContainer).delay
(800).fadeOut(400,function(){a(this).remove()})}}))},a("form").live("submit"
,function(b){if(!a.mobile.ajaxEnabled||!a.mobile.ajaxFormsEnabled||a(this
).is(":jqmData(ajax='false')"))return;var c=a(this).attr("method"),d=f.clean
(a(this).attr("action")),e=a(this).attr("target");if(f.isExternal(d)||e)return;
f.isRelative(d)&&(d=f.makeAbsolute(d)),a.mobile.changePage({url:d.length&&
d||f.get(),type:c.length&&c.toLowerCase()||"get",data:a(this).serialize()
},a(this).jqmData("transition"),a(this).jqmData("direction"),!0),b.preventDefault
()}),a("a").live("vclick",function(){a(this).closest(".ui-btn").not(".ui-disabled"
).addClass(a.mobile.activeBtnClass)}),a("a").live("click",function(b){var c=
a(this),d=c.attr("href")||"#",e=f.hasProtocol(d),h=f.clean(d),i=c.is("[rel='external']"
),k=f.isEmbeddedPage(h),l=a.mobile.allowCrossDomainPages&&location.protocol==="file:"&&
h.search(/^https?:/)!=-1,m=f.isExternal(h)&&!l||i&&!k,n=c.is("[target]"),
o=c.is(":jqmData(ajax='false')"),p=f.stripHash(h)==a.mobile.activePage.jqmData
("url");if(c.is(":jqmData(rel='back')"))return window.history.back(),!1;if(
h.replace(f.get(),"")=="#"||p){b.preventDefault();return}g=c.closest(".ui-btn"
);if(m||o||n||!a.mobile.ajaxEnabled||!a.mobile.ajaxLinksEnabled){window.setTimeout
(function(){u(!0)},200);return}var q=c.jqmData("transition"),r=c.jqmData("direction"
),s=r&&r==="reverse"||c.jqmData("back");j=c.attr("data-"+a.mobile.ns+"rel"
),f.isRelative(h)&&!e&&(h=f.makeAbsolute(h)),h=f.stripHash(h),a.mobile.changePage
(h,q,s),b.preventDefault()}),c.bind("hashchange",function(c,d){var e=f.stripHash
(location.hash),g=a.mobile.urlHistory.stack.length===0?!1:b;if(!a.mobile.
hashListeningEnabled||!h.ignoreNextHashChange){h.ignoreNextHashChange||(h
.ignoreNextHashChange=!0);return}if(h.stack.length>1&&e.indexOf(m)>-1){if(!
a.mobile.activePage.is(".ui-dialog")){h.directHashChange({currentUrl:e,isBack
:function(){window.history.back()},isForward:function(){window.history.forward
()}});return}var i=function(){e=a.mobile.urlHistory.getActive().page};h.directHashChange
({currentUrl:e,isBack:i,isForward:i})}e?a.mobile.changePage(e,g,b,!1,!0):
a.mobile.changePage(a.mobile.firstPage,g,!0,!1,!0)})}(jQuery),function(a,
b){a.fn.fixHeaderFooter=function(b){return a.support.scrollTop?this.each(
function(){var b=a(this);b.jqmData("fullscreen")&&b.addClass("ui-page-fullscreen"
),b.find(".ui-header:jqmData(position='fixed')").addClass("ui-header-fixed ui-fixed-inline fade"
),b.find(".ui-footer:jqmData(position='fixed')").addClass("ui-footer-fixed ui-fixed-inline fade"
)}):this},a.fixedToolbars=function(){function p(b){!d&&c=="overlay"&&(f||
a.fixedToolbars.hide(!0),a.fixedToolbars.startShowTimer())}function q(a){
var b=0;if(a){var c=a.offsetParent,d=document.body;b=a.offsetTop;while(a&&
a!=d)b+=a.scrollTop||0,a==c&&(b+=c.offsetTop,c=a.offsetParent),a=a.parentNode
}return b}function r(b){var c=a(window).scrollTop(),d=q(b[0]),e=b.css("top"
)=="auto"?0:parseFloat(b.css("top")),f=window.innerHeight,g=b.outerHeight
(),h=b.parents(".ui-page:not(.ui-page-fullscreen)").length,i;return b.is(".ui-header-fixed"
)?(i=c-d+e,i<d&&(i=0),b.css("top",h?i:c)):(i=c+f-g-(d-e),b.css("top",h?i:
c+f-g))}if(!a.support.scrollTop)return;var c="inline",d=!1,e=100,f,g="a,input,textarea,select,button,label,.ui-header-fixed,.ui-footer-fixed"
,h=".ui-header-fixed:first, .ui-footer-fixed:not(.ui-footer-duplicate):last"
,i,j=a.support.touch,k=j?"touchstart":"mousedown",l=j?"touchend":"mouseup"
,m=null,n=!1,o=!0;return a(function(){a(document).bind("vmousedown",function(
a){o&&(m=c)}).bind("vclick",function(b){if(o){if(a(b.target).closest(g).length
)return;n||(a.fixedToolbars.toggle(m),m=null)}}).bind("scrollstart",function(
b){n=!0,m==null&&(m=c);var e=m=="overlay";d=e||!!f,d&&(a.fixedToolbars.clearShowTimer
(),e&&a.fixedToolbars.hide(!0))}).bind("scrollstop",function(b){if(a(b.target
).closest(g).length)return;n=!1,d&&(d=!1,a.fixedToolbars.startShowTimer()
),m=null}).bind("silentscroll",p),a(window).bind("resize",p)}),a(".ui-page"
).live("pagebeforeshow",function(b,c){var d=a(b.target),e=d.find(":jqmData(role='footer')"
),f=e.data("id"),g=c.prevPage;prevFooter=g&&g.find(":jqmData(role='footer')"
);var h=prevFooter.jqmData("id")===f;f&&h&&(i=e,r(i.removeClass("fade in out"
).appendTo(a.mobile.pageContainer)))}),a(".ui-page").live("pageshow",function(
b,c){var d=a(this);i&&i.length&&setTimeout(function(){r(i.appendTo(d).addClass
("fade")),i=null},500),a.fixedToolbars.show(!0,this)}),{show:function(b,d
){a.fixedToolbars.clearShowTimer(),c="overlay";var e=d?a(d):a.mobile.activePage?
a.mobile.activePage:a(".ui-page-active");return e.children(h).each(function(
){var c=a(this),d=a(window).scrollTop(),e=q(c[0]),f=window.innerHeight,g=
c.outerHeight(),h=c.is(".ui-header-fixed")&&d<=e+g||c.is(".ui-footer-fixed"
)&&e<=d+f;c.addClass("ui-fixed-overlay").removeClass("ui-fixed-inline"),!
h&&!b&&c.animationComplete(function(){c.removeClass("in")}).addClass("in"
),r(c)})},hide:function(b){c="inline";var d=a.mobile.activePage?a.mobile.
activePage:a(".ui-page-active");return d.children(h).each(function(){var c=
a(this),d=c.css("top");d=d=="auto"?0:parseFloat(d),c.addClass("ui-fixed-inline"
).removeClass("ui-fixed-overlay");if(d<0||c.is(".ui-header-fixed")&&d!=0)
if(b)c.css("top",0);else if(c.css("top")!=="auto"&&parseFloat(c.css("top"
))!==0){var e="out reverse";c.animationComplete(function(){c.removeClass(
e),c.css("top",0)}).addClass(e)}})},startShowTimer:function(){a.fixedToolbars
.clearShowTimer();var c=a.makeArray(arguments);f=setTimeout(function(){f=
b,a.fixedToolbars.show.apply(null,c)},e)},clearShowTimer:function(){f&&clearTimeout
(f),f=b},toggle:function(b){return b&&(c=b),c=="overlay"?a.fixedToolbars.
hide():a.fixedToolbars.show()},setTouchToggleEnabled:function(a){o=a}}}()
}(jQuery),function(a,b){a.widget("mobile.checkboxradio",a.mobile.widget,{
options:{theme:null},_create:function(){var c=this,d=this.element,e=d.closest
("form,fieldset,:jqmData(role='page')").find("label").filter("[for="+d[0]
.id+"]"),f=d.attr("type"),g="ui-icon-"+f+"-on",h="ui-icon-"+f+"-off";if(f!="checkbox"&&
f!="radio")return;a.extend(this,{label:e,inputtype:f,checkedicon:g,uncheckedicon
:h}),this.options.theme||(this.options.theme=this.element.jqmData("theme"
)),e.buttonMarkup({theme:this.options.theme,icon:this.element.parents(":jqmData(type='horizontal')"
).length?b:h,shadow:!1}),d.add(e).wrapAll("<div class='ui-"+f+"'></div>")
,e.bind({vmouseover:function(){if(a(this).parent().is(".ui-disabled"))return!1
},vclick:function(a){if(d.is(":disabled")){a.preventDefault();return}return c
._cacheVals(),d.attr("checked",f==="radio"&&!0||!d.is(":checked")),c._updateAll
(),!1}}),d.bind({vmousedown:function(){this._cacheVals()},vclick:function(
){c._updateAll()},focus:function(){e.addClass("ui-focus")},blur:function(
){e.removeClass("ui-focus")}}),this.refresh()},_cacheVals:function(){this
._getInputSet().each(function(){a(this).jqmData("cacheVal",a(this).is(":checked"
))})},_getInputSet:function(){return this.element.closest("form,fieldset,:jqmData(role='page')"
).find("input[name='"+this.element.attr("name")+"'][type='"+this.inputtype+"']"
)},_updateAll:function(){var b=this;this._getInputSet().each(function(){(
a(this).is(":checked")||b.inputtype==="checkbox")&&a(this).trigger("change"
)}).checkboxradio("refresh")},refresh:function(){var b=this.element,c=this
.label,d=c.find(".ui-icon");b[0].checked?(c.addClass(a.mobile.activeBtnClass
),d.addClass(this.checkedicon).removeClass(this.uncheckedicon)):(c.removeClass
(a.mobile.activeBtnClass),d.removeClass(this.checkedicon).addClass(this.uncheckedicon
)),b.is(":disabled")?this.disable():this.enable()},disable:function(){this
.element.attr("disabled",!0).parent().addClass("ui-disabled")},enable:function(
){this.element.attr("disabled",!1).parent().removeClass("ui-disabled")}})
}(jQuery),function(a,b){a.widget("mobile.textinput",a.mobile.widget,{options
:{theme:null},_create:function(){var b=this.element,c=this.options,d=c.theme
,e;if(!d){var f=this.element.closest("[class*='ui-bar-'],[class*='ui-body-']"
);d=f.length?/ui-(bar|body)-([a-z])/.exec(f.attr("class"))[2]:"c"}e=" ui-body-"+
d,a("label[for="+b.attr("id")+"]").addClass("ui-input-text"),b.addClass("ui-input-text ui-body-"+
c.theme);var g=b;if(b.is("[type='search'],:jqmData(type='search')")){g=b.
wrap('<div class="ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield'+
e+'"></div>').parent();var h=a('<a href="#" class="ui-input-clear" title="clear text">clear text</a>'
).tap(function(a){b.val("").focus(),b.trigger("change"),h.addClass("ui-input-clear-hidden"
),a.preventDefault()}).appendTo(g).buttonMarkup({icon:"delete",iconpos:"notext"
,corners:!0,shadow:!0});function i(){b.val()==""?h.addClass("ui-input-clear-hidden"
):h.removeClass("ui-input-clear-hidden")}i(),b.keyup(i)}else b.addClass("ui-corner-all ui-shadow-inset"+
e);b.focus(function(){g.addClass("ui-focus")}).blur(function(){g.removeClass
("ui-focus")});if(b.is("textarea")){var j=15,k=100,l=function(){var a=b[0
].scrollHeight,c=b[0].clientHeight;c<a&&b.css({height:a+j})},m;b.keyup(function(
){clearTimeout(m),m=setTimeout(l,k)})}},disable:function(){(this.element.
attr("disabled",!0).is("[type='search'],:jqmData(type='search')")?this.element
.parent():this.element).addClass("ui-disabled")},enable:function(){(this.
element.attr("disabled",!1).is("[type='search'],:jqmData(type='search')")?
this.element.parent():this.element).removeClass("ui-disabled")}})}(jQuery
),function(a,b){a.widget("mobile.selectmenu",a.mobile.widget,{options:{theme
:null,disabled:!1,icon:"arrow-d",iconpos:"right",inline:null,corners:!0,shadow
:!0,iconshadow:!0,menuPageTheme:"b",overlayTheme:"a",hidePlaceholderMenuItems
:!0,closeText:"Close",nativeMenu:!0},_create:function(){var b=this,c=this
.options,d=this.element.wrap("<div class='ui-select'>"),e=d.attr("id"),f=
a("label[for="+e+"]").addClass("ui-select"),g=d[0].selectedIndex==-1?0:d[0
].selectedIndex,h=(b.options.nativeMenu?a("<div/>"):a("<a>",{href:"#",role
:"button",id:k,"aria-haspopup":"true","aria-owns":l})).text(a(d[0].options
.item(g)).text()).insertBefore(d).buttonMarkup({theme:c.theme,icon:c.icon
,iconpos:c.iconpos,inline:c.inline,corners:c.corners,shadow:c.shadow,iconshadow
:c.iconshadow}),i=b.isMultiple=d[0].multiple;c.nativeMenu&&window.opera&&
window.opera.version&&d.addClass("ui-select-nativeonly");if(!c.nativeMenu
)var j=d.find("option"),k=e+"-button",l=e+"-menu",m=d.closest(".ui-page")
,n=/ui-btn-up-([a-z])/.exec(h.attr("class"))[1],o=a("<div data-"+a.mobile
.ns+"role='dialog' data-"+a.mobile.ns+"theme='"+c.menuPageTheme+"'>"+"<div data-"+
a.mobile.ns+"role='header'>"+"<div class='ui-title'>"+f.text()+"</div>"+"</div>"+"<div data-"+
a.mobile.ns+"role='content'></div>"+"</div>").appendTo(a.mobile.pageContainer
).page(),p=o.find(".ui-content"),q=o.find(".ui-header a"),r=a("<div>",{"class"
:"ui-selectmenu-screen ui-screen-hidden"}).appendTo(m),s=a("<div>",{"class"
:"ui-selectmenu ui-selectmenu-hidden ui-overlay-shadow ui-corner-all pop ui-body-"+
c.overlayTheme}).insertAfter(r),t=a("<ul>",{"class":"ui-selectmenu-list",
id:l,role:"listbox","aria-labelledby":k}).attr("data-"+a.mobile.ns+"theme"
,n).appendTo(s),u=a("<div>",{"class":"ui-header ui-bar-"+n}).prependTo(s)
,v=a("<h1>",{"class":"ui-title"}).appendTo(u),w=a("<a>",{text:c.closeText
,href:"#","class":"ui-btn-left"}).attr("data-"+a.mobile.ns+"iconpos","notext"
).attr("data-"+a.mobile.ns+"icon","delete").appendTo(u).buttonMarkup(),x;
i&&(b.buttonCount=a("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all"
).hide().appendTo(h)),c.disabled&&this.disable(),d.change(function(){b.refresh
()}),a.extend(b,{select:d,optionElems:j,selectID:e,label:f,buttonId:k,menuId
:l,thisPage:m,button:h,menuPage:o,menuPageContent:p,screen:r,listbox:s,list
:t,menuType:x,header:u,headerClose:w,headerTitle:v,placeholder:""}),c.nativeMenu?
d.appendTo(h).bind("vmousedown",function(b){h.addClass(a.mobile.activeBtnClass
)}).bind("focus vmouseover",function(){h.trigger("vmouseover")}).bind("vmousemove"
,function(){h.removeClass(a.mobile.activeBtnClass)}).bind("change blur vmouseout"
,function(){h.trigger("vmouseout").removeClass(a.mobile.activeBtnClass)})
:(b.refresh(),d.attr("tabindex","-1").focus(function(){a(this).blur(),h.focus
()}),h.bind("vclick keydown",function(c){if(c.type=="vclick"||c.keyCode&&
(c.keyCode===a.mobile.keyCode.ENTER||c.keyCode===a.mobile.keyCode.SPACE))
b.open(),c.preventDefault()}),t.attr("role","listbox").delegate(".ui-li>a"
,"focusin",function(){a(this).attr("tabindex","0")}).delegate(".ui-li>a","focusout"
,function(){a(this).attr("tabindex","-1")}).delegate("li:not(.ui-disabled, .ui-li-divider)"
,"vclick",function(c){var e=d[0].selectedIndex,f=t.find("li:not(.ui-li-divider)"
).index(this),g=b.optionElems.eq(f)[0];g.selected=i?!g.selected:!0,i&&a(this
).find(".ui-icon").toggleClass("ui-icon-checkbox-on",g.selected).toggleClass
("ui-icon-checkbox-off",!g.selected),e!==f&&d.trigger("change"),i||b.close
(),c.preventDefault()}).keydown(function(b){var c=a(b.target),d=c.closest
("li");switch(b.keyCode){case 38:var e=d.prev();return e.length&&(c.blur(
).attr("tabindex","-1"),e.find("a").first().focus()),!1;case 40:var f=d.next
();return f.length&&(c.blur().attr("tabindex","-1"),f.find("a").first().focus
()),!1;case 13:case 32:return c.trigger("vclick"),!1}}),r.bind("vclick",function(
a){b.close()}),b.headerClose.click(function(){if(b.menuType=="overlay")return b
.close(),!1}))},_buildList:function(){var b=this,c=this.options,d=this.placeholder
,e=[],f=[],g=b.isMultiple?"checkbox-off":"false";b.list.empty().filter(".ui-listview"
).listview("destroy"),b.select.find("option").each(function(h){var i=a(this
),j=i.parent(),k=i.text(),l="<a href='#'>"+k+"</a>",m=[],n=[];if(j.is("optgroup"
)){var p=j.attr("label");a.inArray(p,e)===-1&&(f.push("<li data-"+a.mobile
.ns+"role='list-divider'>"+p+"</li>"),e.push(p))}if(!this.getAttribute("value"
)||k.length==0||i.jqmData("placeholder"))c.hidePlaceholderMenuItems&&m.push
("ui-selectmenu-placeholder"),d=b.placeholder=k;this.disabled&&(m.push("ui-disabled"
),n.push("aria-disabled='true'")),f.push("<li data-"+a.mobile.ns+"icon='"+
g+"' class='"+m.join(" ")+"' "+n.join(" ")+">"+l+"</li>")}),b.list.html(f
.join(" ")),b.list.find("li").attr({role:"option",tabindex:"-1"}).first()
.attr("tabindex","0"),this.isMultiple||this.headerClose.hide(),!this.isMultiple&&!
d.length?this.header.hide():this.headerTitle.text(this.placeholder),b.list
.listview()},refresh:function(b){var c=this,d=this.element,e=this.isMultiple
,f=this.optionElems=d.find("option"),g=f.filter(":selected"),h=g.map(function(
){return f.index(this)}).get();!c.options.nativeMenu&&(b||d[0].options.length!=
c.list.find("li").length)&&c._buildList(),c.button.find(".ui-btn-text").text
(function(){return e?g.length?g.map(function(){return a(this).text()}).get
().join(", "):c.placeholder:g.text()}),e&&c.buttonCount[g.length>1?"show"
:"hide"]().text(g.length),c.options.nativeMenu||c.list.find("li:not(.ui-li-divider)"
).removeClass(a.mobile.activeBtnClass).attr("aria-selected",!1).each(function(
b){if(a.inArray(b,h)>-1){var c=a(this).addClass(a.mobile.activeBtnClass);
c.find("a").attr("aria-selected",!0),e&&c.find(".ui-icon").removeClass("ui-icon-checkbox-off"
).addClass("ui-icon-checkbox-on")}})},open:function(){function i(){b.list
.find(".ui-btn-active").focus()}if(this.options.disabled||this.options.nativeMenu
)return;var b=this,c=b.list.parent().outerHeight(),d=b.list.parent().outerWidth
(),e=a(window).scrollTop(),f=b.button.offset().top,g=window.innerHeight,h=
window.innerWidth;b.button.addClass(a.mobile.activeBtnClass),setTimeout(function(
){b.button.removeClass(a.mobile.activeBtnClass)},300);if(c>g-80||!a.support
.scrollTop)e==0&&f>g&&b.thisPage.one("pagehide",function(){a(this).jqmData
("lastScroll",f)}),b.menuPage.one("pageshow",function(){a(window).one("silentscroll"
,function(){i()})}),b.menuType="page",b.menuPageContent.append(b.list),a.
mobile.changePage(b.menuPage,"pop",!1,!0);else{b.menuType="overlay",b.screen
.height(a(document).height()).removeClass("ui-screen-hidden");var j=f-e,k=
e+g-f,l=c/2,m=parseFloat(b.list.parent().css("max-width")),n,o;j>c/2&&k>c/2?
n=f+b.button.outerHeight()/2-l:n=j>k?e+g-c-30:e+30,d<m?o=(h-d)/2:(o=b.button
.offset().left+b.button.outerWidth()/2-d/2,o<30?o=30:o+d>h&&(o=h-d-30)),b
.listbox.append(b.list).removeClass("ui-selectmenu-hidden").css({top:n,left
:o}).addClass("in"),i()}setTimeout(function(){b.isOpen=!0},400)},close:function(
){function c(){setTimeout(function(){b.button.focus()},40),b.listbox.removeAttr
("style").append(b.list)}if(this.options.disabled||!this.isOpen||this.options
.nativeMenu)return;var b=this;b.menuType=="page"?(a.mobile.changePage([b.
menuPage,b.thisPage],"pop",!0,!1),b.menuPage.one("pagehide",c)):(b.screen
.addClass("ui-screen-hidden"),b.listbox.addClass("ui-selectmenu-hidden").
removeAttr("style").removeClass("in"),c()),this.isOpen=!1},disable:function(
){return this.element.attr("disabled",!0),this.button.addClass("ui-disabled"
).attr("aria-disabled",!0),this._setOption("disabled",!0)},enable:function(
){return this.element.attr("disabled",!1),this.button.removeClass("ui-disabled"
).attr("aria-disabled",!1),this._setOption("disabled",!1)}})}(jQuery),function(
a,b){a.fn.buttonMarkup=function(b){return this.each(function(){var d=a(this
),e=a.extend({},a.fn.buttonMarkup.defaults,d.jqmData(),b),f,g="ui-btn-inner"
,h;c&&c();if(!e.theme){var i=d.closest("[class*='ui-bar-'],[class*='ui-body-']"
);e.theme=i.length?/ui-(bar|body)-([a-z])/.exec(i.attr("class"))[2]:"c"}f="ui-btn ui-btn-up-"+
e.theme,e.inline&&(f+=" ui-btn-inline"),e.icon&&(e.icon="ui-icon-"+e.icon
,e.iconpos=e.iconpos||"left",h="ui-icon "+e.icon,e.shadow&&(h+=" ui-icon-shadow"
)),e.iconpos&&(f+=" ui-btn-icon-"+e.iconpos,e.iconpos=="notext"&&!d.attr("title"
)&&d.attr("title",d.text())),e.corners&&(f+=" ui-btn-corner-all",g+=" ui-btn-corner-all"
),e.shadow&&(f+=" ui-shadow"),d.attr("data-"+a.mobile.ns+"theme",e.theme)
.addClass(f);var j=("<D class='"+g+"'><D class='ui-btn-text'></D>"+(e.icon?"<span class='"+
h+"'></span>":"")+"</D>").replace(/D/g,e.wrapperEls);d.wrapInner(j)})},a.
fn.buttonMarkup.defaults={corners:!0,shadow:!0,iconshadow:!0,wrapperEls:"span"
};var c=function(){a(".ui-btn:not(.ui-disabled)").live({vmousedown:function(
){var b=a(this).attr("data-"+a.mobile.ns+"theme");a(this).removeClass("ui-btn-up-"+
b).addClass("ui-btn-down-"+b)},"vmousecancel vmouseup":function(){var b=a
(this).attr("data-"+a.mobile.ns+"theme");a(this).removeClass("ui-btn-down-"+
b).addClass("ui-btn-up-"+b)},"vmouseover focus":function(){var b=a(this).
attr("data-"+a.mobile.ns+"theme");a(this).removeClass("ui-btn-up-"+b).addClass
("ui-btn-hover-"+b)},"vmouseout blur":function(){var b=a(this).attr("data-"+
a.mobile.ns+"theme");a(this).removeClass("ui-btn-hover-"+b).addClass("ui-btn-up-"+
b)}}),c=null}}(jQuery),function(a,b){a.widget("mobile.button",a.mobile.widget
,{options:{theme:null,icon:null,iconpos:null,inline:null,corners:!0,shadow
:!0,iconshadow:!0},_create:function(){var b=this.element,c=this.options;this
.button=a("<div></div>").text(b.text()||b.val()).buttonMarkup({theme:c.theme
,icon:c.icon,iconpos:c.iconpos,inline:c.inline,corners:c.corners,shadow:c
.shadow,iconshadow:c.iconshadow}).insertBefore(b).append(b.addClass("ui-btn-hidden"
));var d=b.attr("type");d!=="button"&&d!=="reset"&&b.bind("vclick",function(
){var c=a("<input>",{type:"hidden",name:b.attr("name"),value:b.attr("value"
)}).insertBefore(b);a(document).submit(function(){c.remove()})}),this.refresh
()},enable:function(){return this.element.attr("disabled",!1),this.button
.removeClass("ui-disabled").attr("aria-disabled",!1),this._setOption("disabled"
,!1)},disable:function(){return this.element.attr("disabled",!0),this.button
.addClass("ui-disabled").attr("aria-disabled",!0),this._setOption("disabled"
,!0)},refresh:function(){this.element.attr("disabled")?this.disable():this
.enable()}})}(jQuery),function(a,b){a.widget("mobile.slider",a.mobile.widget
,{options:{theme:null,trackTheme:null,disabled:!1},_create:function(){var b=
this,c=this.element,d=c.parents("[class*=ui-bar-],[class*=ui-body-]").eq(0
),d=d.length?d.attr("class").match(/ui-(bar|body)-([a-z])/)[2]:"c",e=this
.options.theme?this.options.theme:d,f=this.options.trackTheme?this.options
.trackTheme:d,g=c[0].nodeName.toLowerCase(),h=g=="select"?"ui-slider-switch"
:"",i=c.attr("id"),j=i+"-label",k=a("[for="+i+"]").attr("id",j),l=function(
){return g=="input"?parseFloat(c.val()):c[0].selectedIndex},m=g=="input"?
parseFloat(c.attr("min")):0,n=g=="input"?parseFloat(c.attr("max")):c.find
("option").length-1,o=window.parseFloat(c.attr("step")||1),p=a('<div class="ui-slider '+
h+" ui-btn-down-"+f+' ui-btn-corner-all" role="application"></div>'),q=a('<a href="#" class="ui-slider-handle"></a>'
).appendTo(p).buttonMarkup({corners:!0,theme:e,shadow:!0}).attr({role:"slider"
,"aria-valuemin":m,"aria-valuemax":n,"aria-valuenow":l(),"aria-valuetext"
:l(),title:l(),"aria-labelledby":j});a.extend(this,{slider:p,handle:q,dragging
:!1,beforeStart:null});if(g=="select"){p.wrapInner('<div class="ui-slider-inneroffset"></div>'
);var r=c.find("option");c.find("option").each(function(b){var c=b==0?"b"
:"a",d=b==0?"right":"left",e=b==0?" ui-btn-down-"+f:" ui-btn-active";a('<div class="ui-slider-labelbg ui-slider-labelbg-'+
c+e+" ui-btn-corner-"+d+'"></div>').prependTo(p),a('<span class="ui-slider-label ui-slider-label-'+
c+e+" ui-btn-corner-"+d+'" role="img">'+a(this).text()+"</span>").prependTo
(q)})}k.addClass("ui-slider"),c.addClass(g=="input"?"ui-slider-input":"ui-slider-switch"
).change(function(){b.refresh(l(),!0)}).keyup(function(){b.refresh(l(),!0
,!0)}).blur(function(){b.refresh(l(),!0)}),a(document).bind("vmousemove",
function(a){if(b.dragging)return b.refresh(a),!1}),p.bind("vmousedown",function(
a){return b.dragging=!0,g==="select"&&(b.beforeStart=c[0].selectedIndex),
b.refresh(a),!1}),p.add(document).bind("vmouseup",function(){if(b.dragging
){b.dragging=!1;if(g==="select"){b.beforeStart===c[0].selectedIndex&&b.refresh
(b.beforeStart===0?1:0);var a=l(),d=Math.round(a/(n-m)*100);q.addClass("ui-slider-handle-snapping"
).css("left",d+"%").animationComplete(function(){q.removeClass("ui-slider-handle-snapping"
)})}return!1}}),p.insertAfter(c),this.handle.bind("vmousedown",function()
{a(this).focus()}).bind("vclick",!1),this.handle.bind("keydown",function(
c){var d=l();if(b.options.disabled)return;switch(c.keyCode){case a.mobile
.keyCode.HOME:case a.mobile.keyCode.END:case a.mobile.keyCode.PAGE_UP:case a
.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.UP:case a.mobile.keyCode.
RIGHT:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:c.preventDefault
(),b._keySliding||(b._keySliding=!0,a(this).addClass("ui-state-active"))}
switch(c.keyCode){case a.mobile.keyCode.HOME:b.refresh(m);break;case a.mobile
.keyCode.END:b.refresh(n);break;case a.mobile.keyCode.PAGE_UP:case a.mobile
.keyCode.UP:case a.mobile.keyCode.RIGHT:b.refresh(d+o);break;case a.mobile
.keyCode.PAGE_DOWN:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:
b.refresh(d-o)}}).keyup(function(c){b._keySliding&&(b._keySliding=!1,a(this
).removeClass("ui-state-active"))}),this.refresh()},refresh:function(a,b,
c){if(this.options.disabled)return;var d=this.element,e,f=d[0].nodeName.toLowerCase
(),g=f==="input"?parseFloat(d.attr("min")):0,h=f==="input"?parseFloat(d.attr
("max")):d.find("option").length-1;if(typeof a=="object"){var i=a,j=8;if(!
this.dragging||i.pageX<this.slider.offset().left-j||i.pageX>this.slider.offset
().left+this.slider.width()+j)return;e=Math.round((i.pageX-this.slider.offset
().left)/this.slider.width()*100)}else a==null&&(a=f==="input"?parseFloat
(d.val()):d[0].selectedIndex),e=(parseFloat(a)-g)/(h-g)*100;if(isNaN(e))return;
e<0&&(e=0),e>100&&(e=100);var k=Math.round(e/100*(h-g))+g;k<g&&(k=g),k>h&&
(k=h),!(e>60&&f==="select"),this.handle.css("left",e+"%"),this.handle.attr
({"aria-valuenow":f==="input"?k:d.find("option").eq(k).attr("value"),"aria-valuetext"
:f==="input"?k:d.find("option").eq(k).text(),title:k}),f==="select"&&(k===0?
this.slider.addClass("ui-slider-switch-a").removeClass("ui-slider-switch-b"
):this.slider.addClass("ui-slider-switch-b").removeClass("ui-slider-switch-a"
)),c||(f==="input"?d.val(k):d[0].selectedIndex=k,b||d.trigger("change"))}
,enable:function(){return this.element.attr("disabled",!1),this.slider.removeClass
("ui-disabled").attr("aria-disabled",!1),this._setOption("disabled",!1)},
disable:function(){return this.element.attr("disabled",!0),this.slider.addClass
("ui-disabled").attr("aria-disabled",!0),this._setOption("disabled",!0)}}
)}(jQuery),function(a,b){a.widget("mobile.collapsible",a.mobile.widget,{options
:{expandCueText:" click to expand contents",collapseCueText:" click to collapse contents"
,collapsed:!1,heading:">:header,>legend",theme:null,iconTheme:"d"},_create
:function(){var b=this.element,c=this.options,d=b.addClass("ui-collapsible-contain"
),e=b.find(c.heading).eq(0),f=d.wrapInner('<div class="ui-collapsible-content"></div>'
).find(".ui-collapsible-content"),g=b.closest(":jqmData(role='collapsible-set')"
).addClass("ui-collapsible-set");e.is("legend")&&(e=a('<div role="heading">'+
e.html()+"</div>").insertBefore(e),e.next().remove()),e.insertBefore(f),e
.addClass("ui-collapsible-heading").append('<span class="ui-collapsible-heading-status"></span>'
).wrapInner('<a href="#" class="ui-collapsible-heading-toggle"></a>').find
("a:eq(0)").buttonMarkup({shadow:!g.length,corners:!1,iconPos:"left",icon
:"plus",theme:c.theme}).find(".ui-icon").removeAttr("class").buttonMarkup
({shadow:!0,corners:!0,iconPos:"notext",icon:"plus",theme:c.iconTheme}),g
.length?d.jqmData("collapsible-last")&&e.find("a:eq(0), .ui-btn-inner").addClass
("ui-corner-bottom"):e.find("a:eq(0)").addClass("ui-corner-all").find(".ui-btn-inner"
).addClass("ui-corner-all"),d.bind("collapse",function(a){a.isDefaultPrevented
()||(a.preventDefault(),e.addClass("ui-collapsible-heading-collapsed").find
(".ui-collapsible-heading-status").text(c.expandCueText),e.find(".ui-icon"
).removeClass("ui-icon-minus").addClass("ui-icon-plus"),f.addClass("ui-collapsible-content-collapsed"
).attr("aria-hidden",!0),d.jqmData("collapsible-last")&&e.find("a:eq(0), .ui-btn-inner"
).addClass("ui-corner-bottom"))}).bind("expand",function(a){a.isDefaultPrevented
()||(a.preventDefault(),e.removeClass("ui-collapsible-heading-collapsed")
.find(".ui-collapsible-heading-status").text(c.collapseCueText),e.find(".ui-icon"
).removeClass("ui-icon-plus").addClass("ui-icon-minus"),f.removeClass("ui-collapsible-content-collapsed"
).attr("aria-hidden",!1),d.jqmData("collapsible-last")&&e.find("a:eq(0), .ui-btn-inner"
).removeClass("ui-corner-bottom"))}).trigger(c.collapsed?"collapse":"expand"
);if(g.length&&!g.jqmData("collapsiblebound")){g.jqmData("collapsiblebound"
,!0).bind("expand",function(b){a(this).find(".ui-collapsible-contain").not
(a(b.target).closest(".ui-collapsible-contain")).not("> .ui-collapsible-contain .ui-collapsible-contain"
).trigger("collapse")});var h=g.find(":jqmData(role=collapsible)");h.first
().find("a:eq(0)").addClass("ui-corner-top").find(".ui-btn-inner").addClass
("ui-corner-top"),h.last().jqmData("collapsible-last",!0)}e.bind("vmouseup"
,function(a){e.is(".ui-collapsible-heading-collapsed")?d.trigger("expand"
):d.trigger("collapse"),a.preventDefault()}).bind("vclick",!1)}})}(jQuery
),function(a,b){a.fn.controlgroup=function(b){return this.each(function()
{function g(a){a.removeClass("ui-btn-corner-all ui-shadow").eq(0).addClass
(e[0]).end().filter(":last").addClass(e[1]).addClass("ui-controlgroup-last"
)}var c=a.extend({direction:a(this).jqmData("type")||"vertical",shadow:!1
},b),d=a(this).find(">legend"),e=c.direction=="horizontal"?["ui-corner-left"
,"ui-corner-right"]:["ui-corner-top","ui-corner-bottom"],f=a(this).find("input:eq(0)"
).attr("type");d.length&&(a(this).wrapInner('<div class="ui-controlgroup-controls"></div>'
),a('<div role="heading" class="ui-controlgroup-label">'+d.html()+"</div>"
).insertBefore(a(this).children(0)),d.remove()),a(this).addClass("ui-corner-all ui-controlgroup ui-controlgroup-"+
c.direction),g(a(this).find(".ui-btn")),g(a(this).find(".ui-btn-inner")),
c.shadow&&a(this).addClass("ui-shadow")})}}(jQuery),function(a,b){a.fn.fieldcontain=
function(a){return this.addClass("ui-field-contain ui-body ui-br")}}(jQuery
),function(a,b){a.widget("mobile.listview",a.mobile.widget,{options:{theme
:"c",countTheme:"c",headerTheme:"b",dividerTheme:"b",splitIcon:"arrow-r",
splitTheme:"b",inset:!1},_create:function(){var a=this.element,b=this.options
;a.addClass("ui-listview"),b.inset&&a.addClass("ui-listview-inset ui-corner-all ui-shadow"
),this._itemApply(a,a),this.refresh(!0)},_itemApply:function(b,c){c.find(".ui-li-count"
).addClass("ui-btn-up-"+(b.jqmData("counttheme")||this.options.countTheme
)+" ui-btn-corner-all"),c.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading"
),c.find("p, dl").addClass("ui-li-desc"),b.find("li").find(">img:eq(0), >:first>img:eq(0)"
).addClass("ui-li-thumb").each(function(){a(this).closest("li").addClass(
a(this).is(".ui-li-icon")?"ui-li-has-icon":"ui-li-has-thumb")});var d=c.find
(".ui-li-aside");d.length&&d.each(function(b,c){a(c).prependTo(a(c).parent
())});if(a.support.cssPseudoElement||!a.nodeName(c[0],"ol"))return},_removeCorners
:function(a){a.add(a.find(".ui-btn-inner, .ui-li-link-alt, .ui-li-thumb")
).removeClass("ui-corner-top ui-corner-bottom ui-corner-br ui-corner-bl ui-corner-tr ui-corner-tl"
)},refresh:function(b){this._createSubPages();var c=this.options,d=this.element
,e=this,f=d.jqmData("dividertheme")||c.dividerTheme,g=d.children("li"),h=
a.support.cssPseudoElement||!a.nodeName(d[0],"ol")?0:1;h&&d.find(".ui-li-dec"
).remove(),g.each(function(i){var j=a(this),k="ui-li";if(!b&&j.hasClass("ui-li"
))return;var l=j.jqmData("theme")||c.theme,m=j.find(">a");if(m.length){var n=
j.jqmData("icon");j.buttonMarkup({wrapperEls:"div",shadow:!1,corners:!1,iconpos
:"right",icon:m.length>1||n===!1?!1:n||"arrow-r",theme:l}),m.first().addClass
("ui-link-inherit");if(m.length>1){k+=" ui-li-has-alt";var p=m.last(),q=d
.jqmData("splittheme")||p.jqmData("theme")||c.splitTheme;p.appendTo(j).attr
("title",p.text()).addClass("ui-li-link-alt").empty().buttonMarkup({shadow
:!1,corners:!1,theme:l,icon:!1,iconpos:!1}).find(".ui-btn-inner").append(
a("<span>").buttonMarkup({shadow:!0,corners:!0,theme:q,iconpos:"notext",icon
:d.jqmData("spliticon")||p.jqmData("icon")||c.splitIcon}))}}else j.jqmData
("role")==="list-divider"?(k+=" ui-li-divider ui-btn ui-bar-"+f,j.attr("role"
,"heading"),h&&(h=1)):k+=" ui-li-static ui-body-"+l;c.inset&&(i===0&&(k+=" ui-corner-top"
,j.add(j.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-tr"
).end().find(".ui-li-thumb").addClass("ui-corner-tl"),j.next().next().length&&
e._removeCorners(j.next())),i===g.length-1&&(k+=" ui-corner-bottom",j.add
(j.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-br"
).end().find(".ui-li-thumb").addClass("ui-corner-bl"),j.prev().prev().length&&
e._removeCorners(j.prev())));if(h&&k.indexOf("ui-li-divider")<0){var r=j.
is(".ui-li-static:first")?j:j.find(".ui-link-inherit");r.addClass("ui-li-jsnumbering"
).prepend("<span class='ui-li-dec'>"+h++ +". </span>")}j.add(j.find(".ui-btn-inner"
)).addClass(k),b||e._itemApply(d,j)})},_idStringEscape:function(a){return a
.replace(/[^a-zA-Z0-9]/g,"-")},_createSubPages:function(){var b=this.element
,c=b.closest(".ui-page"),d=c.jqmData("url"),e=this.options,f=this,g=c.find
(":jqmData(role='footer')").jqmData("id");a(b.find("li>ul, li>ol").toArray
().reverse()).each(function(c){var h=a(this),i=h.parent(),j=a(h.prevAll()
.toArray().reverse()),j=j.length?j:a("<span>"+a.trim(i.contents()[0].nodeValue
)+"</span>"),k=j.first().text(),l=d+"&"+a.mobile.subPageUrlKey+"="+f._idStringEscape
(k+" "+c),m=h.jqmData("theme")||e.theme,n=h.jqmData("counttheme")||b.jqmData
("counttheme")||e.countTheme,p=h.wrap("<div data-"+a.mobile.ns+"role='page'><div data-"+
a.mobile.ns+"role='content'></div></div>").parent().before("<div data-"+a
.mobile.ns+"role='header' data-"+a.mobile.ns+"theme='"+e.headerTheme+"'><div class='ui-title'>"+
k+"</div></div>").after(g?a("<div data-"+a.mobile.ns+"role='footer'  data-"+
a.mobile.ns+"id='"+g+"'>"):"").parent().attr("data-"+a.mobile.ns+"url",l)
.attr("data-"+a.mobile.ns+"theme",m).attr("data-"+a.mobile.ns+"count-theme"
,n).appendTo(a.mobile.pageContainer);p.page();var q=i.find("a:first");q.length||
(q=a("<a></a>").html(j||k).prependTo(i.empty())),q.attr("href","#"+l)}).listview
()}})}(jQuery),function(a,b){a.mobile.listview.prototype.options.filter=!1
,a.mobile.listview.prototype.options.filterPlaceholder="Filter items...",
a(":jqmData(role='listview')").live("listviewcreate",function(){var b=a(this
),c=b.data("listview");if(!c.options.filter)return;var d=a("<form>",{"class"
:"ui-listview-filter ui-bar-c",role:"search"}),e=a("<input>",{placeholder
:c.options.filterPlaceholder}).attr("data-"+a.mobile.ns+"type","search").
bind("keyup change",function(){var c=this.value.toLowerCase(),d=b.children
();d.show();if(c){var e=!1,f;for(var g=d.length;g>=0;g--)f=a(d[g]),f.is("li:jqmData(role=list-divider)"
)?(e||f.hide(),e=!1):f.text().toLowerCase().indexOf(c)===-1?f.hide():e=!0
}}).appendTo(d).textinput();a(this).jqmData("inset")&&d.addClass("ui-listview-filter-inset"
),d.insertBefore(b)})}(jQuery),function(a,b){a.widget("mobile.dialog",a.mobile
.widget,{options:{closeBtnText:"Close"},_create:function(){var b=this,c=b
.element;this.element.attr("role","dialog").addClass("ui-page ui-dialog ui-body-a"
).find(":jqmData(role=header)").addClass("ui-corner-top ui-overlay-shadow"
).prepend("<a href='#' data-"+a.mobile.ns+"icon='delete' data-"+a.mobile.
ns+"rel='back' data-"+a.mobile.ns+"iconpos='notext'>"+this.options.closeBtnText+"</a>"
).end().find('.ui-content:not([class*="ui-body-"])').addClass("ui-body-c"
).end().find(".ui-content,:jqmData(role='footer')").last().addClass("ui-corner-bottom ui-overlay-shadow"
),this.element.bind("vclick submit",function(b){var c;b.type=="vclick"?c=
a(b.target).closest("a"):c=a(b.target).closest("form"),c.length&&!c.jqmData
("transition")&&c.attr("data-"+a.mobile.ns+"transition",a.mobile.urlHistory
.getActive().transition).attr("data-"+a.mobile.ns+"direction","reverse")}
)},close:function(){window.history.back()}})}(jQuery),function(a,b){a.widget
("mobile.navbar",a.mobile.widget,{options:{iconpos:"top",grid:null},_create
:function(){var c=this.element,d=c.find("a"),e=d.filter(":jqmData(icon)")
.length?this.options.iconpos:b;c.addClass("ui-navbar").attr("role","navigation"
).find("ul").grid({grid:this.options.grid}),e||c.addClass("ui-navbar-noicons"
),d.buttonMarkup({corners:!1,shadow:!1,iconpos:e}),c.delegate("a","vclick"
,function(b){d.not(".ui-state-persist").removeClass(a.mobile.activeBtnClass
),a(this).addClass(a.mobile.activeBtnClass)})}})}(jQuery),function(a,b){a
.fn.grid=function(b){return this.each(function(){var c=a.extend({grid:null
},b),d=a(this).children(),e={solo:1,a:2,b:3,c:4,d:5},f=c.grid,g;if(!f)if(
d.length<=5)for(var h in e)e[h]==d.length&&(f=h);else f="a";g=e[f],a(this
).addClass("ui-grid-"+f),d.filter(":nth-child("+g+"n+1)").addClass("ui-block-a"
),g>1&&d.filter(":nth-child("+g+"n+2)").addClass("ui-block-b"),g>2&&d.filter
(":nth-child(3n+3)").addClass("ui-block-c"),g>3&&d.filter(":nth-child(4n+4)"
).addClass("ui-block-d"),g>4&&d.filter(":nth-child(5n+5)").addClass("ui-block-e"
)})}}(jQuery),function(a,b,c){var d=a("html"),e=a("head"),f=a(b);a(b.document
).trigger("mobileinit");if(!a.mobile.gradeA())return;d.addClass("ui-mobile ui-mobile-rendering"
),a.mobile.metaViewportContent&&!e.find("meta[name='viewport']").length?a
("<meta>",{name:"viewport",content:a.mobile.metaViewportContent}).prependTo
(e):c;var g=a.mobile.loadingMessage?a("<div class='ui-loader ui-body-a ui-corner-all'><span class='ui-icon ui-icon-loading spin'></span><h1>"+
a.mobile.loadingMessage+"</h1>"+"</div>"):c;typeof g=="undefined"&&alert(
a.mobile.loadingMessage),a.extend(a.mobile,{pageLoading:function(c){if(c)
d.removeClass("ui-loading");else{if(a.mobile.loadingMessage){var e=a("."+
a.mobile.activeBtnClass).first();typeof g=="undefined"&&alert(a.mobile.loadingMessage
),g.appendTo(a.mobile.pageContainer).css({top:a.support.scrollTop&&a(b).scrollTop
()+a(b).height()/2||e.length&&e.offset().top||100})}d.addClass("ui-loading"
)}},initializePage:function(){var b=a(":jqmData(role='page')");b.add(":jqmData(role='dialog')"
).each(function(){var b=a(this);b.jqmData("url")||b.attr("data-"+a.mobile
.ns+"url",b.attr("id"))}),a.mobile.firstPage=b.first(),a.mobile.pageContainer=
b.first().parent().addClass("ui-mobile-viewport"),a.mobile.pageLoading(),!
a.mobile.hashListeningEnabled||!a.mobile.path.stripHash(location.hash)?a.
mobile.changePage(a.mobile.firstPage,!1,!0,!1,!0):f.trigger("hashchange",
[!0])}}),a(a.mobile.initializePage),f.load(a.mobile.silentScroll)}(jQuery
,this),function(){function a(a,h){var i=this,j=document,m;i.wrapper=typeof 
a=="object"?a:j.getElementById(a),i.wrapper.style.overflow="hidden",i.scroller=
i.wrapper.children[0],i.scroller.style.cssText+="-webkit-transition-property:-webkit-transform;-webkit-transform-origin:0 0;-webkit-transform:"+
k+"0,0"+l,i.scroller.style.cssText+="-webkit-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-webkit-transition-duration:0;"
,i.options={hScroll:!0,vScroll:!0,bounce:b,bounceLock:!1,momentum:b,lockDirection
:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:e,fadeScrollbar:d&&b||!c,hideScrollbar
:d||!c,scrollbarClass:"",onScrollStart:null,onScrollEnd:null};for(m in h)
i.options[m]=h[m];i.options.hScrollbar=i.options.hScroll&&i.options.hScrollbar
,i.options.vScrollbar=i.options.vScroll&&i.options.vScrollbar,i.refresh()
,i._bind(f,window),i._bind(g)}a.prototype={x:0,y:0,handleEvent:function(a
){var b=this;switch(a.type){case g:b._start(a);break;case h:b._move(a);break;
case i:case j:b._end(a);break;case"webkitTransitionEnd":b._transitionEnd(
a);break;case f:b._resize()}},_scrollbar:function(a){var b=this,c=document
,d;if(!b[a+"Scrollbar"]){b[a+"ScrollbarWrapper"]&&(b[a+"ScrollbarIndicator"
].style.webkitTransform="",b[a+"ScrollbarWrapper"].parentNode.removeChild
(b[a+"ScrollbarWrapper"]),b[a+"ScrollbarWrapper"]=null,b[a+"ScrollbarIndicator"
]=null);return}b[a+"ScrollbarWrapper"]||(d=c.createElement("div"),b.options
.scrollbarClass?d.className=b.options.scrollbarClass+a.toUpperCase():d.style
.cssText="position:absolute;z-index:100;"+(a=="h"?"height:7px;bottom:1px;left:2px;right:7px"
:"width:7px;bottom:7px;top:2px;right:1px"),d.style.cssText+="pointer-events:none;-webkit-transition-property:opacity;-webkit-transition-duration:"+
(b.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(b.options
.hideScrollbar?"0":"1"),b.wrapper.appendChild(d),b[a+"ScrollbarWrapper"]=
d,d=c.createElement("div"),b.options.scrollbarClass||(d.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-webkit-background-clip:padding-box;-webkit-box-sizing:border-box;"+
(a=="h"?"height:100%;-webkit-border-radius:4px 3px;":"width:100%;-webkit-border-radius:3px 4px;"
)),d.style.cssText+="pointer-events:none;-webkit-transition-property:-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-webkit-transition-duration:0;-webkit-transform:"+
k+"0,0"+l,b[a+"ScrollbarWrapper"].appendChild(d),b[a+"ScrollbarIndicator"
]=d),a=="h"?(b.hScrollbarSize=b.hScrollbarWrapper.clientWidth,b.hScrollbarIndicatorSize=
m.max(m.round(b.hScrollbarSize*b.hScrollbarSize/b.scrollerW),8),b.hScrollbarIndicator
.style.width=b.hScrollbarIndicatorSize+"px",b.hScrollbarMaxScroll=b.hScrollbarSize-
b.hScrollbarIndicatorSize,b.hScrollbarProp=b.hScrollbarMaxScroll/b.maxScrollX
):(b.vScrollbarSize=b.vScrollbarWrapper.clientHeight,b.vScrollbarIndicatorSize=
m.max(m.round(b.vScrollbarSize*b.vScrollbarSize/b.scrollerH),8),b.vScrollbarIndicator
.style.height=b.vScrollbarIndicatorSize+"px",b.vScrollbarMaxScroll=b.vScrollbarSize-
b.vScrollbarIndicatorSize,b.vScrollbarProp=b.vScrollbarMaxScroll/b.maxScrollY
),b._indicatorPos(a,!0)},_resize:function(){var a=this;setTimeout(function(
){a.refresh()},0)},_pos:function(a,b){var c=this;c.x=c.hScroll?a:0,c.y=c.
vScroll?b:0,c.scroller.style.webkitTransform=k+c.x+"px,"+c.y+"px"+l,c._indicatorPos
("h"),c._indicatorPos("v")},_indicatorPos:function(a,b){var c=this,d=a=="h"?
c.x:c.y;if(!c[a+"Scrollbar"])return;d=c[a+"ScrollbarProp"]*d,d<0?(d=c.options
.fixedScrollbar?0:d+d*3,c[a+"ScrollbarIndicatorSize"]+d<9&&(d=-c[a+"ScrollbarIndicatorSize"
]+8)):d>c[a+"ScrollbarMaxScroll"]&&(d=c.options.fixedScrollbar?c[a+"ScrollbarMaxScroll"
]:d+(d-c[a+"ScrollbarMaxScroll"])*3,c[a+"ScrollbarIndicatorSize"]+c[a+"ScrollbarMaxScroll"
]-d<9&&(d=c[a+"ScrollbarIndicatorSize"]+c[a+"ScrollbarMaxScroll"]-8)),c[a+"ScrollbarWrapper"
].style.webkitTransitionDelay="0",c[a+"ScrollbarWrapper"].style.opacity=b&&
c.options.hideScrollbar?"0":"1",c[a+"ScrollbarIndicator"].style.webkitTransform=
k+(a=="h"?d+"px,0":"0,"+d+"px")+l},_transitionTime:function(a){var b=this
;a+="ms",b.scroller.style.webkitTransitionDuration=a,b.hScrollbar&&(b.hScrollbarIndicator
.style.webkitTransitionDuration=a),b.vScrollbar&&(b.vScrollbarIndicator.style
.webkitTransitionDuration=a)},_start:function(a){var b=this,d=c?a.changedTouches
[0]:a,e;b.moved=!1,a.preventDefault(),b.moved=!1,b.distX=0,b.distY=0,b.absDistX=0
,b.absDistY=0,b.dirX=0,b.dirY=0,b.returnTime=0,b._transitionTime(0);if(b.
options.momentum){e=new WebKitCSSMatrix(window.getComputedStyle(b.scroller
,null).webkitTransform);if(e.m41!=b.x||e.m42!=b.y)b._unbind("webkitTransitionEnd"
),b._pos(e.m41,e.m42)}b.scroller.style.webkitTransitionTimingFunction="cubic-bezier(0.33,0.66,0.66,1)"
,b.hScrollbar&&(b.hScrollbarIndicator.style.webkitTransitionTimingFunction="cubic-bezier(0.33,0.66,0.66,1)"
),b.vScrollbar&&(b.vScrollbarIndicator.style.webkitTransitionTimingFunction="cubic-bezier(0.33,0.66,0.66,1)"
),b.startX=b.x,b.startY=b.y,b.pointX=d.pageX,b.pointY=d.pageY,b.startTime=
a.timeStamp,b.options.onScrollStart&&b.options.onScrollStart.call(b),b._bind
(h),b._bind(i),b._bind(j)},_move:function(a){if(c&&a.touches.length>1)return;
var b=this,d=c?a.changedTouches[0]:a,e=d.pageX-b.pointX,f=d.pageY-b.pointY
,g=b.x+e,h=b.y+f;a.preventDefault(),b.pointX=d.pageX,b.pointY=d.pageY;if(
g>0||g<b.maxScrollX)g=b.options.bounce?b.x+e/2.4:g>=0||b.maxScrollX>=0?0:
b.maxScrollX;if(h>0||h<b.maxScrollY)h=b.options.bounce?b.y+f/2.4:h>=0||b.
maxScrollY>=0?0:b.maxScrollY;if(b.absDistX<2&&b.absDistY<2){b.distX+=e,b.
distY+=f,b.absDistX=m.abs(b.distX),b.absDistY=m.abs(b.distY);return}b.options
.lockDirection&&(b.absDistX>b.absDistY+3?(h=b.y,f=0):b.absDistY>b.absDistX+3&&
(g=b.x,e=0)),b.moved=!0,b._pos(g,h),b.dirX=e>0?-1:e<0?1:0,b.dirY=f>0?-1:f<0?1
:0,a.timeStamp-b.startTime>300&&(b.startTime=a.timeStamp,b.startX=b.x,b.startY=
b.y)},_end:function(a){if(c&&a.touches.length!=0)return;var b=this,d=c?a.
changedTouches[0]:a,e,f,g={dist:0,time:0},k={dist:0,time:0},l=a.timeStamp-
b.startTime,n=b.x,o=b.y,p;b._unbind(h),b._unbind(i),b._unbind(j);if(!b.moved
){if(c){b.doubleTapTimer=null,e=d.target;while(e.nodeType!=1)e=e.parentNode
;f=document.createEvent("MouseEvents"),f.initMouseEvent("click",!0,!0,a.view
,1,d.screenX,d.screenY,d.clientX,d.clientY,a.ctrlKey,a.altKey,a.shiftKey,
a.metaKey,0,null),f._fake=!0,e.dispatchEvent(f)}b._resetPos();return}if(l<300&&
b.options.momentum){g=n?b._momentum(n-b.startX,l,-b.x,b.scrollerW-b.wrapperW+
b.x,b.options.bounce?b.wrapperW:0):g,k=o?b._momentum(o-b.startY,l,-b.y,b.
maxScrollY<0?b.scrollerH-b.wrapperH+b.y:0,b.options.bounce?b.wrapperH:0):
k,n=b.x+g.dist,o=b.y+k.dist;if(b.x>0&&n>0||b.x<b.maxScrollX&&n<b.maxScrollX
)g={dist:0,time:0};if(b.y>0&&o>0||b.y<b.maxScrollY&&o<b.maxScrollY)k={dist
:0,time:0}}if(g.dist||k.dist){p=m.max(m.max(g.time,k.time),10),b.scrollTo
(n,o,p);return}b._resetPos(200)},_resetPos:function(a){var b=this,c=b.x,d=
b.y;b.x>=0?c=0:b.x<b.maxScrollX&&(c=b.maxScrollX),b.y>=0||b.maxScrollY>0?
d=0:b.y<b.maxScrollY&&(d=b.maxScrollY);if(c==b.x&&d==b.y){b.moved&&(b.options
.onScrollEnd&&b.options.onScrollEnd.call(b),b.moved=!1),b.hScrollbar&&b.options
.hideScrollbar&&(b.hScrollbarWrapper.style.webkitTransitionDelay="300ms",
b.hScrollbarWrapper.style.opacity="0"),b.vScrollbar&&b.options.hideScrollbar&&
(b.vScrollbarWrapper.style.webkitTransitionDelay="300ms",b.vScrollbarWrapper
.style.opacity="0");return}a&&(b.scroller.style.webkitTransitionTimingFunction="cubic-bezier(0.33,0.0,0.33,1)"
,b.hScrollbar&&(b.hScrollbarIndicator.style.webkitTransitionTimingFunction="cubic-bezier(0.33,0.0,0.33,1)"
),b.vScrollbar&&(b.vScrollbarIndicator.style.webkitTransitionTimingFunction="cubic-bezier(0.33,0.0,0.33,1)"
)),b.scrollTo(c,d,a||0)},_transitionEnd:function(a){var b=this;a&&a.stopPropagation
(),b._unbind("webkitTransitionEnd"),b._resetPos(b.returnTime),b.returnTime=0
},_momentum:function(a,b,c,d,e){var f=this,g=6e-4,h=m.abs(a)/b,i=h*h/(2*g
),j=0,k=0;return a>0&&i>c?(k=e/(6/(i/h*g)),c+=k,f.returnTime=800/e*k+100,
h=h*c/i,i=c):a<0&&i>d&&(k=e/(6/(i/h*g)),d+=k,f.returnTime=800/e*k+100,h=h*
d/i,i=d),i*=a<0?-1:1,j=h/g,{dist:i,time:m.round(j)}},_offset:function(a,b
){var c=-a.offsetLeft,d=-a.offsetTop;if(!b)return{x:c,y:d};while(a=a.offsetParent
)c-=a.offsetLeft,d-=a.offsetTop;return{x:c,y:d}},_bind:function(a,b){(b||
this.scroller).addEventListener(a,this,!1)},_unbind:function(a,b){(b||this
.scroller).removeEventListener(a,this,!1)},destroy:function(){var a=this;
a.hScrollbar=!1,a.vScrollbar=!1,a._scrollbar("h"),a._scrollbar("v"),a.scroller
.style.webkitTransform="",a._unbind("webkitTransitionEnd"),a._unbind(f),a
._unbind(g),a._unbind(h),a._unbind(i),a._unbind(j)},refresh:function(){var a=
this;a.wrapperW=a.wrapper.clientWidth,a.wrapperH=a.wrapper.clientHeight,a
.scrollerW=a.scroller.offsetWidth,a.scrollerH=a.scroller.offsetHeight,a.maxScrollX=
a.wrapperW-a.scrollerW,a.maxScrollY=a.wrapperH-a.scrollerH,a.dirX=0,a.dirY=0
,a._transitionTime(0),a.hScroll=a.options.hScroll&&a.maxScrollX<0,a.vScroll=
a.options.vScroll&&(!a.options.bounceLock&&!a.hScroll||a.scrollerH>a.wrapperH
),a.hScrollbar=a.hScroll&&a.options.hScrollbar,a.vScrollbar=a.vScroll&&a.
options.vScrollbar&&a.scrollerH>a.wrapperH,a._scrollbar("h"),a._scrollbar
("v"),a._resetPos()},scrollTo:function(a,b,c,d){var e=this;d&&(a=e.x-a,b=
e.y-b),c=!c||m.round(e.x)==m.round(a)&&m.round(e.y)==m.round(b)?0:c,e.moved=!0
,c&&e._bind("webkitTransitionEnd"),e._transitionTime(c),e._pos(a,b),c||setTimeout
(function(){e._transitionEnd()},0)},scrollToElement:function(a,b){var c=this
,d;a=a.nodeType?a:c.scroller.querySelector(a);if(!a)return;d=c._offset(a)
,d.x=d.x>0?0:d.x<c.maxScrollX?c.maxScrollX:d.x,d.y=d.y>0?0:d.y<c.maxScrollY?
c.maxScrollY:d.y,b=b===undefined?m.max(m.abs(d.x)*2,m.abs(d.y)*2):b,c.scrollTo
(d.x,d.y,b)}};var b="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix
,c="ontouchstart"in window,d=/iphone|ipad/gi.test(navigator.appVersion),e=/android/gi
.test(navigator.appVersion),f="onorientationchange"in window?"orientationchange"
:"resize",g=c?"touchstart":"mousedown",h=c?"touchmove":"mousemove",i=c?"touchend"
:"mouseup",j=c?"touchcancel":"mouseup",k="translate"+(b?"3d(":"("),l=b?",0)"
:")",m=Math;typeof exports!="undefined"?exports.iScroll=a:window.iScroll=
a}(),jQuery(document).ready(function(){var a=jQuery("#mobile-logo");a.length&&
a.attr("src",a.data("src"))});