import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  level: '第一周', // 活动周数
  itemNum: 1, // 第几题
  itemDetail: [{
    'topic_id': 20,
    'active_topic_id': 4,
    'type': 'ONE',
    'topic_name': '题目一:442里LOL最菜的是谁？',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'topic_answer': [{
      'topic_answer_id': 1,
      'topic_id': 20,
      'answer_name': '李嘉琪',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 2,
      'topic_id': 20,
      'answer_name': '菜福宗',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 3,
      'topic_id': 20,
      'answer_name': '张启航',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 4,
      'topic_id': 20,
      'answer_name': '朱少烽',
      'is_standard_answer': 1
    }]
  }, {
    'topic_id': 21,
    'active_topic_id': 4,
    'type': 'MORE',
    'topic_name': '题目二:442里荒野行动最菜的是谁？',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'topic_answer': [{
      'topic_answer_id': 5,
      'topic_id': 21,
      'answer_name': '李嘉琪',
      'is_standard_answer': 1
    }, {
      'topic_answer_id': 6,
      'topic_id': 21,
      'answer_name': '张启航',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 7,
      'topic_id': 21,
      'answer_name': '菜福宗',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 8,
      'topic_id': 21,
      'answer_name': '朱少烽',
      'is_standard_answer': 0
    }]
  }, {
    'topic_id': 21,
    'active_topic_id': 4,
    'type': 'MORE',
    'topic_name': '题目三:下面哪个选项与其他选项不同',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'topic_answer': [{
      'topic_answer_id': 9,
      'topic_id': 21,
      'answer_name': '菜宗宗',
      'is_standard_answer': 1
    }, {
      'topic_answer_id': 10,
      'topic_id': 21,
      'answer_name': '菜福宗',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 11,
      'topic_id': 21,
      'answer_name': '宗哥',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 12,
      'topic_id': 21,
      'answer_name': '菜冲冲',
      'is_standard_answer': 0
    }]
  }, {
    'topic_id': 21,
    'active_topic_id': 4,
    'type': 'MORE',
    'topic_name': '题目四:442里唯一的一个黑人是谁？',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'topic_answer': [{
      'topic_answer_id': 13,
      'topic_id': 21,
      'answer_name': '张启航',
      'is_standard_answer': 1
    }, {
      'topic_answer_id': 14,
      'topic_id': 21,
      'answer_name': '朱少烽',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 15,
      'topic_id': 21,
      'answer_name': '李嘉琪',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 16,
      'topic_id': 21,
      'answer_name': '菜福宗',
      'is_standard_answer': 0
    }]
  }, {
    'topic_id': 21,
    'active_topic_id': 4,
    'type': 'MORE',
    'topic_name': '题目五:442里最矮的人是谁？',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'topic_answer': [{
      'topic_answer_id': 17,
      'topic_id': 21,
      'answer_name': '张启航',
      'is_standard_answer': 1
    }, {
      'topic_answer_id': 18,
      'topic_id': 21,
      'answer_name': '朱成溪',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 19,
      'topic_id': 21,
      'answer_name': '菜福宗',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 20,
      'topic_id': 21,
      'answer_name': '李嘉琪',
      'is_standard_answer': 0
    }]
  }],
  answerid: [] // 答案id
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
