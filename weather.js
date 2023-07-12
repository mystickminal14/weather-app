const searchBtn = document.getElementById('btn');

function srch() {
  const search = document.getElementById('search');
  const place = document.getElementById('location');

  if (search.value === ' ') {
    alert('Write a location');
  } else {
    let loca = search.value;
    place.innerHTML = loca;
    search.value = '';

    const fetApi = fetch(`https://goweather.herokuapp.com/weather/${loca}`);
    fetApi
      .then((response) => {
        if (!response.ok) {
          console.log('Systematic error');
        }
        return response.json();
      })
      .then((data) => {
        if(data.description="Thunderstorm"){
          if (data.description === "Thunderstorm") {
            document.getElementById('card').style.background= "#303030";
          document.getElementById('image').src = 'rain.png';
          }
        }
        document.getElementById('degree').innerHTML = data.temperature;
         
        document.getElementById('winds').innerHTML = data.wind;
        document.getElementById('desc').innerHTML = `Description : `+ data.description;
      })
      .catch((error) => {
        console.log('An error occurred:', error);
      });
  }
}

searchBtn.addEventListener('click', srch);
