var React = require('react');
/* 
//Stateless can be simplified .see sample below

var About = React.createClass({
    render: function(){
        return (
            <h3>About Component</h3>
        );
    }
});
*/
/* 
//can be simplified further see below.
var About =(props)=>{
        return (
            <h3>About Component</h3>
        );
}*/
var About = () =><h3>About component</h3>

module.exports = About;