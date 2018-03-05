var EventEmitter = require('events').EventEmitter;

class MailState extends EventEmitter {

    static compose() {
        super.emit('route', 'COMPOSE');
    }

    static getThreads() {
        super.emit('route', 'LIST_THREADS');
    }

    static on(event, listener) {
        super.on(event, listener);
    }
}

module.exports = MailState;

//var mailState = null;
//module.exports = (function() {
//    mailState = mailState || new MailState();
//    return mailState;
//}());
