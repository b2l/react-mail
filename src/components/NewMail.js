/** @jsx React.DOM */

var React = require('react');
class NewMail {

    sendMail(e) {
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="modal-title">New mail</h4>
                </div>
                <form className="new-mail" onSubmit={this.sendMail}>
                    <div className="panel-body">
                        <div className="form-group">
                            <label htmlFor="mail-to">To: </label>
                            <input type="text" className="form-control new-mail-to" id="mail-to" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="new-mail-subject">Subject</label>
                            <input type="text" className="form-control subject" />
                        </div>

                        <textarea className="new-mail-content"></textarea>
                    </div>
                    <div className="panel-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </form>
            </div>
        );
    }
}

module.exports = React.createClass(NewMail.prototype);