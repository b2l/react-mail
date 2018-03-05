/** @jsx React.DOM */

var React = require('react');
var MailAction = require('../actions/MailActions');

class NewMail {

    sendMail(e) {
        e.preventDefault();
        var mail = {
            subject: e.target.subject.value,
            to: e.target.to.value,
            content: e.target.content.value
        };

        e.target.reset();

        MailAction.sendMail(mail);
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
                            <input name="to" type="text" className="form-control new-mail-to" id="mail-to" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="new-mail-subject">Subject</label>
                            <input name="subject" type="text" className="form-control subject" />
                        </div>

                        <textarea name="content" className="new-mail-content"></textarea>
                    </div>
                    <div className="panel-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <input type="submit" className="btn btn-primary" value="Save" />
                    </div>
                </form>
            </div>
        );
    }
}

module.exports = React.createClass(NewMail.prototype);