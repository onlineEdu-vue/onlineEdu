<template>
  <div>
    <Slider></Slider>
    <div class="cursorWrap">
      <div class="cursorcontent">
        <div class="study">
          <div class="studyL lf">
            <img src="'upload/' + mycursor.src" alt="mycursor.alt"/>
            <p>{{mycursor[0].diff}}</p>
            <p>大约有 <b>{{mycursor[0].number}}</b> 人学习了这门课程</p>
          </div>
          <div class='studyR lf'>
            <p>{{mycursor[0].title}} <span class="rg">{{mycursor[0].diff1}}</span></p>
            <p>{{mycursor[0].description}}</p>
            <p><span>{{mycursor[0].tag1}}</span><span>{{mycursor[0].tag2}}</span></p>
          </div>
        </div>
        <div class="aim">
          <p class="comp">{{mycursor[0].aim}}</p>
          <ul class="comli">
            <li>{{mycursor[0].aim1}}</li>
            <li>{{mycursor[0].aim2}}</li>
            <li>{{mycursor[0].aim3}}</li>
            <li>{{mycursor[0].aim4}}</li>
            <li>{{mycursor[0].aim5}}</li>
            <li>{{mycursor[0].aim6}}</li>
            <li>{{mycursor[0].aim7}}</li>
            <li>{{mycursor[0].aim8}}</li>
          </ul>
        </div>
        <div class="describe">
          <p class="comp">{{mycursor[0].task}}</p>
          <p>{{mycursor[0].task1}}</p>
        </div>
        <div class='path'>
          <p class="comp">{{mycursor[0].idel}}</p>
          <ul class="comli">
            <li>{{mycursor[0].idel1}}</li>
            <li>{{mycursor[0].idel2}}</li>
            <li>{{mycursor[0].idel3}}</li>
            <li>{{mycursor[0].idel4}}</li>
            <li>{{mycursor[0].idel5}}</li>
            <li>{{mycursor[0].idel6}}</li>
            <li>{{mycursor[0].idel7}}</li>
            <li>{{mycursor[0].idel8}}</li>
          </ul>
        </div>
        <div class='data'>
          <p class="comp">{{mycursor[0].reference}}</p>
          <ul class="comli">
            <li><a :href="mycursor[0].reference1">MDN HTML入门</a></li>
            <li><a :href="mycursor[0].reference2">MDN CSS3入门教程</a></li>
            <li><a :href="mycursor[0].reference3">w3cplus</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/css/cursorContent.css'
  import Slider from './Slider.vue'
  export default{
    data(){
      return{
        mycursor:[]
      }
    },
    components:{
      Slider
    },
    mounted(){
      this.fetchData();
    },
    methods:{
      fetchData(){
        this.$http.get('/coursecontent').then(res=>{
        this.mycursor=res.data;
        console.log(res.data);
        console.log(this.mycursor)
        console.log(this.mycursor[0]);
        console.log(this.mycursor[0].idel1);
        }).catch(err=>{
          console.log(err);
        })
      }
    }
  }
</script>