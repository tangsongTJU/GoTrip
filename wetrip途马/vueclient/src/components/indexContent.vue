<!--<template>-->
<!--<div>-->
<!--&lt;!&ndash;<iframe v-show="iframeState" id="show-iframe"  frameborder=0 name="showHere" scrolling=auto src=""></iframe>&ndash;&gt;-->
<!--<iframe src="../../static/rm100/chinamap.html" width="1200" height="300" frameborder="0" scrolling="auto"style="position:absolute;top: -300px;left: 0px;"></iframe>-->
<!--</div>>-->
<!--</template>-->
<template>
  <div class="accept-container">
    <br/>
    <banner></banner>

    <!--<div class="go-back" v-show="goBackState" @click="goBack">GoBack</div>-->
    <!--<ul>-->
    <!--<li v-for="item in webAddress">-->
    <!--<a :href="item.link" target="showHere" @click="showIframe">{{item.name}}</a>-->
    <!--</li>-->
    <!--</ul>-->

    <iframe v-show="true" id="show-iframe" frameborder=0 name="showHere"
            src="../../static/rm100/chinamap.html"></iframe>
    <dev class="text1"><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h1 style="color: #32475f">发现目的地......</h1></dev>

    <!--<iframe v-show="iframeState" id="show-iframe"  frameborder=0 name="showHere" scrolling=auto src=""></iframe>-->
    <dev><br/><br/><h1>&nbsp;</h1><br/><br/><br/><br/><br/><br/></dev>

  </div>
</template>

<script>
  import banner from "./banner";

  export default {
    name: 'hello',
    components: {banner},
    data() {
      return {
        iframeState: false,
        goBackState: false,
        webAddress: [
          // {
          //   name:'segmentFault',
          //   link:'https://segmentfault.com/a/1190000004502619'
          // },
          // {
          //   name:'博客',
          //   link:'http://vuex.vuejs.org/'
          // },
          // {
          //   name:'特效',
          //   link:'http://www.yyyweb.com/377.html'
          // },
          {
            name: '地图',
            link: '../../static/rm100/chinamap.html'
          },
          // {
          //   name:'本文教程',
          //   link:'https://www.cnblogs.com/rlann/p/7457601.html'
          // }
        ]
      }
    },
    mounted() {

      const oIframe = document.getElementById('show-iframe');
      const deviceWidth = document.documentElement.clientWidth;
      const deviceHeight = document.documentElement.clientHeight;
      // oIframe.style.width = deviceWidth + 'px';
      // oIframe.style.height = deviceHeight + 'px';
      oIframe.style.height = 400 + 'px';
    },
    methods: {
      goBack() {
        this.goBackState = false;
        this.iframeState = false;
      },
      showIframe() {
        this.goBackState = true;
        this.iframeState = true;
      }
    }
  }

</script>
<style scoped>
  /*#show-iframe{*/
  /*text-align: center;*/
  /*left:50%;*/
  /*top:50%;*/
  /*}*/
  iframe {
    /*height: 60px;*/
    box-shadow: 0 1px 5px rgba(13, 62, 73, 0.2);
    background: #fff;
    margin-left: 0px;
    margin-top: 10px;
    min-width: 700px;
    float: left;
    border-radius: 1%;
  }

  .text1 {
    height: 400px;
    box-shadow: 0 1px 5px rgba(13, 62, 73, 0.2);
    background: #fff;
    margin-left: 10px;
    margin-top: 10px;
    min-width: 30%;
    float: left;
    text-align: center;
    border-radius: 1%;
    /*vertical-align: middle;*/
    /*justify-content:center;*/
  }


</style>
