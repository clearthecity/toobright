(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3acc"],{"02d8":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"safe-to-drive"}},[e.isSafe?n("div",[n("p",[e._v("you’ll be ok for another "),n("span",[e._v(e._s(e.waitUntil))])])]):n("div",[n("p",[e._v(e._s(e.directionWarning))]),n("p",[e._v("or maybe wait about "+e._s(e.waitUntil))])]),n("br"),n("br"),n("p",[n("router-link",{staticClass:"link",attrs:{to:"/about"}},[e._v("about")])],1)])},r=[];const s=12,a=3;var o={name:"SafeToDrive",props:{sunAltitude:Number,sunAzimuth:Number,userLatitude:Number,userLongitude:Number},data(){return{isSafe:!0,waitUntil:""}},mounted:function(){this.sunAltitude>=a&&this.sunAltitude<=s&&(this.isSafe=!1),this.startTimeCalculations()},computed:{directionWarning:function(){return this.sunAzimuth>=45&&this.sunAzimuth<=135?"be careful driving west":"be careful driving east"}},methods:{startTimeCalculations:function(){var e=this.$moment;let t=e();var n=this.$suncalc;n.addTime(s,"morningDangerEnd","eveningDangerBegin"),n.addTime(a,"morningDangerBegin","eveningDangerEnd");let i=n.getTimes(t,this.userLatitude,this.userLongitude),r=this;if(this.isSafe){let t=e().add(1,"d"),s=n.getTimes(t,this.userLatitude,this.userLongitude);this.getTimeToDanger(i,s).then((function(e){return e}),(function(e){console.log(e)})).then((function(e){r.writeWaitMessage(e)}))}else this.getTimeToSafety(i).then((function(e){return e}),(function(e){console.log(e)})).then((function(e){r.writeWaitMessage(e)}))},getTimeToSafety:function(e){return new Promise((t,n)=>{var i=this.$moment;i||n(Error("getTimeToSafety: cannot access moment")),this.sunAltitude<=a?t(e.morningDangerEnd):t(e.eveningDangerEnd)})},getTimeToDanger:function(e,t){return new Promise((n,i)=>{var r=this.$moment;r||i(Error("getTimeToDanger: cannot access moment")),this.sunAltitude<=a?(r().isBefore(r().hour(9))&&n(e.morningDangerBegin),n(t.morningDangerBegin)):n(e.eveningDangerBegin)})},writeWaitMessage:function(e){var t=this.$moment;let n=t(e).diff(t(),"minutes");n>119?n=t(e).diff(t(),"hours")+" hours":n+=" minutes",this.waitUntil=n}}},u=o,g=n("2877"),m=Object(g["a"])(u,i,r,!1,null,"696e9997",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0a3acc-legacy.b57c5f57.js.map