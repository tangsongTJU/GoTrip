<!--&lt;!&ndash; The ref attr used to find the swiper instance &ndash;&gt;-->
<!--<template>-->
  <!--&lt;!&ndash;<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash; slides &ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;<swiper-slide>I'm Slide 1</swiper-slide>&ndash;&gt;-->
    <!--&lt;!&ndash;<swiper-slide>I'm Slide 2</swiper-slide>&ndash;&gt;-->
    <!--&lt;!&ndash;<swiper-slide>I'm Slide 3</swiper-slide>&ndash;&gt;-->
    <!--&lt;!&ndash;<swiper-slide>I'm Slide 4</swiper-slide>&ndash;&gt;-->
    <!--&lt;!&ndash;<swiper-slide>I'm Slide 5</swiper-slide>&ndash;&gt;-->
    <!--&lt;!&ndash;<swiper-slide>I'm Slide 6</swiper-slide>&ndash;&gt;-->
    <!--&lt;!&ndash;<swiper-slide>I'm Slide 7</swiper-slide>&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash; Optional controls &ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="swiper-pagination"  slot="pagination"></div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="swiper-button-prev" slot="button-prev"></div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="swiper-button-next" slot="button-next"></div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="swiper-scrollbar"   slot="scrollbar"></div>&ndash;&gt;-->
  <!--&lt;!&ndash;</swiper>&ndash;&gt;-->
  <!--<swiper :options="swiperOption">-->
    <!--<swiper-slide><img src="../assets/images/zelda.jpg"></swiper-slide>-->
    <!--<swiper-slide><img src="../assets/images/zelda.jpg"></swiper-slide>-->
    <!--&lt;!&ndash;<swiper-slide><img src="static/images/jay.jpg"></swiper-slide>&ndash;&gt;-->
    <!--&lt;!&ndash;<swiper-slide><img src="static/images/jay.jpg"></swiper-slide>&ndash;&gt;-->
    <!--&lt;!&ndash;<swiper-slide><img src="static/images/jay.jpg"></swiper-slide>&ndash;&gt;-->
    <!--&lt;!&ndash;<swiper-slide><img src="static/images/jay.jpg"></swiper-slide>&ndash;&gt;-->
  <!--</swiper>-->
  <!--&lt;!&ndash;以下看需要添加&ndash;&gt;-->
  <!--<div class="swiper-scrollbar"></div> //滚动条-->
  <!--<div class="swiper-button-next"></div> //下一项-->
  <!--<div class="swiper-button-prev"></div> //上一项-->
  <!--<div class="swiper-pagination"></div> //标页码-->
<!--</template>-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
  <!--&lt;!&ndash;export default {&ndash;&gt;-->
    <!--&lt;!&ndash;name: 'carrousel',&ndash;&gt;-->
    <!--&lt;!&ndash;// data() {&ndash;&gt;-->
    <!--&lt;!&ndash;//   return {&ndash;&gt;-->
    <!--&lt;!&ndash;//     swiperOption: {&ndash;&gt;-->
    <!--&lt;!&ndash;//       // some swiper options/callbacks&ndash;&gt;-->
    <!--&lt;!&ndash;//       // 所有的参数同 swiper 官方 api 参数&ndash;&gt;-->
    <!--&lt;!&ndash;//       // ...&ndash;&gt;-->
    <!--&lt;!&ndash;//     }&ndash;&gt;-->
    <!--&lt;!&ndash;//   }&ndash;&gt;-->
    <!--&lt;!&ndash;// },&ndash;&gt;-->
    <!--&lt;!&ndash;data(){&ndash;&gt;-->
      <!--&lt;!&ndash;return{&ndash;&gt;-->
        <!--&lt;!&ndash;swiperOption: {//swiper3&ndash;&gt;-->
          <!--&lt;!&ndash;autoplay: 3000,&ndash;&gt;-->
          <!--&lt;!&ndash;speed: 1000,&ndash;&gt;-->
        <!--&lt;!&ndash;}&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;computed: {&ndash;&gt;-->
      <!--&lt;!&ndash;swiper() {&ndash;&gt;-->
        <!--&lt;!&ndash;return this.$refs.mySwiper.swiper&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;mounted() {&ndash;&gt;-->
      <!--&lt;!&ndash;// current swiper instance&ndash;&gt;-->
      <!--&lt;!&ndash;// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了&ndash;&gt;-->
      <!--&lt;!&ndash;console.log('this is current swiper instance object', this.swiper)&ndash;&gt;-->
      <!--&lt;!&ndash;this.swiper.slideTo(3, 1000, false)&ndash;&gt;-->
    <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--<script>-->
  <!--import 'swiper/dist/css/swiper.css'-->
  <!--import { swiper, swiperSlide } from 'vue-awesome-swiper'-->
  <!--export default {-->
    <!--data(){-->
      <!--return {-->
        <!--//设置属性-->
        <!--swiperOption:{-->
          <!--//显示分页-->
          <!--pagination: {-->
            <!--el: '.swiper-pagination',-->
            <!--clickable:true-->
          <!--},-->
          <!--//切换模式  横屏或者竖屏-->
          <!--// direction : 'vertical',-->
          <!--//设置自动播放速度-->
          <!--autoplay: {-->
            <!--disableOnInteraction: false,-->
            <!--delay:4000-->
          <!--},-->
          <!--//开启无限循环-->
          <!--loop:true,-->
          <!--//设置点击箭头-->
          <!--paginationClickable :true,-->
          <!--prevButton:'.swiper-button-prev',-->
          <!--nextButton:'.swiper-button-next',-->
          <!--//设置同屏显示的数量，默认为1，使用auto是随意的意思。-->
          <!--slidesPerView:1,-->
          <!--//开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。-->
          <!--mousewheel:true ,-->
          <!--//默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。-->
          <!--// freeMode:true-->
        <!--}-->
      <!--}-->
    <!--},-->
    <!--components:{-->
      <!--swiper,-->
      <!--swiperSlide-->
    <!--}-->
  <!--}-->
<!--</script>-->











<template>
  <div class="scroll">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img src="../assets/images/brandbanner.jpg" width="100%" height="100%"></swiper-slide>
      <swiper-slide><img src="../assets/images/Animal.jpg" width="100%" height="100%"></swiper-slide>
      <swiper-slide><img src="../assets/images/zelda2.jpg" width="100%" height="100%"></swiper-slide>
      <swiper-slide><img src="../assets/images/Animal.jpg" width="100%" height="100%"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination "  slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'banner',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          //循环
          loop:true,
          //设定初始化时slide的索引
          initialSlide:0,
          //自动播放
          autoplay:true,
          autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
          },
          // 设置轮播
          effect : 'flip',
          //滑动速度
          speed:800,
          //滑动方向
          direction : 'horizontal',
          //小手掌抓取滑动
          // grabCursor : true,
          //滑动之后回调函数
          on: {
            slideChangeTransitionEnd: function(){
              // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            },
          },
          //左右点击
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //分页器设置
          pagination: {
            el: '.swiper-pagination',
            clickable :true
          }
        },
        swiperSlides: [1, 2, 3, 4]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted () {
      //可以使用swiper这个对象去使用swiper官网中的那些方法
      console.log('this is current swiper instance object', this.swiper);
      // this.swiper.slideTo(0, 0, false);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
  .swiper-slide{
    /*height:300px;*/
    width:100%;
  }

</style>
