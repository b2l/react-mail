var React = require('react');
var MailApp = require('./components/MailApp');
var Router = require('director').Router;
var routes = require('./conf/routes');

var router = Router(routes);

React.renderComponent(MailApp(null), document.body, function() {
    router.init('/threads');
});