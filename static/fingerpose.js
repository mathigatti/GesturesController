!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.fp=r():t.fp=r()}("undefined"!=typeof self?self:this,(function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){"use strict";e.r(r);var n={};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(n),e.d(n,"ZeroGesture",(function(){return P})),e.d(n,"OneGesture",(function(){return A})),e.d(n,"TwoGesture",(function(){return _})),e.d(n,"ThreeGesture",(function(){return j})),e.d(n,"FourGesture",(function(){return F})),e.d(n,"FiveGesture",(function(){return H})),e.d(n,"RockGesture",(function(){return x}));var a={Thumb:0,Index:1,Middle:2,Ring:3,Pinky:4,all:[0,1,2,3,4],nameMapping:{0:"Thumb",1:"Index",2:"Middle",3:"Ring",4:"Pinky"},pointsMapping:{0:[[0,1],[1,2],[2,3],[3,4]],1:[[0,5],[5,6],[6,7],[7,8]],2:[[0,9],[9,10],[10,11],[11,12]],3:[[0,13],[13,14],[14,15],[15,16]],4:[[0,17],[17,18],[18,19],[19,20]]},getName:function(t){return void 0!==i(this.nameMapping[t])&&this.nameMapping[t]},getPoints:function(t){return void 0!==i(this.pointsMapping[t])&&this.pointsMapping[t]}},o={NoCurl:0,HalfCurl:1,FullCurl:2,nameMapping:{0:"No Curl",1:"Half Curl",2:"Full Curl"},getName:function(t){return void 0!==i(this.nameMapping[t])&&this.nameMapping[t]}},l={VerticalUp:0,VerticalDown:1,HorizontalLeft:2,HorizontalRight:3,DiagonalUpRight:4,DiagonalUpLeft:5,DiagonalDownRight:6,DiagonalDownLeft:7,nameMapping:{0:"Vertical Up",1:"Vertical Down",2:"Horizontal Left",3:"Horizontal Right",4:"Diagonal Up Right",5:"Diagonal Up Left",6:"Diagonal Down Right",7:"Diagonal Down Left"},getName:function(t){return void 0!==i(this.nameMapping[t])&&this.nameMapping[t]}};function u(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return f(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return o=t.done,t},e:function(t){l=!0,a=t},f:function(){try{o||null==e.return||e.return()}finally{if(l)throw a}}}}function f(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function c(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?c(Object(e),!0).forEach((function(r){d(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function d(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function h(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var y=function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=s(s({},{HALF_CURL_START_LIMIT:60,NO_CURL_START_LIMIT:130,DISTANCE_VOTE_POWER:1.1,SINGLE_ANGLE_VOTE_POWER:.9,TOTAL_ANGLE_VOTE_POWER:1.6}),r)}var r,e,n;return r=t,(e=[{key:"estimate",value:function(t){var r,e=[],n=[],i=u(a.all);try{for(i.s();!(r=i.n()).done;){var o,l=r.value,f=a.getPoints(l),c=[],s=[],d=u(f);try{for(d.s();!(o=d.n()).done;){var h=o.value,y=t[h[0]],p=t[h[1]],v=this.getSlopes(y,p),g=v[0],m=v[1];c.push(g),s.push(m)}}catch(t){d.e(t)}finally{d.f()}e.push(c),n.push(s)}}catch(t){i.e(t)}finally{i.f()}var C,b=[],w=[],O=u(a.all);try{for(O.s();!(C=O.n()).done;){var M=C.value,T=M==a.Thumb?1:0,S=a.getPoints(M),D=t[S[T][0]],P=t[S[T+1][1]],R=t[S[3][1]],A=this.estimateFingerCurl(D,P,R),N=this.calculateFingerDirection(D,P,R,e[M].slice(T));b[M]=A,w[M]=N}}catch(t){O.e(t)}finally{O.f()}return{curls:b,directions:w}}},{key:"getSlopes",value:function(t,r){var e=this.calculateSlope(t[0],t[1],r[0],r[1]);return 2==t.length?e:[e,this.calculateSlope(t[1],t[2],r[1],r[2])]}},{key:"angleOrientationAt",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=0,n=0,i=0;return t>=75&&t<=105?e=1*r:t>=25&&t<=155?n=1*r:i=1*r,[e,n,i]}},{key:"estimateFingerCurl",value:function(t,r,e){var n=t[0]-r[0],i=t[0]-e[0],a=r[0]-e[0],l=t[1]-r[1],u=t[1]-e[1],f=r[1]-e[1],c=t[2]-r[2],s=t[2]-e[2],d=r[2]-e[2],h=Math.sqrt(n*n+l*l+c*c),y=Math.sqrt(i*i+u*u+s*s),p=Math.sqrt(a*a+f*f+d*d),v=(p*p+h*h-y*y)/(2*p*h);v>1?v=1:v<-1&&(v=-1);var g=Math.acos(v);return(g=57.2958*g%180)>this.options.NO_CURL_START_LIMIT?o.NoCurl:g>this.options.HALF_CURL_START_LIMIT?o.HalfCurl:o.FullCurl}},{key:"estimateHorizontalDirection",value:function(t,r,e,n){return n==Math.abs(t)?t>0?l.HorizontalLeft:l.HorizontalRight:n==Math.abs(r)?r>0?l.HorizontalLeft:l.HorizontalRight:e>0?l.HorizontalLeft:l.HorizontalRight}},{key:"estimateVerticalDirection",value:function(t,r,e,n){return n==Math.abs(t)?t<0?l.VerticalDown:l.VerticalUp:n==Math.abs(r)?r<0?l.VerticalDown:l.VerticalUp:e<0?l.VerticalDown:l.VerticalUp}},{key:"estimateDiagonalDirection",value:function(t,r,e,n,i,a,o,u){var f=this.estimateVerticalDirection(t,r,e,n),c=this.estimateHorizontalDirection(i,a,o,u);return f==l.VerticalUp?c==l.HorizontalLeft?l.DiagonalUpLeft:l.DiagonalUpRight:c==l.HorizontalLeft?l.DiagonalDownLeft:l.DiagonalDownRight}},{key:"calculateFingerDirection",value:function(t,r,e,n){var i=t[0]-r[0],a=t[0]-e[0],o=r[0]-e[0],l=t[1]-r[1],f=t[1]-e[1],c=r[1]-e[1],s=Math.max(Math.abs(i),Math.abs(a),Math.abs(o)),d=Math.max(Math.abs(l),Math.abs(f),Math.abs(c)),h=0,y=0,p=0,v=d/(s+1e-5);v>1.5?h+=this.options.DISTANCE_VOTE_POWER:v>.66?y+=this.options.DISTANCE_VOTE_POWER:p+=this.options.DISTANCE_VOTE_POWER;var g=Math.sqrt(i*i+l*l),m=Math.sqrt(a*a+f*f),C=Math.sqrt(o*o+c*c),b=Math.max(g,m,C),w=t[0],O=t[1],M=e[0],T=e[1];b==g?(M=e[0],T=e[1]):b==C&&(w=r[0],O=r[1]);var S=[w,O],D=[M,T],P=this.getSlopes(S,D),R=this.angleOrientationAt(P,this.options.TOTAL_ANGLE_VOTE_POWER);h+=R[0],y+=R[1],p+=R[2];var A,N=u(n);try{for(N.s();!(A=N.n()).done;){var _=A.value,k=this.angleOrientationAt(_,this.options.SINGLE_ANGLE_VOTE_POWER);h+=k[0],y+=k[1],p+=k[2]}}catch(t){N.e(t)}finally{N.f()}return h==Math.max(h,y,p)?this.estimateVerticalDirection(f,l,c,d):p==Math.max(y,p)?this.estimateHorizontalDirection(a,i,o,s):this.estimateDiagonalDirection(f,l,c,d,a,i,o,s)}},{key:"calculateSlope",value:function(t,r,e,n){var i=(r-n)/(t-e),a=180*Math.atan(i)/Math.PI;return a<=0?a=-a:a>0&&(a=180-a),a}}])&&h(r.prototype,e),n&&h(r,n),t}();function p(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return v(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return v(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return o=t.done,t},e:function(t){l=!0,a=t},f:function(){try{o||null==e.return||e.return()}finally{if(l)throw a}}}}function v(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function g(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function m(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var C=function(){function t(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};g(this,t),this.estimator=new y(e),this.gestures=r}var r,e,n;return r=t,(e=[{key:"estimate",value:function(t,r){var e,n=[],i=this.estimator.estimate(t),u=[],f=p(a.all);try{for(f.s();!(e=f.n()).done;){var c=e.value;u.push([a.getName(c),o.getName(i.curls[c]),l.getName(i.directions[c])])}}catch(t){f.e(t)}finally{f.f()}var s,d=p(this.gestures);try{for(d.s();!(s=d.n()).done;){var h=s.value,y=h.matchAgainst(i.curls,i.directions);y>=r&&n.push({name:h.name,confidence:y})}}catch(t){d.e(t)}finally{d.f()}return{poseData:u,gestures:n}}}])&&m(r.prototype,e),n&&m(r,n),t}();function b(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,i=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done)&&(e.push(o.value),!r||e.length!==r);n=!0);}catch(t){i=!0,a=t}finally{try{n||null==l.return||l.return()}finally{if(i)throw a}}return e}(t,r)||O(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=O(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return o=t.done,t},e:function(t){l=!0,a=t},f:function(){try{o||null==e.return||e.return()}finally{if(l)throw a}}}}function O(t,r){if(t){if("string"==typeof t)return M(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?M(t,r):void 0}}function M(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function T(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var S=function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=r,this.curls={},this.directions={},this.weights=[1,1,1,1,1],this.weightsRelative=[1,1,1,1,1]}var r,e,n;return r=t,(e=[{key:"addCurl",value:function(t,r,e){void 0===this.curls[t]&&(this.curls[t]=[]),this.curls[t].push([r,e])}},{key:"addDirection",value:function(t,r,e){void 0===this.directions[t]&&(this.directions[t]=[]),this.directions[t].push([r,e])}},{key:"setWeight",value:function(t,r){this.weights[t]=r;var e=this.weights.reduce((function(t,r){return t+r}),0);this.weightsRelative=this.weights.map((function(t){return 5*t/e}))}},{key:"matchAgainst",value:function(t,r){var e=0;for(var n in t){var i=t[n],a=this.curls[n];if(void 0!==a){var o,l=w(a);try{for(l.s();!(o=l.n()).done;){var u=b(o.value,2),f=u[0],c=u[1];if(i==f){e+=c*this.weightsRelative[n];break}}}catch(t){l.e(t)}finally{l.f()}}else e+=this.weightsRelative[n]}for(var s in r){var d=r[s],h=this.directions[s];if(void 0!==h){var y,p=w(h);try{for(p.s();!(y=p.n()).done;){var v=b(y.value,2),g=v[0],m=v[1];if(d==g){e+=m*this.weightsRelative[s];break}}}catch(t){p.e(t)}finally{p.f()}}else e+=this.weightsRelative[s]}return e}}])&&T(r.prototype,e),n&&T(r,n),t}(),D=new S("0");D.addCurl(a.Thumb,o.HalfCurl,1),D.addCurl(a.Thumb,o.FullCurl,1),D.addCurl(a.Index,o.FullCurl,1),D.addCurl(a.Middle,o.FullCurl,1),D.addCurl(a.Ring,o.FullCurl,1),D.addCurl(a.Pinky,o.FullCurl,1);var P=D,R=new S("1");R.addCurl(a.Thumb,o.HalfCurl,1),R.addCurl(a.Thumb,o.FullCurl,1),R.addCurl(a.Index,o.NoCurl,1),R.addCurl(a.Middle,o.FullCurl,1),R.addCurl(a.Ring,o.FullCurl,1),R.addCurl(a.Pinky,o.HalfCurl,1),R.addCurl(a.Pinky,o.FullCurl,1);var A=R,N=new S("2");N.addCurl(a.Thumb,o.HalfCurl,1),N.addCurl(a.Thumb,o.FullCurl,1),N.addCurl(a.Index,o.NoCurl,1),N.addCurl(a.Middle,o.NoCurl,1),N.addCurl(a.Ring,o.FullCurl,1),N.addCurl(a.Pinky,o.FullCurl,1);var _=N,k=new S("3");k.addCurl(a.Thumb,o.HalfCurl,1),k.addCurl(a.Thumb,o.FullCurl,1),k.addCurl(a.Index,o.NoCurl,1),k.addCurl(a.Middle,o.NoCurl,1),k.addCurl(a.Ring,o.NoCurl,1),k.addCurl(a.Pinky,o.HalfCurl,1),k.addCurl(a.Pinky,o.FullCurl,1);var j=k,E=new S("4");E.addCurl(a.Thumb,o.HalfCurl,1),E.addCurl(a.Thumb,o.FullCurl,1),E.addCurl(a.Index,o.NoCurl,1),E.addCurl(a.Middle,o.NoCurl,1),E.addCurl(a.Ring,o.NoCurl,1),E.addCurl(a.Pinky,o.NoCurl,1);var F=E,I=new S("5");I.addCurl(a.Thumb,o.NoCurl,1),I.addCurl(a.Thumb,o.HalfCurl,-1),I.addCurl(a.Thumb,o.FullCurl,-1),I.addCurl(a.Index,o.NoCurl,1),I.addCurl(a.Middle,o.NoCurl,1),I.addCurl(a.Ring,o.NoCurl,1),I.addCurl(a.Pinky,o.NoCurl,1),I.addCurl(a.Pinky,o.HalfCurl,-1),I.addCurl(a.Pinky,o.FullCurl,-1);var H=I,L=new S("rock");L.addCurl(a.Thumb,o.HalfCurl,1),L.addCurl(a.Thumb,o.FullCurl,1),L.addCurl(a.Index,o.NoCurl,1),L.addCurl(a.Middle,o.FullCurl,1),L.addCurl(a.Middle,o.NoCurl,-1),L.addCurl(a.Middle,o.HalfCurl,-1),L.addCurl(a.Ring,o.FullCurl,1),L.addCurl(a.Pinky,o.NoCurl,1),L.addCurl(a.Pinky,o.HalfCurl,-1),L.addCurl(a.Pinky,o.FullCurl,-1);var x=L;r.default={GestureEstimator:C,GestureDescription:S,Finger:a,FingerCurl:o,FingerDirection:l,Gestures:n}}]).default}));