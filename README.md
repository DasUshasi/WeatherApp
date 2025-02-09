## Weather App

This project uses the OpenWeather API to fetch weather conditions for a selected city. The user can choose a country from a list of all available countries, then pick a city within that country. The app retrieves the latitude and longitude of the chosen location and displays the weather information, including the weather forecast for the next 5 hours and 3 days.

## Features

- **Country and City Selection**: The app allows users to select a country from a list and a city within that country.
- **Weather Data**: Fetches real-time weather data for the selected city using the OpenWeather API, including:
  - Current weather
  - 3-day forecast (forecast of every day for the current day and next 2 days)
  - 5-hour forecast (forecast of every hour for the current hour and next 4 hours)
- **Day/Night Color Schemes**: The app dynamically adjusts its color scheme depending on whether it's day or night in the selected city.
- **Responsive Design**: The app uses fully responsive design and adapts to all screen sizes.

## How It Works

1. **Country and City Selection**:
   - The user needs to select a country from a dropdown list of all available countries.
   - The user then enters a city name from that country, and the app uses the OpenWeather API to fetch the latitude and longitude of the selected city.
   - In case of incorrect city name, or if the entered city is not in the country, the application displays the error occurred.

2. **Weather Data Fetching**:
   - Once the latitude and longitude are retrieved, the app queries the OpenWeather API for weather data for that location.
   - The data includes the current weather conditions and the forecast for the next 5 hours and 3 days.
   
3. **Dynamic Display**:
   - The weather data is displayed in an easy-to-read format, including current date and time, temperature, humidity, wind speed, and a brief description of the weather.
   - Based on the current time in the selected location, the interface color scheme changes for either day or night.

## Technologies Used

- **OpenWeather API**: Provides weather data for cities worldwide.
- **Tech stack**: HTML, CSS, React JS, Bootstrap

Here is how the form looks where the user enters country and city:
![Screenshot 2025-02-09 123004](https://github.com/user-attachments/assets/0e5ca267-9f7e-4db4-8ced-52031cbd7a09)

Here is a snap of list of countries that user can choose from:
![Screenshot 2025-02-09 123211](https://github.com/user-attachments/assets/2eab6da5-0550-4e6c-a4ce-c6b1bebbae39)

Here is how a forecast looks if it is day time at the location:
![Screenshot 2025-02-09 123028](https://github.com/user-attachments/assets/d3a30879-f2f9-48ae-b3ae-a9ff8adf4810)

Here is a look at the 3 day forecast:
![Screenshot 2025-02-09 123138](https://github.com/user-attachments/assets/3a529813-1adb-4fab-a10e-a5140926956f)

Here is a look at the 5 hour forecast:
![Screenshot 2025-02-09 123126](https://github.com/user-attachments/assets/de685ec1-20ed-452c-a7ec-5e245eb1811f)

Here is how a forecast looks if it is night time at the location:
![Screenshot 2025-02-09 123226](https://github.com/user-attachments/assets/29b9eb82-0058-4640-aaac-ed9834a0ac90)


