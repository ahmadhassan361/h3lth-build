"use strict";(self.webpackChunkacadify_saas_frontend=self.webpackChunkacadify_saas_frontend||[]).push([[105],{5105:function(e,s,l){l.r(s),l.d(s,{default:function(){return h}});var n=l(5861),i=l(885),t=l(7757),r=l.n(t),a=l(2791),o=l(4569),d=l.n(o),c=l(6431),u=l.n(c),v=(l(3528),l(364)),m=l(184),h=function(){var e,s,l,t,o,c,h,p,x,j,f,g,_,N,w,b,q,y,S,k,Z,F,I,E,D,C,O,T,H,J,Q,Y,A,P=(0,a.useState)(""),R=(0,i.Z)(P,2),G=R[0],M=R[1],K=(0,a.useState)([]),L=(0,i.Z)(K,2),W=L[0],z=L[1],B=(0,a.useState)(!1),U=(0,i.Z)(B,2),V=U[0],X=U[1],$=(0,a.useState)(""),ee=(0,i.Z)($,2),se=ee[0],le=ee[1],ne=(0,a.useState)(!1),ie=(0,i.Z)(ne,2),te=ie[0],re=ie[1],ae=(0,a.useState)(""),oe=(0,i.Z)(ae,2),de=oe[0],ce=oe[1],ue=(0,a.useState)(""),ve=(0,i.Z)(ue,2),me=ve[0],he=ve[1],pe=(0,a.useState)({}),xe=(0,i.Z)(pe,2),je=xe[0],fe=xe[1],ge=(0,a.useRef)(null),_e=(0,a.useState)([]),Ne=(0,i.Z)(_e,2),we=Ne[0],be=Ne[1],qe=(0,a.useState)([]),ye=(0,i.Z)(qe,2),Se=ye[0],ke=ye[1],Ze=(0,v.v9)((function(e){var s,l;return null===e||void 0===e||null===(s=e.Auth)||void 0===s||null===(l=s.user)||void 0===l?void 0:l.id}));(0,a.useEffect)((function(){var e=localStorage.getItem("userId"),s=localStorage.getItem("chatdetail"),l=parseInt(e),n=JSON.parse(s);ce(l),he(n)}),[]),(0,a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("chat_pictures_fr_chat")),s=JSON.parse(localStorage.getItem("Questions_fr_chat"));be(e),ke(s)}),[]),console.log("gettingchatdataparsenew",me),(0,a.useLayoutEffect)((function(){var e=ge.current;e&&e.scrollTo({top:e.scrollHeight,behavior:"smooth"})}),[G,V]);var Fe=function(){var e=(0,n.Z)(r().mark((function e(){var s,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return re(!0),e.prev=1,s={userId:de,chat:null===me||void 0===me?void 0:me.request_chat_id,doctor:Ze,doctor_question:G,response_type:"doctor"},e.next=5,d().post("https://api.backend.h3lth.net/doctor-chat/api/thread/doctorpost",s);case 5:l=e.sent,console.log("Response from server:",l.data),le(l.data),M(""),re(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error("Error making POST request:",e.t0.message),re(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){var e=function(){var e=(0,n.Z)(r().mark((function e(){var s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d().get("https://api.backend.h3lth.net/doctor-chat/api/thread/doctorget?chatId=".concat(null===me||void 0===me?void 0:me.request_chat_id,"&doctor=").concat(Ze));case 3:s=e.sent,console.log("Response from server:",s.data.data),z(s.data.data),X(!V),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error making GET request:",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e();var s=setInterval((function(){e()}),2e3);return function(){return clearInterval(s)}}),[se,null===me||void 0===me||null===(e=me.request)||void 0===e?void 0:e.doctors[0],null===me||void 0===me?void 0:me.request_chat_id,Ze]),(0,a.useEffect)((function(){var e=localStorage.getItem("userviewticket");fe(JSON.parse(e))}),[]),console.log("chatresponsedata",W),console.log("Newobjectdata",je);return(0,m.jsx)("div",{className:"col-md-12 background_chat_main",children:(0,m.jsx)("div",{className:"row px-3 py-4",children:(0,m.jsxs)("div",{className:"col-md-12 height_of_chat2",children:[(0,m.jsx)("div",{className:"col-md-12 background_chat_head",children:(0,m.jsx)("div",{className:"col-md-12 py-2",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-1 px-0",children:(0,m.jsx)("img",{className:"img-fluid rounded-circle  img_height_width",src:"/images/avatar.webp"})}),(0,m.jsxs)("div",{className:"col-md-2 pt-4 px-0",children:[" ",(0,m.jsxs)("p",{className:"m-0 p-0 name_person",children:[" ",null===me||void 0===me||null===(s=me.request)||void 0===s||null===(l=s.request)||void 0===l||null===(t=l.mainuser)||void 0===t||null===(o=t.user)||void 0===o?void 0:o.name," "]})]}),(0,m.jsx)("div",{className:"col-md-9 m-auto",children:null===we||void 0===we?void 0:we.map((function(e,s){return console.log("item",we),(0,m.jsx)("a",{href:"".concat(e),target:"_blank",className:"text_dec_none",children:(0,m.jsx)("img",{className:"img-fluid height_of_chat_pic",src:"".concat(e)})})}))})]})})}),(0,m.jsx)("div",{className:"col-md-12 background_chat_head mt-2",children:(0,m.jsx)("div",{className:"col-md-12 py-2",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-md-3 px-0",children:[" ",(0,m.jsx)("p",{className:"m-0 p-0 name_person",children:"Gender :"}),(0,m.jsx)("span",{children:!1===(null===je||void 0===je||null===(c=je.request)||void 0===c?void 0:c.is_sub_user)?(0,m.jsxs)(m.Fragment,{children:[null===je||void 0===je||null===(h=je.request)||void 0===h||null===(p=h.mainuser)||void 0===p?void 0:p.gender," "]}):(0,m.jsxs)(m.Fragment,{children:[null===je||void 0===je||null===(x=je.request)||void 0===x||null===(j=x.user)||void 0===j?void 0:j.gender," "]})})]}),(0,m.jsxs)("div",{className:"col-md-3 px-0",children:[" ",(0,m.jsx)("p",{className:"m-0 p-0 name_person",children:"Date & Time :"}),(0,m.jsx)("span",{children:(0,m.jsx)(u(),{format:"YYYY-MM-DD / HH:mm:ss A",children:null===je||void 0===je?void 0:je.created_date})})]}),(0,m.jsxs)("div",{className:"col-md-3 px-0",children:[" ",(0,m.jsx)("p",{className:"m-0 p-0 name_person",children:"Form Title :"}),(0,m.jsx)("span",{children:null===je||void 0===je||null===(f=je.request)||void 0===f||null===(g=f.form)||void 0===g?void 0:g.title})]}),(0,m.jsxs)("div",{className:"col-md-3 px-0",children:[" ",(0,m.jsx)("p",{className:"m-0 p-0 name_person",children:"Height :"}),(0,m.jsx)("span",{children:!1===(null===je||void 0===je||null===(_=je.request)||void 0===_?void 0:_.is_sub_user)?(0,m.jsxs)(m.Fragment,{children:[null===je||void 0===je||null===(N=je.request)||void 0===N||null===(w=N.mainuser)||void 0===w?void 0:w.height," ",null===je||void 0===je||null===(b=je.request)||void 0===b||null===(q=b.mainuser)||void 0===q?void 0:q.height_unit," "]}):(0,m.jsxs)(m.Fragment,{children:[null===je||void 0===je||null===(y=je.request)||void 0===y||null===(S=y.user)||void 0===S?void 0:S.height," ",null===je||void 0===je||null===(k=je.request)||void 0===k||null===(Z=k.user)||void 0===Z?void 0:Z.height_unit," "]})})]}),(0,m.jsxs)("div",{className:"col-md-3 mt-2 px-0",children:[" ",(0,m.jsx)("p",{className:"m-0 p-0 name_person",children:"Catagory :"}),(0,m.jsxs)("span",{children:[" ",null===je||void 0===je||null===(F=je.request)||void 0===F||null===(I=F.form)||void 0===I||null===(E=I.category)||void 0===E?void 0:E.title]})]}),(0,m.jsxs)("div",{className:"col-md-3 mt-2 px-0",children:[" ",(0,m.jsx)("p",{className:"m-0 p-0 name_person",children:"Weight :"}),(0,m.jsx)("span",{children:!1===(null===je||void 0===je||null===(D=je.request)||void 0===D?void 0:D.is_sub_user)?(0,m.jsxs)(m.Fragment,{children:[null===je||void 0===je||null===(C=je.request)||void 0===C||null===(O=C.mainuser)||void 0===O?void 0:O.weight," ",null===je||void 0===je||null===(T=je.request)||void 0===T||null===(H=T.mainuser)||void 0===H?void 0:H.weight_unit]}):(0,m.jsxs)(m.Fragment,{children:[null===je||void 0===je||null===(J=je.request)||void 0===J||null===(Q=J.user)||void 0===Q?void 0:Q.weight," ",null===je||void 0===je||null===(Y=je.request)||void 0===Y||null===(A=Y.user)||void 0===A?void 0:A.weight_unit]})})]})]})})}),(0,m.jsxs)("div",{className:"col-md-12 height_of_msg py-4 px-2",id:"style-3",ref:ge,children:[(0,m.jsx)("div",{className:"row",children:null===Se||void 0===Se?void 0:Se.map((function(e,s){var l;return(0,m.jsxs)(m.Fragment,{children:["Document"!==(null===e||void 0===e?void 0:e.typeQ)?(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)("div",{className:"col-md-6",children:(0,m.jsx)("div",{className:"col-md-12 color_blue_text1",children:(0,m.jsxs)("h6",{className:"mt-3  px-3 py-2 mb-1",children:[(0,m.jsx)("b",{children:"Question: "}),null===e||void 0===e||null===(l=e.question)||void 0===l?void 0:l.question]})})}),(0,m.jsx)("div",{className:"col-md-6"})]},s):null,"Document"===(null===e||void 0===e?void 0:e.typeQ)?(0,m.jsx)(m.Fragment,{}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"col-md-6",children:(0,m.jsx)("div",{className:"col-md-12 color_blue_text1",children:(0,m.jsxs)("h6",{className:"mt-3 px-3 py-2 mb-1 ",children:[(0,m.jsx)("b",{children:"Answer: "}),null===e||void 0===e?void 0:e.answer]})})}),(0,m.jsx)("div",{className:"col-md-6"})]})]})}))}),null===W||void 0===W?void 0:W.map((function(e,s){return console.log("indexx12",e),(0,m.jsxs)(m.Fragment,{children:[(null===e||void 0===e?void 0:e.patient_answer)&&(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-6",children:(0,m.jsx)("div",{className:"col-md-12 color_blue_text1",children:(0,m.jsx)("h6",{className:"mt-2  px-3 py-2 ",children:e.patient_answer})})}),(0,m.jsx)("div",{className:"col-md-6"})]}),(null===e||void 0===e?void 0:e.doctor_question)&&(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-6"}),(0,m.jsx)("div",{className:"col-md-6  ",children:(0,m.jsx)("div",{className:"col-md-12 color_blue_text py-1",children:(0,m.jsx)("h6",{className:" mt-2 rounded-pill ",children:(0,m.jsx)("span",{className:" px-3 py-1 mt-3 ",children:null===e||void 0===e?void 0:e.doctor_question})})})})]})]})}))]}),(0,m.jsxs)("div",{className:"col-md-12 bg-white py-2 input_bottom d-flex",children:[(0,m.jsx)("input",{className:"form-control new_place_holder w-100",onKeyDown:function(e){"Enter"===e.key&&Fe()},value:G,onChange:function(e){return M(e.target.value)},placeholder:"Enter message here"}),(0,m.jsx)("button",{className:"btn btn-primary ml-2",onClick:Fe,children:!1===te?(0,m.jsx)("i",{class:"fas fa-paper-plane"}):(0,m.jsx)("div",{className:"spinner-border spinner-border-sm text-white",role:"status"})})]})]})})})}},5861:function(e,s,l){function n(e,s,l,n,i,t,r){try{var a=e[t](r),o=a.value}catch(d){return void l(d)}a.done?s(o):Promise.resolve(o).then(n,i)}function i(e){return function(){var s=this,l=arguments;return new Promise((function(i,t){var r=e.apply(s,l);function a(e){n(r,i,t,a,o,"next",e)}function o(e){n(r,i,t,a,o,"throw",e)}a(void 0)}))}}l.d(s,{Z:function(){return i}})}}]);
//# sourceMappingURL=105.3adaed08.chunk.js.map