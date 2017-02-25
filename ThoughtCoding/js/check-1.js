$(function(){
	$.ajax({
			type:"GET",
			url:"../wp-judge.txt",
			dataType:"json",
			data:{
				"student_id":$.getUrlParam('num')
			},
			success:function(data){
				if(parseInt(data.status)){
					$("#name").html(data.student_name);
					$("#id").html(data.student_id);
					$("#major").html(data.direction);
					$("#class").html(data.student_class);
					var status=["未面试","一面待定","一面未通过","一面通过","二面待定","二面未通过","二面待定"]
					$("#status").html(status[data.status]);
				}
				else{
					console.log(data.status);
					$(".result").html("查无此人");
				}
			}
			// ,
			// error:function(){
			// 	console.log("error");
			// }
		})
 
}); 
(function ($) {
                $.getUrlParam = function (name) {
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                    var r = window.location.search.substr(1).match(reg);
                    if (r != null) return unescape(r[2]); return null;
                }
})(jQuery);