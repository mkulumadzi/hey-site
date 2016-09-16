var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
require('bootstrap');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;

var About = require('./About');
var NotFound = require('./NotFound');

var App = React.createClass({

  getInitialState(){

    return null;

  },

  dismissNav(){
    var navMain = $("#navigationbar");
    navMain.collapse('hide');
  },

  render: function () {
    return (
      <div>

        {/* this is the important part */}
        <RouteHandler/>

        <div id="push"></div>
        <footer className="footer">
          <p className="footer-text">Made in Denver, Colorado</p>
          <p className="footer-text"><i className="fa fa-copyright"></i>2016, Kuyenda, LLC</p>
        </footer>
      </div>
    );
  }

});

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={About}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

$(function(){
    var navMain = $("#navigationbar");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

module.exports = App;
