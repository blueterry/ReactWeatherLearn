var React = require('react');
var {Link, IndexLink} = require('react-router');
//IndexLink 对应 IndexRoute

var Nav = React.createClass({

    onSearch :function (e){
        e.preventDefault();
        var loc = this.refs.city.value;
        var encodedLoc = encodeURIComponent(loc);

        if(loc.length > 0){
            this.refs.city.value = '';
            window.location.hash = "#/?loc=" + encodedLoc;
        }        
    },
    render: function(){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form action="" onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" ref="city" placeholder="Search Weather by City" />
                            </li>
                            <li><input type="submit" className="button" value="Get Weather"/></li>
                        </ul>                    
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
