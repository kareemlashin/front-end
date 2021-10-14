const request = async () => {
    const response = await fetch('url');
    const data = await response.json();
    console.log(data);
}

const request = async () => {
  const response = await fetch('url');
  if(response.status === 200){
    const data = await response.json();
    console.log(data);
  }
  else{
    console.log("error");
  }
}