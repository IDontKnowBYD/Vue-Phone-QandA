webpackJsonp([2],{"3TMq":function(e,s){},RuB8:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=r("NYxO"),i={name:"score",data:function(){return{showHide:!1,score:0,scoreTips:"",rightAnswer:[2,7,12,13,18],scoreTipsArr:["你说，是不是把知识都还给小学老师了？","还不错，但还需要继续加油哦！","不要嘚瑟还有进步的空间！","智商离爆表只差一步了！","你也太聪明啦，葡萄之家欢迎你！"]}},computed:Object(t.c)(["answerid"]),created:function(){this.computedScore(),this.getScoreTip(),document.body.style.backgroundImage="url(./static/img/4-1.jpg)"},methods:{computedScore:function(){var e=this;this.answerid.forEach(function(s,r){s===e.rightAnswer[r]&&(e.score+=20)})},showCover:function(){this.showHide=!this.showHide},getScoreTip:function(){this.score<=20?this.scoreTips=this.scoreTipsArr[0]:this.score<=40?this.scoreTips=this.scoreTipsArr[1]:this.score<=60?this.scoreTips=this.scoreTipsArr[2]:this.score<=80?this.scoreTips=this.scoreTipsArr[3]:this.score<=100&&(this.scoreTips=this.scoreTipsArr[4])}}},o={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"your_scores_container"},[t("header",{staticClass:"your_scores"},[t("span",{staticClass:"score_num"},[e._v(e._s(e.score))]),t("span",{staticClass:"fenshu"},[e._v("分！")])]),e._v(" "),t("div",{staticClass:"result_tip"},[e._v(e._s(e.scoreTips))])]),e._v(" "),t("div",{staticClass:"share_button",on:{click:e.showCover}}),e._v(" "),e._m(0),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showHide,expression:"showHide"}],staticClass:"share_cover",on:{click:e.showCover}},[t("img",{staticClass:"share_img",attrs:{src:r("o4Nx")}})])])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"share_code"},[s("header",{staticClass:"share_header"},[this._v("关注葡萄之家，获取答案。")]),this._v(" "),s("img",{staticClass:"code_img",attrs:{src:r("dvkV"),height:"212",width:"212"}})])}]},c=r("VU/8")(i,o,!1,function(e){r("3TMq")},null,null);s.default=c.exports},dvkV:function(e,s,r){e.exports=r.p+"static/img/4-4.png"},o4Nx:function(e,s){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=2.40dd01b571106dbc08b3.js.map