var AppState = require('../MailState');

module.exports = {
    '/compose': AppState.compose.bind(AppState),
    '/threads': AppState.getThreads.bind(AppState)
};