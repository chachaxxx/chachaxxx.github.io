(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{774:function(t,e,a){"use strict";a.r(e);var v=a(1),n=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"为什么data是一个函数"}},[t._v("为什么Data是一个函数")]),t._v(" "),a("p",[t._v("1.一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。")]),t._v(" "),a("p",[t._v("2.如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。类似于给每个组件实例创建一个私有的数据空间。")]),t._v(" "),a("h1",{attrs:{id:"v-if-和-v-show-的区别"}},[t._v("v-if 和 v-show 的区别")]),t._v(" "),a("p",[t._v("v-if 在编译过程中会被转化成三元表达式,条件不满足时不渲染此节点。")]),t._v(" "),a("p",[t._v("v-show 会被编译成指令，条件不满足时控制样式将对应节点隐藏 （display:none）")]),t._v(" "),a("blockquote",[a("p",[t._v("扩展补充：display:none、visibility:hidden 和 opacity:0 之间的区别？\n"),a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/618888ae9baa4c3096479b1f61bb37f3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"display.png"}})])]),t._v(" "),a("h1",{attrs:{id:"计算computed和监听watch"}},[t._v("计算computed和监听watch")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("computed 计算属性是用来声明式的描述一个值依赖了其它的值，当所依赖的值或者变量 改变时，计算属性也会跟着改变；")]),t._v(" "),a("ul",[a("li",[t._v("多个属性的变化监听  属性  必须return 有缓存")])])]),t._v(" "),a("li",[a("p",[t._v("watch 监听的是已经在 data 中定义的变量，当该变量变化时，会触发 watch 中的方法；")])]),t._v(" "),a("li",[a("p",[t._v("对象  无缓存  一个数据项的监听   适用于异步和复杂处理场景")])]),t._v(" "),a("li",[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        deep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        immediate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("key2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li")]),t._v(" "),a("h1",{attrs:{id:"为什么v-for和v-if不建议用在一起"}},[t._v("为什么v-for和v-if不建议用在一起")]),t._v(" "),a("p",[t._v("1.当 v-for 和 v-if 处于同一个节点时，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。如果要遍历的数组很大，而真正要展示的数据很少时，这将造成很大的性能浪费\n2.这种场景建议使用 computed，先对数据进行过滤")]),t._v(" "),a("p",[t._v("注意：3.x 版本中 "),a("code",[t._v("v-if")]),t._v(" 总是优先于 "),a("code",[t._v("v-for")]),t._v(" 生效。由于语法上存在歧义，建议避免在同一元素上同时使用两者。比起在模板层面管理相关逻辑，更好的办法是通过创建计算属性筛选出列表，并以此创建可见元素。")]),t._v(" "),a("h1",{attrs:{id:"为什么要用key"}},[t._v("为什么要用key")]),t._v(" "),a("p",[t._v("key的作用是为了在"),a("strong",[t._v("diff算法")]),t._v("执行时更快的找到对应的节点，"),a("code",[t._v("提高diff速度，更高效的更新虚拟DOM")]),t._v(";")]),t._v(" "),a("p",[t._v("如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。key 是为 Vue 中 vnode 的唯一标记，通过这个 key，我们的 diff 操作可以更准确、更快速")]),t._v(" "),a("p",[a("strong",[t._v("更准确")]),t._v("：因为带 key 就不是就地复用了，在 sameNode 函数 a.key === b.key 对比中可以避免就地复用的情况。所以会更加准确。")]),t._v(" "),a("p",[a("strong",[t._v("更快速")]),t._v("：利用 key 的唯一性生成 map 对象来获取对应节点，比遍历方式更快")]),t._v(" "),a("h1",{attrs:{id:"怎样理解-vue-的单向数据流"}},[t._v("怎样理解 Vue 的单向数据流")]),t._v(" "),a("p",[t._v("数据总是从父组件传到子组件，子组件没有权利修改父组件传过来的数据，只能请求父组件对原始数据进行修改。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。")]),t._v(" "),a("h1",{attrs:{id:"虚拟-dom-是什么-有什么优缺点"}},[t._v("虚拟 DOM 是什么 有什么优缺点")]),t._v(" "),a("p",[t._v("由于在浏览器中操作 DOM 是很昂贵的。频繁的操作 DOM，会产生一定的性能问题。这就是虚拟 Dom 的产生原因。Vue2 的 Virtual DOM 借鉴了开源库 snabbdom 的实现。Virtual DOM 本质就是用一个原生的 JS 对象去描述一个 DOM 节点，是对真实 DOM 的一层抽象。")]),t._v(" "),a("p",[a("strong",[t._v("优点：")])]),t._v(" "),a("ol",[a("li",[t._v("保证性能下限： 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；")]),t._v(" "),a("li",[t._v("无需手动操作 DOM： 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；")]),t._v(" "),a("li",[t._v("跨平台： 虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。")])]),t._v(" "),a("p",[a("strong",[t._v("缺点:")])]),t._v(" "),a("ol",[a("li",[t._v("无法进行极致优化： 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。")]),t._v(" "),a("li",[t._v("首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 innerHTML 插入慢。")])]),t._v(" "),a("h1",{attrs:{id:"nexttick"}},[t._v("nextTick")]),t._v(" "),a("p",[a("code",[t._v("nextTick")]),t._v("是"),a("code",[t._v("Vue")]),t._v("提供的一个全局"),a("code",[t._v("API")]),t._v(",是在下次"),a("code",[t._v("DOM")]),t._v("更新循环结束之后执行延迟回调，在修改数据之后使用"),a("code",[t._v("$nextTick")]),t._v("，则可以在回调中获取更新后的"),a("code",[t._v("DOM")]),t._v("。")]),t._v(" "),a("h1",{attrs:{id:"keep-alive的实现"}},[t._v("keep-alive的实现")]),t._v(" "),a("p",[t._v("作用：实现组件缓存，保持这些组件的状态，以避免反复渲染导致的性能问题。 需要缓存组件 频繁切换，不需要重复渲染")]),t._v(" "),a("p",[t._v("场景：tabs标签页 后台导航，vue性能优化")]),t._v(" "),a("p",[t._v("原理："),a("code",[t._v("Vue.js")]),t._v("内部将"),a("code",[t._v("DOM")]),t._v("节点抽象成了一个个的"),a("code",[t._v("VNode")]),t._v("节点，"),a("code",[t._v("keep-alive")]),t._v("组件的缓存也是基于"),a("code",[t._v("VNode")]),t._v("节点的而不是直接存储"),a("code",[t._v("DOM")]),t._v("结构。它将满足条件"),a("code",[t._v("（pruneCache与pruneCache）")]),t._v("的组件在"),a("code",[t._v("cache")]),t._v("对象中缓存起来，在需要重新渲染的时候再将"),a("code",[t._v("vnode")]),t._v("节点从"),a("code",[t._v("cache")]),t._v("对象中取出并渲染。")]),t._v(" "),a("h1",{attrs:{id:"mixin"}},[t._v("mixin")]),t._v(" "),a("p",[t._v("mixin 项目变得复杂的时候，多个组件间有重复的逻辑就会用到mixin\n多个组件有相同的逻辑，抽离出来\nmixin并不是完美的解决方案，会有一些问题\nvue3提出的Composition API旨在解决这些问题【追求完美是要消耗一定的成本的，如开发成本】\n场景：PC端新闻列表和详情页一样的右侧栏目，可以使用mixin进行混合\n劣势：1.变量来源不明确，不利于阅读\n2.多mixin可能会造成命名冲突 3.mixin和组件可能出现多对多的关系，使得项目复杂度变高")]),t._v(" "),a("h1",{attrs:{id:"vue2-0-响应式数据的原理"}},[t._v("Vue2.0 响应式数据的原理")]),t._v(" "),a("p",[t._v("整体思路是数据劫持+观察者模式")]),t._v(" "),a("p",[t._v("对象内部通过 defineReactive 方法，使用 Object.defineProperty 将属性进行劫持（只会劫持已经存在的属性）重写getter和setter，进行数据代理。数组则是通过重写数组方法来实现。")]),t._v(" "),a("p",[t._v("当页面使用对应属性时，每个属性都拥有自己的 dep 属性，存放他所依赖的 watcher（依赖收集），当属性变化后会通知自己对应的 watcher 去更新(派发更新)。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1Zy4y1K7SH?p=34",target:"_blank",rel:"noopener noreferrer"}},[t._v("尚硅谷Vue2.0+Vue3.0全套教程丨vuejs从入门到精通_哔哩哔哩_bilibili"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);