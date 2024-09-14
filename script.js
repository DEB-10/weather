  const apikey="a65f3939276880075a5eb77d6da7b852";
  const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const srch=document.querySelector(".search input");
  const srchbtn=document.querySelector(".search button");
  const weatherimg=document.querySelector(".weather-img");
  async function checkweather(city){
      const response=await fetch(apiUrl + city + `&appid=${apikey}`);
	  if(response.status == 404){
	     document.querySelector(".wrong").style.display="block";
		 document.querySelector(".weather").style.display="none";
	  }
	  else{
	  var data=await response.json();
	  document.querySelector(".city").innerHTML=data.name;
	  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
      document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
	  document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
	  if(data.weather[0].main=="Clouds"){
	     weatherimg.src="clouds.png";
	  }
	  else if(data.weather[0].main="Clear"){
	     weatherimg.src="clear.png";
	  }
	  else if(data.weather[0].main=="Rain"){
	     weatherimg.src="rain.png";
	  }
	  else if(data.weather[0].main=="Drizzle"){
	     weatherimg.src="drizzle.png";
	  }
	  else if(data.weather[0].main=="Mist"){
	     weatherimg.src="mist.png";
	  }
	  document.querySelector(".weather").style.display="block";
	  document.querySelector(".wrong").style.display="none";
	}
  }
  srchbtn.addEventListener("click", ()=>{
     checkweather(srch.value);
  }) 
 
