/** @jsx React.DOM */

var React = require('react');
var moment = require('moment');

class ThreadListItem {

    render() {
        var unreadMails = this.props.thread.mails.filter(function(mail) {return !mail.read});
        var isUnread = unreadMails.length > 0;
        var className = this.props.selected? 'primary' : '';
        className += isUnread ? ' unread' : '';
        var time = moment(this.props.thread.mails[this.props.thread.mails.length -1].date).fromNow()
        return (
            <tr onClick={this.props.onClick} className={className}>
                <td className="mail-list-item-subject">
                    {this.props.thread.subject} ({this.props.thread.mails.length})
                </td>
                <td className="mail-list-item-sender">
                    {this.props.thread.mails[this.props.thread.mails.length-1].sender}
                </td>
                <td className="mail-list-item-date">
                    {time}
                </td>
            </tr>
        );
    }

}

module.exports = React.createClass(ThreadListItem.prototype);