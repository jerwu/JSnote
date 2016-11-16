$(function(){
	//low
	/*
	$("#oBtn").click(function(){
		// $("#container").load("index.html .url");
		// $("#container").load("index.html .url");
		// $("#container").load("test.php?url=baidu");
		$("#container").load("test.php",{
			url:'baidu'
		},function(response,status,xhr){
			// $("#container").html(response+'?key=value');
			// alert(status);
			// alert(xhr);
			// alert(xhr.responseText);
			//alert(xhr.responseXML);//因为返回的文件并不是XML文件格式
			// alert(xhr.status);
			// alert(xhr.statusText);
		});
	})
	*/
	/*
	//mid
	// $("#oBtn").click(function(){
	// 	// $.get('test.php','url=baidu',function(response,status,xhr){
	// 	// 	$("#oInput").val(response);
	// 	// })
	// 	// $.get('test.php?url=baidu',function(response,status,xhr){
	// 	// 	$("#oInput").val(response);
	// 	// })
	// 	// $.get('test.php',{
	// 	// 	url:'baidu'
	// 	// },function(response,status,xhr){
	// 	// 	$("#container").html(response);
	// 	// })
	// })
	
	// $("#oBtn").click(function(){
	// 	// $.post('test.php','url=baidu',function(response,status,xhr){
	// 	// 	alert(response);
	// 	// })
	// 	// $.post('test.php',{
	// 	// 	url:'baidu'
	// 	// },function(response,status,xhr){
	// 	// 	alert(response);
	// 	// })
	// })
	// 
	// $("#oBtn").click(function(){
	// 	$.post('test.php','url=baidu',function(response,status,xhr){
	// 		alert(response);
	// 	})
	// })
	

	$("#oBtn").click(function(){
		// $.get("test.json",function(response,status,xhr){
		// 	$("#container").html(response[0].url);
		// })
		$.getJSON("test.json",function(response,status,xhr){
			$("#container").html(response[0].url);
		})
	})
	
	// $('#oBtn').click(function () {
	// 	$.getJSON('test.json', function (response, status, xhr) {
	// 		alert(response[0].url);
	// 	});
	// });
	*/
	
	//high
	/*
	$("#oBtn").click(function(){
		$.ajax({
			type:"post",
			url:"test.php",
			data:{
				url:"baidu"
			},
			success:function(response,status,xhr){
				$("#container").html(response);
			}
		}
		);
	})

	//初始化ajax
	$.ajaxSetup({
		type:'post',
		url:'test.php',
		data:'url=baidu'
	})

	$("#oBtn").click(function(){
		$.ajax({
			success:function(response,status,xhr){
				$("#container").html(response);
			}
		}
		);
	})

	$("#oBtn").click(function(){
		$.ajax({
			type:"post",
			url:"test.php",
			data:{
				name:"jer",
				age:"29"
			},
			success:function(response,status,xhr){
				$("#container").html(response);
			}
		}
		);
	})

	$("#oBtn").click(function(){
		$.ajax({
			type:"post",
			url:"test.php",
			data:{
				name:$("form input[name=user]").val(),
				email:$("form input[name=email]").val()
			},
			success:function(response,status,xhr){
				$("#container").html(response);
			}
		}
		);
	})

	alert($("form").serialize());

	$("form input[name=sex").click(function(){
		console.log($(this).serializeArray());
		var json=$(this).serializeArray();
		alert(json[0].name+":"+json[0].value);
	})

	$(':radio').click(function () {
		// alert($(this).serialize());
		// $('#container').html(decodeURIComponent($(this).serialize()));
	});

	$("#oBtn").click(function(){
		$.ajax({
			type : 'POST',
			url : 'test.php',
			data : $('form').serialize(),
			success : function (response, status, xhr) {
				$("#container").html(response);
			}
		});
	})
	

	$("#oBtn").click(function(){
		$.ajax({
			type : 'POST',
			url : 'test.php',
			data : $.param({
				name:$("form input[name=user]").val(),
				email:$("form input[name=email]").val()
			}),
			success : function (response, status, xhr) {
				$("#container").html(response);
			}
		});
	})
	*/

	
	/*
	function ajax(url.fnsucc,fnfail){
		var xhr=null;
		if (XMLHttpRequest) {
			xhr=new XMLHttpRequest();
		}
		else{
			xhr=new ActiveXObject("MicroSoft.XMLHTTP");
		}

		xhr.open("get",url,true);

		xhr.send();

		xhr.onreadystatechange=function(){
			if (xhr.readyState==4&&xhr.status==200) {
				fnsucc(xhr.responseText);
			}else{
				if (fnfail) {
					fnfail();
				}
			}
		}
	}

	ajax("test.php",function(responseText){
		alert(responseText);
	})
	
	*/
	
	//ajax进阶
	/*
	$("#oBtn").click(function(){
		$.ajax({
			type:'post',
			url:'test.php',
			data:$("form").serialize(),
			success:function(response,status,xhr){
				$("#container").html(response);
				// alert("请求成功!");
			},
			global:false
			// timeout:1000
			// complete:function(){
			// 	alert("请求完成，不管成功或失败")
			// },
			// error:function(){
			// 	alert("请求失败！");
			// },
			// beforeSend:function(){
			// 	alert("发送请求之前");
			// }
			
		}).success(function(){
			alert("请求成功");
		}).complete(function(){
			alert("请求完成，不管成功或失败");
		})
	})

	$(document).ajaxStart(function(){
		$("#loading").show();
	}).ajaxStop(function(){
		$("#loading").hide();
	})

	$(document).ajaxSend(function(){
		alert("请求发送。。。")
	}).ajaxComplete(function(){
		alert("请求完成，不管成功或失败");
	}).ajaxSuccess(function(){
		alert("请求成功");
	}).ajaxError(function(){
		alert("请求失败！");
	});

	$('#oBtn').click(function(){
		$.post("test.php",$('form').serialize(),function(response,status,xhr){
			$('#container').html(response);
		}).complete(function(){
			alert("complete,whether it's success or not!");
		}).success(function(){
			alert("totally success!");
		}).error(function(){
			alert("you know it's failed");
		})
	})
	
	$("#oBtn").click(function(){
		$.ajax({
			type:'post',
			url:'test.php',
			data:$("form").serialize(),
			success:function(response,status,xhr){
				$("#container").html(response);
			}
			// error:function(xhr,errorText,errorType){
			// 	alert(errorText+":"+errorType);
			// 	alert(xhr.status+":"+xhr.statusText);
			// }
		})
	})

	$(document).ajaxSend(function(event,xhr,options){
		// alert(event.target);
		// alert(event.type);
		
	})
	*/

	//js跨域问题
	/*
	$("#oBtn").click(function(){
		$.ajax({
			type:'post',
			url:'jsonp.php',
			dataType:'json',
			// dataType:'html',
			// data:$('form').serialize(),
			success:function(response,status,xhr){
				alert(response.a);
			}
		})
	})

	$("#oBtn").click(function(){
		$.ajax({
			type:'post',
			url:'jsonp.php',
			dataType:'jsonp',
			// dataType:'html',
			// data:$('form').serialize(),
			success:function(response,status,xhr){
				console.log(response);
				alert(response.a);
			}
		})
	})

	$("#oBtn").click(function(){
		$.getJSON('jsonp.php?callback=?',function(response,status,xhr){
			alert(response.d);
		})
	})

	// -------------jqXHR------------
	// jqXHR就是$.ajax返回的对象
	var jqXHR=$.ajax({
			type:'post',
			url:'test.php',
			data:$('form').serialize(),
		})
	
	// $("#oBtn").click(function(){
	// 	jqXHR.success(function(response,status,xhr){
	// 		alert(response);
	// 	})
	// })
	
	//可以连缀操作
	// jqXHR.done(function(response){
	// 	alert(response+"1");
	// }).done(function(response){
	// 	alert(response+"2");
	// })

	//可以合并，按照代码顺序去执行
	jqXHR.done(function(response){
		alert(response+"1");
	}).done(function(response){
		alert(response+"2");
	})
	
	jqXHR.done(function(response){
		alert(response+"3");
	})

	// jqXHR回调函数
	var jqXHR1=$.ajax('user1.php');
	var jqXHR2=$.ajax('user2.php');

	$.when(jqXHR1,jqXHR2).done(function(r1,r2){
		alert(r1[0]);
		alert(r2[0]);
	})
	*/

	// $("#oBtn").click(function(){
	// 	$.getJSON('http://127.0.0.1/aaa.txt?callback',function(response,status,xhr){
	// 		alert(response);
	// 	})
	// })
	

	
})