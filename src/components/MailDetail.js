/** @jsx React.DOM */
var React = require('react');
var MailAction = require('../actions/MailActions');
var moment = require('moment');
class MailDetail {
    onClick() {
        MailAction.markAsRead(this.props.mail.id)
    }
    render() {
        var className = "panel panel-default";
        if (this.props.selected)
            className += ' panel-primary' ;

        var time = moment(this.props.mail.date).fromNow();
        return (
            <div className={className} key={this.props.i} onClick={this.onClick}>
                <div className="panel-heading">
                    <span className="mail-details-item-header-sender">{this.props.mail.sender}</span>
                    <span className="mail-details-item-header-date">{time}</span>
                </div>
                <div className="panel-body">
                    {this.props.mail.read ?  this.props.mail.content.substr(0, 10)+'...' : this.props.mail.content}
                </div>
            </div>
            );
    }
}

module.exports = React.createClass(MailDetail.prototype);