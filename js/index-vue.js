$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		 	autoplay: 2000,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    paginationClickable: true,
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		  });
	$("#login").on('click',function(){
		$('#regester').show();
	});
	$('.course1').on('click',function(){
		$(this)
	})
	Vue.component('my-course',{
		props:['content'],
		template:'#curse-item'
	})
	var vm=new Vue({
		el:'#my-courses',
		data:{
			//模拟后台传数据过来
			course:[
				{
					course: 'HTML/CSS',
					change: '精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习'
				},
				{
					course: 'HTML/CSS',
					change: '精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习'
				},
				{
					course: 'HTML/CSS',
					change: '精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习'
				},
				{
					course: 'HTML/CSS',
					change: '精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习'
				},
				{
					course: 'HTML/CSS',
					change: '精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习'
				},
				{
					course: 'HTML/CSS',
					change: '精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习'
				},
			]
		}
	});
	Vue.component('more-course',{
		props:['content'],
		template:'#curse-item'
	});
	new Vue({
		el:'#MoreCourse',
		data:{
			//模拟后台传数据过来
			morecourse:[
				{
					course: 'JavaScript',
					change: '精选课程，和我们一起零基础入门JavaScript，共发布8个课程，等你来挑战',
					r1: 'HTML',
					r2: 'JavaScript',
					study: '已经有891名学生在这里学习'
				},
				{
					course: '综合实战',
					change: '精选课程，趣味小游戏，小型交互，共发布3个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习'
				}
			]
		}
	});
})