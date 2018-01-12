    var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
	    var hours =document.getElementById("hours");
		var played=false;
		
        var totalSeconds = 0;
	$(document).ready(function(){document.body.style.zoom="65%";});	
			
			$("#btn").click(function(){
			if(played==false){
				$("#phone").fadeOut(2000);
			}
				
			
			
			});
			
			function play(){
				if(played==false){
					
				 p=setInterval(setTime,1000);
					
					played=true;
				}
				
			}
			function stop(){
				clearInterval(p);
				played=false;
				
			}
			function reset(){
				if(played==false){
					minutesLabel.innerHTML="00";
				secondsLabel.innerHTML="00";
				hours.innerHTML="00";
					totalSeconds=0;
				}
				
			}
        
 	
        function setTime()
        {
			$("#text").toggleClass("text2");
			$("#text").toggleClass("text1");
			
            ++totalSeconds;
			secondsLabel.innerHTML = pad(totalSeconds%60);
			if(parseInt(totalSeconds/60)<60){
				minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
			}else{
				minutesLabel.innerHTML="00";
			}
			 
			hours.innerHTML=pad(parseInt(totalSeconds/3600));
			 
        }

        function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }