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
var About = () =>{
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is about paragraph</p>
        </div>
    )
};

module.exports = About;