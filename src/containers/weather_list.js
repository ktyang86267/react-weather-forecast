import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather = (cityData) => {
    const name = cityData.city.name; 
    const temps = cityData.list.map(allWeatherData => allWeatherData.main.temp - 273);
    const pressures = cityData.list.map(allWeatherData => allWeatherData.main.pressure);
    const humidities = cityData.list.map(allWeatherData => allWeatherData.main.humidity);

    const { lon, lat } = cityData.city.coord;
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="blue" units="°C" /></td>
        <td><Chart data={pressures} color="red" units="hpa" /></td>
        <td><Chart data={humidities} color="orange" units="%" /></td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hpa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
