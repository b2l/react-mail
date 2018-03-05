/** @jsx React.DOM */

var emails = require('./fixtures');

var MailListItem = React.createClass({
    render: function() {
        return (
            <div>
                <span className="mail-list-item-sender">
                    {this.props.mail.mails[this.props.mail.mails.length-1].sender}
                </span>
                <span className="mail-list-item-subject">
                    {this.props.mail.subject}
                </span>
                <span className="mail-list-item-date">
                    {this.props.mail.mails[this.props.mail.mails.length -1].date.toString()}
                </span>
            </div>
        );
   }
});

var MailList = React.createClass({
    render: function() {
        function createItem(item, i) {
            return (
                <li key={i}
                    className={this.props.selected === item ? 'mail-list-item selected' : 'mail-list-item'}
                    onClick={this.props.onSelect.bind(null, item)}
                    >
                    <MailListItem mail={item} />
                </li>
            );
        }
        return (
            <ul className="mail-list">
                {this.props.emails.map(createItem, this)}
            </ul>
        );
    }
});

var MailDetails = React.createClass({
    getInitialState: function() {
        return {
            hideRead: true
        }
    },
    render: function() {
        function displayMail(mail, i) {
            return (
                <MailDetailsItem mail={mail} key={i}/>
            );
        }
        return (
            <div className="mail-details">
                {this.props.mail.mails.map(displayMail.bind(this))}
            </div>
        );
    }
});

var MailDetailsItem = React.createClass({
    getInitialState: function() {
        return {
            showAll: !this.props.mail.read
        }
    },
    onClick: function() {
        this.setState({showAll: !this.state.showAll});
    },
    render: function() {
        return (
            <div className="mail-details-item" key={this.props.i} onClick={this.onClick}>
                <div className="mail-details-item-header">
                    <div className="mail-details-item-header-sender">{this.props.mail.sender}</div>
                    <div className="mail-details-item-header-date">{this.props.mail.date.toString()}</div>
                </div>
                <div className="content">
                    {this.state.showAll ? this.props.mail.content : this.props.mail.content.substr(0, 10)+'...'}
                </div>
            </div>
        );
    }
});

var MailApp = React.createClass({displayName: 'MailApp',
    getInitialState: function() {
        return {
            emails: emails,
            selectedEmail: emails[0]
        }
    },
    onSelect: function(mail) {
        this.setState({
            selectedEmail: mail
        });
   },
   render: function() {
       return (
            <div>
                <h1>Mails</h1>
                <MailList onSelect={this.onSelect} emails={this.state.emails} selected={this.state.selectedEmail}/>
                <MailDetails mail={this.state.selectedEmail} />
            </div>
       );
   }
});


React.renderComponent(MailApp(null), document.body);