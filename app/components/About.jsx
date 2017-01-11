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
            <h3>About</h3>
            <p>About Paragraph</p>
        </div>
    )
};

module.exports = About;