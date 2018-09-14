<template>
  <div class="main">  
    <mu-appbar style="width: 100%;" z-depth="1" color="#FFBA33">
			<span class="tittle">{{tittle}}</span>
    </mu-appbar>
    <router-view/>
		<mu-bottom-nav shift class="bottomFixed" color="#FEFEFE">
			<mu-bottom-nav-item title="消息" icon="message" class="bottom-icon" to="message"></mu-bottom-nav-item>
			<mu-bottom-nav-item title="联系人" icon="account_circle" class="bottom-icon" to="accounts"></mu-bottom-nav-item>
			<mu-bottom-nav-item title="设置" icon="settings" class="bottom-icon" to="settings"></mu-bottom-nav-item>
		</mu-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
		return{
			tittle:'消息'
		}
  }
}
</script>

<style lang="scss" scoped>
  .bottomFixed{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
		box-shadow: 0 1px 1px gray;
    z-index:1000;
  }
	.bottom-icon{
		color:#FFBA33;
	}
</style>
