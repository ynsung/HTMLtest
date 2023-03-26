/*var cover = document.getElementById("naver");
cover.addEventListener("click",function() {
	window.location.href = 'https://www.naver.com';
});*/


var webSite = document.querySelectorAll(".web");
for(i=0; i<webSite.length; i++) {
  webSite[i].addEventListener("click", function() {
     switch(this.innerText){
      case "Naver" :
        window.location.href = 'https://www.naver.com';
        break;
      case "Youtube" :
        window.location.href = 'https://www.youtube.com';
        break;
      case "Daum" :
        window.location.href = 'https://www.daum.net';
        break;
      case "Papago" :
        window.location.href = 'https://papago.naver.com';
        break;
      case "Github" :
        window.location.href = 'https://github.com';
        break;
      case "BaekJoon" :
        window.location.href = 'https://www.acmicpc.net';
        break;
      case "Programmers" :
        window.location.href = 'https://www.programmers.co.kr';
        break;
      case "Chatgpt" :
        window.location.href = 'https://chat.openai.com';
        break;
      case "Facebook" :
        window.location.href = 'https://www.facebook.com';
        break;
      case "Instagram" :
        window.location.href = 'https://www.instagram.com';
        break;
      case 'Saint' :
        window.location.href = 'https://saint.sogang.ac.kr';
        break;
      case 'SamsungSW' :
        window.location.href = 'https://swexpertacademy.com';
        break;
      case 'LGCNS' :
        window.location.href = 'https://www.lgcns.com';
        break;
      case 'CATCH' :
        window.location.href = 'https://www.catch.co.kr';
        break;
      case 'Watcha' :
        window.location.href = 'https://watcha.com';
        break;
      case 'Netflix' :
        window.location.href = 'https://www.netflix.com/kr';
        break;
      case 'SogangJob' :
        window.location.href = 'https://job.sogang.ac.kr';
        break;
      case 'AWS' :
        window.location.href = 'https://aws.amazon.com';
        break;
      }
    });
  }