<template>
  <div class="mineWrap">
    <div class="mine">
      <form action="javascript:;">
        <input type="email" name="username" v-model="username"  placeholder="请输入邮箱" required/>
        <input type="password" name="password" v-model="password" placeholder="请输入密码" required/>
        <input type="submit" @click="fn()" value="登录"/>
      </form>
    </div>
    <img src="../../static/images/logo.e8155d.png" alt=""/>
    <!---->
  </div>
</template>

<script>

  export default{
    data:function(){
      return{
        arr:"",
        username:"",
        password:""
      }
    },
    created:function() {
      var that=this;
      this.axios.get('/api/mine').then(function (res) {
        that.arr=res.data.data
        console.log(that.arr)
      })
    },
    methods:{
      fn:function(){
        for(var i =0;i<this.arr.length;i++){
          if(this.arr[i].email == this.username && this.arr[i].password == this.password){
            localStorage.setItem("sev",this.arr[i].img);
            this.$router.push("/mine2");
            window.location.reload()
            //console.log(this.arr[i])
            return true;
          }else{
            //alert("用户名或者密码错误")
            console.log("用户名或者密码错误")
          }
        }
      }
    }
  }
</script>
<style>
  .mineWrap{
    background:#F4F3F6;
    width: 100%;
    height:667px;
  }
  .mine{
    width: 90%;
    margin: 0 auto;
    padding-top: 20px;
  }
  .mine input,.mine button{
    width: 100%;
    background: white;
    outline: none;
    border: none;
    height: 50px;
    margin-bottom: 10px;
    text-indent: 1em;
    border-radius: 5px;
  }
  .mineWrap img{
    position: absolute;
    width: 50%;
    bottom: 40px;
    left:25%;
  }
  input[type="submit"]{
    background:#C5C5C5;
    font-size: 20px;
    color: white;
  }
</style>

