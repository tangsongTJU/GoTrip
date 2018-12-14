<template>
    <div class = "wrapper">
      <img class = "content-pic" src="../assets/images/desert.png"/>
      <div class = "text-wrapper">
        <div class = "route_title" >旅行项目名称</div>
        <div class = "route_destination" >destination</div>
        <div class = "route_date" >date</div>
        <div class = "route_cost" >Cost</div>
        <div class = "description" >description</div>
      </div>
      <button id = "purchase_btn" class = "btn" @click = "purchase()">订购项目</button>
      <button @click = "getRouteInfo()"></button>
    </div>

</template>

<script>
  export default{
    methods:{
      purchase(){
        alert("订购成功");
      },
      getRouteInfo(name){
        var _this = this;
        this.$reqs.post('/users/OrderList',{
          name:"北京"
        }).then(function(result){
          //成功
          _this.listData = result.data.data;
          _this.pageInfo.allpage = Math.ceil( result.data.total/5 );
        }).catch(function (error) {
          //失败
          console.log(error)
        });
      }
    }
  }

</script>

<style>
  .wrapper{
    margin:20px 0px 0px 0px;
    border-radius: 4px;
    padding: 20px 15px;
    background: #fff;
    height: 420px;
  }
  .content-pic {
    margin: 40px 140px 40px 40px;
    float: left;
    width: 330px;
    height: 330px;
    border-radius: 5%;
  }

  .text-wrapper {
    margin-left: 450px;
  }

  .route_title {
    margin-top:20px;
    font-size: 30px;
  }

  .route_destination {
    margin-top: 30px;
    font-size:15px;
    color: #CFCFCF;
  }

  .route_date {
    font-size:15px;
    color: #CFCFCF;
  }

  .route_cost{
    margin-top: 45px;
    font-size:20px;
  }

  .description{
    margin-top: 50px;
    font-size:22px;
  }

  #purchase_btn {
    float:right;
    margin-top: 90px;
    height:45px;
    width:150px;
    font-size:18px;
  }

</style>
