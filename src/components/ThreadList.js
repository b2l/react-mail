/** @jsx React.DOM */
var React = require('react');
var ThreadListItem = require('./../../.build/components/ThreadListItem');

class ThreadList {

    onKeyDown(e) {
        if (e.keyCode === 40 && this.props.selected < this.props.threads.length - 1) {
            this.props.onSelect(this.props.threads[this.props.selected+1]);
        }
        if (e.keyCode === 38 && this.props.selected >= 1) {
            this.props.onSelect(this.props.threads[this.props.selected-1]);
        }
    }

    componentDidMount() {
        this.refs.keyListener.getDOMNode().focus();
    }

    render() {
        var threads = [];
        this.props.threads.map(function(thread, i) {
            var isSelected = this.props.selected === i ;
            threads.push(
                <ThreadListItem key={i} thread={thread} selected={isSelected} onClick={this.props.onSelect.bind(null, thread)} />
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
                            <button type="button" className="btn btn-default btn-lg">
                                <span className="glyphicon glyphicon-trash"></span>Archive
                            </button>
                            <button type="button" className="btn btn-default btn-lg">
                                <span className="glyphicon glyphicon-trash"></span>Spam
                            </button>
                            <button type="button" className="btn btn-default btn-lg">
                                <span className="glyphicon glyphicon-trash"></span>Delete
                            </button>
                        </div>
                    </div>
                </div>
                <input className="" ref="keyListener" onKeyDown={this.onKeyDown} />
                <table className="table table-condensed" >
                    {threads}
                </table>
            </div>
        );
    }
}

module.exports = React.createClass(ThreadList.prototype);