(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(14),i=n.n(a),s=(n(25),n.p+"static/media/logo.b6864c81.gif"),o=(n(26),n(0)),u=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{children:["I'm ",e.name,", ",Object(o.jsx)("br",{})," but you can call me ",e.stageName]}),e.children]})},j=function(){return Object(o.jsxs)("p",{children:[" nyeheh im kyot \ud83d\ude09",Object(o.jsx)("br",{}),"rawr"]})},l=n(15),b=n(16),d=n(20),h=n(18),f=(n(28),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(b.a)(n,[{key:"resetCounter",value:function(){this.setState({count:0})}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:Object(o.jsxs)("u",{children:["\ud83d\udc3c ",Object(o.jsxs)("b",{children:["clicker counter = ",this.state.count]})," \ud83d\udc3c"]})}),Object(o.jsx)("button",{id:"button",onClick:function(t){return e.addCounter(t)},children:"\ud83d\udc3c Click me!! \ud83d\udc3c"}),Object(o.jsx)("button",{id:"button",onClick:function(t){return e.resetCounter(t)},children:"\ud83d\udc3c Reset  \ud83d\udc3c"})]})}}]),n}(r.a.Component)),p=n(19),O=n(17),m=n.n(O).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),g=function(){return m.get("/hello")},x=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){g().then((function(e){r(e.data)})).catch((function(e){console.log("Something went wrong!")}))})),n};var v=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(o.jsx)("p",{children:x()}),Object(o.jsxs)(u,{name:"Panda",stageName:"Panpan",children:[Object(o.jsx)(j,{}),Object(o.jsx)(f,{})]}),Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:" ---------------------------------------------------------------------------- "})}),Object(o.jsx)("img",{src:"https://64.media.tumblr.com/cdead4eeb0f09e0fa4f6183922ce855f/tumblr_p4ey78eeed1sbjo65o1_1280.gifv",className:"App-gif",height:"300",alt:"panda gif"}),Object(o.jsx)("a",{className:"App-link",href:"https://www.youtube.com/watch?v=dKLpEb4i0Mk",target:"_blank",rel:"noopener noreferrer",children:"here's a video of cute me annoying my friend and rolling ehe"})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),y()}},[[47,1,2]]]);
//# sourceMappingURL=main.8c711759.chunk.js.map