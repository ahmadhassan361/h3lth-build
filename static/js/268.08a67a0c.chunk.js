"use strict";(self.webpackChunkacadify_saas_frontend=self.webpackChunkacadify_saas_frontend||[]).push([[268],{1268:function(e,l,s){s.r(l),s.d(l,{default:function(){return v}});var i=s(2791),n=(s(3684),s(885)),d=s(364),t=s(1523),a=s(9271),c=s(2806),o=s(6431),r=s.n(o),u=(s(3528),s(184));var m=function(){var e=(0,d.I0)(),l=((0,a.useHistory)(),(0,i.useState)(1)),s=(0,n.Z)(l,2),o=s[0],m=s[1],v=(0,i.useState)(""),h=(0,n.Z)(v,2),x=h[0],j=h[1],p=(0,i.useState)(""),b=(0,n.Z)(p,2),g=(b[0],b[1]),N=(0,i.useState)(""),f=(0,n.Z)(N,2),_=f[0],k=f[1],y=(0,i.useState)(""),q=(0,n.Z)(y,2),C=q[0],w=q[1];console.log("RequestId",_);var I=function(){m(2)},A=function(){m(1)},T=function(){m(3)},Y=(0,d.v9)((function(e){var l,s;return null===(l=e.Auth)||void 0===l||null===(s=l.getallnewtickets)||void 0===s?void 0:s.count})),F=(0,d.v9)((function(e){var l,s;return null===(l=e.Auth)||void 0===l||null===(s=l.getallnewtickets)||void 0===s?void 0:s.previous})),M=(0,d.v9)((function(e){var l,s;return null===(l=e.Auth)||void 0===l||null===(s=l.getallnewtickets)||void 0===s?void 0:s.next})),P=(0,d.v9)((function(e){var l,s;return null===(l=e.Auth)||void 0===l||null===(s=l.getallnewtickets)||void 0===s?void 0:s.results})),S=(0,d.v9)((function(e){var l;return null===(l=e.Auth)||void 0===l?void 0:l.getallpendingtickets})),D=(0,d.v9)((function(e){var l;return null===(l=e.Auth)||void 0===l?void 0:l.getallcompletedtickets}));return(0,i.useEffect)((function(){e((0,c.m3)("/doctor-portal/api/tickets/")),e((0,c.SV)()),e((0,c.Dv)()),j(M),g(F)}),[]),(0,u.jsx)(u.Fragment,{children:1===o?(0,u.jsxs)("div",{className:"col-md-12 px-0",children:[(0,u.jsxs)("div",{className:"row pt-2 mb-3",children:[(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsxs)("span",{className:"active_tab",onClick:A,children:["Open Tickets\xa0\xa0",(0,u.jsx)("span",{className:"btn btn-sm btn-danger px-3",children:(0,u.jsx)("b",{children:Y})})]}),"\xa0\xa0\xa0",(0,u.jsx)("span",{className:"non_active_tab",onClick:I,children:"In-Progress Tickets"}),"\xa0\xa0\xa0",(0,u.jsx)("span",{className:"non_active_tab",onClick:T,children:"Completed Tickets"})]}),(0,u.jsx)("div",{className:"col-md-6 text-right"})]}),(0,u.jsx)("div",{className:"col-md-12 mt-2 px-0 height_fix_list",children:(0,u.jsxs)("table",{className:"table table-bordered text-center",children:[(0,u.jsx)("thead",{className:"thead-light",children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{scope:"col",children:"Patient Image"}),(0,u.jsx)("th",{scope:"col",children:"Only Initials"}),(0,u.jsx)("th",{scope:"col",children:"Urgency"}),(0,u.jsx)("th",{scope:"col",children:"Time Remaining"}),(0,u.jsx)("th",{scope:"col",children:"Action"})]})}),(0,u.jsxs)("tbody",{children:[0===(null===P||void 0===P?void 0:P.length)?(0,u.jsx)("tr",{className:"text-center",children:(0,u.jsx)("td",{colSpan:4,children:"No Record Avaliable"})}):(0,u.jsxs)(u.Fragment,{children:[null===P||void 0===P?void 0:P.map((function(l,s){var i,n,d,a,o,m,v,h,x,j,p,b,g,N;return console.log("<><><><><><<><><???????????????",l.request.id),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:!1===(null===l||void 0===l||null===(i=l.request)||void 0===i?void 0:i.is_sub_user)?(0,u.jsx)("img",{className:"img-fluid img_width_control ",src:null===l||void 0===l||null===(n=l.request)||void 0===n||null===(d=n.mainuser)||void 0===d?void 0:d.profileImg}):(0,u.jsx)("img",{className:"img-fluid img_width_control ",src:null===l||void 0===l||null===(a=l.request)||void 0===a||null===(o=a.user)||void 0===o?void 0:o.profileImg})}),(0,u.jsx)("td",{className:"pt-4",children:!1===(null===l||void 0===l||null===(m=l.request)||void 0===m?void 0:m.is_sub_user)?(0,u.jsx)(u.Fragment,{children:null===l||void 0===l||null===(v=l.request)||void 0===v||null===(h=v.mainuser)||void 0===h||null===(x=h.user)||void 0===x?void 0:x.name}):(0,u.jsx)(u.Fragment,{children:null===l||void 0===l||null===(j=l.request)||void 0===j||null===(p=j.user)||void 0===p?void 0:p.name})}),(0,u.jsx)("td",{className:"pt-4",children:null===l||void 0===l||null===(b=l.request)||void 0===b||null===(g=b.form)||void 0===g||null===(N=g.category)||void 0===N?void 0:N.title}),(0,u.jsx)("td",{className:"pt-4",children:(0,u.jsx)(r(),{format:"YYYY-MM-DD / HH:mm:ss A",children:null===l||void 0===l?void 0:l.created_date})}),(0,u.jsxs)("td",{children:[(0,u.jsx)(t.rU,{to:"/Userdetail/".concat(l.id,"?accepted=1"),children:(0,u.jsx)("button",{className:"btn btn-primary btn-sm rounded-pill px-4 ",children:"Preview"})})," \xa0",(0,u.jsx)("button",{onClick:function(){return s=l.id,void e((0,c.VB)({id:s}));var s},className:"btn btn-success btn-sm rounded-pill px-4 background_accept",children:"Accept"}),"\xa0",(0,u.jsx)("button",{onClick:function(e){e.preventDefault(),k(null===l||void 0===l?void 0:l.id)},className:"btn btn-danger btn-sm rounded-pill px-4 ","data-toggle":"modal","data-target":"#exampleModal",children:"Decline"})]})]})})),(0,u.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,u.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,u.jsxs)("div",{className:"modal-content",children:[(0,u.jsxs)("div",{className:"modal-header",children:[(0,u.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Reason For Declining The Request"}),(0,u.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,u.jsx)("div",{className:"modal-body",children:(0,u.jsx)("textarea",{className:"form-control",placeholder:"Write reason here",value:C,onChange:function(e){var l=e.target.value;w(l)}})}),(0,u.jsxs)("div",{className:"modal-footer",children:[(0,u.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),(0,u.jsx)("button",{onClick:function(l){e((0,c.Js)({request:_,reason:C}))},type:"button",className:"btn btn-primary","data-dismiss":"modal",children:"Submit"})]})]})})})]}),(0,u.jsxs)("td",{colSpan:5,children:[null===F?(0,u.jsx)("span",{className:"btn btn-outline-light btn-sm",id:"stopped",children:"Previous"}):(0,u.jsx)("span",{onClick:function(){e((0,c.m3)(F))},className:"btn btn-outline-primary btn-sm",children:"Previous"}),"\xa0\xa0",null===M?(0,u.jsx)("span",{className:"btn btn-outline-light btn-sm px-4",id:"stopped",children:"Next"}):(0,u.jsx)("span",{onClick:function(){e((0,c.m3)(x))},className:"btn btn-outline-primary btn-sm px-4",children:"Next"})]})]})]})})]}):2===o?(0,u.jsxs)("div",{className:"col-md-12 px-0",children:[(0,u.jsxs)("div",{className:"row pt-2 mb-3",children:[(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsx)("span",{className:"non_active_tab ",onClick:A,children:"Open Tickets"}),"\xa0\xa0\xa0",(0,u.jsxs)("span",{className:"active_tab",onClick:I,children:["In-Progress Tickets\xa0\xa0",(0,u.jsx)("span",{className:"btn btn-sm btn-danger px-3",children:(0,u.jsx)("b",{children:null===S||void 0===S?void 0:S.length})})]}),"\xa0\xa0\xa0",(0,u.jsx)("span",{className:"non_active_tab",onClick:T,children:"Completed Tickets"})]}),(0,u.jsx)("div",{className:"col-md-6 text-right"})]}),(0,u.jsx)("div",{className:"col-md-12 mt-2 px-0 height_fix_list",children:(0,u.jsxs)("table",{className:"table table-bordered text-center",children:[(0,u.jsx)("thead",{className:"thead-light",children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{scope:"col",children:"Patient Image"}),(0,u.jsx)("th",{scope:"col",children:"Only Initials"}),(0,u.jsx)("th",{scope:"col",children:"Urgency"}),(0,u.jsx)("th",{scope:"col",children:"Time Remaining"}),(0,u.jsx)("th",{scope:"col",children:"Action"})]})}),(0,u.jsx)("tbody",{children:0===(null===S||void 0===S?void 0:S.length)?(0,u.jsx)("tr",{className:"text-center",children:(0,u.jsx)("td",{colSpan:5,children:"No Record Avaliable"})}):(0,u.jsx)(u.Fragment,{children:null===S||void 0===S?void 0:S.map((function(e,l){var s,i,n,d,a,c,o,m,v,h,x,j,p,b,g,N;return console.log("map>>>>>>>>>>>>>>>>>>",null===e||void 0===e||null===(s=e.request)||void 0===s||null===(i=s.form)||void 0===i?void 0:i.category),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:!1===(null===e||void 0===e||null===(n=e.request)||void 0===n?void 0:n.is_sub_user)?(0,u.jsx)("img",{className:"img-fluid img_width_control ",src:null===e||void 0===e||null===(d=e.request)||void 0===d||null===(a=d.mainuser)||void 0===a?void 0:a.profileImg}):(0,u.jsx)("img",{className:"img-fluid img_width_control ",src:null===e||void 0===e||null===(c=e.request)||void 0===c||null===(o=c.user)||void 0===o?void 0:o.profileImg})}),(0,u.jsx)("td",{className:"pt-4",children:!1===(null===e||void 0===e||null===(m=e.request)||void 0===m?void 0:m.is_sub_user)?(0,u.jsx)(u.Fragment,{children:null===e||void 0===e||null===(v=e.request)||void 0===v||null===(h=v.mainuser)||void 0===h||null===(x=h.user)||void 0===x?void 0:x.name}):(0,u.jsx)(u.Fragment,{children:null===e||void 0===e||null===(j=e.request)||void 0===j||null===(p=j.user)||void 0===p?void 0:p.name})}),(0,u.jsx)("td",{className:"pt-4",children:null===e||void 0===e||null===(b=e.request)||void 0===b||null===(g=b.form)||void 0===g||null===(N=g.category)||void 0===N?void 0:N.title}),(0,u.jsx)("td",{className:"pt-4",children:(0,u.jsx)(r(),{format:"YYYY-MM-DD / HH:mm:ss A",children:null===e||void 0===e?void 0:e.created_date})}),(0,u.jsx)("td",{className:"pt-4",children:(0,u.jsx)(t.rU,{to:"/Userdetail/".concat(e.id,"?accepted=0"),children:(0,u.jsxs)("button",{className:"btn btn-primary btn-sm rounded-pill px-4 ",children:[" ","Preview"]})})})]})}))})})]})})]}):3===o?(0,u.jsxs)("div",{className:"col-md-12 px-0",children:[(0,u.jsxs)("div",{className:"row pt-2 mb-3",children:[(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsx)("span",{className:"non_active_tab ",onClick:A,children:"Open Tickets"}),"\xa0\xa0\xa0",(0,u.jsx)("span",{className:"non_active_tab",onClick:I,children:"In-Progress Tickets"}),"\xa0\xa0\xa0",(0,u.jsxs)("span",{className:"active_tab",onClick:T,children:["Completed Tickets\xa0\xa0",(0,u.jsx)("span",{className:"btn btn-sm btn-danger px-3",children:(0,u.jsx)("b",{children:null===D||void 0===D?void 0:D.length})})]})]}),(0,u.jsx)("div",{className:"col-md-6 text-right"})]}),(0,u.jsx)("div",{className:"col-md-12 mt-2 px-0 height_fix_list",children:(0,u.jsxs)("table",{className:"table table-bordered",children:[(0,u.jsx)("thead",{className:"thead-light",children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{scope:"col",children:"Patient Image"}),(0,u.jsx)("th",{scope:"col",children:"Only Initials"}),(0,u.jsx)("th",{scope:"col",children:"Urgency"}),(0,u.jsx)("th",{scope:"col",children:"Time Remaining"}),(0,u.jsx)("th",{scope:"col",children:"Action"})]})}),(0,u.jsx)("tbody",{children:0===(null===D||void 0===D?void 0:D.length)?(0,u.jsx)("tr",{className:"text-center",children:(0,u.jsx)("td",{colSpan:5,children:"No Record Avaliable"})}):(0,u.jsx)(u.Fragment,{children:null===D||void 0===D?void 0:D.map((function(e,l){var s,i,n,d,a,c,o,m,v,h,x,j,p,b;return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:!1===(null===e||void 0===e||null===(s=e.request)||void 0===s?void 0:s.is_sub_user)?(0,u.jsx)("img",{className:"img-fluid img_width_control ",src:null===e||void 0===e||null===(i=e.request)||void 0===i||null===(n=i.mainuser)||void 0===n?void 0:n.profileImg}):(0,u.jsx)("img",{className:"img-fluid img_width_control ",src:null===e||void 0===e||null===(d=e.request)||void 0===d||null===(a=d.user)||void 0===a?void 0:a.profileImg})}),(0,u.jsx)("td",{className:"pt-4",children:!1===(null===e||void 0===e||null===(c=e.request)||void 0===c?void 0:c.is_sub_user)?(0,u.jsx)(u.Fragment,{children:null===e||void 0===e||null===(o=e.request)||void 0===o||null===(m=o.mainuser)||void 0===m||null===(v=m.user)||void 0===v?void 0:v.name}):(0,u.jsx)(u.Fragment,{children:null===e||void 0===e||null===(h=e.request)||void 0===h||null===(x=h.user)||void 0===x?void 0:x.name})}),(0,u.jsx)("td",{className:"pt-4",children:null===e||void 0===e||null===(j=e.request)||void 0===j||null===(p=j.form)||void 0===p||null===(b=p.category)||void 0===b?void 0:b.title}),(0,u.jsx)("td",{className:"pt-4",children:(0,u.jsx)(r(),{format:"YYYY-MM-DD / HH:mm:ss A",children:null===e||void 0===e?void 0:e.created_date})}),(0,u.jsx)("td",{children:(0,u.jsx)(t.rU,{to:"/Userdetail/".concat(e.id,"?accepted=0"),children:(0,u.jsxs)("button",{className:"btn btn-primary btn-sm rounded-pill px-4 ",children:[" ","Preview"]})})})]})}))})})]})})]}):null})};var v=function(){return(0,u.jsx)("div",{className:"col-md-12 mt-3 ",children:(0,u.jsxs)("div",{className:"col-md-12 background_color_white1 py-3 ",id:"style-1",children:[(0,u.jsx)("h5",{children:(0,u.jsx)("b",{children:"Tickets Module"})}),(0,u.jsx)(m,{})]})})}},3684:function(){}}]);
//# sourceMappingURL=268.08a67a0c.chunk.js.map