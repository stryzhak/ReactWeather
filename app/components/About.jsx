var React = require('react');

var About = function (props){
  return (
      <div>
      <h1 className="text-center">About component!</h1>
      <p>This is a weather Application build in React</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name 
        </li>
      </ul>
      </div>
  )
};
module.exports = About;
