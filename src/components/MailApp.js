/** @jsx React.DOM */

var React = require('react');

var NewMail = require('./NewMail');
var ThreadPane = require('./ThreadPane');
var NavBar = require('./NavBar');
var MailAppState = require('../MailState');
var MailStore = require('../stores/MailStore');

class MailApp {

    getInitialState() {
        return {
            unread: MailStore.getUnreadThread(),
            route: null
        }
    }

    getUnreadThread() {
        this.setState({
            unread: MailStore.getUnreadThread()
        });
    }

    componentDidMount() {
        MailStore.addChangeListener(this.getUnreadThread);

        MailAppState.on('route', function(route) {
            this.setRoute(route);
        }.bind(this));
    }

    setRoute(route) {
        this.setState({route: route});
    }

    render() {
        var view = null;
        if (this.state.route === 'COMPOSE') {
            view = <NewMail />;
        } else if (this.state.route === 'LIST_THREADS') {
            view = <ThreadPane />
        }

        var unread = "";

        if (this.state.unread > 0) {
            unread = "(" + this.state.unread + ")";
        }

        return (
            <div>
                <NavBar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 col-md-2 sidebar">
                            <ul className="nav nav-sidebar">
                                <li className={this.state.route === 'COMPOSE' ? 'active' : ''}>
                                    <a href="#/compose">New mail</a>
                                </li>
                                <li className={this.state.route === 'LIST_THREADS' ? 'active' : ''}>
                                    <a href="#/threads">All mails {unread}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                              {view}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


module.exports = React.createClass(MailApp.prototype);
