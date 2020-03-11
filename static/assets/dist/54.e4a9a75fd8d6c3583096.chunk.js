(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1591:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=l(r(1)),o=l(r(0)),u=r(17),i=r(2876),f=l(i);function l(e){return e&&e.__esModule?e:{default:e}}r(2877);var s={className:o.default.string,width:o.default.number,seriesHeight:o.default.number,data:o.default.arrayOf(o.default.shape({key:o.default.arrayOf(o.default.string),values:o.default.arrayOf(o.default.shape({y:o.default.number}))})).isRequired,bands:o.default.number,colors:o.default.arrayOf(o.default.string),colorScale:o.default.string,mode:o.default.string,offsetX:o.default.number},c={className:"",width:800,seriesHeight:20,bands:Math.floor(i.DEFAULT_COLORS.length/2),colors:i.DEFAULT_COLORS,colorScale:"series",mode:"offset",offsetX:0},d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["default"].PureComponent),n(t,[{key:"render",value:function(){return function(){var e=this.props,t=e.className,r=e.width,n=e.data,o=e.seriesHeight,i=e.bands,l=e.colors,s=e.colorScale,c=e.mode,d=e.offsetX,h=void 0;if("overall"===s){var p=n.reduce(function(e,t){return e.concat(t.values)},[]);h=(0,u.extent)(p,function(e){return e.y})}return a.default.createElement("div",{className:"horizon-chart "+t},n.map(function(e){return a.default.createElement(f.default,{key:e.key,width:r,height:o,title:e.key.join(", "),data:e.values,bands:i,colors:l,colorScale:s,mode:c,offsetX:d,yDomain:h})}))}}()}]),t}();d.propTypes=s,d.defaultProps=c,t.default=d},2876:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_COLORS=void 0;var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=l(r(1)),u=l(r(0)),i=r(17),f=r(62);function l(e){return e&&e.__esModule?e:{default:e}}var s=t.DEFAULT_COLORS=["#313695","#4575b4","#74add1","#abd9e9","#fee090","#fdae61","#f46d43","#d73027"],c={className:u.default.string,width:u.default.number,height:u.default.number,data:u.default.arrayOf(u.default.shape({y:u.default.number})).isRequired,bands:u.default.number,colors:u.default.arrayOf(u.default.string),colorScale:u.default.string,mode:u.default.string,offsetX:u.default.number,title:u.default.string,yDomain:u.default.arrayOf(u.default.number)},d={className:"",width:800,height:20,bands:s.length>>1,colors:s,colorScale:"series",mode:"offset",offsetX:0,title:"",yDomain:void 0},h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["default"].PureComponent),a(t,[{key:"componentDidMount",value:function(){return function(){this.drawChart()}}()},{key:"componentDidUpdate",value:function(){return function(){this.drawChart()}}()},{key:"componentWillUnmount",value:function(){return function(){this.canvas=null}}()},{key:"drawChart",value:function(){return function(){if(this.canvas){var e=this.props,t=e.data,r=e.yDomain,a=e.width,o=e.height,u=e.bands,l=e.colors,s=e.colorScale,c=e.offsetX,d=e.mode,h="change"===s?t.map(function(e){return Object.assign({},e,{y:e.y-t[0].y})}):t,p=this.canvas.getContext("2d");p.imageSmoothingEnabled=!1,p.clearRect(0,0,a,o),p.setTransform(1,0,0,1,0,0),p.translate(.5,.5);var y=a/h.length,b=Math.floor(Math.max(0,-c/y)),m=Math.floor(Math.min(h.length,b+a/y));if(b>h.length)return;for(var v=r||(0,i.extent)(h,function(e){return e.y}),g=n(v,2),w=g[0],O=g[1],_=(0,f.scaleLinear)().domain([0,Math.max(-w,O)]).range([0,o]),S=!1,j=void 0,E=void 0,k=0;k<u;k+=1){p.fillStyle=l[u+k],E=(k+1-u)*o,_.range([u*o+E,E]);for(var P=b;P<m;P++)(j=h[P].y)<=0?S=!0:void 0!==j&&p.fillRect(c+P*y,_(j),y+1,_(0)-_(j))}if(S){"offset"===d&&(p.translate(0,o),p.scale(1,-1));for(var C=0;C<u;C++){p.fillStyle=l[u-C-1],E=(C+1-u)*o,_.range([u*o+E,E]);for(var T=b;T<m;T++)(j=h[T].y)>=0||p.fillRect(c+T*y,_(-j),y+1,_(0)-_(-j))}}}}}()},{key:"render",value:function(){return function(){var e=this,t=this.props,r=t.className,n=t.title,a=t.width,u=t.height;return o.default.createElement("div",{className:"horizon-row "+r},o.default.createElement("span",{className:"title"},n),o.default.createElement("canvas",{width:a,height:u,ref:function(t){e.canvas=t}}))}}()}]),t}();h.propTypes=c,h.defaultProps=d,t.default=h},2877:function(e,t,r){}}]);