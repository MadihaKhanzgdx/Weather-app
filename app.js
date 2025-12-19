let apiKey = "9a2007941fb95cb64cae8fc72b87fddd"; 

function getWeather() {
    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("result").innerHTML = "City not found";
                return;
            }

            document.getElementById("result").innerHTML = `
                <h3>${data.name}</h3>
                <p> Temp: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.log(error);
        });
}


