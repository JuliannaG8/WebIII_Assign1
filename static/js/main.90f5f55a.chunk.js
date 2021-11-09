(this["webpackJsonpplay-app"]=this["webpackJsonpplay-app"]||[]).push([[0],{181:function(e,t,c){},182:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(43),s=c.n(a),i=(c(74),c(3)),l=(c(75),c(4)),j=c(27),o=c(12),d=c(6),b=c(0),u=function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)(d.b,{to:{pathname:"/".concat(e.play.id,"/details"),state:{play:e.play}},children:Object(b.jsx)("td",{children:e.play.title})}),Object(b.jsx)("td",{children:e.play.likelyDate}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{onClick:function(){e.addFav(e.play)},children:Object(b.jsx)(o.a,{})})}),Object(b.jsx)("td",{children:Object(b.jsx)(d.b,{to:{pathname:"/".concat(e.play.id,"/details"),state:{play:e.play}},children:Object(b.jsx)("button",{children:"View"})})})]})},h=function(e){return Object(b.jsx)("table",{children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{onClick:e.sort,children:"Title"}),Object(b.jsx)("th",{onClick:e.sort,children:"Year"})]}),e.plays.map((function(t){return Object(b.jsx)(u,{play:t,addFav:e.addFav},t.id)}))]})})},O=function(e){if("string"===typeof e.search){var t=e.plays.filter((function(t){return t.title.toLowerCase().includes(e.search.toLowerCase())}));return Object(b.jsxs)("span",{children:[Object(b.jsx)("h2",{children:"List/Matches"}),Object(b.jsx)(h,{plays:t,sort:e.sort,addFav:e.addFav})]})}return 0===e.plays.length?Object(b.jsxs)("span",{children:[Object(b.jsx)("h2",{children:"List/Matches"}),Object(b.jsx)("p",{children:"No Plays match given parameters"})]}):Object(b.jsxs)("span",{children:[Object(b.jsx)("h2",{children:"List/Matches"}),Object(b.jsx)(h,{plays:e.plays,sort:e.sort,addFav:e.addFav})]})},f=(c(47),function(e){var t=Object(n.createRef)(),c=Object(n.createRef)(),r=Object(n.createRef)(),a=Object(n.createRef)(),s=Object(n.createRef)(),i=Object(n.createRef)();return Object(b.jsxs)("form",{onSubmit:function(n){n.preventDefault();var l={};t.current.checked&&c.current.value.length>0&&(l.before=c.current.value),r.current.checked&&a.current.value.length>0&&(l.after=a.current.value),s.current.value.length>0&&(l.title=s.current.value),i.current.value.length>0&&(l.genre=i.current.value),0===Object.keys(l).length?alert("Error: please input some filter parameters"):e.filter(l)},onReset:e.reset,children:[Object(b.jsx)("h2",{children:"Filters"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:Object(b.jsx)("label",{children:"Title"})}),Object(b.jsx)("input",{name:"title",ref:s,type:"text"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:Object(b.jsx)("label",{children:"Year"})}),Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{name:"before",ref:t,type:"radio"}),"Before ",Object(b.jsx)("input",{type:"number",ref:c,name:"beforeYear"})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{name:"after",ref:r,type:"radio"}),"After ",Object(b.jsx)("input",{type:"number",ref:a,name:"afterYear"})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:Object(b.jsx)("label",{children:"Genre"})}),Object(b.jsxs)("select",{ref:i,name:"genre",children:[Object(b.jsx)("option",{}),e.genres.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",value:"Filter",children:"Filter"}),Object(b.jsx)("button",{type:"reset",value:"Clear",children:"Clear"})]})}),p=c(69),x=c.n(p),v=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1],a=function(){r(!c)};return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("span",{children:Object(b.jsx)(d.b,{to:"/HomeView",children:Object(b.jsx)(o.b,{size:"3em",color:"red"})})}),Object(b.jsx)("button",{onClick:a,children:"About"}),Object(b.jsxs)(x.a,{isOpen:c,ariaHideApp:!0,children:[Object(b.jsx)("p",{style:{color:"black"},children:"Julianna and Justin"}),Object(b.jsx)("p",{style:{color:"black"},children:Object(b.jsx)("a",{href:"https://github.com/JuliannaG8/WebIII_Assign1",children:"Github"})}),Object(b.jsx)("h5",{style:{color:"black"},children:"Technologies/Third-party Sources:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{style:{color:"black"},children:"React-icons"}),Object(b.jsx)("li",{style:{color:"black"},children:"React-modal"}),Object(b.jsx)("li",{style:{color:"black"},children:"React-loader-spinner"}),Object(b.jsx)("li",{style:{color:"black"},children:"Lodash"}),Object(b.jsx)("li",{style:{color:"black"},children:Object(b.jsx)("a",{href:"https://blog.logrocket.com/using-localstorage-react-hooks/",children:"Local Storage logic inspiration"})}),Object(b.jsx)("li",{style:{color:"black"},children:Object(b.jsx)("a",{href:"https://www.csswand.dev/",children:"CSSwand"})})]}),Object(b.jsx)("button",{onClick:a,children:"Close"})]})]})},y=function(e){return Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:e.play.title})," ",Object(b.jsx)("button",{onClick:function(){e.remove(e.play.id)},children:"Remove"})]},e.id)},m=function(e){var t=function(){return e.visible?"block":"none"};return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:e.toggle,children:"Show/Hide"}),Object(b.jsx)("h2",{style:{display:t()},children:"Favourites"}),Object(b.jsx)("ul",{style:{display:t()},children:e.favourites.map((function(t){return Object(b.jsx)(y,{play:t,remove:e.remove},t.id)}))})]})},g=function(e){var t=Object(l.f)(),c=Object(n.useState)(null),r=Object(i.a)(c,2),a=r[0],s=r[1];if("undefined"!=typeof t.state){var o=t.state.fromHomeView;null!=o&&s(o)}var d=Object(n.useState)(!0),u=Object(i.a)(d,2),h=u[0],p=u[1],x=null===a?e.plays:a;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)(v,{})}),Object(b.jsx)("div",{className:"favourites",children:Object(b.jsx)(m,{favourites:e.favs,visible:h,remove:e.removeFav,toggle:function(){p(!h)}})}),Object(b.jsx)("div",{className:"playfilter",children:Object(b.jsx)(f,{genres:Object(j.a)(new Set(e.plays.map((function(e){return e.genre})))),filter:e.filter,reset:e.restore})}),Object(b.jsx)("div",{className:"playlist",children:Object(b.jsx)(O,{plays:x,search:e.search,sort:e.sort,addFav:e.addFav})})]})};var k=function(e,t){var c=Object(n.useState)((function(){return function(e,t){return JSON.parse(localStorage.getItem(e))||t}(e,t)})),r=Object(i.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){localStorage.setItem(e,JSON.stringify(a))}),[e,a]),[a,s]},w=c(14),C=c(26),S=c.n(C),F=(c(181),function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),j=l[0],o=l[1];return Object(b.jsx)("div",{className:"background",children:Object(b.jsxs)("div",{className:"minibox",children:[" Play Browser",Object(b.jsxs)("div",{className:"searchInputs",children:[" Title: "," ",Object(b.jsx)("input",{type:"text",placeholder:"",value:j,onChange:function(t){var c=t.target.value;o(c);var n=e.songs.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));a(""===c?[]:n)}}),0!==r.length&&Object(b.jsx)("div",{className:"songResult",children:r.map((function(e,t){return Object(b.jsx)("p",{children:e.title})}))})]}),Object(b.jsx)(d.b,{to:{pathname:"/default",state:{fromHomeView:r}},children:Object(b.jsx)("button",{children:"Show Matching Plays"})}),Object(b.jsx)(d.b,{to:{pathname:"/default",state:{fromHomeView:null}},children:Object(b.jsx)("button",{children:"Show All Plays"})})]})})}),N=(c(24),function(e){var t=function(){e.addFav(e.play)};return"Text"===e.current?Object(b.jsxs)("div",{className:"titlebox",children:[Object(b.jsxs)("h2",{children:[" ",e.play.title," "]}),Object(b.jsx)("select",{children:e.params.acts.map((function(e){return Object(b.jsx)("option",{children:e})}))}),Object(b.jsx)("select",{children:e.params.scenes.map((function(e){return Object(b.jsx)("option",{children:e})}))}),Object(b.jsx)("select",{children:e.params.speakers.map((function(e){return Object(b.jsx)("option",{children:e})}))}),Object(b.jsx)("input",{type:"text",className:"stringtype"}),Object(b.jsx)(d.b,{to:{pathname:"/default",state:{fromHomeView:null}},children:Object(b.jsx)("button",{children:"Go Back"})}),Object(b.jsx)("button",{onClick:t,children:Object(b.jsx)(o.a,{})})]}):Object(b.jsxs)("div",{className:"titletext",children:[Object(b.jsxs)("h2",{children:[" ",e.play.title," "]}),Object(b.jsx)("div",{className:"synopsis",children:e.play.synopsis}),Object(b.jsx)(d.b,{to:{pathname:"/default",state:{fromHomeView:null}},children:Object(b.jsx)("button",{children:"Go Back"})}),Object(b.jsx)("button",{onClick:t,children:Object(b.jsx)(o.a,{})})]})}),L=c(45),D=function(e){return"Details"===e.tabName?Object(b.jsxs)("div",{className:"tabtext",children:[Object(b.jsxs)("p",{children:["Likely Year: ",e.details.likelyDate]}),Object(b.jsxs)("p",{children:["Genre: ",e.details.genre]}),Object(b.jsxs)("p",{children:["Wiki: ",e.details.wiki,", Gutenberg: ",e.details.gutenberg,", ShakespeareOrg: ",e.details.shakespeareOrg]}),Object(b.jsx)("p",{children:e.details.desc})]}):"Characters"===e.tabName?Object(b.jsx)("ul",{children:e.details.map((function(e){return Object(b.jsxs)("li",{children:[e.player,"--------",e.desc]},e)}))}):Object(b.jsx)("div",{children:e.details.map((function(e){return Object(b.jsxs)("span",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:e.name}),e.scenes.map((function(e){return Object(b.jsxs)("span",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("p",{children:Object(b.jsx)("em",{children:e.title})}),e.speeches.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.speaker}),e.lines.map((function(e){return Object(b.jsx)("p",{children:e})}))]})})),Object(b.jsx)("hr",{})]})}))]})}))})},T=function(e){var t=k(e.id,null),c=Object(i.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(!0),l=Object(i.a)(s,2),o=l[0],d=l[1],u=Object(n.useState)([]),h=Object(i.a)(u,2),O=h[0],f=h[1],p=Object(n.useState)({}),x=Object(i.a)(p,2),v=x[0],y=x[1],m=function(){""===e.play.filename?f(["Details"]):f(["Details","Characters","Text"])};Object(n.useEffect)((function(){var t="https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=".concat(e.id);null===r&&""!==e.play.filename?fetch(t).then((function(e){if(e.ok)return e.json();throw new Error("Fetch failed")})).then((function(t){a(t),m(),y({details:e.play,tabName:"Details"}),d(!1)})).catch((function(e){return console.error(e)})):(d(!1),m(),y({details:e.play,tabName:"Details"}))}),[e.id,r,a,e.play]);var g=function(t){if("Details"===t.target.innerHTML)y({details:e.play,tabName:"Details"}),e.tabState(t.target.innerHTML);else if("Characters"===t.target.innerHTML)y({details:r.persona,tabName:"Characters"}),e.tabState(t.target.innerHTML);else if("Text"===t.target.innerHTML){y({details:r.acts,tabName:"Text"});var c=[],n=[],a=r.persona.map((function(e){return e.player}));r.acts.forEach((function(e){c.push(e.name),e.scenes.forEach((function(e){n.push(e)}))})),e.tabState(t.target.innerHTML,c,Object(j.a)(new Set(n.map((function(e){return e.name})))),a)}};return o?Object(b.jsx)(S.a,{type:"Circles",color:"#00BFFF",height:"50vh",width:"50vh"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"tabs",children:O.map((function(e){return Object(b.jsx)("button",{onClick:g,children:e})}))}),Object(n.createElement)(D,Object(L.a)(Object(L.a)({},v),{},{key:e.id}))]})},H=function(e){var t=Object(l.g)().play,c=Object(l.f)().state.play,r=Object(n.useState)("Details"),a=Object(i.a)(r,2),s=a[0],j=a[1],o=Object(n.useState)({}),d=Object(i.a)(o,2),u=d[0],h=d[1],O=function(e,t,c){h({acts:e,scenes:t,speakers:c})};return Object(b.jsxs)("div",{className:"detailView",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)(v,{})}),Object(b.jsx)("div",{className:"playtitle",children:Object(b.jsx)(N,{play:c,addFav:e.addFav,current:s,params:u})}),Object(b.jsx)("div",{className:"tab",children:Object(b.jsx)(T,{play:c,id:t,tabState:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;"Text"===e?(O(t,c,n),j(e)):j("Details"===e?"Details":"Characters")}})})]})};var R=function(){var e=k("plays",[]),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(i.a)(a,2),j=s[0],o=s[1],d=Object(n.useState)(!0),u=Object(i.a)(d,2),h=u[0],O=u[1],f=k("fav",[]),p=Object(i.a)(f,2),x=p[0],v=p[1];Object(n.useEffect)((function(){0===c.length?fetch("https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php").then((function(e){if(e.ok)return e.json();throw new Error("Fetch failed")})).then((function(e){r(e.sort((function(e,t){return e.title>t.title?1:-1}))),o(e.sort((function(e,t){return e.title>t.title?1:-1}))),O(!1)})).catch((function(e){return console.error(e)})):(o(c),O(!1))}),[c,r]);var y=function(e){if("undefined"===typeof x.find((function(t){return t.id===e.id}))){var t=w(x);t.push(e),v(t)}else alert("Play already in Favourites list")};return h&&0===j.length?Object(b.jsx)(S.a,{type:"Circles",color:"#00BFFF",height:"50vh",width:"50vh"}):Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(l.a,{path:"/",exact:!0,children:Object(b.jsx)(F,{songs:c})}),Object(b.jsx)(l.a,{path:"/HomeView",exact:!0,children:Object(b.jsx)(F,{songs:c})}),Object(b.jsx)(l.a,{path:"/default",exact:!0,children:Object(b.jsx)(g,{plays:j,restore:function(){o(c)},filter:function(e){var t=w(c);if("undefined"!=typeof e.title||"undefined"!=typeof e.genre){var n=w(t);t=function(e,t,c){return c.filter((function(c){return c.title.toLowerCase().includes(e)&&c.genre===t||"undefined"===typeof t&&c.title.toLowerCase().includes(e)||"undefined"===typeof e&&c.genre===t}))}(e.title.toLowerCase(),e.genre,n)}if("undefined"!=typeof e.before||"undefined"!=typeof e.after){var r=w(t);t=function(e,t,c){return c.filter((function(c){return e>c.likelyDate&&c.likelyDate>t||"undefined"===typeof t&&c.likelyDate<e||"undefined"===typeof e&&c.likelyDate>t}))}(e.before,e.after,r)}o(t)},sort:function(e){var t,c=w(j);t="year"===e.target.textContent.toLowerCase()?"likelyDate":e.target.textContent.toLowerCase(),c.sort((function(e,c){return e[t]>c[t]?1:-1})),o(c)},favs:x,addFav:y,removeFav:function(e){var t=w(x),c=t.findIndex((function(t){return t.id===e}));t.splice(c,1),v(t)}})}),Object(b.jsx)(l.c,{children:Object(b.jsx)(l.a,{path:"/:play/details",exact:!0,children:Object(b.jsx)(H,{addFav:y})})})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,183)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})})}),document.getElementById("root")),M()},24:function(e,t,c){},47:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){}},[[182,1,2]]]);
//# sourceMappingURL=main.90f5f55a.chunk.js.map