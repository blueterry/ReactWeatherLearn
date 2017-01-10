var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');



//var Route = require('react-router).Route; ...
/*
var boss = {
    name: 'Terry',
    location: 'Beijing'
};

var company = {
    company: 'rekete',
    url: 'rekete.com',
    ...boss
};

var {name} = boss;

console.log(company);
console.log(name);
*/

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}></Route>
            <Route path="examples" component={Examples}></Route>            
            <IndexRoute component={Weather}></IndexRoute>                     
        </Route>
    </Router>,
    document.getElementById('app')
);
