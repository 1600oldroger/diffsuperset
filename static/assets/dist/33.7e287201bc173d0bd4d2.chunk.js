(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1563:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.getLayer=p;var a=c(n(1)),o=c(n(0)),i=n(2532),u=c(n(2536)),l=n(2537),s=c(n(2526)),f=n(2525);function c(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n,r,a){var o=e,u=o.color_picker,l=t.data.features.map(function(e){return Object.assign({},e,{color:[u.r,u.g,u.b,255*u.a]})});if(o.js_data_mutator){var c=(0,s.default)(o.js_data_mutator);l=c(l)}return null!=a&&a.forEach(function(e){l=l.filter(e)}),new i.ScreenGridLayer(Object.assign({id:"screengrid-layer-"+o.slice_id,data:l,pickable:!0,cellSizePixels:o.grid_size,minColor:[u.r,u.g,u.b,0],maxColor:[u.r,u.g,u.b,255*u.a],outline:!1,getWeight:function(){return function(e){return e.weight||0}}()},(0,f.commonLayerProps)(o,r)))}var d={formData:o.default.object.isRequired,payload:o.default.object.isRequired,setControlValue:o.default.func.isRequired,viewport:o.default.object.isRequired,onAddFilter:o.default.func,setTooltip:o.default.func},h={onAddFilter:function(){return function(){}}(),setTooltip:function(){return function(){}}()},v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=t.getDerivedStateFromProps(e),n.getLayers=n.getLayers.bind(n),n.onValuesChange=n.onValuesChange.bind(n),n.onViewportChange=n.onViewportChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["default"].PureComponent),r(t,[{key:"onValuesChange",value:function(){return function(e){this.setState({values:Array.isArray(e)?e:[e,e+this.state.getStep(e)]})}}()},{key:"onViewportChange",value:function(){return function(e){this.setState({viewport:e})}}()},{key:"getLayers",value:function(){return function(e){var t=[];return e[0]===e[1]||e[1]===this.end?t.push(function(t){return t.__timestamp>=e[0]&&t.__timestamp<=e[1]}):t.push(function(t){return t.__timestamp>=e[0]&&t.__timestamp<e[1]}),[p(this.props.formData,this.props.payload,this.props.onAddFilter,this.props.setTooltip,t)]}}()},{key:"render",value:function(){return function(){var e=this.props,t=e.formData,n=e.payload,r=e.setControlValue;return a.default.createElement("div",null,a.default.createElement(u.default,{getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,onValuesChange:this.onValuesChange,disabled:this.state.disabled,viewport:this.state.viewport,onViewportChange:this.onViewportChange,mapboxApiAccessToken:n.data.mapboxApiKey,mapStyle:t.mapbox_style,setControlValue:r,aggregation:!0}))}}()}],[{key:"getDerivedStateFromProps",value:function(){return function(e,t){if(t&&e.payload.form_data===t.formData)return null;var n=e.payload.data.features||[],r=n.map(function(e){return e.__timestamp}),a=e.payload.form_data.time_grain_sqla||e.payload.form_data.granularity||"P1D",o=(0,l.getPlaySliderParams)(r,a);return{start:o.start,end:o.end,getStep:o.getStep,values:o.values,disabled:o.disabled,viewport:e.formData.autozoom?(0,f.fitViewport)(e.viewport,n.map(function(e){return e.position})):e.viewport,selected:[],lastClick:0,formData:e.payload.form_data}}}()}]),t}();v.propTypes=d,v.defaultProps=h,t.default=v},1652:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return r.default.createElement("span",{className:"BootstrapSliderWrapper"},r.default.createElement(a.default,e))};var r=o(n(1)),a=o(n(1654));function o(e){return e&&e.__esModule?e:{default:e}}n(1655),n(1653)},1653:function(e,t,n){},2525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBounds=l,t.fitViewport=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;try{var r=l(t);return Object.assign({},e,(0,a.fitBounds)({height:e.height,width:e.width,padding:n,bounds:r}))}catch(t){return console.error("Could not auto zoom",t),e}},t.commonLayerProps=function(e,t,n){var a=e,o=void 0,u=void 0;if(a.js_tooltip)u=(0,i.default)(a.js_tooltip);else if(a.line_column&&a.metric&&["geohash","zipcode"].indexOf(a.line_type)>=0){var l=a.metric.label||a.metric;u=function(){return function(e){return r.default.createElement("div",null,r.default.createElement("div",null,a.line_column,": ",r.default.createElement("strong",null,e.object[a.line_column])),a.metric&&r.default.createElement("div",null,l,": ",r.default.createElement("strong",null,e.object[l])))}}()}u&&(o=function(){return function(e){e.picked?t({content:u(e),x:e.x,y:e.y}):t(null)}}());var s=void 0;a.js_onclick_href?s=function(){return function(e){var t=(0,i.default)(a.js_onclick_href)(e);window.open(t)}}():a.table_filter&&void 0!==n&&(s=function(){return function(e){return n(e.object[a.line_column])}}());return{onClick:s,onHover:o,pickable:Boolean(o)}},t.getAggFunc=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sum",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("count"===e)return function(e){return e.length};var n=void 0;n=e in s?function(){return function(n,r){var a=void 0;a=t?n.sort(function(e,n){return o.ascending(t(e),t(n))}):n.sort(o.ascending);return o.quantile(a,s[e],r)}}():o[e];if(!t)return function(e){return n(e)};return function(e){return n(e.map(t))}};var r=u(n(1)),a=n(2535),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(17)),i=u(n(2526));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=o.extent(e,function(e){return e[1]}),n=o.extent(e,function(e){return e[0]});return[[n[0],t[0]],[n[1],t[1]]]}var s={p1:.01,p5:.05,p95:.95,p99:.99}},2526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a={},o="SAFE_EVAL_"+Math.floor(1e6*Math.random());a[o]={};var i=o+"="+e,u=Object.assign({},s,t);Object.keys(u).forEach(function(e){a[e]=u[e]});try{return r.default.runInNewContext(i,a,n),a[o]}catch(e){return function(){return e}}};var r=l(n(2553)),a=l(n(2554)),o=u(n(17)),i=u(n(2528));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}var s={console:console,_:a.default,colors:i,d3array:o}},2528:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hexToRGB=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:255;if(!e)return[0,0,0,t];var n=(0,r.rgb)(e),a=n.r,o=n.g,i=n.b;return[a,o,i,t]};var r=n(42)},2531:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(477)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n(1)),u=f(n(0)),l=f(n(2547)),s=f(n(2532));function f(e){return e&&e.__esModule?e:{default:e}}n(2555);var c=2e3,p={viewport:u.default.object.isRequired,layers:u.default.array.isRequired,setControlValue:u.default.func,mapStyle:u.default.string,mapboxApiAccessToken:u.default.string.isRequired,onViewportChange:u.default.func},d={mapStyle:"light",onViewportChange:function(){return function(){}}(),setControlValue:function(){return function(){}}()},h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.tick=n.tick.bind(n),n.onViewportChange=n.onViewportChange.bind(n),n.state={previousViewport:e.viewport,timer:setInterval(n.tick,c)},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["default"].Component),o(t,[{key:"componentWillUnmount",value:function(){return function(){clearInterval(this.state.timer)}}()},{key:"onViewportChange",value:function(){return function(e){var t=Object.assign({},e),n=Object.assign({},this.state.previousViewport,t);this.props.onViewportChange(n)}}()},{key:"tick",value:function(){return function(){var e=this;if(this.state&&!(0,r.default)(this.state.previousViewport,this.props.viewport)){var t=this.props.setControlValue,n=this.props.viewport;t&&t("viewport",n),this.setState(function(){return{previousViewport:e.props.viewport}})}}}()},{key:"layers",value:function(){return function(){return this.props.layers.some(function(e){return"function"==typeof e})?this.props.layers.map(function(e){return"function"==typeof e?e():e}):this.props.layers}}()},{key:"render",value:function(){return function(){var e=this.props.viewport;return i.default.createElement(l.default,a({},e,{mapStyle:this.props.mapStyle,onViewportChange:this.onViewportChange,mapboxApiAccessToken:this.props.mapboxApiAccessToken}),i.default.createElement(s.default,a({},e,{layers:this.layers(),initWebGLParameters:!0})))}}()}],[{key:"getDerivedStateFromProps",value:function(){return function(e,t){return e.viewport!==t.viewport?{viewport:Object.assign({},e.viewport),previousViewport:t.viewport}:null}}()}]),t}();t.default=h,h.propTypes=p,h.defaultProps=d},2536:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(1)),i=s(n(0)),u=s(n(2531)),l=s(n(2540));function s(e){return e&&e.__esModule?e:{default:e}}var f=20,c={getLayers:i.default.func.isRequired,start:i.default.number.isRequired,end:i.default.number.isRequired,getStep:i.default.func,values:i.default.array.isRequired,aggregation:i.default.bool,disabled:i.default.bool,viewport:i.default.object.isRequired,children:i.default.node,onViewportChange:i.default.func,onValuesChange:i.default.func},p={aggregation:!1,disabled:!1,onViewportChange:function(){return function(){}}(),onValuesChange:function(){return function(){}}()},d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=(e.getLayers,e.start,e.end,e.getStep,e.values,e.disabled,e.viewport,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["getLayers","start","end","getStep","values","disabled","viewport"]));return n.other=r,n.onViewportChange=n.onViewportChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["default"].Component),a(t,[{key:"onViewportChange",value:function(){return function(e){var t=this.props.disabled?Object.assign({},e):Object.assign({},e,{height:e.height+f});this.props.onViewportChange(t)}}()},{key:"render",value:function(){return function(){var e=this.props,t=e.start,n=e.end,a=e.getStep,i=e.disabled,s=e.aggregation,c=e.children,p=e.getLayers,d=e.values,h=e.onValuesChange,v=e.viewport,y=p(d),b=Object.assign({},v,{height:i?v.height:v.height-f});return o.default.createElement("div",null,o.default.createElement(u.default,r({},this.other,{viewport:b,layers:y,onViewportChange:this.onViewportChange})),!i&&o.default.createElement(l.default,{start:t,end:n,step:a(t),values:d,range:!s,onChange:h}),c)}}()}]),t}();t.default=d,d.propTypes=c,d.defaultProps=p},2537:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPlaySliderParams=void 0,t.truncate=l;var r,a=n(8),o=(r=a)&&r.__esModule?r:{default:r};function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var u=[1,0,1,0,0,0,0];function l(e,t){var n=(0,o.default)(e).subtract(t),r=e.toArray(),a=n.toArray(),i=r.map(function(e,t){return a[t]!==e}).indexOf(!0),l=r.map(function(e,t){if(t===i){var n=e-a[t];return e-(e-u[t])%n}return t<i||-1===i?e:u[t]});return(0,o.default)(l)}t.getPlaySliderParams=function(){return function(e,t){var n=(0,o.default)(Math.min.apply(Math,i(e))),r=(0,o.default)(Math.max.apply(Math,i(e))),a=void 0,u=void 0;if(-1!==t.indexOf("/")){var s=t.split("/",2);s[0].endsWith("Z")?(u=(0,o.default)(s[0]),a=o.default.duration(s[1])):(u=(0,o.default)(s[1]),a=o.default.duration(s[0]))}else u=l(n,a=o.default.duration(t));for(var f=(0,o.default)(u);f<n;)f.add(a);for(;f>n;)f.subtract(a);for(var c=(0,o.default)(u);c>r;)c.subtract(a);for(;c<r;)c.add(a);var p=null!=t?[f,(0,o.default)(f).add(a)]:[f,c],d=e.every(function(e){return null===e});return{start:parseInt(f.format("x"),10),end:parseInt(c.format("x"),10),getStep:function(e,t){var n=parseInt((0,o.default)(t).format("x"),10);return parseInt((0,o.default)(t).add(e).format("x"),10)-n}.bind(this,a),values:p.map(function(e){return parseInt(e.format("x"),10)}),disabled:d}}}()},2540:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n(1)),o=s(n(0)),i=s(n(1656)),u=n(10),l=s(n(1652));function s(e){return e&&e.__esModule?e:{default:e}}n(2541);var f={start:o.default.number.isRequired,step:o.default.number.isRequired,end:o.default.number.isRequired,values:o.default.array.isRequired,onChange:o.default.func,loopDuration:o.default.number,maxFrames:o.default.number,orientation:o.default.oneOf(["horizontal","vertical"]),reversed:o.default.bool,disabled:o.default.bool,range:o.default.bool},c={onChange:function(){return function(){}}(),loopDuration:15e3,maxFrames:100,orientation:"horizontal",reversed:!1,disabled:!1,range:!0},p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={intervalId:null};var r=e.end-e.start,a=Math.min(e.maxFrames,r/e.step),o=r/a;return n.intervalMilliseconds=e.loopDuration/a,n.increment=o<e.step?e.step:o-o%e.step,n.onChange=n.onChange.bind(n),n.play=n.play.bind(n),n.pause=n.pause.bind(n),n.stepBackward=n.stepBackward.bind(n),n.stepForward=n.stepForward.bind(n),n.getPlayClass=n.getPlayClass.bind(n),n.formatter=n.formatter.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["default"].PureComponent),r(t,[{key:"componentDidMount",value:function(){return function(){i.default.bind(["space"],this.play)}}()},{key:"componentWillUnmount",value:function(){return function(){i.default.unbind(["space"])}}()},{key:"onChange",value:function(){return function(e){this.props.onChange(e.target.value),null!=this.state.intervalId&&this.pause()}}()},{key:"getPlayClass",value:function(){return function(){return null==this.state.intervalId?"fa fa-play fa-lg slider-button":"fa fa-pause fa-lg slider-button"}}()},{key:"play",value:function(){return function(){if(!this.props.disabled)if(null!=this.state.intervalId)this.pause();else{var e=setInterval(this.stepForward,this.intervalMilliseconds);this.setState({intervalId:e})}}}()},{key:"pause",value:function(){return function(){clearInterval(this.state.intervalId),this.setState({intervalId:null})}}()},{key:"stepForward",value:function(){return function(){var e=this,t=this.props,n=t.start,r=t.end,a=t.step,o=t.values;if(!t.disabled){var i=(Array.isArray(o)?o:[o,o+a]).map(function(t){return t+e.increment}),u=i[1]>r?i[0]-n:0;this.props.onChange(i.map(function(e){return e-u}))}}}()},{key:"stepBackward",value:function(){return function(){var e=this,t=this.props,n=t.start,r=t.end,a=t.step,o=t.values;if(!t.disabled){var i=(Array.isArray(o)?o:[o,o+a]).map(function(t){return t-e.increment}),u=i[0]<n?r-i[1]:0;this.props.onChange(i.map(function(e){return e+u}))}}}()},{key:"formatter",value:function(){return function(e){if(this.props.disabled)return(0,u.t)("Data has no time steps");var t=e;return Array.isArray(e)?e[0]===e[1]&&(t=[e[0]]):t=[e],t.map(function(e){return new Date(e).toUTCString()}).join(" : ")}}()},{key:"render",value:function(){return function(){var e=this.props,t=e.start,n=e.end,r=e.step,o=e.orientation,i=e.reversed,u=e.disabled,s=e.range,f=e.values;return a.default.createElement("div",{className:"play-slider"},a.default.createElement("div",{className:"play-slider-controls padded"},a.default.createElement("i",{className:"fa fa-step-backward fa-lg slider-button ",onClick:this.stepBackward}),a.default.createElement("i",{className:this.getPlayClass(),onClick:this.play}),a.default.createElement("i",{className:"fa fa-step-forward fa-lg slider-button ",onClick:this.stepForward})),a.default.createElement("div",{className:"play-slider-scrobbler padded"},a.default.createElement(l.default,{value:s?f:f[0],range:s,formatter:this.formatter,change:this.onChange,min:t,max:n,step:r,orientation:o,reversed:i,disabled:u?"disabled":"enabled"})))}}()}]),t}();t.default=p,p.propTypes=f,p.defaultProps=c},2541:function(e,t,n){},2548:function(e,t){},2549:function(e,t){},2550:function(e,t){}}]);