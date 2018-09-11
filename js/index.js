$(function(){
	var index=0;
	$('div.wrap header div.inner ul.rau li').click(function(){
		index=$(this).index();
		console.log(this)
		$('div.wrap header div.inner').eq(index).css('display','block').siblings().css('display','none')
	})
	var timer=setInterval(run,4500) 		
	function run(){
		index++;
		if(index>4){
			index=0;
		}
		$('div.wrap header div.inner').eq(index).css('display','block').siblings().css('display','none')
	}
	$('div.wrap main ul li').click(function(){
		var ls=$(this).index();	
		$(this).css('opacity','1').siblings().css('opacity','0.5')
		$('div.wrap main div.set section').eq(ls).css('display','block').siblings().css('display','none')
	})
	var na=true;
	$('div.wrap nav div.heng').click(function(){	
		if (na==true) {
			$('div.wrap nav ul.one').css('display','block');
			na=false;
		}
		else if(na==false){
			$('div.wrap nav ul.one').css('display','none');
			na=true;
		}
	})
	// alert($(window).width())
})