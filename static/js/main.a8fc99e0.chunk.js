(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var l=a(2),n=a(3),r=a(8),s=a(7),i=a(0),c=a.n(i),u=a(4),o=a.n(u),d=(a(15),a(5)),m=a.n(d),p=a(6),h=a.n(p),f=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).state={value:"",listOfSuppliers:[],filteredTable:[],whoIsChecked:{allowDestroyAll:"placeHolder"}},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://chefhero.free.beeceptor.com/").then((function(e){return e.json()})).then((function(t){e.setState({listOfSuppliers:t.data,filteredTable:t.data})}))}},{key:"handleChange",value:function(e){"placeHolder"==e.target.value?(this.setState({filteredTable:this.state.listOfSuppliers}),this.state.whoIsChecked.allowDestroyAll=e.target.value.trim()):(this.setState({filteredTable:this.state.listOfSuppliers.filter((function(t){return t.vendorName.trim()===e.target.value.trim()}))}),this.state.whoIsChecked.allowDestroyAll=e.target.value.trim())}},{key:"resetFilter",value:function(e){this.setState({filteredTable:this.state.listOfSuppliers}),this.state.whoIsChecked.allowDestroyAll="placeHolder"}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.listOfSuppliers){var l=!1;if(0==t.Count)l=!0;else for(var n in t)t[n].vendorName.trim()==this.state.listOfSuppliers[a].vendorName.trim()&&(l=!0);l||t.push({vendorName:this.state.listOfSuppliers[a].vendorName})}return c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("img",{src:m.a,class:"Logo"})),c.a.createElement("div",{class:"filterDiv"},c.a.createElement("div",{class:"filter"},c.a.createElement("div",null,"Supplier",c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("select",{value:this.state.whoIsChecked.allowDestroyAll,onChange:function(t){return e.handleChange(t)}},c.a.createElement("option",{value:"placeHolder"},"All Suppliers"),t.map((function(e){return c.a.createElement("option",{value:e.vendorName},e.vendorName)})))),c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(t){return e.resetFilter(t)}},"Reset Filter")))),c.a.createElement("div",{class:"tableDiv"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null,"STATUS"),c.a.createElement("td",null,"DELIVERY DAY"),c.a.createElement("td",null,"SUPPLIER"),c.a.createElement("td",null,"TOTAL"))),c.a.createElement("tbody",null,this.state.filteredTable.map((function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,"Paid"===e.orderBuyerStatus?c.a.createElement("span",{class:"paidClass"},e.orderBuyerStatus):c.a.createElement("span",{class:"deliveredClass"},e.orderBuyerStatus)),c.a.createElement("td",null,h()(e.deliveryDay,"mmm. dd,yyyy")),c.a.createElement("td",null,e.vendorName,c.a.createElement("span",{className:e.isBYOS?"hidden":"market"},"Market"),c.a.createElement("span",{className:e.isPendingVendorOnboarding?"first":"hidden"},"1st")),c.a.createElement("td",null,0==e.total?"":"$"+e.total))}))))))}}]),a}(c.a.Component),v=c.a.createElement(f,null);o.a.render(v,document.getElementById("root"))},15:function(e,t,a){},5:function(e,t,a){e.exports=a.p+"static/media/chefhero_logo_white.00f0bdb6.png"},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.a8fc99e0.chunk.js.map