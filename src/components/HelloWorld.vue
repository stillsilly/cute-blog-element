<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getList">getList</button>
    <button @click="getFormattedList">getFormattedList</button>

  </div>
</template>

<script>
import {getList,getFormattedList} from './../model/data'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    async getList(){
      let list = await getList()
      console.log(list)
    },
    async getFormattedList(){
      let formattedList = await getFormattedList()
      console.log('line 27,formattedList:',formattedList)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
