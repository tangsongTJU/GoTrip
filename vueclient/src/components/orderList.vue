<template>
  <div class="adminList main">
    <div class="input_box">
      <input v-model="Admin.pname" class="myinput" type="text" placeholder="旅客名" />
      <input v-model="Admin.rname" class="myinput" type="text" placeholder="线路名" />
      <!--<input v-model="Admin.time" class="myinput" type="text" placeholder="时间" />-->
      <!--<input v-if="!editAdminObj" v-model="Admin.password" class="myinput" type="text" placeholder="时间" />-->
      <input  v-model="Admin.time" class="myinput" type="text" placeholder="时间" />
      <button v-if="!editAdminObj" class="btn" @click="addAdmin()"><i class="fa fa-plus" aria-hidden="true"></i>添加</button>
      <button v-if="editAdminObj" class="btn" @click="saveEditAdmin()"><i class="fa fa-save" aria-hidden="true"></i>保存</button>
      <button style="opacity: 0.8;" v-if="editAdminObj" class="btn" @click="cancelEditAdmin()"><i class="fa fa fa-times-circle-o" aria-hidden="true"></i>取消</button>
      <button class="btn" @click="findOrder(1)"><i class="fa fa-search" aria-hidden="false"></i>查询</button>
    </div>
    <grid
      :listData="listData"
      :theadData="theadData"
      :ifEdit="true"
      :ifDelete="true"
      :ifpage="true"
      :pageInfo="pageInfo"
      @on-delete="deleteAdmin"
      @on-edit="editAdmin"
      @on-gopage="gopage"
    ></grid>
  </div>
</template>

<script>
  var theadData = [
    {
      title:"用户名",
      keyname:"pname"
    },{
      title:"线路名",
      keyname:"rname"
    },{
      title:"时间",
      keyname:"time"

    }
  ];
  import grid from './grid.vue'
  export default {
    name: 'orderList',
    data () {
      return {
        listData:[],
        theadData:theadData,
        Admin:{ //用户信息
          pname:"",
          rname:"",
          time:"",
        },
        editAdminObj:null,  //用于存放正在编辑的用户
        pageInfo:{}
      }
    },
    mounted:function(){
      this.getAdminList(1);
    },
    methods:{
      getAdminList(page){
        var _this = this;

        this.$reqs.post('/users/OrderList',{
          page:page
        }).then(function(result){
          //成功
          _this.listData = result.data.data;
          _this.pageInfo.allpage = Math.ceil( result.data.total/5 );
        }).catch(function (error) {
          //失败
          console.log(error)
        });
      },
      // findAdmin(page){
      //   var _this = this;
      //
      //   this.$reqs.post('/users/findOrder',{
      //     page:page
      //   }).then(function(result){
      //     //成功
      //     _this.listData = result.data.data;
      //     _this.pageInfo.allpage = Math.ceil( result.data.total/5 );
      //   }).catch(function (error) {
      //     //失败
      //     console.log(error)
      //   });
      // },
      findOrder(page){
        var _this = this;

        this.$reqs.post('/users/findOrder',{
          page:page,
          pname:this.Admin.pname,
          rname:this.Admin.rname,
          time:this.Admin.time
        }).then(function(result){
          //成功
          _this.listData = result.data.data;
          _this.pageInfo.allpage = Math.ceil( result.data.total/5 );
        }).catch(function (error) {
          //失败
          console.log(error)
        });
      },
      addAdmin(){ //添加订单
        if(!this.Admin.pname || !this.Admin.rname || !this.Admin.time){
          alert("不能为空");
          return false;
        }
        this.$reqs.post('/users/addOrder',this.Admin)
          .then((result)=>{
            //成功
            this.getAdminList();
            this.emptyAdmin();
          }).catch(function (error) {
          //失败
          console.log(error)
        });

      },
      editAdmin(item){ //编辑用户
        this.editAdminObj = item;
        this.Admin = JSON.parse(JSON.stringify(item));
      },
      saveEditAdmin(){
        if(!this.Admin.pname || !this.Admin.rname){
          alert("不能为空");
          return false;
        }
        this.$reqs.post('/users/updateOrder', this.Admin)
          .then((result)=>{
            //成功
            this.gopage(this.pageInfo.current);

            this.editAdminObj = null;
            this.emptyAdmin();
          }).catch(function (error) {
          //失败
          console.log(error)
        });



      },
      cancelEditAdmin(){
        this.editAdminObj = null;
        this.emptyAdmin();
      },
      emptyAdmin(){ //清空输入框（多次使用，所以封装到这里）
        this.Admin.pname = "";
        this.Admin.rname = "";
        this.Admin.time = "";
      },
      deleteAdmin(item){
        this.$reqs.post('/users/deleteOrder',item)
          .then((result)=>{
            //成功
            this.gopage(this.pageInfo.current);
            this.emptyAdmin();
          }).catch(function (error) {
          //失败
          console.log(error)
        });
      },
      gopage(index){
        this.pageInfo.current = index;
        //查询数据
        this.getAdminList(index)

      }
    },
    components:{grid}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    border-radius: 4px;
    background: #fff;
    margin-top: 10px;
  }


  .input_box{
    padding: 0 10px;
  }
  .input_box .myinput{
    width: 25%;
  }
</style>
