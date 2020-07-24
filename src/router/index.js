import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import boss from "@/pages/boss.vue"
import one from "@/pages/one.vue"
import two from "@/pages/two.vue"
import three from "@/pages/three.vue"
import four from "@/pages/four.vue"

import big from "@/pages/big.vue"
import yi from "@/pages/yi.vue"
import er from "@/pages/er.vue"
import san from "@/pages/san.vue"
import si from "@/pages/si.vue"
import wu from "@/pages/wu.vue"


export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      redirect: "/big/yi"
    },
    {
      path: "/boss",
      component: boss,
      children: [{
          path: "one",
          component: one
        },
        {
          path: "two",
          component: two
        },
        {
          path: "three",
          component: three
        },
        {
          path: "four",
          component: four
        },
      ]
    },
    {
      path: "/big",
      component: big,
      children: [{
          path: "yi",
          component: yi
        },
        {
          path: "er",
          component: er
        },
        {
          path: "san",
          component: san
        },
        {
          path: "si",
          component: si
        },
        {
          path: "wu",
          component: wu
        },
      ]
    }
  ]
})
