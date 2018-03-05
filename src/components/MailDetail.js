/** @jsx React.DOM */
var React = require('react');
var MailAction = require('../actions/MailActions');
var moment = require('moment');

class MailDetail {

    getInitialState() {
        return {
            open: !this.props.mail.read
        }
    }

    onClick() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        var className = "panel panel-default";

        var time = moment(this.props.mail.date).fromNow();
        return (
            <div className={className} key={this.props.i} onClick={this.onClick}>
                <div className="panel-heading">
                    <span className="mail-details-item-header-sender">{this.props.mail.sender}</span>
                    <span className="mail-details-item-header-date">{time}</span>
                </div>
                <div className="panel-body">
                    {this.state.open ? this.props.mail.content : this.props.mail.content.substr(0, 10)+'...'}
                </div>
            </div>
            );
    }
}

module.exports = React.createClass(MailDetail.prototype);
