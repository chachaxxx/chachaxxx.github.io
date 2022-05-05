(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{760:function(v,_,e){"use strict";e.r(_);var o=e(1),t=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"是什么"}},[v._v("是什么")]),v._v(" "),e("p",[e("code",[v._v("BFC")]),v._v(" 全称："),e("code",[v._v("Block Formatting Context")]),v._v('， 名为 "块级格式化上下文"。')]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("W3C")]),v._v("官方解释为："),e("code",[v._v("BFC")]),v._v("它决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用，当涉及到可视化布局时，"),e("code",[v._v("Block Formatting Context")]),v._v("提供了一个环境，"),e("code",[v._v("HTML")]),v._v("在这个环境中按照一定的规则进行布局。")])]),v._v(" "),e("p",[v._v("简单来说就是，"),e("code",[v._v("BFC")]),v._v("是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。那么怎么使用"),e("code",[v._v("BFC")]),v._v("呢，"),e("code",[v._v("BFC")]),v._v("可以看做是一个"),e("code",[v._v("CSS")]),v._v("元素属性")]),v._v(" "),e("h1",{attrs:{id:"为什么"}},[v._v("为什么")]),v._v(" "),e("p",[v._v("问题场景：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("float脱离文档流，容器高度塌陷问题，其他元素环绕问题。")])]),v._v(" "),e("li",[e("p",[v._v("margin边距重叠，只算两方最大margin，margin塌陷问题。")])])]),v._v(" "),e("h1",{attrs:{id:"怎么做"}},[v._v("怎么做")]),v._v(" "),e("h4",{attrs:{id:"bfc的创建方法"}},[v._v("BFC的创建方法")]),v._v(" "),e("ul",[e("li",[v._v("根元素或其它包含它的元素")]),v._v(" "),e("li",[v._v("浮动 "),e("code",[v._v("float: left/right/inherit")])]),v._v(" "),e("li",[v._v("绝对定位元素 "),e("code",[v._v("position: absolute/fixed")])]),v._v(" "),e("li",[v._v("行内块"),e("code",[v._v("display: inline-block")])]),v._v(" "),e("li",[v._v("表格单元格 "),e("code",[v._v("display: table-cell")])]),v._v(" "),e("li",[v._v("表格标题 "),e("code",[v._v("display: table-caption")])]),v._v(" "),e("li",[v._v("溢出元素 "),e("code",[v._v("overflow: hidden/scroll/auto/inherit")])]),v._v(" "),e("li",[v._v("弹性盒子 "),e("code",[v._v("display: flex/inline-flex")])])]),v._v(" "),e("p",[v._v("但其中，最常见的就是"),e("code",[v._v("overflow:hidden")]),v._v("、"),e("code",[v._v("float:left/right")]),v._v("、"),e("code",[v._v("position:absolute")]),v._v("。也就是说，每次看到这些属性的时候，就代表了该元素以及创建了一个BFC了。")])])}),[],!1,null,null,null);_.default=t.exports}}]);