<template>
    <div class="home">
        首页
    </div>
</template>

<script>
// 引用 home 请求
import {getuserlist} from '@/api/index.js'
export default {
  data () {
    return {

    }
  },
  mounted () {
    getuserlist({pagenum: 1, pagesize: 10})
      .then((result) => {
        // console.log(result)

      })
  }
}
</script>

<style>

</style>
