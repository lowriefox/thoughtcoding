$(function(){
	$.ajax({
			type:"POST",
			url:"/test/thought/access/returnMessage",
			dataType:"json",
			 data:{
			 	"student_id":$.getUrlParam('student_id')
			 },
			success:function(data){
				if(data.student_name!=undefined){
					if(data.access.second.type!=undefined)
					{
						alert("已评价");
					}
					if(data.access.first.type!=undefined)
					{
						$(".one").css({"display":"block"});
						$("#judge-1").html("基础能力 "+data.access.first.basescore);
						$("#judge-2").html("技术水平 "+data.access.first.technicalscore);
						$("#judge-3").html("学习能力 "+data.access.first.studyability);
						$("#judge-4").html("态度 "+data.access.first.attitude);
						$("#firstJudge").html(data.access.first.supplement);
					}
					$("#name").html(data.student_name);
					$("#id").html(data.student_id);
					$("#class").html(data.student_class);
					$("#sel").val(data.direction);
				}
				else{
					$("form").html("查无此人");
				}
			}
			,
			error:function(){
				console.log("error");
			}
		});
	$(".btn").click(function(){
			// if($("#stage").html()!="第二次面试"){
			// 	var t=1;
			// }
			// else{
			// 	t=2;
			// }	
			$.ajax({
			type:"POST",
			url:"/test/thought/access/addAccess",
			dataType:"json",
			data:{
				"type":1,
				"student_id":$("#id").html(),
				"direction":$("#sel").val(),
				"basescore":$("#sel-1").val(),
				"technicalscore":$("#sel-2").val(),
				"studyability":$("#sel-3").val(),
				"attitude":$("#sel-4").val(),
				"supplement":$(".text").val(),
				"status":1
				//$("input[name=IFPass]:checked").val()
			},
			success:function(data){
				$("form").html("评价成功");
			}
			,
			error:function(){
				console.log("erroraaa");	
			}
		})
		// return false;
	});
	
}); 
(function ($) {
                $.getUrlParam = function (name) {
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                    var r = window.location.search.substr(1).match(reg);
                    if (r != null) return unescape(r[2]); return null;
                }
})(jQuery);