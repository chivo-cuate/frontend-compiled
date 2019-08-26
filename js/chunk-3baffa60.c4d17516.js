(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3baffa60"],{"0571":function(e,t,s){"use strict";var r=s("0ab9"),i=s.n(r);i.a},"0798":function(e,t,s){"use strict";s("0c18");var r=s("10d2"),i=s("afdd"),a=s("9d26"),n=s("f2e7"),o=s("7560"),d=s("f40d"),l=s("58df"),c=s("d9bd");t["a"]=Object(l["a"])(r["a"],n["a"],d["a"]).extend({name:"v-alert",props:{border:{type:String,validator(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let e={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible(){if(!this.dismissible)return null;const e=this.iconColor;return this.$createElement(i["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(a["a"],{props:{color:e}},"$vuetify.icons.cancel")])},__cachedIcon(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const e={...r["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(e[`v-alert--border-${this.border}`]=!0),e},computedColor(){return this.color||this.type},computedIcon(){if(!1===this.icon)return!1;if("string"===typeof this.icon&&this.icon)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning";default:return!1}},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||o["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(c["a"])("outline","outlined",this)},methods:{genWrapper(){const e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let e={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(e){const t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},"0ab9":function(e,t,s){},"0c18":function(e,t,s){},"19bb":function(e,t,s){},"1aae":function(e,t,s){e.exports=s.p+"img/table2.cb361b8d.png"},"1fb1":function(e,t,s){var r={"./table-1.png":"ed14","./table0.png":"e481","./table1.png":"61ad","./table2.png":"1aae"};function i(e){var t=a(e);return s(t)}function a(e){var t=r[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id="1fb1"},"269a":function(e,t){e.exports=function(e,t){var s="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var r in"function"===typeof e.exports&&(s.directives=e.exports.options.directives),s.directives=s.directives||{},t)s.directives[r]=s.directives[r]||t[r]}},3924:function(e,t,s){"use strict";var r=s("19bb"),i=s.n(r);i.a},"3c49":function(e,t,s){},"61ad":function(e,t,s){e.exports=s.p+"img/table1.cb361b8d.png"},"7d9f":function(e,t,s){},"889b":function(e,t,s){e.exports=s.p+"img/cheff_m.53a4c640.png"},aad8:function(e,t,s){},ba26:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-flex",{attrs:{xs12:""}},[e.loadingInitialData?s("VProgress",{staticClass:"text-center",attrs:{message:"Cargando"}}):[this.$store.getters.getCurrBranch?[e.cooksEnabled?e._e():s("v-container",[s("v-flex",[s("v-alert",{staticClass:"animated flash",attrs:{dense:"",tile:"",prominent:"",dismissible:"",dark:"",color:"warning",border:"left",icon:"warning"}},[e._v("No existen elaboradores habilitados para el menú de hoy. Solo podrán ser procesadas las órdenes que no involucren alimentos elaborados.")])],1)],1),s("v-flex",{staticClass:"animated fadeIn",style:e.cooksEnabled?"":"margin-top: -30px;"},[e.permissions.canList?s("Tables",{ref:"tablesComp",attrs:{tables:e.tables,assets:e.assets,perms:e.permissions},on:{setResponse:function(t){return e.setResponse(t)}}}):e._e(),e.permissions.canViewPending?[s("PendingOrders",{attrs:{orders:e.pendingOrders}}),s("Cooks",{attrs:{cooks:e.cooks},on:{setResponse:function(t){return e.setResponse(t)}}})]:e._e()],2)]:[s("v-container",[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-alert",{staticClass:"animated flash",attrs:{dense:"",tile:"",prominent:"",dismissible:"",dark:"",color:"warning",border:"left",icon:"warning"}},[e._v("\n              Debe seleccionar una sucursal para poder usar esta página")])],1)],1)],1)]],s("AxiosComponent",{ref:"axios",on:{finish:function(t){return e.handleHttpResponse(t)}}})],2)},i=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-card",{attrs:{tile:""}},[s("v-card-title",{class:"title "+e.$store.getters.getThemeColor+" white--text",attrs:{"primary-title":""}},[s("v-icon",{staticClass:"white--text"},[e._v("local_dining")]),e._v("Mesas disponibles\n      "),s("v-spacer"),s("v-btn",{staticClass:"white--text",attrs:{text:""},on:{click:function(t){e.dlgViewMenu=!0}}},[e._v("Ver menú")])],1),s("v-layout",{attrs:{wrap:"","text-center":"","mt-8":"","pb-2":""}},e._l(e.tables,function(t,r){return s("v-flex",{key:"table-"+r,staticClass:"animated fadeIn mr-5 ml-5 text-center"},[s("Table",{attrs:{table:t,perms:e.perms},on:{setEditedTable:function(t){return e.setEditedTable(t)}}})],1)}),1),s("TableOrders",{attrs:{drwOrders:e.drwOrders,editedTable:e.editedTable,perms:e.perms},on:{close:function(t){return e.closeDrwOrders()},showYesNoDialog:function(t){return e.showYesNoDialog(t)}}}),s("SimpleTableDlg",{attrs:{visible:e.dlgViewMenu,width:700,title:"Menú",headers:e.dailyMenuHeaders,items:e.compDailyMenu},on:{close:function(t){e.dlgViewMenu=!1}}}),s("SimpleTableDlg",{attrs:{visible:e.dlgViewOrder,width:500,title:"Productos",headers:e.viewOrderHeaders,items:e.compEditedAssetsInfo},on:{close:function(t){e.dlgViewOrder=!1}}}),s("v-dialog",{attrs:{width:"500",persistent:""},model:{value:e.dlgEditOrder,callback:function(t){e.dlgEditOrder=t},expression:"dlgEditOrder"}},[s("v-card",[s("v-card-title",{class:"headline "+e.$store.getters.getThemeColor+" white--text",attrs:{"primary-title":""}},[e._v("Mesa "+e._s(e.editedTable.table_number))]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:"","mb-3":""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{class:e.$store.getters.getThemeColor+" white--text",attrs:{disabled:e.editedAssetsLength>0&&!e.validAssetForm},on:{click:function(t){return e.addAsset()}}},[s("v-icon",[e._v("mdi-food")]),e._v("Agregar\n                ")],1)],1)],1),s("v-form",{ref:"form",on:{submit:function(e){e.preventDefault()}},model:{value:e.validAssetForm,callback:function(t){e.validAssetForm=t},expression:"validAssetForm"}},[e._l(e.editedAssets,function(t,r){return s("v-layout",{key:"prod-"+r,attrs:{wrap:""}},[s("v-flex",{attrs:{xs8:"",sm6:""}},[s("v-autocomplete",{staticStyle:{"max-height":"20px!important"},attrs:{"small-chips":"",rules:e.requiredRules,readonly:"1"===t.finished,items:e.assets,"item-color":e.$store.getters.getThemeColor,"item-text":"name","item-value":"id",label:"Producto","no-data-text":"No hay resultados"},on:{change:function(t){return e.removeDuplicateAssets()}},scopedSlots:e._u([{key:"item",fn:function(t){return[s("v-list-item-content",[s("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}}),s("v-list-item-subtitle",{domProps:{innerHTML:e._s("Precio: $"+t.item.price+(t.item.grams?" ("+t.item.grams+" gramos)":""))}})],1)]}}],null,!0),model:{value:t.asset_id,callback:function(s){e.$set(t,"asset_id",s)},expression:"editedAssetAux.asset_id"}})],1),s("v-flex",{attrs:{xs4:"",sm2:""}},[s("v-text-field",{attrs:{rules:e.numberRules,disabled:"1"===t.finished,label:"Unidades",type:"number"},model:{value:t.quantity,callback:function(s){e.$set(t,"quantity",s)},expression:"editedAssetAux.quantity"}})],1),s("v-flex",{attrs:{xs4:"",sm2:""}},[s("v-text-field",{attrs:{readonly:"",disabled:"1"===t.finished,value:e.getAssetPriceById(t.asset_id,t.quantity),label:"Precio"}})],1),s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-btn",{staticClass:"error",attrs:{width:"100%"},on:{click:function(t){return e.removeAsset(r)}}},[s("v-icon",[e._v("delete")])],1)],1)],1)}),s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("span",[e._v("Total:")]),s("v-chip",[s("v-icon",{attrs:{left:""}},[e._v("attach_money")]),e._v("\n                    "+e._s(e.compOrderPrice)+"\n                  ")],1)],1)],1)],2)],1)],1),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{disabled:e.editedAssetsLength<1||!e.validAssetForm||e.handlingOrder,color:e.$store.getters.getThemeColor,text:""},on:{click:function(t){return e.sendOrder()}}},[e.handlingOrder?s("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:""}}):e._e(),s("span",{domProps:{innerHTML:e._s(e.editedOrder.id?"Editar":"Agregar")}})],1),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dlgEditOrder=!1}}},[e._v("Cancelar")])],1)],1)],1),s("YesNoDlg",{attrs:{visible:e.dlgCheckout,width:500,title:"Cerrar orden",question:"Se dispone a cerrar la cuenta # "+(this.editedOrderIndex+1)+" de la mesa "+e.editedTable.table_number+" con un monto de:",chip:e.compOrderPrice,processing:e.handlingOrder},on:{yes:function(t){return e.checkout()},no:function(t){e.dlgCheckout=!1}}}),s("YesNoDlg",{attrs:{visible:e.dlgCancelOrder,width:350,title:"Cancelar orden",question:"Se dispone a cancelar la orden # "+(this.editedOrderIndex+1)+" de la mesa "+e.editedTable.table_number+" con un monto de:",chip:e.compOrderPrice,processing:e.handlingOrder},on:{yes:function(t){return e.cancelOrder()},no:function(t){e.dlgCancelOrder=!1}}}),s("YesNoDlg",{attrs:{visible:e.dlgServeProducts,width:350,title:"Servir productos",question:"Se dispone a servir los productos de la orden # "+(this.editedOrderIndex+1)+" de la mesa "+e.editedTable.table_number+".",chip:null,processing:e.handlingOrder},on:{yes:function(t){return e.serveProducts()},no:function(t){e.dlgServeProducts=!1}}}),s("AxiosComponent",{ref:"axios",on:{finish:function(t){return e.handleHttpResponse(t)}}})],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-menu",{attrs:{"close-on-click":"",dark:"","offset-y":"",transition:"fade-transition",bottom:"","open-on-hover":""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[r("v-flex",{staticClass:"text-center align-center"},[r("v-btn",{attrs:{text:"",disabled:""}},[e.table.orders_status_count?e._l(e.table.orders_status_count,function(t,s){return r("v-badge",{key:"badge-"+s,staticClass:"animated slideInDown",style:"bottom: 32px; left: "+(19+20*s)+"px;",attrs:{color:t.icon_color,overlap:""},scopedSlots:e._u([{key:"badge",fn:function(){return[r("span",[e._v(e._s(t.count))])]},proxy:!0}],null,!0)})}):e._e(),r("v-img",{attrs:{src:s("1fb1")("./table"+e.table.status_id+".png"),width:"70px"}})],2)],1),r("v-flex",{attrs:{"mb-3":""}},[r("v-chip",e._g({staticClass:"table-number-menu"},i),[e._v("Mesa "+e._s(e.table.table_number))])],1)]}}])},[r("v-list",[e.perms.canCreate?r("v-list-item",{staticClass:"dropdown-menu-item",on:{click:function(t){return e.setEditedTable("add")}}},[r("v-icon",[e._v("local_dining")]),r("span",[e._v("Agregar orden")])],1):e._e(),-1!==e.table.status_id&&(e.perms.canEdit||e.perms.canDelete||e.perms.canCheckout)?r("v-list-item",{staticClass:"dropdown-menu-item",on:{click:function(t){return e.setEditedTable("view-orders")}}},[r("v-icon",[e._v("local_dining")]),r("span",[e._v("Ver órdenes")])],1):e._e()],1)],1)},d=[],l={data(){return{handlingOrder:!1,editedOrdersByCategory:[],editedOrdersListIndex:-1,editedOrder:{},editedOrderIndex:{},editedAssets:[],editedAsset:{},drwOrders:!1,dlgTableOrder:!1,dlgCheckout:!1,dlgCancelOrder:!1,validAssetForm:!1,requiredRules:[e=>!!e||"Dato obligatorio"],numberRules:[e=>!!e||"Dato obligatorio",e=>e>0||"Dato incorrecto"],timer:null}},components:{},props:["table","perms"],methods:{setEditedTable(e){this.$emit("setEditedTable",{table:this.table,action:e})}}},c=l,u=(s("d2e1"),s("2877")),h=s("6544"),p=s.n(h),m=s("4ca6"),v=s("8336"),b=s("cc20"),g=s("0e8f"),f=s("132d"),_=s("adda"),x=s("8860"),C=s("da13"),O=s("e449"),k=Object(u["a"])(c,o,d,!1,null,"2573d982",null),w=k.exports;p()(k,{VBadge:m["a"],VBtn:v["a"],VChip:b["a"],VFlex:g["a"],VIcon:f["a"],VImg:_["a"],VList:x["a"],VListItem:C["a"],VMenu:O["a"]});var y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.drwOrders?s("v-navigation-drawer",{attrs:{absolute:"",temporary:"",permanent:e.drwOrders,right:"",bottom:""},model:{value:e.drwOrders,callback:function(t){e.drwOrders=t},expression:"drwOrders"}},[s("v-list-item",{staticClass:"grey"},[s("v-list-item-content",[s("v-list-item-title",{staticClass:"uppercase"},[e._v("Mesa "+e._s(e.editedTable.table_number))])],1),s("v-list-item-icon",[s("v-icon",{on:{click:function(t){return e.$emit("close")}}},[e._v("close")])],1)],1),s("v-divider"),s("v-list",{attrs:{dense:""}},e._l(e.editedTable.orders,function(t,r){return s("v-list-item",{key:"order-"+r},[s("v-list-item-content",[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs6:""}},[s("v-chip",{attrs:{small:"",pill:"",link:""},on:{click:function(t){return e.emitEvent("dlgViewOrder",r)}}},[s("v-avatar",{class:t.gui_attribs.icon_color,attrs:{left:""}},[s("v-icon",{staticClass:"white--text",attrs:{size:"20"}},[e._v(e._s(t.gui_attribs.icon))])],1),s("span",[e._v("Orden #"+e._s(t.order_number))])],1)],1),s("v-flex",[s("v-layout",[t.gui_attribs.edit&&e.perms.canEdit?s("v-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"warning--text",on:{click:function(t){return e.emitEvent("dlgEditOrder",r)}}},[e._v("edit")]):e._e(),t.gui_attribs.serve?s("v-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"success--text",on:{click:function(t){return e.emitEvent("dlgServeProducts",r)}}},[e._v("check")]):e._e(),t.gui_attribs.checkout&&e.perms.canCheckout?s("v-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"success--text",on:{click:function(t){return e.emitEvent("dlgCheckout",r)}}},[e._v("attach_money")]):e._e(),t.gui_attribs.delete&&e.perms.canDelete?s("v-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"error--text",on:{click:function(t){return e.emitEvent("dlgCancelOrder",r)}}},[e._v("delete")]):e._e()],1)],1)],1)],1)],1)}),1)],1):e._e()},V=[],A={data(){return{editedOrder:null,editedAssets:null,dlgViewOrder:!1}},props:["drwOrders","editedTable","perms"],methods:{emitEvent(e,t){this.$emit("showYesNoDialog",{action:e,orderIndex:t})}}},T=A,$=(s("c184"),s("8212")),I=s("ce7e"),E=s("a722"),D=s("5d23"),P=s("34c3"),B=s("f774"),L=s("269a"),S=s.n(L),F=s("5607"),M=Object(u["a"])(T,y,V,!1,null,"2d5984f6",null),q=M.exports;p()(M,{VAvatar:$["a"],VChip:b["a"],VDivider:I["a"],VFlex:g["a"],VIcon:f["a"],VLayout:E["a"],VList:x["a"],VListItem:C["a"],VListItemContent:D["a"],VListItemIcon:P["a"],VListItemTitle:D["c"],VNavigationDrawer:B["a"]}),S()(M,{Ripple:F["a"]});var N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{width:e.width,persistent:""},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[s("v-card",[s("v-card-title",{class:"headline "+e.$store.getters.getThemeColor+" white--text",attrs:{"primary-title":""}},[e._v(e._s(e.title))]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,"hide-default-footer":"",items:e.items,"no-data-text":"No hay elementos"}})],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cerrar")])],1)],1)],1)},R=[],H={props:["visible","width","title","headers","items"]},j=H,Y=s("b0af"),z=s("99d9"),U=s("a523"),J=s("8fea"),W=s("169a"),G=s("2fa4"),K=Object(u["a"])(j,N,R,!1,null,null,null),Q=K.exports;p()(K,{VBtn:v["a"],VCard:Y["a"],VCardActions:z["a"],VCardText:z["b"],VCardTitle:z["c"],VContainer:U["a"],VDataTable:J["a"],VDialog:W["a"],VSpacer:G["a"]});var X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{width:e.width,persistent:""},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[s("v-card",[s("v-card-title",{class:"headline "+e.$store.getters.getThemeColor+" white--text",attrs:{"primary-title":""}},[e._v(e._s(e.title))]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[e._v(e._s(e.question))]),e.chip?s("v-card-text",{staticClass:"text-center"},[s("v-chip",{staticClass:"error",attrs:{label:"",large:""}},[s("v-icon",{attrs:{"x-large":"",color:"white",medium:"",left:""}},[e._v("attach_money")]),s("span",{staticClass:"display-1 font-weight-bold"},[e._v(e._s(e.chip))])],1)],1):e._e(),s("v-card-text",[e._v("¿Confirma que desea continuar?")])],1)],1)],1)],1),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{disabled:e.processing,color:e.$store.getters.getThemeColor,text:""},on:{click:function(t){return e.$emit("yes")}}},[e.processing?s("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:""}}):e._e(),s("span",[e._v("Continuar")])],1),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){return e.$emit("no")}}},[e._v("Cancelar")])],1)],1)],1)},Z=[],ee={props:["visible","width","title","question","chip","processing"]},te=ee,se=s("490a"),re=Object(u["a"])(te,X,Z,!1,null,null,null),ie=re.exports;p()(re,{VBtn:v["a"],VCard:Y["a"],VCardActions:z["a"],VCardText:z["b"],VCardTitle:z["c"],VChip:b["a"],VContainer:U["a"],VDialog:W["a"],VDivider:I["a"],VFlex:g["a"],VIcon:f["a"],VLayout:E["a"],VProgressCircular:se["a"],VSpacer:G["a"]});var ae={data(){return{handlingOrder:!1,editedTable:{},editedTableIndex:-1,editedOrders:[],editedOrdersListIndex:-1,editedOrder:{},editedOrderIndex:{},editedAssets:[],editedAsset:{},dailyMenu:[],drwOrders:!1,dlgViewMenu:!1,dlgViewOrder:!1,dlgEditOrder:!1,dlgCheckout:!1,dlgCancelOrder:!1,dlgServeProducts:!1,validAssetForm:!1,requiredRules:[e=>!!e||"Dato obligatorio"],numberRules:[e=>!!e||"Dato obligatorio",e=>e>0||"Dato incorrecto"],dailyMenuHeaders:[{text:"Categoría",value:"group"},{text:"Producto",value:"name"},{text:"Precio",value:"price"},{text:"Gramos",value:"grams"}],viewOrderHeaders:[{text:"Producto",value:"name"},{text:"Precio",value:"price"},{text:"Cantidad",value:"quantity"},{text:"Estado",value:"status"}]}},components:{Table:w,TableOrders:q,SimpleTableDlg:Q,YesNoDlg:ie},props:["tables","assets","perms"],mounted(){},watch:{editedOrders:function(e,t){e||(this.drwOrders=!1)}},computed:{compEditedAssetsInfo(){let e=[];return this.editedAssets.forEach(t=>{e.push({name:this.getAssetById(t.asset_id).name,quantity:t.quantity,price:this.getAssetPriceById(t.asset_id,t.quantity),status:"1"===t.finished?"Servido":"Pendiente"})}),e.push({name:"TOTAL",price:this.compOrderPrice}),e},compDailyMenu(){let e=[];return this.assets.forEach(t=>{t.divider||t.header||e.push(t)}),e},compOrderPrice(){let e=0;return this.editedAssets.forEach(t=>{e+=this.getAssetPriceById(t.asset_id,parseInt(t.quantity))}),e},editedAssetsLength(){return this.editedAssets.length}},methods:{closeDrwOrders(){this.drwOrders=!1,this.editedOrders=[]},setEditedAssets(){this.editedAssets=[],this.editedOrder.assets.forEach(e=>{e.price=this.getAssetById(e.asset_id).price,this.editedAssets.push(e)})},setEditedOrder(e){this.editedOrderIndex=e;let t=this.editedOrders[e];this.editedOrder=Object.assign({},t)},showYesNoDialog(e){switch(this.setEditedOrder(e.orderIndex),this.setEditedAssets(),e.action){case"dlgEditOrder":this.dlgEditOrder=!0;break;case"dlgServeProducts":this.dlgServeProducts=!0;break;case"dlgCheckout":this.dlgCheckout=!0;break;case"dlgViewOrder":this.dlgViewOrder=!0;break;case"dlgCancelOrder":this.dlgCancelOrder=!0;break;default:break}},setEditedTable(e){switch(this.editedTable=e.table,this.editedTableIndex=this.tables.indexOf(this.editedTable),e.action){case"add":this.editedOrder={},this.editedAssets=[],this.dlgEditOrder=!0;break;case"view-orders":this.editedOrders=this.editedTable.orders,this.drwOrders=!0;break;case"checkout":this.dlgCheckout=!0;break;case"cancel":this.dlgCancelOrder=!0;break}},getAssetById(e){let t=this.assets.find(t=>{return t.id===e});return t},getAssetPriceById(e,t){if(!e)return 0;let s=this.getAssetById(e);return s?parseInt(s.price)*(t?parseInt(t):1):0},removeAsset(e){this.editedAssets.splice(e,1),this.removeDuplicateAssets()},removeDuplicateAssets(){let e=[];for(let t=0;t<this.editedAssetsLength;t++){this.editedAssets[t].price=this.getAssetById(this.editedAssets[t].asset_id).price;let s=e.findIndex(e=>e.asset_id===this.editedAssets[t].asset_id&&"0"===e.finished);s>=0?e[s].quantity=parseInt(e[s].quantity)+parseInt(this.editedAssets[t].quantity):e.push(this.editedAssets[t])}this.editedAssets=e},addAsset(){this.removeDuplicateAssets(),this.editedAsset={quantity:1,finished:"0"},this.editedAssets.push(this.editedAsset)},sendOrder(){if(this.removeDuplicateAssets(),!this.handlingOrder){this.handlingOrder=!0;var e={url:this.editedOrder.id?"ordenes/editar":"ordenes/crear",snackbar:!0,method:"post",params:{item:{table_number:this.editedTable.table_number,id:this.editedOrder.id},assets:this.editedAssets,branch_id:this.$store.getters.getCurrBranch.id}};this.$refs.axios.submit(e)}},cancelOrder(){if(!this.handlingOrder){this.handlingOrder=!0;var e={url:"ordenes/eliminar",snackbar:!0,method:"post",params:{id:this.editedOrder.id,table_number:this.editedTable.table_number,branch_id:this.$store.getters.getCurrBranch.id}};this.$refs.axios.submit(e)}},serveProducts(){if(!this.handlingOrder){this.handlingOrder=!0;var e={url:"ordenes/servir-productos",snackbar:!0,method:"post",params:{id:this.editedOrder.id,table_number:this.editedTable.table_number,branch_id:this.$store.getters.getCurrBranch.id}};this.$refs.axios.submit(e)}},checkout(){if(!this.handlingOrder){this.handlingOrder=!0;var e={url:"ordenes/cerrar",snackbar:!0,method:"post",params:{id:this.editedOrder.id,table_number:this.editedTable.table_number,branch_id:this.$store.getters.getCurrBranch.id}};this.$refs.axios.submit(e)}},updateCurrTableAndOrders(e){this.editedTableIndex>-1&&(this.editedTable=e.data.tables[this.editedTableIndex],this.editedOrders=this.editedTable.orders)},handleHttpResponse(e){if(200===e.data.result.code){let t=e.data.result.response;this.handlingOrder=!1,this.dlgEditOrder=!1,this.dlgCheckout=!1,this.dlgCancelOrder=!1,this.dlgServeProducts=!1,"success"===t.code&&this.$emit("setResponse",t),this.updateCurrTableAndOrders(t)}}}},ne=ae,oe=(s("0571"),s("c6a6")),de=s("4bd4"),le=s("8654"),ce=Object(u["a"])(ne,a,n,!1,null,"147825c3",null),ue=ce.exports;p()(ce,{VAutocomplete:oe["a"],VBtn:v["a"],VCard:Y["a"],VCardActions:z["a"],VCardText:z["b"],VCardTitle:z["c"],VChip:b["a"],VContainer:U["a"],VDialog:W["a"],VDivider:I["a"],VFlex:g["a"],VForm:de["a"],VIcon:f["a"],VLayout:E["a"],VListItemContent:D["a"],VListItemSubtitle:D["b"],VListItemTitle:D["c"],VProgressCircular:se["a"],VSpacer:G["a"],VTextField:le["a"]});var he=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-card",{attrs:{tile:""}},[s("v-card-title",{class:"title "+e.$store.getters.getThemeColor+" white--text",attrs:{"primary-title":""}},[s("v-icon",{staticClass:"white--text"},[e._v("access_time")]),e._v("Órdenes en cola")],1),e.orders.length>0?s("v-layout",{attrs:{wrap:"","mt-8":"","pb-2":""}},e._l(e.orders,function(e,t){return s("v-flex",{key:"table-"+t,staticClass:"animated fadeIn mr-5 ml-5 text-center"},[s("PendingOrder",{attrs:{order:e}})],1)}),1):s("v-layout",{attrs:{wrap:""}},[s("v-flex",[s("p",{staticClass:"title text-center mt-5"},[e._v("No hay órdenes sin asignar.")])])],1)],1)],1)},pe=[],me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{wrap:""}},[r("v-flex",[r("v-btn",{attrs:{text:"",disabled:""}},[r("v-img",{attrs:{src:s("1fb1")("./table"+e.order.status_id+".png"),width:"70px"}})],1),r("br"),r("v-chip",{staticClass:"mt-1",attrs:{label:""}},[r("v-icon",{attrs:{small:""}},[e._v("mdi-tag")]),r("span",{domProps:{innerHTML:e._s("Mesa "+e.order.table_number+" - orden "+e.order.order_number)}})],1),r("br"),e._l(e.order.assets,function(t,s){return r("div",{key:"orderAsset-"+s},[r("span",[e._v(e._s(t.name))]),r("v-chip",{staticClass:"ml-1 error",attrs:{"x-small":""}},[e._v(e._s(t.quantity))]),r("br")],1)})],2)],1)},ve=[],be={data(){return{}},components:{},props:["order"],methods:{}},ge=be,fe=Object(u["a"])(ge,me,ve,!1,null,null,null),_e=fe.exports;p()(fe,{VBtn:v["a"],VChip:b["a"],VFlex:g["a"],VIcon:f["a"],VImg:_["a"],VLayout:E["a"]});var xe={data(){return{}},components:{PendingOrder:_e},props:["orders"]},Ce=xe,Oe=(s("3924"),Object(u["a"])(Ce,he,pe,!1,null,"f8b976e2",null)),ke=Oe.exports;p()(Oe,{VCard:Y["a"],VCardTitle:z["c"],VContainer:U["a"],VFlex:g["a"],VIcon:f["a"],VLayout:E["a"]});var we=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-card",{attrs:{tile:""}},[s("v-card-title",{class:"title "+e.$store.getters.getThemeColor+" white--text",attrs:{"primary-title":""}},[s("v-icon",{staticClass:"white--text"},[e._v("mdi-account")]),e._v("Elaboradores habilitados\n    ")],1),s("v-layout",{attrs:{wrap:"","text-center":"","mt-8":"","pb-2":""}},e._l(e.cooks,function(t,r){return s("v-flex",{key:"table-"+r,staticClass:"animated fadeIn mr-5 ml-5 text-center"},[s("Cook",{attrs:{cook:t},on:{showDlgFinish:function(t){return e.setEditedCook(t)}}})],1)}),1),s("YesNoDlg",{attrs:{visible:e.dlgFinish,width:350,title:"Terminar orden",question:"Se dispone a dar por terminada la orden actual de "+e.editedCook.first_name+" "+e.editedCook.last_name+", asociada a la mesa "+e.editedCook.current_order.table_number+".",chip:null,processing:e.handlingOrder},on:{yes:function(t){return e.finishOrder()},no:function(t){e.dlgFinish=!1}}}),s("AxiosComponent",{ref:"axios",on:{finish:function(t){return e.handleHttpResponse(t)}}})],1)],1)},ye=[],Ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"pb-3"},[r("v-card",[r("div",{staticClass:"d-flex flex-column align-center mb-3"},[r("v-img",{attrs:{src:s("F"===e.cook.sex?"f7b4":"889b"),width:"70px"}}),r("v-chip",{staticClass:"mt-1 cyan darken-3",attrs:{label:"",dark:""}},[e._v(e._s(e.cook.first_name+" "+e.cook.last_name))])],1),r("v-divider"),e.cook.current_order?[r("p",[r("v-chip",{staticClass:"mt-1",attrs:{label:""}},[r("v-icon",[e._v("mdi-tag")]),r("span",{domProps:{innerHTML:e._s("Mesa "+e.cook.current_order.table_number+" - orden "+e.cook.current_order.order_number)}})],1),r("br"),r("v-chip",{staticClass:"warning darken-1 mt-1",attrs:{label:""}},[r("v-icon",{staticClass:"white--text"},[e._v("mdi-timelapse")]),e._v("\n            "+e._s(e.cook.current_order.elapsed_time)+"\n          ")],1)],1),e._l(e.cook.current_order.assets,function(t,s){return r("div",{key:"orderAsset-"+s},[r("span",[r("v-icon",{attrs:{small:""}},[e._v("local_dining")]),e._v("\n            "+e._s(t.asset_name)+"\n          ")],1),r("v-chip",{staticClass:"ml-1 error",attrs:{"x-small":""}},[e._v(e._s(t.quantity))]),r("br")],1)}),r("v-btn",{class:e.$store.getters.getThemeColor+" mt-3 no-radius white--text",attrs:{large:"",width:"100%"},on:{click:function(t){return e.$emit("showDlgFinish",e.cook)}}},[r("v-icon",[e._v("check")]),e._v("Terminar\n        ")],1)]:[r("p",{staticClass:"mt-3 pb-3 warning--text"},[e._v("No tiene orden asignada.")])]],2)],1)],1)},Ae=[],Te={props:["cook"]},$e=Te,Ie=Object(u["a"])($e,Ve,Ae,!1,null,null,null),Ee=Ie.exports;p()(Ie,{VBtn:v["a"],VCard:Y["a"],VChip:b["a"],VDivider:I["a"],VFlex:g["a"],VIcon:f["a"],VImg:_["a"],VLayout:E["a"]});var De={data(){return{editedCook:{current_order:{}},handlingOrder:!1,dlgFinish:!1}},components:{Cook:Ee,YesNoDlg:ie},props:["cooks"],methods:{setEditedCook(e){this.editedCook=e,this.dlgFinish=!0},finishOrder(e){if(!this.handlingOrder){this.handlingOrder=!0;var t={url:"ordenes/elaborar",snackbar:!0,method:"post",params:{id:this.editedCook.current_order.id,cook_id:this.editedCook.id,table_number:this.editedCook.current_order.table_number,branch_id:this.$store.getters.getCurrBranch.id}};this.$refs.axios.submit(t)}},handleHttpResponse(e){this.handlingOrder=!1;var t=e.data.result.response;this.operationMessage=t.msg,this.operationMessageType=t.code,this.dlgFinish=!1,"success"===t.code&&this.$emit("setResponse",t)}}},Pe=De,Be=(s("eab5"),Object(u["a"])(Pe,we,ye,!1,null,"0cdb9a7a",null)),Le=Be.exports;p()(Be,{VCard:Y["a"],VCardTitle:z["c"],VContainer:U["a"],VFlex:g["a"],VIcon:f["a"],VLayout:E["a"]});var Se={data(){return{loadingInitialData:!0,loadingData:!1,cooksEnabled:!0,tables:[],assets:[],pendingOrders:[],cooks:[],timer:null,permissions:{canList:!1,canCreate:!1,canEdit:!1,canDelete:!1,canViewPending:!1,canCook:!1,canCheckout:!1}}},components:{Tables:ue,PendingOrders:ke,Cooks:Le},created(){this.$store.getters.getOrdersPermissions.forEach(e=>{e.perms.forEach(e=>{switch(e.route){case"/ordenes/ordenes/listar":this.permissions.canList=!0;break;case"/ordenes/ordenes/crear":this.permissions.canCreate=!0;break;case"/ordenes/ordenes/editar":this.permissions.canEdit=!0;break;case"/ordenes/ordenes/eliminar":this.permissions.canDelete=!0;break;case"/ordenes/ordenes/elaborar":this.permissions.canCook=!0;break;case"/ordenes/ordenes/ver-pendientes":this.permissions.canViewPending=!0;break;case"/ordenes/ordenes/cerrar":this.permissions.canCheckout=!0;break;default:break}})}),this.permissions.canList||this.permissions.canViewPending||this.$router.push("/403")},mounted(){(this.permissions.canList||this.permissions.canViewPending)&&this.$store.getters.getCurrBranch?(this.timer=setInterval(this.getDataFromApi,5e3),this.getDataFromApi()):this.loadingInitialData=!1,this.$root.$emit("resetNotifications")},methods:{setResponse(e){this.tables=e.data.tables,this.assets=e.data.assets,this.pendingOrders=e.data.orders,this.cooks=e.data.cooks,this.cooksEnabled=e.data.cooks_enabled,this.$root.$emit("setNotifications",e.data.notifications)},handleHttpResponse(e){if(this.loadingData=!1,this.loadingInitialData=!1,200===e.data.result.code){var t=e.data.result.response;switch(this.operationMessage=t.msg,this.operationMessageType=t.code,e.url.substring(e.url.lastIndexOf("/")+1)){case"listar":"success"===t.code&&(this.setResponse(t),this.$refs.tablesComp&&this.$refs.tablesComp.updateCurrTableAndOrders(t));break;case"ver-pendientes":"success"===t.code&&this.setResponse(t);break;default:break}}},getDataFromApi(){if(!this.loadingData){this.loadingData=!0;var e={url:this.permissions.canList?"ordenes/listar":"ordenes/ver-pendientes",params:{branch_id:this.$store.getters.getCurrBranch.id}};this.$refs.axios&&this.$refs.axios.submit(e)}}}},Fe=Se,Me=s("0798"),qe=Object(u["a"])(Fe,r,i,!1,null,null,null);t["default"]=qe.exports;p()(qe,{VAlert:Me["a"],VContainer:U["a"],VFlex:g["a"],VLayout:E["a"]})},c184:function(e,t,s){"use strict";var r=s("aad8"),i=s.n(r);i.a},d2e1:function(e,t,s){"use strict";var r=s("3c49"),i=s.n(r);i.a},e481:function(e,t,s){e.exports=s.p+"img/table0.cb361b8d.png"},eab5:function(e,t,s){"use strict";var r=s("7d9f"),i=s.n(r);i.a},ed14:function(e,t,s){e.exports=s.p+"img/table-1.2597e2c9.png"},f7b4:function(e,t,s){e.exports=s.p+"img/cheff_f.70432e07.png"}}]);
//# sourceMappingURL=chunk-3baffa60.c4d17516.js.map