(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={Profile:"Profile_Profile__3pcvb",Description:"Profile_Description__3Qd95",Name:"Profile_Name__21Qzv",Location:"Profile_Location__u9aZK",Tag:"Profile_Tag__22hHS",Stats:"Profile_Stats__wLeg1",Item:"Profile_Item__1_YJf",Label:"Profile_Label__2nsMA",Quantity:"Profile_Quantity__3Blj6"}},,function(e,a,t){e.exports={Statistics:"Statistics_Statistics__2Mtzc",Title:"Statistics_Title__ILL-T",List:"Statistics_List__1Jpk6",Item:"Statistics_Item__38TvR"}},function(e,a,t){e.exports={List:"FriendsList_List__2jBC0",Item:"FriendsList_Item__3mFrr",Online:"FriendsList_Online__LA35b",Offline:"FriendsList_Offline__1T_WR"}},function(e,a,t){e.exports={TransactionHistory:"TransactionHistory_TransactionHistory__2bf_H"}},,,function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);t(2);var c=t(7),n=t.n(c),i=t(1),s=t.n(i),r=t(0),d=function(e){var a=e.user;return Object(r.jsxs)("div",{className:s.a.Profile,children:[Object(r.jsxs)("div",{className:s.a.Description,children:[Object(r.jsx)("img",{src:a.avatar,alt:a.name,width:"200",className:s.a.Avatar}),Object(r.jsx)("p",{className:s.a.Name,children:a.name}),Object(r.jsxs)("p",{className:s.a.Tag,children:["@",a.tag]}),Object(r.jsx)("p",{className:s.a.Location,children:a.location})]}),Object(r.jsx)("ul",{className:s.a.Stats,children:Object.entries(a.stats).map((function(e){return Object(r.jsxs)("li",{className:s.a.Item,children:[Object(r.jsxs)("span",{className:s.a.Label,children:[e[0]," "]}),Object(r.jsx)("span",{className:s.a.Quantity,children:e[1]})]},e[0])}))})]})},o=t(3),l=t.n(o),b=function(e){var a=e.title,t=e.statistic;return Object(r.jsxs)("div",{className:l.a.Statistics,children:[Object(r.jsx)("h2",{className:l.a.Title,children:a}),Object(r.jsx)("ul",{className:l.a.List,children:t.map((function(e){return Object(r.jsxs)("li",{className:l.a.Item,children:[Object(r.jsx)("span",{className:l.a.Label,children:e.label}),Object(r.jsx)("span",{className:l.a.Percentage,children:e.percentage})]},e.id)}))})]})},m=t(4),p=t.n(m),u=function(e){var a=e.friends;return Object(r.jsx)("ul",{className:p.a.List,children:a.map((function(e){return Object(r.jsxs)("li",{className:p.a.Item,children:[Object(r.jsx)("span",{className:e.isOnline?p.a.Online:p.a.Offline}),Object(r.jsx)("img",{src:e.avatar,alt:e.name,width:"100",className:p.a.Img}),Object(r.jsx)("p",{className:p.a.Name,children:e.name})]},e.id)}))})},f=t(5),j=t.n(f),y=function(e){var a=e.transactions;return Object(r.jsxs)("table",{className:j.a.TransactionHistory,children:[Object(r.jsx)("thead",{className:j.a.Label,children:Object(r.jsxs)("tr",{className:j.a.Row,children:[Object(r.jsx)("th",{className:j.a.Colom,children:"Type"}),Object(r.jsx)("th",{children:"Amount"}),Object(r.jsx)("th",{children:"Currency"})]})}),Object(r.jsx)("tbody",{children:a.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.type}),Object(r.jsx)("td",{children:e.amount}),Object(r.jsx)("td",{children:e.currency})]},e.id)}))})]})},O={friends:t(8),statistic:t(9),transactions:t(10),user:t(11)},_=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{user:O.user}),Object(r.jsx)(b,{statistic:O.statistic}),Object(r.jsx)(u,{friends:O.friends}),Object(r.jsx)(y,{transactions:O.transactions})]})};t(17);n.a.render(Object(r.jsx)(_,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.0704e21f.chunk.js.map