<template>
  <div class='cursor'>
    <Slider></Slider>
    <div class="cursorWrap">
      <div class="cursorcontent" v-for='(item,index) in cursor' :key='index'>
        <div class="study">
          <div class="studyL lf">
            <img :src="item.src" :alt="item.alt"/>
            <p>{{item.diff}}</p>
            <p>大约有 <b>{{item.number}}</b> 人学习了这门课程</p>
          </div>
          <div class='studyR lf'>
            <p>{{item.title}} <span class="rg">{{item.diff1}}</span></p>
            <p>
              {{item.description}}
            </p>
            <router-link tag='li' class="button" :to="item.href">开始学习</router-link>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/css/cursor.css'
  import Slider from './Slider.vue'
  export default{
    components:{
      Slider
    },
    data(){
      return {
        cursor:[]
      }
    },
    mounted(){
      this.fetchData();
    },
    methods:{
      fetchData(){
        this.$http.get('/course').then(res=>{
        this.cursor=res.data;
        }).catch(err=>{
          console.log(err);
        })
      }
    }
  }
</script>