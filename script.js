const inputTag = document.querySelector(".inputtext");
const btnTag = document.querySelector(".secbtn");
const ctextTag = document.querySelector(".ctext");
const citynameTag = document.querySelector(".cityname");
const detailoneTag = document.querySelector(".detailone");
const detailtwoTag = document.querySelector(".detailtwo");
const iconimgTag = document.querySelector(".iconimg");
const apiKey = "371140079931f0ebf07597a27643ec7a";
const bgimageTag = document.querySelector("body");
let datawater;
btnTag.addEventListener("click", () => {
  const city = inputTag.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((wdata) => {
      const weaterjson = wdata.json();
      return weaterjson;
    })
    .then((data) => {
      datawater = data.weather[0].main;
      console.log(data.weather[0].main);
      if (data.weather[0].main == "Clouds") {
        iconimgTag.src = "images/clouds.png";
      } else if ((data.weather[0].main = "rain")) {
        iconimgTag.src = "images/rain.png";
      } else if (data.weather[0].main == "mits") {
        iconimgTag.src = "images/mits.png";
      } else if (data.weather[0].main == "drizzle") {
        iconimgTag.src = "images/drizzle.png";
      } else if (data.weather[0].main == "clear") {
        iconimgTag.src = "images/clear.png";
      } else if (data.weather[0].main == "snow") {
        iconimgTag.src = "images/snow.png";
      }
      citynameTag.innerHTML = data.name;

      ctextTag.innerHTML = data.main.temp + " °C";
      detailoneTag.innerHTML = data.main.humidity;
      detailtwoTag.innerHTML = data.wind.speed;
      console.log(data.coord.lon);
    });
  const imagecity = city + " " + "view point";
  console.log(imagecity);
  let randomnum = Math.floor(Math.random() * 8) + 1;
  console.log(randomnum);
  fetch(
    `https://api.unsplash.com/search/photos?query=${imagecity}&client_id=yt4ckFhA2EvWPVu9SsXoQl3INw5zFfOJxM8umhutD00`
  )
    .then((datas) => {
      const image = datas.json();
      return image;
    })
    .then((searchimage) => {
      console.log(searchimage.results[randomnum].urls.full);
      const imgsone = searchimage.results[randomnum].urls.full;
      bgimageTag.style.backgroundImage = "url('" + imgsone + "')";
      console.log(datawater);
    });
});
