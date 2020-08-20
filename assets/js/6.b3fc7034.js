(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{359:function(t,e,l){"use strict";var a=l(2),i=l(129).trim;a({target:"String",proto:!0,forced:l(360)("trim")},{trim:function(){return i(this)}})},360:function(t,e,l){var a=l(3),i=l(130);t.exports=function(t){return a(function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t})}},379:function(t,e,l){},409:function(t,e,l){"use strict";var a=l(379);l.n(a).a},609:function(t,e,l){"use strict";l.r(e);l(39),l(97),l(359);var a={filters:{format:function(t){return t.replace(/^ {8}/gm,"").trim()}},data:function(){return{value1:"",value2:"",code1:'<lc-input placeholder="Enter something..." v-model="value"></lc-input>',code2:'<lc-input placeholder="Enter something..." clearable></lc-input>',code3:'<lc-input placeholder="Enter something..." disabled></lc-input>',code4:'<lc-input placeholder="Enter something..." type="textarea" :rows="3"></lc-input>',code5:'<lc-input placeholder="Enter something..." prefix="search"></lc-input>\n        <lc-input placeholder="Enter something..." suffix="correct"></lc-input>\n        <lc-input placeholder="Enter something..." prefix="user" suffix="add"></lc-input>',code6:'<lc-input placeholder="Enter something...">\n            <template slot="append">\n                <lc-button>Search</lc-button>\n            </template>\n        </lc-input>\n        <lc-input placeholder="Enter something...">\n            <template slot="prepend">www</template>\n            <template slot="append">cn</template>\n        </lc-input>',code7:'<lc-input placeholder="larger" size="larger"></lc-input>\n        <lc-input placeholder="default"></lc-input>\n        <lc-input placeholder="small" size="small"></lc-input>'}},methods:{handleClick:function(){alert("按钮被点击")}}},i=(l(409),l(0)),n=Object(i.a)(a,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h3",{attrs:{id:"input-输入框"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#input-输入框","aria-hidden":"true"}},[t._v("#")]),t._v(" Input 输入框")]),t._v(" "),l("h3",{attrs:{id:"概述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),l("p",[t._v("基本表单组件")]),t._v(" "),l("h3",{attrs:{id:"代码示例"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#代码示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),l("ClientOnly",[[l("div",[l("h4",[t._v("基础用法")]),t._v(" "),l("example",[l("lc-input",{attrs:{placeholder:"Enter something..."},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),t._v(" "),l("span",{staticClass:"demo-desc"},[t._v("You entered: "),l("i",[t._v(t._s(t.value1))])]),t._v(" "),l("template",{slot:"code"},[t._v(t._s(t._f("format")(t.code1)))])],2),t._v(" "),l("h4",[t._v("可清空")]),t._v(" "),l("example",[l("lc-input",{attrs:{placeholder:"Enter something...",clearable:""}}),t._v(" "),l("template",{slot:"code"},[t._v(t._s(t._f("format")(t.code2)))])],2),t._v(" "),l("h4",[t._v("禁用状态")]),t._v(" "),l("example",[l("lc-input",{attrs:{placeholder:"Enter something...",disabled:""}}),t._v(" "),l("template",{slot:"code"},[t._v(t._s(t._f("format")(t.code3)))])],2),t._v(" "),l("h4",[t._v("文本域")]),t._v(" "),l("example",[l("lc-input",{attrs:{placeholder:"Enter something...",type:"textarea",rows:3}}),t._v(" "),l("template",{slot:"code"},[t._v(t._s(t._f("format")(t.code4)))])],2),t._v(" "),l("h4",[t._v("前 / 后缀内嵌 icon")]),t._v(" "),l("example",[l("lc-input",{attrs:{placeholder:"Enter something...",prefix:"search"}}),t._v(" "),l("lc-input",{attrs:{placeholder:"Enter something...",suffix:"correct"}}),t._v(" "),l("lc-input",{attrs:{placeholder:"Enter something...",prefix:"user",suffix:"add"}}),t._v(" "),l("template",{slot:"code"},[t._v(t._s(t._f("format")(t.code5)))])],2),t._v(" "),l("h4",[t._v("复合型输入框")]),t._v(" "),l("example",[l("lc-input",{attrs:{placeholder:"Enter something..."}},[l("template",{slot:"append"},[l("lc-button",[t._v("Search")])],1)],2),t._v(" "),l("lc-input",{attrs:{placeholder:"Enter something..."}},[l("template",{slot:"prepend"},[t._v("www")]),t._v(" "),l("template",{slot:"append"},[t._v("cn")])],2),t._v(" "),l("template",{slot:"code"},[t._v(t._s(t._f("format")(t.code6)))])],2),t._v(" "),l("h4",[t._v("不同尺寸")]),t._v(" "),l("example",[l("lc-input",{attrs:{placeholder:"larger",size:"larger"}}),t._v(" "),l("lc-input",{attrs:{placeholder:"default"}}),t._v(" "),l("lc-input",{attrs:{placeholder:"small",size:"small"}}),t._v(" "),l("template",{slot:"code"},[t._v(t._s(t._f("format")(t.code7)))])],2)],1)]],2),t._v(" "),l("h3",{attrs:{id:"api"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),l("h4",{attrs:{id:"input-attribute"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#input-attribute","aria-hidden":"true"}},[t._v("#")]),t._v(" Input Attribute")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("text / textarea / password")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("text")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("绑定值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String/Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框占位文本")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("clearable")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否可清空")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框尺寸，只在 "),l("code",[t._v('type!="textarea"')]),t._v(" 时有效")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("larger/default/small")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("default")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("prefix")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框头部图标")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("suffix")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框尾部图标")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("rows")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框行数，只对 "),l("code",[t._v('type="textarea"')]),t._v(" 有效")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2")])])])]),t._v(" "),l("h4",{attrs:{id:"input-slots"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#input-slots","aria-hidden":"true"}},[t._v("#")]),t._v(" Input Slots")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("名称")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("prepend")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框前置内容，仅在 "),l("code",[t._v('type="text"')]),t._v(" 类型下有效")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("append")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框后置内容，仅在 "),l("code",[t._v('type="text"')]),t._v(" 类型下有效")])])])])],1)},[],!1,null,"ede5a2de",null);e.default=n.exports}}]);