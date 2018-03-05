/** @jsx React.DOM */
var React = require('react');
var ThreadList = require('./ThreadList');
var ThreadDetails = require('./ThreadDetails');

var MailStore = require('../stores/MailStore');

class ThreadPane {
    getInitialState() {
        var threads = MailStore.getAll();
        return {
            threads: threads,
            selectedThread: threads[0],
        }
    }

    updateThread() {
        this.setState({
            threads: MailStore.getAll()
        });
    }
    componentDidMount() {
        MailStore.addChangeListener(this.updateThread);
    }

    onSelect(thread) {
        this.setState({
            selectedThread: thread
        });
    }

    render() {
        return (
            <div>
                <ThreadList onSelect={this.onSelect} threads={this.state.threads} selected={this.state.selectedThread}/>
                <ThreadDetails thread={this.state.selectedThread} />
            </div>
        );
    }
}

module.exports = React.createClass(ThreadPane.prototype);