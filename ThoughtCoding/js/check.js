$(function(){
	$("#num").keyup(function(){
			if(event.keyCode==13){
			if(!/\d{8}/.test($("#num").val())){
				alert("输入错误");
			}
			else{
				window.location.href = "2017-ap-check.html"+'?num='+$("#num").val();
			}
		}
	});
})