var AppDispatcher = require('../dispatcher/AppDispatcher');

var MailActions = {

    markAsRead: function(mailId) {
        AppDispatcher.handleViewAction({
            actionType: 'markAsRead',
            mailId: mailId
        });
    },

    sendMail: function(mailObj) {
        AppDispatcher.handleViewAction({
            actionType: 'sendMail',
            mail: mailObj
        });
    }

};

module.exports = MailActions;