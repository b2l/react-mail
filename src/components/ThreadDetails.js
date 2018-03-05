/** @jsx React.DOM */
var React = require('react');
var MailDetail = require('./MailDetail');
var MailAction = require('../actions/MailActions');

class ThreadDetails {

    render() {

        var mails = [];
        this.props.thread.mails.map(function(mail, i) {
            mails.push(<MailDetail mail={mail} key={i}/>)
        }, this);

        return (
            <div className="mail-details">
                {mails}
            </div>
        );
    }
}

module.exports = React.createClass(ThreadDetails.prototype);
