var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _threads = require('../fixtures');

function markAsRead(mailId) {
    for (var i = 0; i < _threads.length; i++) {
        var thread = _threads[i];
        for (var y = 0; y < thread.mails.length; y++) {
            var mail = thread.mails[y];
            if (mail.id === mailId) {
                mail.read = true;
                return;
            }
        }
    }
}

function createNewMail(mail) {
    var thread = _threads.filter(function(thread) {
        return thread.subject === mail.subject;
    });

    if (thread.length > 0) {
        thread.push(mail);
    } else {
        _threads.push({
            subject: mail.subject,
            date: mail.date,
            sender: mail.sender,
            mails: [mail]
        });
    }
}

var MailStore = EventEmitter.prototype;



/**
 * Get the entire collection of TODOs.
 * @return {object}
 */
MailStore.getAll = function() {
    return _threads;
};

MailStore.getThread = function(thread) {
    return _threads.filter(function(_t) {
        return _t.subject === thread.subject;
    })[0];
}

MailStore.getUnreadThread = function() {
    var count = 0;
    _threads.forEach(function(thread) {
        var isNotRead = thread.mails.some(function(mail) {
            return !mail.read;
        });

        if (isNotRead)
            count++;
    });
    return count;
};

MailStore.emitChange = function() {
    this.emit(CHANGE_EVENT);
};

/**
 * @param {function} callback
 */
MailStore.addChangeListener = function(callback) {
    this.on(CHANGE_EVENT, callback);
};

/**
 * @param {function} callback
 */
MailStore.removeChangeListener = function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
};

AppDispatcher.register(function(payload) {

    var action = payload.action;
    var text;

    switch (action.actionType) {
        case 'markAsRead':
            markAsRead(action.mailId);
            MailStore.emitChange();
            break;
        case 'newMail':
            createNewMail(action.mail);
            MailStore.emitChange();
            break;
        default:
            return true;
    }
});

module.exports = MailStore;