/** @jsx React.DOM */
var React = require('react');

class NavBar {
    render() {
        return (
            <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">React Mail</a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                        <form className="navbar-form navbar-right">
                            <input className="form-control" placeholder="Search..." type="text" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = React.createClass(NavBar.prototype);