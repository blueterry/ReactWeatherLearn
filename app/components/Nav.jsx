var React = require('react');
var {Link, IndexLink} = require('react-router');
//IndexLink 对应 IndexRoute

var Nav = React.createClass({
    render: function(){
        return (
            <div>
                <h3>Nav1</h3>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
                <Link to="about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
                <Link to="examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
                
            </div>
        );
    }
});

module.exports = Nav;