var React = require('react');

/*var WeatherMessage = React.createClass({
    
    render: function(){
        var theData = this.props.weatherData;
        return (
            <h3>The city:{theData.location} ,the Temprature is {theData.temp}</h3>
        );
    }
});
*/
var WeatherMessage = (props) => <h3 className="text-center">The City is: {props.weatherData.location}, the Temprature is {props.weatherData.temp}</h3>

module.exports = WeatherMessage;