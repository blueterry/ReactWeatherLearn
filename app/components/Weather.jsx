var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
    getInitialState: function(){
        return {
           isLoading: false
        }
    },
    handleSearch: function(loc){
        var self = this;

        this.setState ({isLoading:true});

        openWeatherMap.getTemp(loc).then(function(temp){
            self.setState({
                location:loc,
                temp:temp,
                isLoading: false
            })
        },function(errMsg){            
            self.setState({isLoading:false});
            alert(errMsg);
        });
    },
    render: function(){
        var theData = {};
        theData.location = this.state.location;
        theData.temp = this.state.temp;
        theData.isLoading = this.state.isLoading;

        function renderMessage(){
            if(theData.isLoading){
                return <h3>Fething weather...</h3>
            }else if(theData.temp && theData.location){
                return <WeatherMessage weatherData={theData}/>;
            }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}                
            </div>
        );
    }
});

module.exports = Weather;