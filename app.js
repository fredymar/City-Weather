var city = document.getElementById('city');
var date = document.getElementById('date');
var temperatura = document.getElementById('temperatura');
var weather = document.getElementById('weather');
var range = document.getElementById('range');
var imagen = document.getElementById('img');


function actualizar(){location.reload(true);}
setInterval("actualizar()", 300000);

function UpdateImage(data){
  const temp = data.weather[0].main;
  let src = '';
  if (temp == "Clear") {
    src ='Imagenes/sun.png';
  }else if (temp == "Clouds") {
    src = 'Imagenes/cloud.png';
  }else if (temp ==  "Rain") {
    src = 'Imagenes/rain.png';
  }else if (temp == "Haze") {
    src = 'Imagenes/mist.png';
  }
  imagen.src = src;
}

async function search(){
  try {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?id=3688689&appid=dec67b27b24bb9db3ba4125bda15b7f0&lang=es');
    const data = await response.json();
    city.innerHTML = data.name + " | " + data.sys.country;
    var fecha = new Date();
    var month = fecha.getMonth() + 1;
    var day = fecha.getDate();
    var year = fecha.getFullYear();
    date.innerHTML = day + " / " + month + " / " + year;
    temperatura.innerHTML = toCelsius(data.main.temp) + "°C";
    weather.innerHTML = data.weather[0].description;
    range.innerHTML = "Min " + toCelsius(data.main.temp_min) + "°C" + " | " + "Max " + toCelsius(data.main.temp_max) + "°C";
    UpdateImage(data);

  } catch (error) {
    console.log('error');
    alert('hubo un error');
  }

}

function toCelsius(kelvin){
  return Math.round(kelvin-273.15);
}

search();

/*************************Paris******************************************************************************************************************/

var img = document.getElementById('img-2'),
 city2 = document.getElementById('city-2'),
 date2 = document.getElementById('date-2'),
 temp = document.getElementById('temp'),
 weather2 = document.getElementById('weather-2'),
 range2 = document.getElementById('range-2');

 function Update(datos){
   const temp = datos.weather[0].main;
   let src = '';
   if (temp == "Clear") {
     src = 'Imagenes/sun.png';
   }else if (temp == "Clouds") {
     src = 'Imagenes/cloud.png';
   }else if (temp ==  "Rain") {
     src = 'Imagenes/rain.png';
   }
   img.src = src;
 }

 async function paris(){
   try {
     const response = await fetch('http://api.openweathermap.org/data/2.5/weather?id=2988507&appid=dec67b27b24bb9db3ba4125bda15b7f0&lang=es');
     const datos = await response.json();
     city2.innerHTML = datos.name + " | " + datos.sys.country;
     var fecha = new Date();
     var month = fecha.getUTCMonth() + 1;
     var day = fecha.getUTCDate();
     var year = fecha.getUTCFullYear();
     date2.innerHTML = day + " / " + month + " / " + year;
     temp.innerHTML = toCelsius(datos.main.temp) + "°C";
     weather2.innerHTML = datos.weather[0].description;
     range2.innerHTML = "Min " + toCelsius(datos.main.temp_min) + "°C" + " | " + "Max " + toCelsius(datos.main.temp_max) + "°C";
     Update(datos);

   } catch (error) {
     console.log('error');
     alert('hubo un error');
   }

 }

 function toCelsius(kelvin){
   return Math.round(kelvin-273.15);
 }

 paris();
/***************************************************************************forecast**************************************************/

var cd1 = document.getElementById('cd1'),
 cd2 = document.getElementById('cd2'),
 cd3 = document.getElementById('cd3'),
 dia1 = document.getElementById('dia1'),
 dia2 = document.getElementById('dia2'),
 dia3 = document.getElementById('dia3'),
 tem1 = document.getElementById('tem1'),
 tem2 = document.getElementById('tem2'),
 tem3 = document.getElementById('tem3'),
 ran1 = document.getElementById('ran1'),
 ran2 = document.getElementById('ran2'),
 ran3 = document.getElementById('ran3'),
 clim1 = document.getElementById('clim1'),
 clim2 = document.getElementById('clim2'),
 clim3 = document.getElementById('clim3');




 function photo(fore){
   const temp = fore.daily[0].weather[0].main;
   const temp2 = fore.daily[1].weather[0].main;
   const temp3 = fore.daily[2].weather[0].main
   let src = '';
   if (temp == "Clear") {
     src = 'Imagenes/sun.png';
   }else if (temp == "Clouds") {
     src = 'Imagenes/cloud.png';
   }else if (temp == "Rain") {
     src = 'Imagenes/rain.png';
   }
   cd1.src = src;

   if (temp2 == "Clear") {
     src = 'Imagenes/sun.png';
   }else if (temp2 == "Clouds") {
     src = 'Imagenes/cloud.png';
   }else if (temp2 == "Rain") {
     src = 'Imagenes/rain.png';
   }
   cd2.src = src;

   if (temp3 == "Clear") {
     src = 'Imagenes/sun.png';
   }else if (temp3 == "Clouds") {
     src = 'Imagenes/cloud.png';
   }else if (temp3 == "Rain") {
     src = 'Imagenes/rain.png';
   }
   cd3.src = src;
 }


 async function forecast(){
   try {
     const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=4.61&lon=-74.08&appid=dec67b27b24bb9db3ba4125bda15b7f0&');
     const fore = await response.json();
     console.log(fore);

     var fecha = new Date();
     var dia = fecha.getDay();
     var dias = fecha.getDate();
     var mes = fecha.getUTCMonth() + 1;
    var ano = fecha.getFullYear();
    var semana = ['Lun','Mar', 'Mie', 'Jue', 'vie', 'Sab','Dom'];

    dia1.textContent = semana[dia];
    dia2.textContent = semana[dia + 1];
    dia3.textContent = semana[dia + 2];

    clim1.innerHTML= fore.daily[0].weather[0].main;
    clim2.innerHTML= fore.daily[1].weather[0].main;
    clim3.innerHTML= fore.daily[2].weather[0].main;

     tem1.innerHTML = toCelsius(fore.daily[0].temp.day) + "°C";
     tem2.innerHTML = toCelsius(fore.daily[1].temp.day) + "°C";
     tem3.innerHTML = toCelsius(fore.daily[2].temp.day) + "°C";
     ran1.innerHTML = " Min " + toCelsius(fore.daily[0].temp.min) + "°C" + " / " + "Max " + toCelsius(fore.daily[0].temp.max) + "°C";
     ran2.innerHTML = " Min " + toCelsius(fore.daily[1].temp.min) + "°C" + " / " + "Max " + toCelsius(fore.daily[1].temp.max) + "°C";
     ran3.innerHTML = " Min " + toCelsius(fore.daily[2].temp.min) + "°C" + " / " + "Max " + toCelsius(fore.daily[2].temp.max) + "°C";
     photo(fore);
   } catch (error) {
     console.log('error');
     alert('hubo un error');
   }

 }
function toCelsius(kelvin){
  return Math.round(kelvin-273.15);
}
forecast();
