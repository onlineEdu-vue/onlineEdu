<template>
  <div>
    <Slider></Slider>
    <div class="cursorWrap">
      <div class="cursorcontent">
        <div class="msg">
          <p class="comp">{{information[0].message}}</p>
          <ul class="comli">
            <li>{{information[0].message1}}</li>
            <li>{{information[0].message2}}</li>
            <li>{{information[0].message3}}</li>
            <li>{{information[0].message4}}</li>
            <li>{{information[0].message5}}</li>
            <li>{{information[0].message6}}</li>
            <li>{{information[0].message7}}</li>
            <li>{{information[0].message8}}</li>
            <li>{{information[0].message9}}</li>
            <li>{{information[0].message10}}</li>
          </ul>
        </div>
        <div class='project'>
          <p class="comp">{{information[0].product}}</p>
          <ul class="comli">
            <li>{{information[0].product1}}</li>
            <li>{{information[0].product2}}</li>
            <li>{{information[0].product3}}</li>
            <li>{{information[0].product4}}</li>
            <li>{{information[0].product5}}</li>
            <li>{{information[0].product6}}</li>
            <li>{{information[0].product7}}</li>
            <li>{{information[0].product8}}</li>
            <li>{{information[0].product9}}</li>
          </ul>
        </div>
        <div class='financing'>
          <p class="comp">{{information[0].finance}}</p>
          <ul class="comli">
            <li>{{information[0].finance1}}</li>
            <li>{{information[0].finance2}}</a></li>
            <li>{{information[0].finance3}}</li>
            <li>{{information[0].finance4}}</li>
            <li>{{information[0].finance5}}</li>
            <li>{{information[0].finance6}}</li>
            <li>{{information[0].finance7}}</li>
            <li>{{information[0].finance8}}</li>
            <li>{{information[0].finance9}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/css/message.css'
  import Slider from './Slider'
  export default{
    data(){
      return{
        information:[]
      }
    },
    components:{
      Slider,
    },
    mounted(){
      this.fetchData();
    },
    methods:{
      fetchData(){
        this.$http.get('/message').then(res=>{
        this.information=res.data;
        console.log(this.information);
        console.log(this.information[0]);
        console.log(this.information[0].message);
        }).catch(err=>{
          console.log(err);
        })
      }
    }
  }
</script>