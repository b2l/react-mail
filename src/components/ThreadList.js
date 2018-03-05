/** @jsx React.DOM */
var React = require('react');
var ThreadListItem = require('./../../.build/components/ThreadListItem');

class ThreadList {
    selectAll() {

    }

    render() {
        var threads = [];
        this.props.threads.map(function(thread, i) {
            threads.push(
                <ThreadListItem key={i} thread={thread} selected={this.props.selected===thread} onClick={this.props.onSelect.bind(null, thread)} />
            )
        }, this);
        return (
            <div>
                <div className="container-fluid">
                    <div className="btn-toolbar form-inline">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" onClick={this.selectAll} />
                                Select/Unselect All
                            </label>
                        </div>

                        <div className="btn-group">
                            <button type="button" class="btn btn-default btn-lg">
                                <span class="glyphicon glyphicon-trash"></span>Archive
                            </button>
                            <button type="button" class="btn btn-default btn-lg">
                                <span class="glyphicon glyphicon-trash"></span>Spam
                            </button>
                            <button type="button" class="btn btn-default btn-lg">
                                <span class="glyphicon glyphicon-trash"></span>Delete
                            </button>
                        </div>
                    </div>
                </div>
                <table className="table table-condensed">
                    {threads}
                </table>
            </div>
        );
    }
}

module.exports = React.createClass(ThreadList.prototype);