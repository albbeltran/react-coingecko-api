(this["webpackJsonpreact-coingecko-api"]=this["webpackJsonpreact-coingecko-api"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),a=c(14),s=c.n(a),i=(c(21),c(22),c(4)),o=c.n(i),l=c(15),d=c(5),j=(c(24),c(16)),u=c.n(j),b=c(0),h=function(e){var t=e.coin,c=e.index;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"text-muted",children:c}),Object(b.jsxs)("td",{children:[Object(b.jsx)("img",{src:t.image,alt:"",className:"img-fluid me-4",style:{width:"3%"}}),Object(b.jsx)("span",{children:t.name}),Object(b.jsx)("span",{className:"ms-3 text-muted",children:t.symbol})]}),Object(b.jsxs)("td",{children:["$",t.current_price.toLocaleString()]}),Object(b.jsx)("td",{className:t.price_change_percentage_24h>0?"text-success":"text-danger",children:t.price_change_percentage_24h}),Object(b.jsxs)("td",{children:["$",t.total_volume.toLocaleString()]})]})},p=["#","Coin","Price","Price Change","24h Volume"],x=function(e){var t=e.coins,c=e.search,n=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return t?Object(b.jsxs)("table",{className:"table table-dark mt-4 table-hover",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:p.map((function(e,t){return Object(b.jsx)("td",{children:e},t)}))})}),Object(b.jsx)("tbody",{children:n.map((function(e,t){return Object(b.jsx)(h,{coin:e,index:t+1},e.id)}))})]}):Object(b.jsx)("div",{children:"no coins"})};var m=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(d.a)(a,2),i=s[0],j=s[1],h=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");case 3:t=e.sent,r(t.data),console.log(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("input",{type:"text",placeholder:"Search a Coin",className:"form-control bg-dark text-light border-0 mt-4 text-center",autoFocus:!0,onChange:function(e){return j(e.target.value)}}),Object(b.jsx)(x,{coins:c,search:i})]})})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f18bdb0b.chunk.js.map