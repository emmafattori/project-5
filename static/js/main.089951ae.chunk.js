(this["webpackJsonpdaily-planner-app"]=this["webpackJsonpdaily-planner-app"]||[]).push([[0],{15:function(e,a,t){e.exports=t(27)},20:function(e,a,t){},25:function(e,a){},26:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(7),r=t.n(s),i=(t(20),t(1)),u=t(2),o=t(4),c=t(3),m=t(5),p=t(8),d=t.n(p);t(22);d.a.initializeApp({apiKey:"AIzaSyApUdhpyr3u1Zu_5yLiqhncbaw6CXuXYI8",authDomain:"daily-planner-app-71520.firebaseapp.com",databaseURL:"https://daily-planner-app-71520.firebaseio.com",projectId:"daily-planner-app-71520",storageBucket:"daily-planner-app-71520.appspot.com",messagingSenderId:"595096002439",appId:"1:595096002439:web:a753e1b29f17565c967d22"});var h=d.a,f=(t(25),t(26),function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(c.a)(a).call(this))).handleNameChange=function(a){e.setState({userFirstName:a.target.value}),console.log(e.state.userFirstName)},e.handleSubmitName=function(a){a.preventDefault();var t=e.state.userFirstName;e.setState({nameOnPage:t,showNameResults:!0})},e.state={userFirstName:"",nameOnPage:""},e}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"enter-name"},l.a.createElement("h1",null,"Today's Plan"),l.a.createElement("form",{onSubmit:this.handleSubmitName},l.a.createElement("input",{className:"text-input",type:"text",name:"name",id:"name",placeholder:"Enter Your Name",value:this.state.userFirstName,onChange:this.handleNameChange,autoComplete:"off"}),l.a.createElement("input",{className:"save-day",type:"submit",value:"Submit"})),l.a.createElement("p",null,l.a.createElement("span",{className:"aria-label",role:"img",alt:"emoji of sun"},"\u2600\ufe0f"),"Good Morning ",this.state.nameOnPage," "))}}]),a}(n.Component)),v=t(13),b=t.n(v),y=t(14),N=t.n(y),g=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(c.a)(a).call(this))).handleNameChange=function(a){e.setState({userFirstName:a.target.value})},e.handleSubmitName=function(a){a.preventDefault();var t=e.state.userFirstName;console.log(t)},e.handleChangeTitle=function(a){e.setState({userInput:a.target.value})},e.handlePlanSubmit=function(a){a.preventDefault();var t=e.state.userInput,n=h.database().ref();if(""!==e.state.userInput&&e.state.plansList.length<=5)n.push(t),e.setState({userInput:""});else{var l=N()(b.a);l.fire({onOpen:function(){l.clickConfirm()}}).then((function(){return l.fire({title:"Hello Planner!",icon:"warning",text:"It seems like you have a busy day already. Let's prioritize your list so that you can have a balanced day \u262e\ufe0f."})}))}},e.deleteItem=function(e){h.database().ref().child(e.target.id).remove()},e.state={userFirstName:"",plansList:[],userInput:"",userPlansList:[]},e}return Object(m.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.database().ref().on("value",(function(a){var t=a.val(),n=[];for(var l in t){var s={planId:l,planTitle:t[l]};n.push(s)}e.setState({plansList:n})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"app-container"},l.a.createElement(f,null),l.a.createElement("button",{className:""},"Fran\xe7ais"),l.a.createElement("div",{className:"add-plan"},l.a.createElement("p",null,"Add a plan to your schedule"),l.a.createElement("form",{onSubmit:this.handlePlanSubmit},l.a.createElement("label",{htmlFor:"planTitle"}),l.a.createElement("input",{className:"text-input",id:"planTitle",type:"text",value:this.state.userInput,onChange:this.handleChangeTitle,autoComplete:"off"}),l.a.createElement("button",{className:"save-day",type:"submit"},"Add Plan "))),l.a.createElement("div",{className:"plan-result"},l.a.createElement("ul",null,this.state.plansList.map((function(a,t){return l.a.createElement("div",{className:"plan-item"},l.a.createElement("li",{key:t},a.planTitle),l.a.createElement("span",{className:"delete"},l.a.createElement("i",{className:"far fa-trash-alt",id:a.planId,onClick:e.deleteItem})))})))),l.a.createElement("button",{className:"save-day",onClick:this.saveEntireDay},"Save"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.089951ae.chunk.js.map