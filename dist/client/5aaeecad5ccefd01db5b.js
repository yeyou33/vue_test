(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{306:function(t,e,i){"use strict";var s=i(107),a=i.n(s).a.create({baseURL:"http://localhost:8082",timeout:5e3});e.a=a},386:function(t,e,i){"use strict";var s=i(306);e.a={Buyer:function(){return Object(s.a)({url:"mock/5bfcae904540a062a039a479/pingjia/pingjia",method:"get"})},Seller:function(){return Object(s.a)({url:"mock/5bfcae904540a062a039a479/pingjia/seller",method:"get"})}}},388:function(t,e,i){var s=i(450);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(23).default)("339294a9",s,!0,{})},449:function(t,e,i){"use strict";var s=i(388);i.n(s).a},450:function(t,e,i){(t.exports=i(22)(!1)).push([t.i,'.Table{border-collapse:collapse;border:none;color:#646464;margin:10px 0 0 10px}.Table .tr_heads th{color:#000;background:#f2f2f2}.Table .tr_heads th,.Table td{border:1px solid #e5e5e5;text-align:center}.jd_m_mbor{background-color:#d0d0d0}.jd_cz_tbl th{border:1px solid #e5e5e5}.my_credit{height:25px;font:16px SimHei,Microsoft YaHei,SimSun,Arial,"sans-serif";font-weight:400;line-height:normal;font-weight:700;line-height:25px;color:#000;margin:10px 0 0 10px}',""])},521:function(t,e,i){"use strict";i.r(e);var s=i(386),a={data:function(){return{sellerlist:[]}},created:function(){var t=this;s.a.Seller().then(function(e){t.sellerlist=e.data.sellerlist},function(){console.log("请求失败")})}},r=(i(449),i(24)),n=Object(r.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("table",{staticClass:"Table"},[i("tbody",[t._m(1),t._v(" "),t._l(t.sellerlist,function(e){return i("tr",{key:e.index},[i("td",[t._v(t._s(e.describe))]),t._v(" "),i("td",{staticClass:"t_orange"},[t._v(t._s(e.Increase))]),t._v(" "),i("td",[t._v(t._s(e.buyer))]),t._v(" "),i("td",[t._v(t._s(e.time))])])})],2)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my_credit"},[this._v("卖家信誉\n\t\t"),e("i",{staticClass:"iconfont icon-v0 icon-credit"}),this._v(" "),e("span",[e("span",{attrs:{id:"LabSPrestige"}},[this._v("1")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"tr_heads"},[e("th",{attrs:{width:"404"}},[this._v("描述")]),this._v(" "),e("th",{attrs:{width:"152"}},[this._v("信誉值增减")]),this._v(" "),e("th",{attrs:{width:"160"}},[this._v("卖家信誉值")]),this._v(" "),e("th",{attrs:{width:"190"}},[this._v("时间")])])}],!1,null,null,null);n.options.__file="pingjia_list2.vue";e.default=n.exports}}]);