(self.webpackChunk=self.webpackChunk||[]).push([[196],{5318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return l},kt:function(){return g}});var r=n(7378);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),f=u(n),g=o,m=f["".concat(i,".").concat(g)]||f[g]||p[g]||a;return n?r.createElement(m,c(c({ref:e},l),{},{components:n})):r.createElement(m,c({ref:e},l))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2641:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return i},default:function(){return l}});var r=n(9603),o=n(120),a=(n(7378),n(5318)),c={},s={unversionedId:"polyglot/go/transclusions/shortest-chatbot",id:"polyglot/go/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`go",source:"@site/docs/polyglot/go/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/go/transclusions",slug:"/polyglot/go/transclusions/shortest-chatbot",permalink:"/docs/polyglot/go/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/go/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1620218440,formattedLastUpdatedAt:"5/5/2021",frontMatter:{}},i=[],u={toc:i};function l(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n')))}l.isMDXComponent=!0}}]);