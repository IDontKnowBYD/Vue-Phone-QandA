webpackJsonp([4],{NHnr:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("7+uW"),n={render:function(){var i=this.$createElement,e=this._self._c||i;return e("div",[e("router-view")],1)},staticRenderFns:[]},_=t("VU/8")({},n,!1,function(i){t("xw6I")},null,null).exports,s=t("/ocq");a.a.use(s.a);var c=new s.a({routes:[{path:"/",name:"home",component:function(){return t.e(1).then(t.bind(null,"lyB/"))}},{path:"/item",name:"item",component:function(){return t.e(0).then(t.bind(null,"iQm9"))}},{path:"/score",name:"score",component:function(){return t.e(2).then(t.bind(null,"RuB8"))}}]}),r=t("NYxO"),d={ADD_ITEMNUM:function(i,e){i.itemNum+=e},REMBER_ANSWER:function(i,e){i.answerid.push(e)},REMBER_TIME:function(i){i.timer=setInterval(function(){i.allTime++},1e3)},INITIALIZE_DATA:function(i){i.itemNum=1,i.allTime=0,i.answerid=[]}};a.a.use(r.a);var o=new r.a.Store({state:{level:"第一周",itemNum:1,allTime:0,timer:"",itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目五",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}],answerid:[]},actions:{addNum:function(i,e){var t=i.commit,a=i.state;t("REMBER_ANSWER",e),a.itemNum<a.itemDetail.length&&t("ADD_ITEMNUM",1)},initializeData:function(i){(0,i.commit)("INITIALIZE_DATA")}},mutations:d});t("lA6w"),t("UAgs");a.a.config.productionTip=!1,new a.a({el:"#app",router:c,store:o,template:"<App/>",components:{App:_}})},UAgs:function(i,e){!function(i,e){var t=i.documentElement,a="orientationchange"in window?"orientationchange":"resize",n=function(){var i=t.clientWidth;i&&(t.style.fontSize=i/320*20+"px")};i.addEventListener&&(e.addEventListener(a,n,!1),i.addEventListener("DOMContentLoaded",n,!1))}(document,window)},lA6w:function(i,e){},xw6I:function(i,e){}},["NHnr"]);
//# sourceMappingURL=app.a9c4d605b209ac24e5f1.js.map