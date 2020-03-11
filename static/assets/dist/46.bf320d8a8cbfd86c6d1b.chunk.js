(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1582:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(2527)),a=o(n(2855));function o(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)(a.default)},2527:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.default=function(t){var e=function(e){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.setContainerRef=e.setContainerRef.bind(e),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),r(n,[{key:"componentDidMount",value:function(){return function(){this.execute()}}()},{key:"componentDidUpdate",value:function(){return function(){this.execute()}}()},{key:"componentWillUnmount",value:function(){return function(){this.container=null}}()},{key:"setContainerRef",value:function(){return function(t){this.container=t}}()},{key:"execute",value:function(){return function(){this.container&&t(this.container,this.props)}}()},{key:"render",value:function(){return function(){var t=this.props,e=t.id,n=t.className;return i.default.createElement("div",{id:e,className:n,ref:this.setContainerRef})}}()}]),n}(i.default.Component);t.displayName&&(e.displayName=t.displayName);t.propTypes&&(e.propTypes=t.propTypes);t.defaultProps&&(e.defaultProps=t.defaultProps);return e};var a,o=n(1),i=(a=o)&&a.__esModule?a:{default:a}},2855:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(n(668)),a=s(n(0)),o=n(17),i=n(89),u=n(229);function s(t){return t&&t.__esModule?t:{default:t}}n(2856);var l={data:a.default.arrayOf(a.default.shape({country_id:a.default.string,metric:a.default.number})),width:a.default.number,height:a.default.number,country:a.default.string,linearColorScheme:a.default.string,mapBaseUrl:a.default.string,numberFormat:a.default.string},c={};function f(t,e){var n=e.data,a=e.width,s=e.height,l=e.country,f=e.linearColorScheme,p=e.mapBaseUrl,d=void 0===p?"/static/assets/src/visualizations/CountryMap/countries":p,y=e.numberFormat,h=t,v=(0,i.format)(y),m=(0,u.getSequentialSchemeRegistry)().get(f).createLinearScale((0,o.extent)(n,function(t){return t.metric})),g={};n.forEach(function(t){g[t.country_id]=m(t.metric)});var b=function(){return function(t){return g[t.properties.ISO]||"none"}}(),_=r.default.geo.path(),w=r.default.select(h);w.selectAll("*").remove(),h.style.height=s+"px",h.style.width=a+"px";var x=w.append("svg:svg").attr("width",a).attr("height",s).attr("preserveAspectRatio","xMidYMid meet"),k=x.append("rect").attr("class","background").attr("width",a).attr("height",s),O=x.append("g"),M=O.append("g").classed("map-layer",!0),j=O.append("g").classed("text-layer",!0).attr("transform","translate("+a/2+", 45)"),C=j.append("text").classed("big-text",!0),P=j.append("text").classed("result-text",!0).attr("dy","1em"),S=void 0,N=function(){return function(t){var e=t&&S!==t,n=void 0,r=void 0,o=void 0,i=a/2,u=s/2;if(e){var l=_.centroid(t);n=l[0],r=l[1],o=4,S=t}else n=i,r=u,o=1,S=null;O.transition().duration(750).attr("transform","translate("+i+","+u+")scale("+o+")translate("+-n+","+-r+")"),j.style("opacity",0).attr("transform","translate(0,0)translate("+n+","+(e?r-5:45)+")").transition().duration(750).style("opacity",1),C.transition().duration(750).style("font-size",e?6:16),P.transition().duration(750).style("font-size",e?16:24)}}();k.on("click",N);var E=function(){return function(t){var e="";t&&t.properties&&(e=t.properties.ID_2?t.properties.NAME_2:t.properties.NAME_1),C.text(e)}}(),R=function(){return function(t){t.length>0&&P.text(v(t[0].metric))}}(),T=function(){return function(t){var e=b(t);"none"!==e&&(e=r.default.rgb(e).darker().toString()),r.default.select(this).style("fill",e),E(t);var a=n.filter(function(e){return e.country_id===t.properties.ISO});R(a)}}(),A=function(){return function(){r.default.select(this).style("fill",b),C.text(""),P.text("")}}();function U(t){var e=t.features,n=r.default.geo.centroid(t),o=r.default.geo.mercator().scale(100).center(n).translate([a/2,s/2]);_.projection(o);var i=_.bounds(t),u=100*a/(i[1][0]-i[0][0]),l=100*s/(i[1][1]-i[0][1]),c=u<l?u:l;o.scale(c);var f=_.bounds(t);o.translate([a-(f[0][0]+f[1][0])/2,s-(f[0][1]+f[1][1])/2]),M.selectAll("path").data(e).enter().append("path").attr("d",_).attr("class","region").attr("vector-effect","non-scaling-stroke").style("fill",b).on("mouseenter",T).on("mouseout",A).on("click",N)}var z=l.toLowerCase(),D=c[z];if(D)U(D);else{var I=d+"/"+z+".geojson";r.default.json(I,function(t,e){t||(c[z]=e,U(e))})}}f.displayName="CountryMap",f.propTypes=l,e.default=f},2856:function(t,e,n){}}]);