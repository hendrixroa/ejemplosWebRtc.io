"use strict";

var AudioRecord = (function(){

	function soportaGetUserMedia(){
		return navigator.getUserMedia || 
			   navigator.webkitGetUserMedia || 
			   navigator.mozGetUserMedia || 
			   navigator.msGetUserMedia ||
			   undefined;
	}

	window.onload = function(){
		if(soportaGetUserMedia()){
			console.log(soportaGetUserMedia());
			soportaGetUserMedia({ audio: true, video: true}, function(stream){
				var video = document.querySelector('video');
				video.src = window.URL.createObjectURL(stream);

			},function(err){
				console.log("Error");
			});
		}else{
			alert("Tu dispositivo no soporta User Media");
		}
	};

	return {
		soportaGetUserMedia: soportaGetUserMedia
	}

})(); 
