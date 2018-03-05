/** @jsx React.DOM */

var emails = require('./fixtures');

var ThreadListItem= React.createClass({
    render: function() {
        return (
            <div>
                <span className="mail-list-item-sender">
                    {this.props.thread.mails[this.props.thread.mails.length-1].sender}
                </span>
                <span className="mail-list-item-subject">
                    {this.props.thread.subject}
                </span>
                <span className="mail-list-item-date">
                    {this.props.thread.mails[this.props.thread.mails.length -1].date.toString()}
                </span>
            </div>
        );
   }
});

var ThreadList = React.createClass({
    render: function() {
        function createItem(item, i) {
            return (
                <li key={i}
                    className={this.props.selected === item ? 'mail-list-item selected' : 'mail-list-item'}
                    onClick={this.props.onSelect.bind(null, item)}
                    >
                    <ThreadListItem thread={item} />
                </li>
            );
        }
        return (
            <ul className="mail-list">
                {this.props.threads.map(createItem, this)}
            </ul>
        );
    }
});

var ThreadDetails = React.createClass({
    getInitialState: function() {
        return {
            selected: 0
        }
    },
    keyListener: function(e) {
        if (e.keyCode === 40 && this.state.selected < this.props.thread.mails.length - 1) {
            this.setState({selected: this.state.selected+1});
        }
        if (e.keyCode === 38 && this.state.selected >= 1) {
            this.setState({selected: this.state.selected-1});
        }
    },
    componentDidMount: function() {
        this.refs.keyListener.getDOMNode().focus();
    },
    render: function() {
        function displayMail(mail, i) {
            return (
                <MailDetail mail={mail} key={i} selected={i === this.state.selected} />
            );
        }
        return (
            <div className="mail-details" onKeyDown={this.keyListener}>
                <input className="hidden-focusable" ref="keyListener"/>
                {this.props.thread.mails.map(displayMail.bind(this))}
            </div>
        );
    }
});

var MailDetail = React.createClass({
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
            <div className={this.props.selected? 'mail-details-item selected' : 'mail-details-item'} key={this.props.i} onClick={this.onClick}>
                <div className="mail-details-item-header">
                    <span className="mail-details-item-header-sender">{this.props.mail.sender}</span>
                    <span className="mail-details-item-header-date">{this.props.mail.date.toString()}</span>
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
            threads: emails,
            selectedThread: emails[0]
        }
    },
    onSelect: function(thread) {
        this.setState({
            selectedThread: thread
        });
   },
   render: function() {
       return (
            <div>
                <h1>Mails</h1>
                <ThreadList onSelect={this.onSelect} threads={this.state.threads} selected={this.state.selectedThread}/>
                <ThreadDetails thread={this.state.selectedThread} />
            </div>
       );
   }
});


React.renderComponent(MailApp(null), document.body);