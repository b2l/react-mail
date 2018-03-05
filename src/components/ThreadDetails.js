/** @jsx React.DOM */
var React = require('react');
var MailDetail = require('./MailDetail');

class ThreadDetails {
    getInitialState() {
        return {
            selected: 0
        }
    }
    keyListener(e) {
        if (e.keyCode === 40 && this.state.selected < this.props.thread.mails.length - 1) {
            this.setState({selected: this.state.selected+1});
        }
        if (e.keyCode === 38 && this.state.selected >= 1) {
            this.setState({selected: this.state.selected-1});
        }
    }
    componentDidMount() {
        this.refs.keyListener.getDOMNode().focus();
    }
    render() {

        var mails = [];
        this.props.thread.mails.map(function(mail, i) {
            mails.push(<MailDetail mail={mail} key={i} selected={i === this.state.selected} />)
        }, this);
        return (
            <div className="mail-details" onKeyDown={this.keyListener}>
                <input className="hidden-focusable" ref="keyListener"/>
                {mails}
            </div>
            );
    }
}

module.exports = React.createClass(ThreadDetails.prototype);
