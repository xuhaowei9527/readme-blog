(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{283:function(n,e,t){},407:function(n,e,t){"use strict";var s=t(283);t.n(s).a},435:function(n,e,t){"use strict";t.r(e);t(393),t(29),t(40),t(395);var s=t(397),a=t.n(s),r=t(404),c=t.n(r),i=(t(405),t(406)),o=Array(7).fill(1).map((function(n,e){return 50*(e+1)+25})),l=Array(7).fill(1).map((function(n,e){return 50*e+25})),u={components:{VueDraggableResizable:c.a,vueClock:i.vueClock},computed:{xPos:function(){return a()(o)},yPos:function(){return a()(l)},pieces:function(){var n=this;return this.xPos.map((function(e,t){return{x:e,y:n.yPos[t],className:t%2==0?"black":"white"}}))},words:function(){return a()("临破咒师悲爱心魄兵斗者皆阵列魂鬼财神权贪嗔痴佛悟空色恨愤怒怨责".split(""))}}},f=(t(407),t(9)),p=Object(f.a)(u,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"home"},[n._l(n.pieces,(function(e,s){return t("vue-draggable-resizable",{key:e.className+s,attrs:{snap:!0,w:50,h:50,x:e.x,y:e.y,"class-name":e.className,grid:[50,50],resizable:!1,isConflictCheck:!0}},[n._v("\n    "+n._s(n.words[s])+"\n  ")])})),n._v(" "),t("div",{staticClass:"clock"},[t("ClientOnly",[t("vueClock")],1)],1),n._v(" "),t("h2",{staticClass:"motto"},[n._v("种一棵树最好的时间是十年前，其次是现在")])],2)}),[],!1,null,"07713205",null);e.default=p.exports}}]);