!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("THREE"),require("Clappr")):"function"==typeof define&&define.amd?define(["THREE","Clappr"],t):"object"==typeof exports?exports.Playback360=t(require("THREE"),require("Clappr")):e.Playback360=t(e.THREE,e.Clappr)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e,t,n){for(var r=!0;r;){var i=e,o=t,s=n;a=c=u=void 0,r=!1,null===i&&(i=Function.prototype);var a=Object.getOwnPropertyDescriptor(i,o);if(void 0!==a){if("value"in a)return a.value;var u=a.get;return void 0===u?void 0:u.call(s)}var c=Object.getPrototypeOf(i);if(null===c)return void 0;e=c,t=o,n=s,r=!0}};n(6);var u=n(7),c=n(3),h=r(c),l=(n(1),function(e){function t(e){i(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.$el.hide(),this.viewer=new h["default"]({video:this.el,height:e.height,width:e.width})}return o(t,e),s(t,[{key:"render",value:function(){var e=this;return a(Object.getPrototypeOf(t.prototype),"render",this).call(this),setTimeout(function(){e.el.parentElement.appendChild(e.viewer.render())},0),this}}]),t}(u.HTML5Video));t["default"]=l,l.canPlay=function(e){return(e||"").match(/#360$/)},e.exports=t["default"]},function(t,n){t.exports=e},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),s=function(){function e(t){r(this,e),this.video=t.video,this.width=t.width,this.height=t.height,this.isFullScreen=!1,this.angles=[1,2,3,4,5,6].map(function(){var e=document.createElement("canvas");return e.height=512,e.width=512,e}),this.frames=[[0,0],[512,0],[1024,0],[0,512],[512,512],[1024,512]]}return i(e,[{key:"onMouseUp",value:function(){this.isUserInteracting=!1,this.renderer.domElement.classList.remove("dragging")}},{key:"onMouseMove",value:function(e){this.isUserInteracting&&(this.lon=.2*(this.onPointerDownPointerX-e.clientX)+this.onPointerDownLon,this.lat=.2*(e.clientY-this.onPointerDownPointerY)+this.onPointerDownLat)}},{key:"onMouseDown",value:function(e){e.preventDefault(),this.isUserInteracting=!0,this.onPointerDownPointerX=e.clientX,this.onPointerDownPointerY=e.clientY,this.onPointerDownLon=this.lon,this.onPointerDownLat=this.lat,this.renderer.domElement.classList.add("dragging")}},{key:"onFullScreen",value:function(){this.isFullScreen?(this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)):(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)),this.isFullScreen=!this.isFullScreen}},{key:"render",value:function(){var e=this;this.contexts=this.angles.map(function(e){return e.getContext("2d")});var t=function s(){e.frames.forEach(function(t,n){e.contexts[n].clearRect(0,0,512,512),e.contexts[n].drawImage(e.video,t[0],t[1],512,512,0,0,512,512)}),requestAnimationFrame(s)};t(),this.isUserInteracting=!1,this.lon=90,this.lat=50,this.onMouseDownLon=0,this.onMouseDownLat=0,this.phi=0,this.theta=0,this.target=new o.Vector3,this.scene=new o.Scene,this.camera=new o.PerspectiveCamera(75,this.width/this.height,1,1100),this.renderer=new o.WebGLRenderer,this.renderer.setSize(this.width,this.height),this.renderer.domElement.addEventListener("mouseup",this.onMouseUp.bind(this),!1),this.renderer.domElement.addEventListener("mousemove",this.onMouseMove.bind(this),!1),this.renderer.domElement.addEventListener("mousedown",this.onMouseDown.bind(this),!1),document.addEventListener("webkitfullscreenchange",this.onFullScreen.bind(this),!1),document.addEventListener("fullscreenchange",this.onFullScreen.bind(this),!1),document.addEventListener("MSFullscreenChange",this.onFullScreen.bind(this),!1),document.addEventListener("mozfullscreenchange",this.onFullScreen.bind(this),!1),this.materials=this.angles.map(function(e){return new o.MeshBasicMaterial({map:new o.Texture(e),overdraw:1})}),this.geometry=new o.BoxGeometry(300,300,300,7,7,7),this.material=new o.MeshFaceMaterial(this.materials),this.cube=new o.Mesh(this.geometry,this.material),window.cube=this.cube,window.camera=this.camera,this.cube.scale.x=-1,this.scene.add(this.cube);for(var n=0;n<this.cube.geometry.vertices.length;n++){var r=this.cube.geometry.vertices[n];r.normalize(),r.multiplyScalar(500)}var i=function a(){e.materials.forEach(function(e){e.map.needsUpdate=!0}),e.lat=Math.max(-90,Math.min(90,e.lat)),e.phi=o.Math.degToRad(135-e.lat),e.theta=o.Math.degToRad(e.lon),e.target.x=200*Math.sin(e.phi)*Math.cos(e.theta),e.target.y=200*Math.cos(e.phi),e.target.z=200*Math.sin(e.phi)*Math.sin(e.theta),e.camera.position.copy(e.target).negate(),e.camera.lookAt(e.target),e.renderer.render(e.scene,e.camera),requestAnimationFrame(a)};return this.renderer.domElement.classList.add("draggable"),i(),this.renderer.domElement}}]),e}();t["default"]=s,e.exports=t["default"]},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,"canvas.draggable{cursor:-webkit-grab;cursor:grab}canvas.dragging{cursor:-webkit-grabbing;cursor:grabbing}",""])},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=f[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(c(r.parts[o],t))}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(c(r.parts[o],t));f[r.id]={id:r.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],s=i[1],a=i[2],u=i[3],c={css:s,media:a,sourceMap:u};n[o]?n[o].parts.push(c):t.push(n[o]={id:o,parts:[c]})}return t}function o(e,t){var n=m(),r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function c(e,t){var n,r,i;if(t.singleton){var o=b++;n=g||(g=a(t)),r=h.bind(null,n,o,!1),i=h.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=d.bind(null,n),i=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=l.bind(null,n),i=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function h(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function l(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var f={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=p(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,b=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],s=0;s<n.length;s++){var a=n[s],u=f[a.id];u.refs--,o.push(u)}if(e){var c=i(e);r(c,t)}for(var s=0;s<o.length;s++){var u=o[s];if(0===u.refs){for(var h=0;h<u.parts.length;h++)u.parts[h]();delete f[u.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.id,r,""]]);n(5)(r,{});r.locals&&(e.exports=r.locals)},function(e,n){e.exports=t}])});