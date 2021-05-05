(self.webpackChunk=self.webpackChunk||[]).push([[9505],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,f=h["".concat(d,".").concat(m)]||h[m]||c[m]||a;return n?i.createElement(f,p(p({ref:t},s),{},{components:n})):i.createElement(f,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<a;l++)p[l]=n[l];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9667:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return d},default:function(){return s}});var i=n(9603),r=n(120),a=(n(7378),n(5318)),p={title:"Friendship"},o={unversionedId:"api/friendship",id:"api/friendship",isDocsHomePage:!1,title:"Friendship",description:"Send, receive friend request, and friend confirmation events.",source:"@site/docs/api/friendship.md",sourceDirName:"api",slug:"/api/friendship",permalink:"/docs/api/friendship",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/friendship.md",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1620218440,formattedLastUpdatedAt:"5/5/2021",frontMatter:{title:"Friendship"},sidebar:"docs",previous:{title:"RoomInvitation",permalink:"/docs/api/room-invitation"},next:{title:"Polyglot Wechaty",permalink:"/docs/polyglot/"}},d=[{value:"Friendship",id:"friendship",children:[{value:"friendship.accept() \u21d2 <code>Promise &lt;void&gt;</code>",id:"friendshipaccept-\u21d2-promise-void",children:[]},{value:"friendship.hello() \u21d2 <code>string</code>",id:"friendshiphello-\u21d2-string",children:[]},{value:"friendship.contact() \u21d2 <code>Contact</code>",id:"friendshipcontact-\u21d2-contact",children:[]},{value:"friendship.type() \u21d2 <code>FriendshipType</code>",id:"friendshiptype-\u21d2-friendshiptype",children:[]},{value:"<del>Friendship.send()</del>",id:"friendshipsend",children:[]},{value:"Friendship.add(contact, hello) \u21d2 <code>Promise &lt;void&gt;</code>",id:"friendshipaddcontact-hello-\u21d2-promise-void",children:[]}]}],l={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Send, receive friend request, and friend confirmation events."),(0,a.kt)("h2",{id:"friendship"},"Friendship"),(0,a.kt)("p",null,"Send, receive friend request, and friend confirmation events."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"send request"),(0,a.kt)("li",{parentName:"ol"},"receive request","(","in friend event",")"),(0,a.kt)("li",{parentName:"ol"},"confirmation friendship","(","friend event",")")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/friend-bot.ts"},"Examples/Friend-Bot")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global class"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/friendship#Friendship"},"Friendship"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"instance"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/friendship#Friendship+accept"},".accept","(",")")," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise <void>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/friendship#Friendship+hello"},".hello","(",")")," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/friendship#Friendship+contact"},".contact","(",")")," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"li"},"Contact")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/friendship#Friendship+type"},".type","(",")")," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"li"},"FriendshipType")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"static"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/friendship#Friendship.send"},(0,a.kt)("del",{parentName:"a"},".send","(",")"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/friendship#Friendship.add"},".add","(","contact, hello",")")," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise <void>"))))))),(0,a.kt)("h3",{id:"friendshipaccept-\u21d2-promise-void"},"friendship.accept","(",")"," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,a.kt)("p",null,"Accept Friend Request"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/friendship#Friendship"},(0,a.kt)("inlineCode",{parentName:"a"},"Friendship")),"  "),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('friendship', async friendship => {\n  try {\n    console.log(`received friend event.`)\n    switch (friendship.type()) {\n\n    // 1. New Friend Request\n\n    case bot.Friendship.Type.Receive:\n      await friendship.accept()\n      break\n\n    // 2. Friend Ship Confirmed\n\n    case bot.Friendship.Type.Confirm:\n      console.log(`friend ship confirmed`)\n      break\n    }\n  } catch (e) {\n    console.error(e)\n  }\n})\n.start()\n")),(0,a.kt)("h3",{id:"friendshiphello-\u21d2-string"},"friendship.hello","(",")"," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"string")),(0,a.kt)("p",null,"Get verify message from"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/friendship#Friendship"},(0,a.kt)("inlineCode",{parentName:"a"},"Friendship")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(","If request content is ","`","ding","`",", then accept the friendship",")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('friendship', async friendship => {\n  try {\n    console.log(`received friend event from ${friendship.contact().name()}`)\n    if (friendship.type() === bot.Friendship.Type.Receive && friendship.hello() === 'ding') {\n      await friendship.accept()\n    }\n  } catch (e) {\n    console.error(e)\n  }\n}\n.start()\n")),(0,a.kt)("h3",{id:"friendshipcontact-\u21d2-contact"},"friendship.contact","(",")"," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Contact")),(0,a.kt)("p",null,"Get the contact from friendship"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/friendship#Friendship"},(0,a.kt)("inlineCode",{parentName:"a"},"Friendship")),"  "),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('friendship', friendship => {\n  const contact = friendship.contact()\n  const name = contact.name()\n  console.log(`received friend event from ${name}`)\n}\n.start()\n")),(0,a.kt)("h3",{id:"friendshiptype-\u21d2-friendshiptype"},"friendship.type","(",")"," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"FriendshipType")),(0,a.kt)("p",null,"Return the Friendship Type"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: FriendshipType is enum here. ","<","/br",">"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"FriendshipType.Unknown"),(0,a.kt)("li",{parentName:"ul"},"FriendshipType.Confirm"),(0,a.kt)("li",{parentName:"ul"},"FriendshipType.Receive"),(0,a.kt)("li",{parentName:"ul"},"FriendshipType.Verify"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/friendship#Friendship"},(0,a.kt)("inlineCode",{parentName:"a"},"Friendship")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(","If request content is ","`","ding","`",", then accept the friendship",")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('friendship', async friendship => {\n  try {\n    if (friendship.type() === bot.Friendship.Type.Receive && friendship.hello() === 'ding') {\n      await friendship.accept()\n    }\n  } catch (e) {\n    console.error(e)\n  }\n}\n.start()\n")),(0,a.kt)("h3",{id:"friendshipsend"},(0,a.kt)("del",{parentName:"h3"},"Friendship.send","(",")")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Deprecated"))),(0,a.kt)("p",null,"use ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/friendship#friendship-add-contact-hello-promise"},"Friendship","#","add")," instead"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/friendship#Friendship"},(0,a.kt)("inlineCode",{parentName:"a"},"Friendship"))),(0,a.kt)("h3",{id:"friendshipaddcontact-hello-\u21d2-promise-void"},"Friendship.add","(","contact, hello",")"," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,a.kt)("p",null,"Send a Friend Request to a ",(0,a.kt)("inlineCode",{parentName:"p"},"contact")," with message ",(0,a.kt)("inlineCode",{parentName:"p"},"hello"),"."),(0,a.kt)("p",null,"The best practice is to send friend request once per minute. Remeber not to do this too frequently, or your account may be blocked."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/friendship#Friendship"},(0,a.kt)("inlineCode",{parentName:"a"},"Friendship"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"contact"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Contact")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Send friend request to contact")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hello"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The friend request content")))),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const memberList = await room.memberList()\nfor (let i = 0; i < memberList.length; i++) {\n  await bot.Friendship.add(member, 'Nice to meet you! I am wechaty bot!')\n}\n")))}s.isMDXComponent=!0}}]);