(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(15),s=n.n(i),o=(n(25),n.p+"static/media/logo.b6864c81.gif"),a=(n(26),n(0)),j=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{children:["I'm ",e.name,", ",Object(a.jsx)("br",{})," but you can call me ",e.stageName]}),e.children]})},b=function(){return Object(a.jsxs)("p",{children:[" nyeheh im kyot \ud83d\ude09",Object(a.jsx)("br",{}),"rawr"]})},l=n(16),d=n(17),u=n(20),h=n(19),O=(n(28),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(d.a)(n,[{key:"resetCounter",value:function(){this.setState({count:0})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:Object(a.jsxs)("u",{children:["\ud83d\udc3c ",Object(a.jsxs)("b",{children:["clicker counter = ",this.state.count]})," \ud83d\udc3c"]})}),Object(a.jsx)("button",{id:"button",onClick:function(t){return e.addCounter(t)},children:"\ud83d\udc3c Click me!! \ud83d\udc3c"}),Object(a.jsx)("button",{id:"button",onClick:function(t){return e.resetCounter(t)},children:"\ud83d\udc3c Reset  \ud83d\udc3c"})]})}}]),n}(r.a.Component)),f=n(5),p=n(18),x=n.n(p).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),m=function(){return x.get("/hello")},g=function(){var e=Object(c.useState)("something's just not working (the API), but it ayt ehe"),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){m().then((function(e){r(e.data)})).catch((function(e){console.log("Something went wrong!")}))})),n},v=function(){return x.get("/employees")},y=(n(47),function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){v().then((function(e){r(e.data)})).catch((function(){console.log("sorry po lods :p")}))})),Object(a.jsxs)("div",{id:"employee",children:[Object(a.jsx)("h2",{children:"\ud83d\udc3c List of Employees \ud83d\udc3c"}),Object(a.jsxs)("table",{border:"1",children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("b",{children:"Name"})}),Object(a.jsx)("td",{children:Object(a.jsx)("b",{children:"Department"})}),Object(a.jsx)("td",{children:Object(a.jsx)("b",{children:"Location"})})]}),n.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.department}),Object(a.jsx)("td",{children:e.location})]})}))]})]})});var k=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(a.jsx)("p",{children:g()}),Object(a.jsxs)(j,{name:"Panda",stageName:"Panpan",children:[Object(a.jsx)(b,{}),Object(a.jsx)(O,{})]}),Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:" ---------------------------------------------------------------------------- "})}),Object(a.jsx)(y,{}),Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:" ---------------------------------------------------------------------------- "})}),Object(a.jsx)("img",{src:"https://64.media.tumblr.com/cdead4eeb0f09e0fa4f6183922ce855f/tumblr_p4ey78eeed1sbjo65o1_1280.gifv",className:"App-gif",height:"300",alt:"panda gif"}),Object(a.jsx)("a",{className:"App-link",href:"https://www.youtube.com/watch?v=dKLpEb4i0Mk",target:"_blank",rel:"noopener noreferrer",children:"here's a video of cute me annoying my friend and rolling ehe"})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),C()}},[[48,1,2]]]);
//# sourceMappingURL=main.1c25690d.chunk.js.map