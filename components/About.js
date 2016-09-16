var React = require('react');

var About = React.createClass({

  componentDidMount: function() {
    document.title = "Slowpost";
  },

  render() {

    return (

      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="centered col-xs-12 col-sm-12 col-md-12">
              <p className="page-title">Hey! Dance Beats</p>
              <a href="https://itunes.apple.com/us/app/hey-dance-beats/id1116274610?mt=8"><img className="app-icon" src="assets/hey_logo.png" alt="Slowpost Icon"/></a>
              <a href="https://itunes.apple.com/us/app/hey-dance-beats/id1116274610?mt=8"><img className="download-icon" src="assets/Download_on_the_App_Store_Badge_US-UK_135x40.svg" alt="Download on the App Store"/></a>
              <h3>Holler at <a href="https://twitter.com/evanjmwaters" className="link">@evanjmwaters</a> with feeedback and questions</h3>
            </div>
          </div>
        </div>
      </div>
    );

  }

});

module.exports = About;
