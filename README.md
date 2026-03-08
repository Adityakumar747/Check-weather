
# Weather App 🌦️

This is a simple and modern weather app built with **React** and **Vite**. It allows you to search for the current weather in any city using the OpenWeatherMap API.

## Features

- Search for weather by city name
- Displays temperature, humidity, and wind speed
- Responsive and clean UI
- Error handling for invalid cities and network issues

## Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd weather app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up API key

Create a `.env` file in the project root with your [OpenWeatherMap](https://openweathermap.org/api) API key:

```
VITE_APP_ID="your_api_key_here"
```

### 4. Run the app

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

## Usage

1. Enter a city name in the search bar and press Enter or click the search icon.
2. The weather information for the city will be displayed.
3. If the city is not found or there is a network error, an error message will appear.

## Project Structure

- `src/components/Weather.jsx` — Main weather component
- `src/components/Weather.css` — Component styles
- `src/assets/` — Weather icons
- `src/App.jsx` — App entry
- `src/main.jsx` — React root

## License

MIT
