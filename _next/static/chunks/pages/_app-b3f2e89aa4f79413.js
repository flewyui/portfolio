(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2957)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(u){c=!0,o=u}finally{try{l||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},c=r(6273),u=r(387),i=r(7190);var f={};function s(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=u.useRouter(),a=l.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,h=a.as,p=e.children,v=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var x=(t=l.default.Children.only(p))&&"object"===typeof t&&t.ref,j=o(i.useIntersection({rootMargin:"200px"}),2),g=j[0],w=j[1],E=l.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);l.default.useEffect((function(){var e=w&&r&&c.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=f[d+"%"+h+(t?"%"+t:"")];e&&!o&&s(n,d,h,{locale:t})}),[h,d,w,b,r,n]);var N={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:l}))}(e,n,d,h,v,m,y,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&s(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof b?b:n&&n.locale,_=n&&n.isLocaleDomain&&c.getDomainLocale(h,O,n&&n.locales,n&&n.domainLocales);N.href=_||c.addBasePath(c.addLocale(h,O,n&&n.defaultLocale))}return l.default.cloneElement(t,N)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(u){c=!0,o=u}finally{try{l||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,i=a.useRef(),f=o(a.useState(!1),2),s=f[0],d=f[1],h=o(a.useState(t?t.current:null),2),p=h[0],v=h[1],m=a.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||s||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=u.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:r}))}),[n,p,r,s]);return a.useEffect((function(){if(!c&&!s){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[s]),a.useEffect((function(){t&&v(t.current)}),[t]),[m,s]};var a=r(7294),l=r(9311),c="undefined"!==typeof IntersectionObserver;var u=new Map},2957:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=(r(3456),r(3655));function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsx)("div",{className:"m-[50px] my-0 h-[100vh]",children:(0,n.jsx)(o.default,{children:(0,n.jsx)(t,l({},r))})})}},3655:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=(r(7294),r(8803)),a=r(2620);t.default=function(e){var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{}),(0,n.jsx)("main",{className:"h-[82%] bg-[#cbd5e1] animate-fade",children:t}),(0,n.jsx)(o.default,{})]})}},8803:function(e,t,r){"use strict";r.r(t);var n=r(5893);t.default=function(){var e=(new Date).getFullYear();return(0,n.jsx)("div",{className:"flex justify-center h-[8%] bg-[#3a3a3f]",children:(0,n.jsxs)("p",{className:"flex items-center text-[#cbd5e1]",children:["\xa9 ",e," flewyui"]})})}},2620:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(9008),a=r(1664),l=r(1163);t.default=function(){var e=(0,l.useRouter)().pathname.replace("/","");return(0,n.jsxs)("header",{className:"flex h-[10%]",children:[(0,n.jsx)(o.default,{children:(0,n.jsxs)("title",{children:["My Portfolio ",e]})}),(0,n.jsx)("div",{className:"flex flex-1",children:(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{className:"flex items-center text-[30px] font-bold text-[#535353]",children:"My Portfolio"})})}),(0,n.jsxs)("ul",{className:"flex flex-1",children:[(0,n.jsx)("li",{className:"flex relative flex-1 justify-center h-[100%] hover:text-[#cbd5e1] hover:bg-[#535353] transition hover:duration-300",children:(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{className:"flex justify-center items-center absolute w-[100%] h-[100%] top-0 bottom-0 ".concat(""===e?"text-[#cbd5e1] bg-[#535353]":""),children:"Home"})})}),[{name:"About"},{name:"Skills"},{name:"Products"},{name:"History"}].map((function(t){return(0,n.jsx)("li",{className:"flex relative flex-1 justify-center h-[100%] hover:text-[#cbd5e1] hover:bg-[#535353] transition hover:duration-300",children:(0,n.jsx)(a.default,{href:"/".concat(t.name.toLowerCase()),children:(0,n.jsx)("a",{className:"flex justify-center items-center absolute w-[100%] h-[100%] top-0 bottom-0 ".concat(e===t.name.toLocaleLowerCase()?"text-[#cbd5e1] bg-[#535353]":""),children:t.name})})},t.name)}))]})]})}},3456:function(){},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var r=e.O();_N_E=r}]);