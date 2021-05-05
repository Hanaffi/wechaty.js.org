(self.webpackChunk=self.webpackChunk||[]).push([[1379],{5318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:e},p),{},{components:n})):r.createElement(h,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1036:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(9603),a=n(120),o=(n(7378),n(5318)),i={title:"RPA"},s={unversionedId:"explainations/rpa",id:"explainations/rpa",isDocsHomePage:!1,title:"RPA",description:"Wechaty is a RPA SDK.",source:"@site/docs/explainations/rpa.md",sourceDirName:"explainations",slug:"/explainations/rpa",permalink:"/docs/explainations/rpa",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/explainations/rpa.md",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1620218440,formattedLastUpdatedAt:"5/5/2021",frontMatter:{title:"RPA"},sidebar:"docs",previous:{title:"Conversational",permalink:"/docs/explainations/conversational"},next:{title:"Motivation",permalink:"/docs/explainations/motivations"}},c=[{value:"1. What is RPA (Robotic Process Automation)",id:"what-is-rpa",children:[]},{value:"2. Why Conversational RPA",id:"conversational-rpa",children:[]},{value:"RPA Blogs",id:"rpa-blogs",children:[]},{value:"Contact Us",id:"contact-us",children:[]}],l={toc:c};function p(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Wechaty is a RPA SDK."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What is ",(0,o.kt)("a",{parentName:"li",href:"#what-is-rpa"},"RPA"),"?"),(0,o.kt)("li",{parentName:"ol"},"Why ",(0,o.kt)("a",{parentName:"li",href:"#conversational-rpa"},"Conversational RPA"),"?")),(0,o.kt)("h2",{id:"what-is-rpa"},"1. What is RPA (Robotic Process Automation)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Robotic Process Automation is the technology that allows anyone today to configure computer software, or a \u201crobot\u201d to emulate and integrate the actions of a human interacting within digital systems to execute a business process. RPA robots utilize the user interface to capture data and manipulate applications just like humans do. They interpret, trigger responses and communicate with other systems in order to perform on a vast variety of repetitive tasks. Only substantially better: an RPA software robot never sleeps and makes zero mistakes.\n","\u2014"," ",(0,o.kt)("a",{parentName:"p",href:"https://www.uipath.com/rpa/robotic-process-automation"},"UIPath"))),(0,o.kt)("h2",{id:"conversational-rpa"},"2. Why Conversational RPA"),(0,o.kt)("p",null,"Conversational RPA (cRPA) Connecting any chatbot system to Conversational AI. We developed this as an SDK published in GitHub and this module can be set for any Conversationl AI/Chatbot system that the enterprise prefers."),(0,o.kt)("h2",{id:"rpa-blogs"},"RPA Blogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service (Providers), Huan, Jan 14, 2021"))),(0,o.kt)("h2",{id:"contact-us"},"Contact Us"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}p.isMDXComponent=!0}}]);