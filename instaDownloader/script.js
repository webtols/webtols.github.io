function requests(){
    let input = document.querySelector('.input').value;
    let h6 = document.querySelector('.out');
    h6.innerHTML="در حال پردازش...";
    console.log(`Your Value: ${input}`);
    if( input == "" )
      {
        alert( "Please Enter Your Link!!!" );
        input.focus() ;
      }
    axios.get(`https://api3.haji-api.ir/majid/social/insta/downloader?url=${input}`)
    .then(response => {
      let data = response.data
      console.log(data)
      let result = data["success"]
      if( result == true ){
        h6.innerHTML=`عملیات : ${result}`
      }
      else{
        h6.innerHTML=`عملیات : false`
        console.log(data)
      }
    })
     .catch(error => {
      console.log(error);
     });
}