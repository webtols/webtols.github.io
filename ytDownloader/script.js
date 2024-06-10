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
    axios.get(`https://mamad-663t.onrender.com/api?url=${input}`)
    .then(response => {
      let data = response.data
      let title = data["title"]
      if( title ){
        let name = data["channel"]["name"]
        let formats = data["formats"];
        console.log(data)
        let vi720 = data["formats"][0]["url"];
        let vi360 = data["formats"][1]["url"];
        let audio = data["formats"][3]["url"];
        let photo = data["thumbnails"][1]["url"];
        let veiw = data["viewCount"]
        console.log(photo)
        h6.innerHTML=`عملیات : true<hr>نام چنل: ${name}<br>عنوان ویدیو : ${title}<br>لینک برای دانلود:<br><p dir="ltr">Video 720p: <a href="${vi720}">CLICK ME</a><br>Video 360p: <a href="${vi360}">CLICK ME</a><br>Audio: <a href="${audio}">CLICK ME</a></p><hr>تعداد ویو های ویدیو: ${veiw}`;
      }
      else{
        let message = data["message"];
        console.log(message)
        h6.innerHTML=`عملیات : false<br>پیام : ${message}`
        console.log(data)
      }
    })
     .catch(error => {
      console.log(error);
     });
}