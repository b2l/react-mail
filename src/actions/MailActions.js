var AppDispatcher = require('../dispatcher/AppDispatcher');

var MailActions = {

    markAsRead: function(mailId) {
        AppDispatcher.handleViewAction({
            actionType: 'markAsRead',
            mailId: mailId
        });
    },

    createMail: function(mailObj) {
        AppDispatcher.handleViewAction({
            actionType: 'newMail',
            mail: mailObj
        });
    }

};

module.exports = MailActions;