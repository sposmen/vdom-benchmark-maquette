!function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var d="function"==typeof require&&require;if(!a&&d)return d(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){"use strict";function r(e){return e.children?a("div",{key:e.key},e.children.map(r)):a("span",{key:e.key},[e.key])}function o(e,t,n){this.container=e,this.a=t,this.b=n,this.projection=null}var i=e("vdom-benchmark-base"),s=e("maquette"),a=s.h,d="maquette",u="2.3.2";o.prototype.setUp=function(){},o.prototype.tearDown=function(){this.projection.update(a("div.container",[]))},o.prototype.render=function(){this.projection=s.dom.create(a("div.container",this.a.map(r))),this.container.appendChild(this.projection.domNode)},o.prototype.update=function(){this.projection.update(a("div.container",this.b.map(r)))},document.addEventListener("DOMContentLoaded",function(e){i(d,u,o)},!1)},{maquette:2,"vdom-benchmark-base":5}],2:[function(e,t,n){!function(e,t){"function"==typeof define&&define.amd?define(["exports"],t):t("object"==typeof n&&"string"!=typeof n.nodeName?n:e.maquette={})}(this,function(e){var t,n,r="http://www.w3.org/",o=r+"2000/svg",i=r+"1999/xlink",s=[],a=function(e,t){var n={};return Object.keys(e).forEach(function(t){n[t]=e[t]}),t&&Object.keys(t).forEach(function(e){n[e]=t[e]}),n},d=function(e,t){return e.vnodeSelector!==t.vnodeSelector?!1:e.properties&&t.properties?e.properties.key!==t.properties.key?!1:e.properties.bind===t.properties.bind:!e.properties&&!t.properties},u=function(e){return{vnodeSelector:"",properties:void 0,children:void 0,text:e.toString(),domNode:null}},c=function(e,t,n){for(var r=0;r<t.length;r++){var o=t[r];Array.isArray(o)?c(e,o,n):null!==o&&void 0!==o&&(o.hasOwnProperty("vnodeSelector")||(o=u(o)),n.push(o))}},p=function(){throw new Error("Provide a transitions object to the projectionOptions to do animations")},l={namespace:void 0,eventHandlerInterceptor:void 0,styleApplyer:function(e,t,n){e.style[t]=n},transitions:{enter:p,exit:p}},f=function(e){return a(l,e)},h=function(e){if("string"!=typeof e)throw new Error("Style values must be strings")},v=function(e,t,n){if(t)for(var r=n.eventHandlerInterceptor,s=Object.keys(t),a=s.length,d=0;a>d;d++){var u=s[d],c=t[u];if("className"===u)throw new Error('Property "className" is not supported, use "class".');if("class"===u)c.split(/\s+/).forEach(function(t){return e.classList.add(t)});else if("classes"===u)for(var p=Object.keys(c),l=p.length,f=0;l>f;f++){var v=p[f];c[v]&&e.classList.add(v)}else if("styles"===u)for(var m=Object.keys(c),y=m.length,f=0;y>f;f++){var g=m[f],w=c[g];w&&(h(w),n.styleApplyer(e,g,w))}else{if("key"===u)continue;if(null===c||void 0===c)continue;var b=typeof c;"function"===b?0===u.lastIndexOf("on",0)&&(r&&(c=r(u,c,e,t)),"oninput"===u&&!function(){var e=c;c=function(t){t.target["oninput-value"]=t.target.value,e.apply(this,[t])}}(),e[u]=c):"string"===b&&"value"!==u&&"innerHTML"!==u?n.namespace===o&&"href"===u?e.setAttributeNS(i,u,c):e.setAttribute(u,c):e[u]=c}}},m=function(e,t,n,r){if(n){for(var s=!1,a=Object.keys(n),d=a.length,u=0;d>u;u++){var c=a[u],p=n[c],l=t[c];if("class"===c){if(l!==p)throw new Error('"class" property may not be updated. Use the "classes" property for conditional css classes.')}else if("classes"===c)for(var f=e.classList,v=Object.keys(p),m=v.length,y=0;m>y;y++){var g=v[y],w=!!p[g],b=!!l[g];w!==b&&(s=!0,w?f.add(g):f.remove(g))}else if("styles"===c)for(var N=Object.keys(p),_=N.length,y=0;_>y;y++){var S=N[y],k=p[S],E=l[S];k!==E&&(s=!0,k?(h(k),r.styleApplyer(e,S,k)):r.styleApplyer(e,S,""))}else if(p||"string"!=typeof l||(p=""),"value"===c)e[c]!==p&&e["oninput-value"]!==p&&(e[c]=p,e["oninput-value"]=void 0),p!==l&&(s=!0);else if(p!==l){var x=typeof p;if("function"===x)throw new Error("Functions may not be updated on subsequent renders (property: "+c+"). Hint: declare event handler functions outside the render() function.");"string"===x&&"innerHTML"!==c?r.namespace===o&&"href"===c?e.setAttributeNS(i,c,p):e.setAttribute(c,p):e[c]!==p&&(e[c]=p),s=!0}}return s}},y=function(e,t,n){if(""!==t.vnodeSelector)for(var r=n;r<e.length;r++)if(d(e[r],t))return r;return-1},g=function(e,t){if(e.properties){var n=e.properties.enterAnimation;n&&("function"==typeof n?n(e.domNode,e.properties):t.enter(e.domNode,e.properties,n))}},w=function(e,t){var n=e.domNode;if(e.properties){var r=e.properties.exitAnimation;if(r){n.style.pointerEvents="none";var o=function(){n.parentNode&&n.parentNode.removeChild(n)};return"function"==typeof r?void r(n,o,e.properties):void t.exit(e.domNode,e.properties,r,o)}}n.parentNode&&n.parentNode.removeChild(n)},b=function(e,t,n,r){var o=e[t];if(""!==o.vnodeSelector){var i=o.properties,s=i?void 0===i.key?i.bind:i.key:void 0;if(!s)for(var a=0;a<e.length;a++)if(a!==t){var u=e[a];if(d(u,o))throw"added"===r?new Error(n.vnodeSelector+" had a "+o.vnodeSelector+" child added, but there is now more than one. You must add unique key properties to make them distinguishable."):new Error(n.vnodeSelector+" had a "+o.vnodeSelector+" child removed, but there were more than one. You must add unique key properties to make them distinguishable.")}}},N=function(e,r,o,i,a){if(o===i)return!1;o=o||s,i=i||s;for(var u,c=o.length,p=i.length,l=a.transitions,f=0,h=0,v=!1;p>h;){var m=c>f?o[f]:void 0,N=i[h];if(void 0!==m&&d(m,N))v=n(m,N,a)||v,f++;else{var _=y(o,N,f+1);if(_>=0){for(u=f;_>u;u++)w(o[u],l),b(o,u,e,"removed");v=n(o[_],N,a)||v,f=_+1}else t(N,r,c>f?o[f].domNode:void 0,a),g(N,l),b(i,h,e,"added")}h++}if(c>f)for(u=f;c>u;u++)w(o[u],l),b(o,u,e,"removed");return v},_=function(e,n,r){if(n)for(var o=0;o<n.length;o++)t(n[o],e,void 0,r)},S=function(e,t,n){_(e,t.children,n),t.text&&(e.textContent=t.text),v(e,t.properties,n),t.properties&&t.properties.afterCreate&&t.properties.afterCreate(e,n,t.vnodeSelector,t.properties,t.children)};t=function(e,t,n,r){var i,s,d,u,c,p=0,l=e.vnodeSelector;if(""===l)i=e.domNode=document.createTextNode(e.text),void 0!==n?t.insertBefore(i,n):t.appendChild(i);else{for(s=0;s<=l.length;++s)d=l.charAt(s),s!==l.length&&"."!==d&&"#"!==d||(u=l.charAt(p-1),c=l.slice(p,s),"."===u?i.classList.add(c):"#"===u?i.id=c:("svg"===c&&(r=a(r,{namespace:o})),i=void 0!==r.namespace?e.domNode=document.createElementNS(r.namespace,c):e.domNode=document.createElement(c),void 0!==n?t.insertBefore(i,n):t.appendChild(i)),p=s+1);S(i,e,r)}},n=function(e,t,n){var r=e.domNode,i=!1;if(e===t)return!1;var s=!1;if(""===t.vnodeSelector){if(t.text!==e.text){var d=document.createTextNode(t.text);return r.parentNode.replaceChild(d,r),t.domNode=d,i=!0}}else 0===t.vnodeSelector.lastIndexOf("svg",0)&&(n=a(n,{namespace:o})),e.text!==t.text&&(s=!0,void 0===t.text?r.removeChild(r.firstChild):r.textContent=t.text),s=N(t,r,e.children,t.children,n)||s,s=m(r,e.properties,t.properties,n)||s,t.properties&&t.properties.afterUpdate&&t.properties.afterUpdate(r,n,t.vnodeSelector,t.properties,t.children);return s&&t.properties&&t.properties.updateAnimation&&t.properties.updateAnimation(r,t.properties,e.properties),t.domNode=e.domNode,i};var k=function(e,t){return{update:function(r){if(e.vnodeSelector!==r.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");n(e,r,t),e=r},domNode:e.domNode}};e.h=function(e){var t=arguments[1];if("string"!=typeof e)throw new Error;var n=1;!t||t.hasOwnProperty("vnodeSelector")||Array.isArray(t)||"object"!=typeof t?t=void 0:n=2;var r=void 0,o=void 0,i=arguments.length;if(i===n+1){var s=arguments[n];"string"==typeof s?r=s:void 0!==s&&null!==s&&1===s.length&&"string"==typeof s[0]&&(r=s[0])}if(void 0===r)for(o=[];n<arguments.length;n++){var a=arguments[n];null!==a&&void 0!==a&&(Array.isArray(a)?c(e,a,o):a.hasOwnProperty("vnodeSelector")?o.push(a):o.push(u(a)))}return{vnodeSelector:e,properties:t,children:o,text:""===r?void 0:r,domNode:null}},e.dom={create:function(e,n){return n=f(n),t(e,document.createElement("div"),void 0,n),k(e,n)},append:function(e,n,r){return r=f(r),t(n,e,void 0,r),k(n,r)},insertBefore:function(e,n,r){return r=f(r),t(n,e.parentNode,e,r),k(n,r)},merge:function(e,t,n){return n=f(n),t.domNode=e,S(e,t,n),k(t,n)}},e.createCache=function(){var e=void 0,t=void 0,n={invalidate:function(){t=void 0,e=void 0},result:function(n,r){if(e)for(var o=0;o<n.length;o++)e[o]!==n[o]&&(t=void 0);return t||(t=r(),e=n),t}};return n},e.createMapping=function(e,t,n){var r=[],o=[];return{results:o,map:function(i){for(var s=i.map(e),a=o.slice(),d=0,u=0;u<i.length;u++){var c=i[u],p=s[u];if(p===r[d])o[u]=a[d],n(c,a[d],u),d++;else{for(var l=!1,f=1;f<r.length+1;f++){var h=(d+f)%r.length;if(r[h]===p){o[u]=a[h],n(i[u],a[h],u),d=h+1,l=!0;break}}l||(o[u]=t(c,u))}}o.length=i.length,r=s}}},e.createProjector=function(n){var r,o=f(n);o.eventHandlerInterceptor=function(e,t,n,o){return function(){return r.scheduleRender(),t.apply(o.bind||this,arguments)}};var i,s=!0,a=!1,d=[],u=[],c=function(){if(i=void 0,s){s=!1;for(var e=0;e<d.length;e++){var t=u[e]();d[e].update(t)}s=!0}};return r={scheduleRender:function(){i||a||(i=requestAnimationFrame(c))},stop:function(){i&&(cancelAnimationFrame(i),i=void 0),a=!0},resume:function(){a=!1,s=!0,r.scheduleRender()},append:function(t,n){d.push(e.dom.append(t,n(),o)),u.push(n)},insertBefore:function(t,n){d.push(e.dom.insertBefore(t,n(),o)),u.push(n)},merge:function(t,n){d.push(e.dom.merge(t,n(),o)),u.push(n)},replace:function(e,n){var r=n();t(r,e.parentNode,e,o),e.parentNode.removeChild(e),d.push(k(r,o)),u.push(n)},detach:function(e){for(var t=0;t<u.length;t++)if(u[t]===e)return u.splice(t,1),d.splice(t,1)[0];throw new Error("renderMaquetteFunction was not found")}}}})},{}],3:[function(e,t,n){"use strict";function r(){this.running=!1,this.impl=null,this.tests=null,this.reportCallback=null,this.enableTests=!1,this.container=document.createElement("div"),this._runButton=document.getElementById("RunButton"),this._iterationsElement=document.getElementById("Iterations"),this._reportElement=document.createElement("pre"),document.body.appendChild(this.container),document.body.appendChild(this._reportElement);var e=this;this._runButton.addEventListener("click",function(t){if(t.preventDefault(),!e.running){var n=parseInt(e._iterationsElement.value);0>=n&&(n=10),e.run(n)}},!1),this.ready(!0)}var o=e("./executor");r.prototype.ready=function(e){e?this._runButton.disabled="":this._runButton.disabled="true"},r.prototype.run=function(e){var t=this;this.running=!0,this.ready(!1),new o(t.impl,t.container,t.tests,1,function(){new o(t.impl,t.container,t.tests,e,function(e){t._reportElement.textContent=JSON.stringify(e,null," "),t.running=!1,t.ready(!0),null!=t.reportCallback&&t.reportCallback(e)},void 0,!1).start()},void 0,this.enableTests).start()},t.exports=r},{"./executor":4}],4:[function(e,t,n){"use strict";function r(e){var t,n,o,i,s,a=[];for(o=0;o<e.length;o++)if(s=e[o],null!==s.children){for(i=document.createElement("div"),n=r(s.children),t=0;t<n.length;t++)i.appendChild(n[t]);a.push(i)}else i=document.createElement("span"),i.textContent=s.key.toString(),a.push(i);return a}function o(e,t,n){for(var o=document.createElement("div"),i=document.createElement("div"),s=r(t),a=0;a<s.length;a++)i.appendChild(s[a]);o.appendChild(i),o.innerHTML!==n.innerHTML&&(console.log("error in test: "+e),console.log("container.innerHTML:"),console.log(n.innerHTML),console.log("should be:"),console.log(o.innerHTML))}function i(e,t,n,r,o,i,s){void 0===i&&(i=null),this.impl=e,this.container=t,this.tests=n,this.iterations=r,this.cb=o,this.iterCb=i,this.enableTests=s,this._currentTest=0,this._currentIter=0,this._renderSamples=[],this._updateSamples=[],this._result=[],this._tasksCount=n.length*r,this._iter=this.iter.bind(this)}i.prototype.start=function(){this._iter()},i.prototype.finished=function(){this.cb(this._result)},i.prototype.progress=function(){if(0===this._currentTest&&0===this._currentIter)return 0;var e=this.tests;return(this._currentTest*e.length+this._currentIter)/(e.length*this.iterataions)},i.prototype.iter=function(){null!=this.iterCb&&this.iterCb(this);var e=this.tests;if(this._currentTest<e.length){var t=e[this._currentTest];if(this._currentIter<this.iterations){var n,r,i,s;n=new this.impl(this.container,t.data.a,t.data.b),n.setUp(),r=window.performance.now(),n.render(),i=window.performance.now()-r,this.enableTests&&o(t.name+"render()",t.data.a,this.container),r=window.performance.now(),n.update(),s=window.performance.now()-r,this.enableTests&&o(t.name+"update()",t.data.b,this.container),n.tearDown(),this._renderSamples.push(i),this._updateSamples.push(s),this._currentIter++}else this._result.push({name:t.name+" render()",data:this._renderSamples.slice(0)}),this._result.push({name:t.name+" update()",data:this._updateSamples.slice(0)}),this._currentTest++,this._currentIter=0,this._renderSamples=[],this._updateSamples=[];setTimeout(this._iter,0)}else this.finished()},t.exports=i},{}],5:[function(e,t,n){"use strict";function r(e,t){var n=document.createElement("script");n.src=e,n.onload=function(){a.tests=window.generateBenchmarkData().units,a.ready(!0)},document.head.appendChild(n)}function o(e,t,n,r){window.addEventListener("message",function(o){var i=o.data,s=i.type;"tests"===s?(a.tests=i.data,a.reportCallback=function(o){e.postMessage({type:"report",data:{name:t,version:n,samples:o},id:r},"*")},a.ready(!0),e.postMessage({type:"ready",data:null,id:r},"*")):"run"===s&&a.run(i.data.iterations)},!1),e.postMessage({type:"init",data:null,id:r},"*")}function i(e,t,n){var i=function(e){if(""==e)return{};for(var t={},n=0;n<e.length;++n){var r=e[n].split("=",2);1==r.length?t[r[0]]="":t[r[0]]=decodeURIComponent(r[1].replace(/\+/g," "))}return t}(window.location.search.substr(1).split("&"));void 0!==i.name&&(e=i.name),void 0!==i.version&&(t=i.version);var s=i.type;void 0!==i.test&&(a.enableTests=!0,console.log("tests enabled"));var d;if("iframe"===s)d=i.id,void 0===d&&(d=null),o(window.parent,e,t,d);else if("window"===s)null!=window.opener?(d=i.id,void 0===d&&(d=null),o(window.opener,e,t,d)):console.log("Failed to initialize: opener window is NULL");else{var u=i.data;void 0!==u?r(u):console.log("Failed to initialize: cannot load tests data")}a.impl=n}var s=e("./benchmark"),a=new s;if("undefined"==typeof window.performance&&(window.performance={}),!window.performance.now){var d=Date.now();performance.timing&&performance.timing.navigationStart&&(d=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-d}}t.exports=i},{"./benchmark":3}]},{},[1]);
//# sourceMappingURL=main.js.map
