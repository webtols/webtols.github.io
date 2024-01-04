function requests(){
  let input = document.querySelector('.input').value;
  console.log(input);
  if( input == "" )
    {
      alert( "Please Enter Your IP!!!" );
      input.focus() ;
    }
  axios.get(`https://ipwho.is/${input}`)
  .then(response => {
    let h6 = document.querySelector('.out');
    let data = response.data
    let result = data['success']
    if( result == true){
      let ip = data["ip"]
      let city = data["city"]
      let flag = data["flag"]["emoji"]
      let country = data["country"]
      h6.innerHTML=`عملیات : ${result}<br>آیپی : ${ip}<br>کشور : ${flag}${country}<br>شهر : ${city}<br>`
    }
    else{
      let message = data["message"]
      let ip = data["ip"]
      h6.innerHTML=`عملیات : ${result}<br>پیام : ${message}<br>آیپی : ${ip}`
      console.log(data)
    }
  })
   .catch(error => {
    console.log(error);
   });
}

function req(){
  let input = document.querySelector('.in').value;
  console.log(input);
  if( input == "" )
    {
      alert( "Please Enter Your Domain!!!" );
      input.focus() ;
    }
  axios.get(`https://api.codebazan.ir/whois/index.php?type=json&domain=${input}`)
  .then(response => {
    let h6 = document.querySelector(';.out');
    let data = response.data;
    console.log(data);
  })
   .catch(error => {
    console.log(error);
   });
}