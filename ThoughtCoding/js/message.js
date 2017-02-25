$(function(){
	$.ajax({//获取全部信息
		type:"GET",
		// url:"/test/thought/student/returnAllList",
		url:"../test1.txt",
		dataType:"json",
		// data:{
		// 	"direction":0,
		// 	"page":0,
		// },
		success:function(data){	
		var attr="";			
			for(attr in data){
				var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
				var tr="<tr><td>"+data[attr].student_name
				+"</td><td>"+data[attr].student_id
				+"</td><td>"+data[attr].student_class
				+"</td><td>"+data[attr].phone_number
				+"</td><td>"+data[attr].direction
				+"</td><td>"+data[attr].status
				+"</td><td>"+"<a href="+ahref+">评价</a>"
				+"</td></tr>";
				$("tbody").append(tr);
			}
			$("[type=checkbox]:checkbox").click(function(){  //checkbox选择
        if(this.checked)  
        {  
        	$(this).siblings('[name="items"]:checkbox').attr('checked',false);//checkbox必须并列  
        }  
        $(this).attr("checked","ture");
        	if ($("#c4").is(':checked')) {
  				var attr="";
			$("tbody").html("");			
				for(attr in data){
						var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
						var tr="<tr><td>"+data[attr].student_name
						+"</td><td>"+data[attr].student_id
						+"</td><td>"+data[attr].student_class
						+"</td><td>"+data[attr].phone_number
						+"</td><td>"+data[attr].direction
						+"</td><td>"+data[attr].status
						+"</td><td>"+"<a href="+ahref+">评价</a>"
						+"</td></tr>";
						$("tbody").append(tr);
				}
  			} 
  			if ($("#c3").is(':checked')) {
  				var attr="";
			$("tbody").html("");			
				for(attr in data){
					if(data[attr].status==1){
						var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
						var tr="<tr><td>"+data[attr].student_name
						+"</td><td>"+data[attr].student_id
						+"</td><td>"+data[attr].student_class
						+"</td><td>"+data[attr].phone_number
						+"</td><td>"+data[attr].direction
						+"</td><td>"+data[attr].status
						+"</td><td>"+"<a href="+ahref+">评价</a>"
						+"</td></tr>";
						$("tbody").append(tr);
					}
				}
  			}   
  			if ($("#c2").is(':checked')) {
  				var attr="";
			$("tbody").html("");			
				for(attr in data){
					if(data[attr].status==2){
						var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
						var tr="<tr><td>"+data[attr].student_name
						+"</td><td>"+data[attr].student_id
						+"</td><td>"+data[attr].student_class
						+"</td><td>"+data[attr].phone_number
						+"</td><td>"+data[attr].direction
						+"</td><td>"+data[attr].status
						+"</td><td>"+"<a href="+ahref+">评价</a>"
						+"</td></tr>";
						$("tbody").append(tr);
					}
				}
  			}   
  			if ($("#c1").is(':checked')) {
  				var attr="";
			$("tbody").html("");			
				for(attr in data){
					if(data[attr].status==0){
						var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
						var tr="<tr><td>"+data[attr].student_name
						+"</td><td>"+data[attr].student_id
						+"</td><td>"+data[attr].student_class
						+"</td><td>"+data[attr].phone_number
						+"</td><td>"+data[attr].direction
						+"</td><td>"+data[attr].status
						+"</td><td>"+"<a href="+ahref+">评价</a>"
						+"</td></tr>";
						$("tbody").append(tr);
					}
				}
  			}    
    });  

		}
	})

	$("#sel").change(function(){//获取部分或者全部信息
		var $sel=$("#sel").val();
		// if($sel!=0){
		$.ajax({
		type:"GET",
		url:"/test/thought/student/returnList",
		dataType:"json",
		data:{
			"direction":$sel,
			"page":0,
		},
		success:function(data){	
		var attr="";
		$("tbody").html("");			
			for(attr in data){	
				var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
				var tr="<tr><td>"+data[attr].student_name
				+"</td><td>"+data[attr].student_id
				+"</td><td>"+data[attr].student_class
				+"</td><td>"+data[attr].phone_number
				+"</td><td>"+data[attr].direction
				+"</td><td>"+data[attr].status
				+"</td><td>"+"<a href="+ahref+">评价</a>"
				+"</td></tr>";
				$("tbody").append(tr);
			}
		}
	})
	// }
	// 	else{
	// 		$.ajax({
	// 			type:"GET",
	// 			url:"/test/thought/student/returnAllList",
	// 			dataType:"json",
	// 			data:{
	// 				"direction":$("#sel").val(),
	// 				"page":0
	// 			},
	// 			success:function(data){	
	// 			var attr="";			
	// 				for(attr in data){
	// 					var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
	// 					var tr="<tr><td>"+data[attr].student_name
	// 					+"</td><td>"+data[attr].student_id
	// 					+"</td><td>"+data[attr].student_class
	// 					+"</td><td>"+data[attr].phone_number
	// 					+"</td><td>"+data[attr].direction
	// 					+"</td><td>"+data[attr].status
	// 					+"</td><td>"+"<a href="+ahref+">评价</a>"
	// 					+"</td></tr>";
	// 					$("tbody").append(tr);
	// 				}
	// 			}
	// 		})
	// 	}
	})

	 // $("[type=checkbox]:checkbox").click(function(){  //checkbox选择
  //       if(this.checked)  
  //       {  
  //       	$(this).siblings('[name="items"]:checkbox').attr('checked',false);//checkbox必须并列  
  //       }  
  //       $(this).attr("checked","ture");
  // 			if ($("#c1").is(':checked')) {
  // 				var attr="";
		// 	$("tbody").html("");			
		// 		for(attr in data){
		// 			if(data[attr].status=0){
		// 				var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
		// 				var tr="<tr><td>"+data[attr].student_name
		// 				+"</td><td>"+data[attr].student_id
		// 				+"</td><td>"+data[attr].student_class
		// 				+"</td><td>"+data[attr].phone_number
		// 				+"</td><td>"+data[attr].direction
		// 				+"</td><td>"+data[attr].status
		// 				+"</td><td>"+"<a href="+ahref+">评价</a>"
		// 				+"</td></tr>";
		// 				$("tbody").append(tr);
		// 			}
		// 		}
  // 			}  
  // 			if ($("#c2").is(':checked')) {
  // 				var attr="";
		// 	$("tbody").html("");			
		// 		for(attr in data){
		// 			if(data[attr].status=1){
		// 				var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
		// 				var tr="<tr><td>"+data[attr].student_name
		// 				+"</td><td>"+data[attr].student_id
		// 				+"</td><td>"+data[attr].student_class
		// 				+"</td><td>"+data[attr].phone_number
		// 				+"</td><td>"+data[attr].direction
		// 				+"</td><td>"+data[attr].status
		// 				+"</td><td>"+"<a href="+ahref+">评价</a>"
		// 				+"</td></tr>";
		// 				$("tbody").append(tr);
		// 			}
		// 		}
  // 			}   
  // 			if ($("#c3").is(':checked')) {
  // 				var attr="";
		// 	$("tbody").html("");			
		// 		for(attr in data){
		// 			if(data[attr].status=2){
		// 				var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
		// 				var tr="<tr><td>"+data[attr].student_name
		// 				+"</td><td>"+data[attr].student_id
		// 				+"</td><td>"+data[attr].student_class
		// 				+"</td><td>"+data[attr].phone_number
		// 				+"</td><td>"+data[attr].direction
		// 				+"</td><td>"+data[attr].status
		// 				+"</td><td>"+"<a href="+ahref+">评价</a>"
		// 				+"</td></tr>";
		// 				$("tbody").append(tr);
		// 			}
		// 		}
  // 			}   
  // 			if ($("#c4").is(':checked')) {
  // 				var attr="";
		// 	$("tbody").html("");			
		// 		for(attr in data){
		// 			if(data[attr].status=3){
		// 				var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
		// 				var tr="<tr><td>"+data[attr].student_name
		// 				+"</td><td>"+data[attr].student_id
		// 				+"</td><td>"+data[attr].student_class
		// 				+"</td><td>"+data[attr].phone_number
		// 				+"</td><td>"+data[attr].direction
		// 				+"</td><td>"+data[attr].status
		// 				+"</td><td>"+"<a href="+ahref+">评价</a>"
		// 				+"</td></tr>";
		// 				$("tbody").append(tr);
		// 			}
		// 		}
  // 			}    
  //   });  

	$("#num").keyup(function(){
			if(event.keyCode==13){
			if(!/\d{8}/.test($("#num").val())){
				alert("输入错误");
			}
			else{
			var attr="";
			$("tbody").html("");			
				var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
				var tr="<tr><td>"+data[attr].student_name
				+"</td><td>"+data[attr].student_id
				+"</td><td>"+data[attr].student_class
				+"</td><td>"+data[attr].phone_number
				+"</td><td>"+data[attr].direction
				+"</td><td>"+data[attr].status
				+"</td><td>"+"<a href="+ahref+">评价</a>"
				+"</td></tr>";
				$("tbody").append(tr);
			}
		}
	});

	$("#up").click(function(){
		$.ajax({
				type:"GET",
				url:"/test/thought/student/returnAllList",
				dataType:"json",
				data:{
					"direction":$("#sel").val(),
					"page":$.getUrlParam('page')-1,
				},
				success:function(data){	
				var attr="";			
					for(attr in data){
						var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
						var tr="<tr><td>"+data[attr].student_name
						+"</td><td>"+data[attr].student_id
						+"</td><td>"+data[attr].student_class
						+"</td><td>"+data[attr].phone_number
						+"</td><td>"+data[attr].direction
						+"</td><td>"+data[attr].status
						+"</td><td>"+"<a href="+ahref+">评价</a>"
						+"</td></tr>";
						$("tbody").append(tr);
					}
				}
			})
	})
	$("#down").click(function(){
		$.ajax({
				type:"GET",
				url:"/test/thought/student/returnAllList",
				dataType:"json",
				data:{
					"direction":$("#sel").val(),
					"page":$.getUrlParam('page')+1,
				},
				success:function(data){	
				var attr="";			
					for(attr in data){
						var ahref="2017-ap-judge.html"+'?student_id='+data[attr].student_id;
						var tr="<tr><td>"+data[attr].student_name
						+"</td><td>"+data[attr].student_id
						+"</td><td>"+data[attr].student_class
						+"</td><td>"+data[attr].phone_number
						+"</td><td>"+data[attr].direction
						+"</td><td>"+data[attr].status
						+"</td><td>"+"<a href="+ahref+">评价</a>"
						+"</td></tr>";
						$("tbody").append(tr);
					}
				}
			})
	})
})