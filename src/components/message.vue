<template>
  <div class="main">
    message
    <mu-text-field v-model="sendForm.fromName" disable></mu-text-field>
    <mu-text-field v-model="sendForm.toName"></mu-text-field>
    <mu-text-field v-model="sendForm.content" multi-line :rows="3" :rows-max="6"></mu-text-field><br/>
    <button @click="sendMsg()" style="width:50px;height:20px;">click</button>
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      ws: null,
      msg: 'Welcome to Your Vue.js App',
      sendForm:{
        fromName:'小花',
        toName:'',
        content:''
      }
    }
  },
  created(){
    this.startWebSocket();
  },
  methods:{
    startWebSocket() {
      var ws = null;
      if ('WebSocket' in window)
          ws = new WebSocket("ws://localhost:8080/testSocket/mywebsocket.do?user=小花");
      else if ('MozWebSocket' in window)
          ws = new MozWebSocket("ws://localhost:8080/testSocket/mywebsocket.do?user=小花");
      else
          alert("not support");

      ws.onmessage = function(evt) {
          //alert(evt.data);
          console.log("返回的数据："+evt.data);
      };
      
      ws.onclose = function(evt) {
          //alert("close");
          console.log('离线');
      };
      
      ws.onopen = function(evt) {
          //alert("open");
          console.log('在线+小花');
          // document.getElementById('denglu').innerHTML="在线";
          // document.getElementById('userName').innerHTML='小化';
      };
      this.ws = ws;
    },
    sendMsg(){
      if(this.sendForm.fromName==''&&this.sendForm.toName==''&&this.sendForm.content==''){
        console.log('empty');
        return false;
      }
      this.ws.send(this.sendForm.fromName+","+this.sendForm.toName+","+this.sendForm.content);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color:red;
div{
  color:$color;
}
</style>
