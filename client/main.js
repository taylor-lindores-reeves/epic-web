import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import HelloWorld from "../imports/HelloWorld.js";

Meteor.startup(() => {
  render(<HelloWorld />, document.getElementById("app"));
});

// Instructions..

// Connect to MongoDB Compass using connection URI 'mongodb://127.0.0.1:3001'
// Start app using command 'meteor' (takes a while to start up but worth it!)
// Test out the app and get a feel for it. Let me know your thoughts!
