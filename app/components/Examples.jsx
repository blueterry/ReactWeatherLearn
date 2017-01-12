var React = require('react');
var {Link} = require('react-router');
/*
var Examples = React.createClass({
    render: function(){
        return (
            <h3>Examples Component</h3>
        );
    }
});
*/
var Examples = () => {
    return (
        <div>
            <h3 className="text-center">Examples</h3>
            <p>Here are a few example location to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Beijing'>Beijing, China</Link>
                </li>
                <li>
                    <Link to='/?location=Toronto'>Toronto, Canada</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Examples;