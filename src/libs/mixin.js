import Vue from "vue"

Vue.mixin({
  data() {
    return {

    }
  },
  methods: {
    /**
     * 页面跳转
     * @param { String } pathName 页面pathName
     * @param { Object } queryObj 页面参数
     */
    goToPage(pathName, queryObj = {}, params = {}) {
      this.$router.push({
        name: pathName,
        query: queryObj,
        params
      });
    },
    /**
     * 页面reload
     */
    reload() {
      location.href=location.href.split('#')[0]
    },
  }
})
