var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');


var Weather = React.createClass({
    getInitialState: function(){
        return {
           isLoading: false           
        }
    },
    handleSearch: function(loc){
        var self = this;

        this.setState ({
            isLoading:true,
            errMsg: undefined
        });

        openWeatherMap.getTemp(loc).then(function(temp){
            self.setState({
                location:loc,
                temp:temp,
                isLoading: false
            })
            },function(e){            
                self.setState({
                    isLoading:false,
                    errMsg: e.message
                });
        });
    },
    render: function(){
        var theData = {};
        theData.location = this.state.location;
        theData.temp = this.state.temp;
        theData.isLoading = this.state.isLoading;
        theData.errMsg = this.state.errMsg;

        function renderMessage(){
            if(theData.isLoading){
                return <h3>Fething weather...</h3>
            }else if(theData.temp && theData.location){
                return <WeatherMessage weatherData={theData}/>;
            }
        }
        
        function renderError(){
            if(typeof theData.errMsg === 'string'){
              return(
                  <ErrorModal message={theData.errMsg}/>
              )  
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}   
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;