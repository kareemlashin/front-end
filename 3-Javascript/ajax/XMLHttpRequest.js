function reqListener () {
    console.log(this.responseText);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://www.example.org/example.txt");
  oReq.onreadystatechange=()=>{
    if(http.readyState == 4 && http.status == 200) {
        alert(oReq.response);
    }else{
        alert(oReq.responseText);
        alert(oReq.status);

    }
  }
  oReq.send();

  