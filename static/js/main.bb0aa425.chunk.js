(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(19),s=n.n(r),i=n(0),o=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-success",children:Object(i.jsxs)("div",{class:"container-fluid",children:[Object(i.jsx)("a",{class:"navbar-brand",href:"/",children:"PANDA \ud83d\udc3c"}),Object(i.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(i.jsxs)("div",{class:"navbar-nav",children:[Object(i.jsx)("a",{class:"nav-link",href:"/myfirstreact",children:"Home"}),Object(i.jsx)("a",{class:"nav-link",href:"/myfirstreact/employees",children:"Employees"}),Object(i.jsx)("a",{class:"nav-link",href:"/myfirstreact/add",children:"Add Employee"}),Object(i.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})},l=n(6),j=n(2),d=n.p+"static/media/logo.b6864c81.gif",b=(n(30),function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{children:["I'm ",e.name,", ",Object(i.jsx)("br",{})," but you can call me ",e.stageName]}),e.children]})}),h=function(){return Object(i.jsxs)("p",{children:[" nyeheh im kyot \ud83d\ude09",Object(i.jsx)("br",{}),"rawr"]})},u=n(20),m=n(21),O=n(24),p=n(23),x=(n(31),function(e){Object(O.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(m.a)(n,[{key:"resetCounter",value:function(){this.setState({count:0})}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:Object(i.jsxs)("u",{children:["\ud83d\udc3c ",Object(i.jsxs)("b",{children:["clicker counter = ",this.state.count]})," \ud83d\udc3c"]})}),Object(i.jsx)("button",{id:"button",onClick:function(t){return e.addCounter(t)},children:"\ud83d\udc3c Click me!! \ud83d\udc3c"}),Object(i.jsx)("button",{id:"button",onClick:function(t){return e.resetCounter(t)},children:"\ud83d\udc3c Reset  \ud83d\udc3c"})]})}}]),n}(a.a.Component)),f=n(3),y=n(22),v=n.n(y).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),g=function(){return v.get("/hello")},N=function(){var e=Object(c.useState)("something's just not working (the API), but it ayt ehe"),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){g().then((function(e){a(e.data)})).catch((function(e){console.log("Something went wrong!")}))})),n},k=function(){return v.get("/employees")},w=function(e){return v.post("/employees",e)},A=function(e){return v.put("/employees",e)},C=function(e){return v.get("/employees/".concat(e))},S=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){k().then((function(e){a(e.data)})).catch((function(){console.log("sorry po lods :p")}))})),Object(i.jsxs)("div",{id:"employee",children:[Object(i.jsx)("h2",{children:"\ud83d\udc3c List of Employees \ud83d\udc3c"}),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("table",{className:"table table-hover table-light table-bordered border-dark",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"table-warning",children:[Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"Name"})}),Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"Department"})}),Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"Location"})}),Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"Action"})})]})}),Object(i.jsx)("tbody",{children:n.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:e.department}),Object(i.jsx)("td",{children:e.location}),Object(i.jsx)("td",{children:Object(i.jsx)(l.b,{className:"btn btn-primary",to:"/edit/".concat(e.employee_id),children:"Update"})})]},e.employee_id)}))})]})})]})};var E=function(){return Object(i.jsx)("div",{className:"Home",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(i.jsx)("p",{children:N()}),Object(i.jsxs)(b,{name:"Panda",stageName:"Panpan",children:[Object(i.jsx)(h,{}),Object(i.jsx)(x,{})]}),Object(i.jsx)("p",{children:Object(i.jsx)("b",{children:" ---------------------------------------------------------------------------- "})}),Object(i.jsx)("img",{src:"https://64.media.tumblr.com/cdead4eeb0f09e0fa4f6183922ce855f/tumblr_p4ey78eeed1sbjo65o1_1280.gifv",className:"App-gif",height:"300",alt:"panda gif"}),Object(i.jsx)("a",{className:"App-link",href:"https://www.youtube.com/watch?v=dKLpEb4i0Mk",target:"_blank",rel:"noopener noreferrer",children:"here's a video of cute me annoying my friend and rolling ehe"})]})})},_=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(f.a)(r,2),o=s[0],l=s[1],d=Object(c.useState)(""),b=Object(f.a)(d,2),h=b[0],u=b[1],m=Object(j.f)(),O=Object(j.g)().employee_id;Object(c.useEffect)((function(){O?C(O).then((function(e){a(e.data.name),l(e.data.location),u(e.data.department)})).catch((function(e){console.error("Oh no! Error!")})):console.log("Sorry! employee_id does not exist")}),[]);return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:"Add Employee"}),Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{for:"name",className:"form-label",children:"Name"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Add employee name",onChange:function(e){a(e.target.value)}})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{for:"department",className:"form-label",children:"Department"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"department",placeholder:"Add employee department",onChange:function(e){u(e.target.value)}})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{for:"location",className:"form-label",children:"Location"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"location",placeholder:"Add employee location",onChange:function(e){l(e.target.value)}})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),O?A({employee_id:O,name:n,location:o,department:h}).then((function(e){console.log("Yay! Updated employee!",e.data),m("/employees")})).catch((function(e){console.error("Oops! Something went wrong!")})):w({name:n,location:o,department:h}).then((function(e){console.log("Yay! Added a new employee!",e.data),m("/employees")})).catch((function(e){console.error("Oh no! Something went wrong!")}))}(e)},children:"Save"})]})]})},L=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"yikes! page not found..."})})},D=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(l.a,{children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/myfirstreact",element:Object(i.jsx)(E,{})}),Object(i.jsx)(j.a,{exact:!0,path:"/myfirstreact/employees",element:Object(i.jsx)(S,{})}),Object(i.jsx)(j.a,{exact:!0,path:"/myfirstreact/add",element:Object(i.jsx)(_,{})}),Object(i.jsx)(j.a,{exact:!0,path:"/myfirstreact/edit/:employee_id",element:Object(i.jsx)(_,{})}),Object(i.jsx)(j.a,{exact:!0,path:"*",element:Object(i.jsx)(L,{})})]})})})};var P=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(D,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(50);s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(P,{})}),document.getElementById("root")),F()}},[[51,1,2]]]);
//# sourceMappingURL=main.bb0aa425.chunk.js.map