(this["webpackJsonpcrud-admin-dashboard"]=this["webpackJsonpcrud-admin-dashboard"]||[]).push([[0],{154:function(e,t,a){},155:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(16),r=a.n(i),o=(a(154),a(155),a(7)),l=a(114),s=a(229),d=a(223),j=a(54),u=a(121),b=a(29),O=a(215),h=a(220),m=a(217),f=a(216),p=a(103),g=a(6),x=Object(l.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function v(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(!1),l=Object(o.a)(r,2),s=l[0],d=l[1],u=Object(n.useState)(!1),v=Object(o.a)(u,2),y=v[0],S=v[1],C=Object(n.useState)(!1),w=Object(o.a)(C,2),E=w[0],D=w[1],k=x(),N=function(){e.setOpen(!1),i(!1)},A=function(t){i(!0),"message"===t.target.id?e.setEditData((function(e){return Object(b.a)(Object(b.a)({},e),{},{message:t.target.value})})):"email"===t.target.id?e.setEditData((function(e){return Object(b.a)(Object(b.a)({},e),{},{email:t.target.value})})):"name"===t.target.id&&e.setEditData((function(e){return Object(b.a)(Object(b.a)({},e),{},{name:t.target.value})}))};return Object(g.jsx)("div",{children:Object(g.jsxs)(O.a,{open:e.open,onClose:N,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(g.jsx)(f.a,{id:"alert-dialog-title",children:"Adding Entry"}),Object(g.jsx)(m.a,{children:Object(g.jsxs)("form",{id:"addForm",className:k.root,autoComplete:"off",onSubmit:function(){e.handleAcknowledge(),e.setOpen(!1),i(!1)},children:[Object(g.jsx)(p.a,{required:!0,id:"name",label:"Name",value:e.editData.name,autoFocus:!0,onChange:A,error:y,onInvalid:function(){return S(!0)}}),Object(g.jsx)(p.a,{type:"email",required:!0,id:"email",label:"E-Mail",value:e.editData.email,onChange:A,error:s,onInvalid:function(){return d(!0)}}),Object(g.jsx)(p.a,{required:!0,id:"message",label:"Message",value:e.editData.message,multiline:!0,rows:4,onChange:A,fullWidth:!0,error:E,onInvalid:function(){return D(!0)}})]})}),Object(g.jsxs)(h.a,{children:[Object(g.jsx)(j.a,{onClick:N,color:"primary",children:"Cancel"}),Object(g.jsx)(j.a,{type:"submit",form:"addForm",color:"primary",disabled:!c,autoFocus:!0,children:"Confirm"})]})]})})}var y=a(221);function S(e){var t=function(){e.setOpen(!1)};return Object(g.jsx)("div",{children:Object(g.jsxs)(O.a,{open:e.open,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(g.jsx)(f.a,{id:"alert-dialog-title",children:"Are you sure you want to delete?"}),Object(g.jsx)(m.a,{children:Object(g.jsx)(y.a,{id:"alert-dialog-description",children:"Are you sure you want to delete the selection?"})}),Object(g.jsxs)(h.a,{children:[Object(g.jsx)(j.a,{onClick:t,color:"primary",children:"Cancel"}),Object(g.jsx)(j.a,{onClick:function(){e.handleAcknowledge(),e.setOpen(!1)},color:"primary",autoFocus:!0,children:"Yes"})]})]})})}var C=Object(l.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function w(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(!1),l=Object(o.a)(r,2),s=l[0],d=l[1],u=Object(n.useState)(!1),x=Object(o.a)(u,2),v=x[0],y=x[1],S=Object(n.useState)(!1),w=Object(o.a)(S,2),E=w[0],D=w[1],k=C(),N=function(){e.setOpen(!1),i(!1)},A=function(t){i(!0),"message"===t.target.id?e.setEditData((function(e){return Object(b.a)(Object(b.a)({},e),{},{message:t.target.value})})):"email"===t.target.id?e.setEditData((function(e){return Object(b.a)(Object(b.a)({},e),{},{email:t.target.value})})):"name"===t.target.id&&e.setEditData((function(e){return Object(b.a)(Object(b.a)({},e),{},{name:t.target.value})}))};return Object(g.jsx)("div",{children:Object(g.jsxs)(O.a,{open:e.open,onClose:N,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(g.jsx)(f.a,{id:"alert-dialog-title",children:"Editing Entry"}),Object(g.jsx)(m.a,{children:Object(g.jsxs)("form",{id:"editForm",className:k.root,autoComplete:"off",onSubmit:function(){e.handleAcknowledge(),e.setOpen(!1),i(!1)},children:[Object(g.jsx)(p.a,{required:!0,id:"name",label:"Name",value:e.editData.name,autoFocus:!0,onChange:A,error:v,onInvalid:function(){return y(!0)}}),Object(g.jsx)(p.a,{type:"email",required:!0,id:"email",label:"E-Mail",value:e.editData.email,onChange:A,error:s,onInvalid:function(){return d(!0)}}),Object(g.jsx)(p.a,{required:!0,id:"message",label:"Message",value:e.editData.message,multiline:!0,rows:4,onChange:A,fullWidth:!0,error:E,onInvalid:function(){return D(!0)}})]})}),Object(g.jsxs)(h.a,{children:[Object(g.jsx)(j.a,{onClick:N,color:"primary",children:"Cancel"}),Object(g.jsx)(j.a,{type:"submit",form:"editForm",color:"primary",disabled:!c,autoFocus:!0,children:"Confirm"})]})]})})}var E=a(231),D=a(64),k=a(120),N=a.n(k);function A(e){var t=function(t,a){"clickaway"!==a&&e.setOpen(!1)};return Object(g.jsx)("div",{children:Object(g.jsx)(E.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.open,autoHideDuration:6e3,onClose:t,message:e.message,action:Object(g.jsx)(c.a.Fragment,{children:Object(g.jsx)(D.a,{size:"small","aria-label":"close",color:"inherit",onClick:t,children:Object(g.jsx)(N.a,{fontSize:"small"})})})})})}var T=Object(l.a)({box:{height:"calc(100% - 100px)"}});function F(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),r=Object(o.a)(i,2),l=r[0],b=r[1],O=Object(n.useState)(!0),h=Object(o.a)(O,2),m=h[0],f=h[1],p=Object(n.useState)(!1),x=Object(o.a)(p,2),y=x[0],C=x[1],E=Object(n.useState)(""),D=Object(o.a)(E,2),k=D[0],N=D[1],F=Object(n.useState)(5),M=Object(o.a)(F,2),I=M[0],J=M[1],q=Object(n.useState)(!1),z=Object(o.a)(q,2),P=z[0],B=z[1],W=Object(n.useState)(!1),L=Object(o.a)(W,2),G=L[0],H=L[1],R=Object(n.useState)({}),U=Object(o.a)(R,2),Y=U[0],K=U[1],Q=Object(n.useState)(!1),V=Object(o.a)(Q,2),X=V[0],Z=V[1],$=Object(n.useState)({}),_=Object(o.a)($,2),ee=_[0],te=_[1],ae=T(),ne=function(){N("Request timed out."),C(!0)},ce=function(){f(!0),fetch("/admin/contact/api").then((function(e){return e.json()})).then((function(e){f(!1),c(e)})).catch((function(e){console.error(e),f(!1)}))};Object(n.useEffect)(ce,[]);return Object(g.jsxs)(s.a,{component:"div",className:ae.box,children:[Object(g.jsx)(u.a,{rows:a,columns:[{field:"id",headerName:"ID",width:90},{field:"name",headerName:"Name",width:150,editable:!1},{field:"email",headerName:"Email",width:180,editable:!1},{field:"message",headerName:"Message",description:"This column has a value getter and is not sortable.",sortable:!1,editable:!1,flex:1,minWidth:400}],pageSize:I,onPageSizeChange:function(e){return J(e)},rowsPerPageOptions:[5,10,20],loading:m,checkboxSelection:!0,disableSelectionOnClick:!0,editMode:"row",onSelectionModelChange:function(e){b(e)}}),Object(g.jsxs)(d.a,{children:[Object(g.jsx)(j.a,{variant:"contained",color:"secondary",disabled:!(l.length>0),onClick:function(){return B(!0)},children:"DELETE"}),Object(g.jsx)(j.a,{variant:"contained",color:"primary",disabled:!(l.length>0&&l.length<=1),onClick:function(){H(!0),K(a[a.findIndex((function(e){return e.id===l[0]}))])},children:"EDIT"}),Object(g.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){Z(!0),te({name:"",email:"",message:""})},children:"ADD"})]}),Object(g.jsx)(A,{message:k,open:y,setOpen:C}),Object(g.jsx)(S,{open:P,setOpen:B,handleAcknowledge:function(){var e=new AbortController;setTimeout((function(){e.abort()}),5e3);fetch("/admin/contact/api",{method:"DELETE",headers:{"Content-Type":"application/json"},signal:e.signal,body:JSON.stringify(l)}).then((function(e){return e.json()})).then((function(e){JSON.parse(e).deleteSuccess?(ce(),N("Succesfully Deleted Entry!"),C(!0)):(N("Error! Entry was not deleted."),C(!0))})).catch((function(e){console.log(e.name),e.name,ne()}))}}),Object(g.jsx)(w,{open:G,setOpen:H,editData:Y,setEditData:K,handleAcknowledge:function(){var e=new AbortController;setTimeout((function(){e.abort()}),5e3);fetch("/admin/contact/api",{method:"PUT",headers:{"Content-Type":"application/json"},signal:e.signal,body:JSON.stringify(Y)}).then((function(e){return e.json()})).then((function(e){JSON.parse(e).editSuccess?(ce(),N("Succesfully Modified Entry!"),C(!0)):(N("Error! Entry was not changed."),C(!0))})).catch((function(e){console.log(e.name),e.name,ne()}))}}),Object(g.jsx)(v,{open:X,setOpen:Z,editData:ee,setEditData:te,handleAcknowledge:function(){var e=new AbortController;setTimeout((function(){e.abort()}),5e3);fetch("/admin/contact/api",{method:"POST",headers:{"Content-Type":"application/json"},signal:e.signal,body:JSON.stringify(ee)}).then((function(e){return e.json()})).then((function(e){JSON.parse(e).addSuccess?(ce(),N("Succesfully Added Entry!"),C(!0)):(N("Error! Entry was not added."),C(!0))})).catch((function(e){console.log(e.name),e.name,ne()}))}})]})}var M=a(225),I=a(226),J=a(222),q=a(60),z=a(232),P=a(227),B=a(173),W=a(174),L=a(178),G=a(228),H=a(224),R=a(38),U=a(18),Y=240,K=Object(R.a)({appBar:{width:"calc(100% - ".concat(Y,"px)"),marginLeft:Y},drawer:{width:Y,flexShrink:0,"& .MuiDrawer-paper":{width:Y,boxSizing:"border-box"}},box:{flexGrow:1,height:"100vh",bgcolor:"background.default",p:3},root:{display:"flex"},active:{backgroundColor:"#f4f4f4"}});function Q(e){var t=K(),a=Object(U.f)(),n=Object(U.g)(),c=[{text:"Contact DB",icon:Object(g.jsx)(H.a,{}),path:"/"}];return Object(g.jsxs)(s.a,{className:t.root,children:[Object(g.jsx)(M.a,{}),Object(g.jsx)(I.a,{position:"fixed",elevation:0,className:t.appBar,children:Object(g.jsx)(J.a,{children:Object(g.jsx)(q.a,{variant:"h6",noWrap:!0,component:"div",children:"Contact Database"})})}),Object(g.jsxs)(z.a,{className:t.drawer,variant:"permanent",anchor:"left",children:[Object(g.jsx)(J.a,{}),Object(g.jsx)(P.a,{}),Object(g.jsx)(B.a,{children:c.map((function(e,c){return Object(g.jsxs)(W.a,{button:!0,onClick:function(){return a.push(e.path)},className:n.pathname===e.path?t.active:null,children:[Object(g.jsx)(L.a,{children:e.icon}),Object(g.jsx)(G.a,{primary:e.text})]},e.text)}))})]}),Object(g.jsxs)(s.a,{className:t.box,component:"main",children:[Object(g.jsx)(J.a,{}),e.children]})]})}var V=a(124);var X=function(){return Object(g.jsx)(V.a,{basename:"/crud",children:Object(g.jsx)(Q,{children:Object(g.jsx)(U.c,{children:Object(g.jsx)(U.a,{exact:!0,path:"/",children:Object(g.jsx)(F,{})})})})})};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(X,{})}),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.d8bd6403.chunk.js.map