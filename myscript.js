// //  API KEY = 562b683fba693b266fed430ec52aafd5
// // api.openweathermap.org/data/2.5/weather?q="hyderabad"&appid="562b683fba693b266fed430ec52aafd5";

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        // Typical action to be performed when the document is ready:
//     //    document.getElementById("boom").innerHTML = xhttp.responseText;
//        let data=JSON.parse(xhttp.responseText)
//        document.getElementById("temp").innerHTML=data["main"]["temp"]
//     }
// };
// xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=562b683fba693b266fed430ec52aafd5", true);
// xhttp.send();

// // https://reqres.in/api/users?page=2

// // {"coord":{"lon":78.4744,"lat":17.3753},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":295.38,"feels_like":295.83,"temp_min":295.38,"temp_max":296.88,"pressure":1017,"humidity":83},"visibility":5000,"wind":{"speed":1.54,"deg":160},"clouds":{"all":75},"dt":1641829253,"sys":{"type":1,"id":9214,"country":"IN","sunrise":1641777511,"sunset":1641817680},"timezone":19800,"id":1269843,"name":"Hyderabad","cod":200}

var xhttp = new XMLHttpRequest();

const show_data = (a) => {
  xhttp.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=562b683fba693b266fed430ec52aafd5`,
    true
  );
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(xhttp.responseText);
      document.getElementById("temp").innerHTML = `${(
        data["main"]["temp"] - 273
      ).toPrecision(3)} <sup>o</sup>C`;
      document.getElementById("Country").innerHTML = data["sys"]["country"];
    }
  };
};

function boom() {
  var a = document.getElementById("get_temp").value;
  show_data(a);
}
