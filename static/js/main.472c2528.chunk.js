(this.webpackJsonpmagic=this.webpackJsonpmagic||[]).push([[0],{141:function(e,t,a){},166:function(e,t,a){e.exports=a(292)},171:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(24),l=a.n(c),s=(a(171),a(11)),o=a.n(s),i=a(25),u=a(52),m=a(103),d=a(144),g=a(19),b=a(10),h=a.n(b),f=(h.a.IconBuilder,h.a.IconAmount,h.a.IconConverter),p=new(0,h.a.HttpProvider)("https://bicon.net.solidwallet.io/api/v3"),v=new h.a(p),E=r.a.createContext(null),x=new m.Magic("pk_test_BAD78299B2E4EA9D",{extensions:{icon:new d.IconExtension({rpcUrl:"https://bicon.net.solidwallet.io/api/v3"})}});function w(e){var t=e.children,a=Object(n.useState)(!1),c=Object(u.a)(a,2),l=c[0],s=c[1],m=Object(n.useState)(""),d=Object(u.a)(m,2),b=d[0],h=d[1],p=Object(n.useState)(""),w=Object(u.a)(p,2),y=w[0],k=w[1],N=Object(n.useState)(""),j=Object(u.a)(N,2),C=j[0],O=j[1],S=Object(n.useState)(0),B=Object(u.a)(S,2),L=B[0],T=B[1];Object(n.useEffect)((function(){x.user.isLoggedIn().then(function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(t),!t){e.next=28;break}return e.prev=2,e.next=5,x.icon.getAccount();case 5:return a=e.sent,e.t0=parseFloat,e.t1=f,e.next=10,v.getBalance(a).execute();case 10:return e.t2=e.sent,e.t3=e.t1.toNumber.call(e.t1,e.t2),e.t4=Math.pow(10,18),e.t5=e.t3/e.t4,n=(0,e.t0)(e.t5).toFixed(2),T(n),h(a),e.t6=O,e.next=20,x.user.getMetadata();case 20:e.t7=e.sent,(0,e.t6)(e.t7),e.next=28;break;case 24:e.prev=24,e.t8=e.catch(2),g.b.error(e.t8.rawMessage),console.log(JSON.stringify(e.t8));case 28:case"end":return e.stop()}}),e,null,[[2,24]])})));return function(t){return e.apply(this,arguments)}}())}),[l]);var D=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.auth.loginWithMagicLink({email:y});case 3:s(!0),g.b.success("Login successful"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),g.b.error(e.t0.rawMessage),console.log(JSON.stringify(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.user.logout();case 3:s(!1),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),g.b.error(e.t0.rawMessage),console.log(JSON.stringify(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),M={magic:x,loginData:{isLoggedIn:l},addressData:{publicAddress:b},userBalance:{balance:L},metaData:{userMetadata:C},emailData:{email:y,setEmail:k},login:D,logout:A};return r.a.createElement(E.Provider,{value:M},t,r.a.createElement(g.a,null))}var y=function(e){return function(t){return r.a.createElement(E.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{value:a}))}))}},k=a(303),N=a(304),j=a(301),C=a(293),O=a(41),S=a(152),B=a(151);function L(){var e=Object(n.useContext)(E),t=e.loginData,a=e.addressData,c=e.metaData,l=e.emailData,s=e.login,o=e.logout,i=e.userBalance;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{fluid:!0,raised:!0,className:"p-3"},t.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a.Header,{as:"h2",textAlign:"center"},r.a.createElement(S.a,{size:32}),r.a.createElement(N.a.Content,null,c.userMetadata.email)),r.a.createElement(k.a.Meta,{textAlign:"center"},r.a.createElement("a",{href:"https://bicon.tracker.solidwallet.io/address/".concat(a.publicAddress),rel:"noopener noreferrer",target:"_blank"},a.publicAddress)),r.a.createElement(k.a.Meta,{textAlign:"center"},"Balance:",JSON.stringify(i.balance).replace(/"/g,"")," ICX"),r.a.createElement(C.a,{className:"logButton center",onClick:o,icon:!0,labelPosition:"left",size:"small",color:"red"},r.a.createElement(O.a,{name:"power"}),"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a.Header,{as:"h2",textAlign:"center"},r.a.createElement(B.a,{size:32}),r.a.createElement(N.a.Content,null,"Login!!")),r.a.createElement(j.a,{placeholder:"Email...",onChange:function(e){return l.setEmail(e.target.value)}}),r.a.createElement(C.a,{className:"logButton center",style:{backgroundColor:"#6851ff",color:"white"},onClick:s},"Send"))))}var T=a(46),D=a(47),A=a(37),M=a(49),I=a(48),H=a(153),_=a.n(H),F=function(e){return r.a.createElement("div",{className:"light"},r.a.createElement(_.a,{size:40,color:e.color}))},J=a(57),P=h.a.IconBuilder,R=h.a.IconConverter,U=new(0,h.a.HttpProvider)("https://bicon.net.solidwallet.io/api/v3"),z=new h.a(U);function W(e){return new Promise((function(t){return setTimeout(t,e)}))}var G=y(function(e){Object(M.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(T.a)(this,a),(n=t.call(this,e)).handlerSendTransaction=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,r,c,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.props.value.loginData.isLoggedIn){e.next=4;break}return g.b.error("Please Login First!!"),e.abrupt("return");case 4:return n.setState({loading:!0,buttonLoading:t}),e.prev=5,a=n.props.value.magic,e.next=9,a.user.getMetadata();case 9:return r=e.sent,c=(new P.CallTransactionBuilder).from(r.publicAddress).to("cx8414e65c32e66d6831c8c4ee25b59f0bf98e080d").stepLimit(R.toBigNumber(1e6)).nid(R.toBigNumber(3)).nonce(R.toBigNumber(1)).version(R.toBigNumber(3)).timestamp(1e3*(new Date).getTime()).method("set_color").params({_color:t}).build(),e.next=13,a.icon.sendTransaction(c);case 13:return l=e.sent,n.setState({tx:l}),g.b.success("Successfully sent tx to contract"),e.next=18,W(3e3);case 18:return e.next=20,n.getTransaction();case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(5),g.b.error(e.t0.rawMessage),console.log(JSON.stringify(e.t0));case 26:n.setState({loading:!1,buttonLoading:""});case 27:case"end":return e.stop()}}),e,null,[[5,22]])})));return function(t){return e.apply(this,arguments)}}(),n.getTransaction=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new P.CallBuilder).to("cx8414e65c32e66d6831c8c4ee25b59f0bf98e080d").method("get_color").build(),e.prev=1,e.next=4,z.call(t).execute();case 4:a=e.sent,n.setState({color:a}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),g.b.error(e.t0.rawMessage),console.log(JSON.stringify(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),n.state={tx:"",color:"white",loading:!1,buttonLoading:"",magicData:{}},n.handlerSendTransaction=n.handlerSendTransaction.bind(Object(A.a)(n)),n}return Object(D.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTransaction();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row d-flex justify-content-center mainContainer"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row d-flex align-items-center justify-content-center buttonContainer"},r.a.createElement(C.a,{color:"red bulb-btn",disabled:this.state.loading,loading:this.state.loading&&"RED"===this.state.buttonLoading,className:"m-4",onClick:function(){return e.handlerSendTransaction("RED")}},"Red"),r.a.createElement(C.a,{color:"green bulb-btn",disabled:this.state.loading,loading:this.state.loading&&"GREEN"===this.state.buttonLoading,className:"m-4",onClick:function(){return e.handlerSendTransaction("GREEN")}},"Green"),r.a.createElement(C.a,{color:"blue bulb-btn",disabled:this.state.loading,loading:this.state.loading&&"BLUE"===this.state.buttonLoading,className:"m-4",onClick:function(){return e.handlerSendTransaction("BLUE")}},"Blue"),r.a.createElement(C.a,{color:"yellow bulb-btn",disabled:this.state.loading,loading:this.state.loading&&"YELLOW"===this.state.buttonLoading,className:"m-4",onClick:function(){return e.handlerSendTransaction("YELLOW")}},"Yellow")),r.a.createElement("div",{className:"row d-flex align-items-center justify-content-center bulb"},r.a.createElement(F,{color:this.state.color})),r.a.createElement("div",{className:"row d-flex align-items-center justify-content-center mb-2"},r.a.createElement(J.a,{size:32,color:"blue",style:{cursor:"pointer"},onClick:this.getTransaction})),r.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"},this.state.tx?r.a.createElement("div",null,r.a.createElement("h2",{style:{color:"white",padding:"10px",textAlign:"center"}},"Tx Hash:"),r.a.createElement("div",{className:"info"},r.a.createElement("a",{href:"https://bicon.tracker.solidwallet.io/transaction/".concat(this.state.tx),target:"_blank",rel:"noopener noreferrer"},this.state.tx))):null),r.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"}))),r.a.createElement(g.a,null))}}]),a}(r.a.Component));a(96),a(97);a(140),a(141),a(142);var Y=function(){return r.a.createElement(w,null,r.a.createElement("div",{style:{backgroundColor:"black"},className:"pb-4 row d-flex align-items-center justify-content-center"},r.a.createElement(k.a,{centered:!0,style:{backgroundColor:"black",color:"white"},className:"p-2 m-2"},r.a.createElement("h1",{className:"mainHeader"},"SMART BULB")),r.a.createElement("div",{className:"faucet"},r.a.createElement("a",{href:"https://icon-faucet.ibriz.ai/",rel:"noopener noreferrer",target:"_blank"},"Testnet ICX Faucet"))),r.a.createElement("div",{className:"row appContainer pt-3"},r.a.createElement("div",{className:"col-md-6 col-lg-7 col-sm-12 p-1"},r.a.createElement(G,null)),r.a.createElement("div",{className:"loginContainer col-md-5 col-lg-4 col-sm-12"},r.a.createElement(L,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(36),$=a(12),q=h.a.IconBuilder,K=(h.a.IconConverter,new(0,h.a.HttpProvider)("https://bicon.net.solidwallet.io/api/v3")),Q=new h.a(K);var V=y(function(e){Object(M.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(T.a)(this,a),(n=t.call(this,e)).getTransaction=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new q.CallBuilder).to("cx8414e65c32e66d6831c8c4ee25b59f0bf98e080d").method("get_history").build(),e.prev=1,e.next=4,Q.call(t).execute();case 4:a=e.sent,n.setState({history:a}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),g.b.error(e.t0.rawMessage),console.log(JSON.stringify(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),n.state={tx:"",color:"white",loading:!1,buttonLoading:"",history:[],magicData:{}},n}return Object(D.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTransaction();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.history;e.reverse();var t=e.map((function(e,t){return r.a.createElement("h5",null,t+1,". ",e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{backgroundColor:"black"},className:"pb-4 row d-flex align-items-center justify-content-center"},r.a.createElement(k.a,{centered:!0,style:{backgroundColor:"black",color:"white"},className:"p-2 m-2"},r.a.createElement("h1",{className:"mainHeader"},"    History"))),r.a.createElement("div",{className:"row d-flex justify-content-center mainContainer"},r.a.createElement("div",{className:"col-md-12"},t,r.a.createElement("div",{className:"row d-flex align-items-center justify-content-center mb-2"},r.a.createElement(J.a,{size:32,color:"white",style:{cursor:"pointer"},onClick:this.getTransaction})),r.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"},this.state.tx?r.a.createElement("div",null,r.a.createElement("h2",{style:{color:"white",padding:"10px",textAlign:"center"}},"Tx Hash:"),r.a.createElement("div",{className:"info"},r.a.createElement("a",{href:"https://bicon.tracker.solidwallet.io/transaction/".concat(this.state.tx),target:"_blank",rel:"noopener noreferrer"},this.state.tx))):null),r.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"}))),r.a.createElement(g.a,null))}}]),a}(r.a.Component)),Z=a(154),ee=h.a.IconBuilder,te=h.a.IconConverter,ae=new(0,h.a.HttpProvider)("https://bicon.net.solidwallet.io/api/v3");new h.a(ae);function ne(e){return new Promise((function(t){return setTimeout(t,e)}))}var re=y(function(e){Object(M.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(T.a)(this,a),(n=t.call(this,e)).handlerSendTransaction=function(){var e=Object(i.a)(o.a.mark((function e(t,a){var r,c,l,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.props.value.loginData.isLoggedIn){e.next=4;break}return g.b.error("Please Login First!!"),e.abrupt("return");case 4:return e.prev=4,r=n.props.value.magic,e.next=8,r.user.getMetadata();case 8:return c=e.sent,l=(new ee.CallTransactionBuilder).from(c.publicAddress).to("cx8414e65c32e66d6831c8c4ee25b59f0bf98e080d").stepLimit(te.toBigNumber(1e6)).nid(te.toBigNumber(3)).nonce(te.toBigNumber(1)).version(te.toBigNumber(3)).timestamp(1e3*(new Date).getTime()).method("register").params({_username:t,_address:a}).build(),e.next=12,r.icon.sendTransaction(l);case 12:return s=e.sent,n.setState({tx:s}),g.b.success("Successfully sent tx to contract"),e.next=17,ne(3e3);case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(4),g.b.error(e.t0.rawMessage),console.log(JSON.stringify(e.t0));case 23:n.setState({loading:!1,buttonLoading:""});case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t,a){return e.apply(this,arguments)}}(),n.state=Object(Z.a)({tx:"",color:"white",loading:!1,buttonLoading:"",magicData:{},username:"",address:""},"magicData",{}),n.handlerSendTransaction=n.handlerSendTransaction.bind(Object(A.a)(n)),n.handleUsernameChange=n.handleUsernameChange.bind(Object(A.a)(n)),n.handleAddressChange=n.handleAddressChange.bind(Object(A.a)(n)),n}return Object(D.a)(a,[{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handleAddressChange",value:function(e){this.setState({address:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{backgroundColor:"black"},className:"pb-4 row d-flex align-items-center justify-content-center"},r.a.createElement(k.a,{centered:!0,style:{backgroundColor:"black",color:"white"},className:"p-2 m-2"},r.a.createElement("h1",{className:"mainHeader"},"    Register "))),r.a.createElement("div",{className:"row d-flex justify-content-center mainContainer"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row d-flex align-items-center justify-content-center buttonContainer"},r.a.createElement("label",null,"Username:",r.a.createElement("input",{type:"text",value:this.state.username,onChange:this.handleUsernameChange}),console.log(this.state.username))),r.a.createElement("div",{className:"row d-flex align-items-center justify-content-center buttonContainer"},r.a.createElement("label",null,"Wallet Address:",r.a.createElement("input",{type:"text",value:this.state.address,onChange:this.handleAddressChange}))),r.a.createElement("div",{className:"row d-flex align-items-center justify-content-center buttonContainer"},r.a.createElement(C.a,{color:"red bulb-btn",disabled:this.state.loading,loading:this.state.loading&&"RED"===this.state.buttonLoading,className:"m-4",onClick:function(){return e.handlerSendTransaction(e.state.username,e.state.address)}},"Register")),r.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"},this.state.tx?r.a.createElement("div",null,r.a.createElement("h2",{style:{color:"white",padding:"10px",textAlign:"center"}},"Tx Hash:"),r.a.createElement("div",{className:"info"},r.a.createElement("a",{href:"https://bicon.tracker.solidwallet.io/transaction/".concat(this.state.tx),target:"_blank",rel:"noopener noreferrer"},this.state.tx))):null),r.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"}))),r.a.createElement(g.a,null))}}]),a}(r.a.Component));var ce=function(){return r.a.createElement(w,null,r.a.createElement("div",null,r.a.createElement(re,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X.a,null,r.a.createElement(X.b,{to:"/smart-bulb"}," Home"),r.a.createElement(X.b,{to:"/register"}," Register"),r.a.createElement(X.b,{to:"/history"}," History"),r.a.createElement($.a,{exact:!0,path:"/smart-bulb",component:Y}),r.a.createElement($.a,{exact:!0,path:"/register",component:ce}),r.a.createElement($.a,{exact:!0,path:"/history",component:V}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},97:function(e,t,a){}},[[166,1,2]]]);
//# sourceMappingURL=main.472c2528.chunk.js.map