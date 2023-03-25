/* var cover = document.getElementById("naver");
cover.addEventListener("click",function() {
	window.location.href = 'https://www.naver.com';
}); */


var webSite = document.querySelectorAll("p");
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
    }
  });
}

/* var items = document.querySelectorAll("li");  // 모든 항목 가져오기
for(i=0; i<items.length; i++) {
  items[i].addEventListener("click", function() {  // 항목 클릭했을 때 실행할 함수
    if(this.parentNode)    // 부모 노드가 있다면 
      this.parentNode.removeChild(this);  // 부모 노드에서 삭제
  });
} */