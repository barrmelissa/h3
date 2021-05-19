(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{156:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=d(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),p=n,f=u["".concat(o,".").concat(p)]||u[p]||h[p]||i;return t?a.a.createElement(f,s(s({ref:r},l),{},{components:t})):a.a.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},90:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return d}));var n=t(3),a=t(7),i=(t(0),t(156)),o={id:"geohash",title:"Geohash",sidebar_label:"Geohash",slug:"/comparisons/geohash"},s={unversionedId:"comparisons/geohash",id:"version-3.x/comparisons/geohash",isDocsHomePage:!1,title:"Geohash",description:"Geohash is a system for encoding locations using a string of characters, creating a hierarchical, square grid system (a quadtree).",source:"@site/versioned_docs/version-3.x/comparisons/geohash.md",sourceDirName:"comparisons",slug:"/comparisons/geohash",permalink:"/docs/comparisons/geohash",editUrl:"https://github.com/uber/h3/edit/master/website/docs/comparisons/geohash.md",version:"3.x",sidebar_label:"Geohash",frontMatter:{id:"geohash",title:"Geohash",sidebar_label:"Geohash",slug:"/comparisons/geohash"},sidebar:"version-3.x/someSidebar",previous:{title:"S2",permalink:"/docs/comparisons/s2"},next:{title:"Hexbin",permalink:"/docs/comparisons/hexbin"}},c=[{value:"Area distortion",id:"area-distortion",children:[]},{value:"Identifiers",id:"identifiers",children:[]},{value:"Geohash vs H3 Comparison",id:"geohash-vs-h3-comparison",children:[]}],l={toc:c};function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Geohash"},"Geohash")," is a system for encoding locations using a string of characters, creating a hierarchical, square grid system (a quadtree)."),Object(i.b)("h2",{id:"area-distortion"},"Area distortion"),Object(i.b)("p",null,"Because Geohash encodes latitude and longitudes pairs, it is subject to significant differences in area at different latitudes. A degree of longitude near a pole represents a significantly smaller distance than a degree of longitude near the equator."),Object(i.b)("h2",{id:"identifiers"},"Identifiers"),Object(i.b)("p",null,"Geohash uses strings for its cell indexes. Because they are strings, they can encode arbitrarily precise cells."),Object(i.b)("p",null,"H3 cell indexes are designed to be 64 bit integers, which can be rendered and transmitted as strings if needed. The integer representation can be used when high performance is needed, as integer operations are usually more performant than string operations. Because indexes are fixed size, H3 has a maximum resolution it can encode."),Object(i.b)("h2",{id:"geohash-vs-h3-comparison"},"Geohash vs H3 Comparison"),Object(i.b)("iframe",{width:"100%",height:"500px",src:"https://studio.unfolded.ai/public/009a4f1e-2b74-4c0f-a156-95051c6583f3/embed",frameborder:"0",allowfullscreen:!0}),Object(i.b)("p",null,"Geohash on the left, H3 on the right. Data: ",Object(i.b)("a",{parentName:"p",href:"https://data.sfgov.org/City-Infrastructure/Street-Tree-List/tkzw-k3nq"},"San Francisco Street Tree List")))}d.isMDXComponent=!0}}]);