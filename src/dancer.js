// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};

  // // use jQuery to create an HTML <span> tag
  // dancer.$node = $('<span class="dancer"></span>');

  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  // dancer.step();

  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // // this one sets the position to some random default point within the body
  // dancer.setPosition(top, left);

  // return dancer;
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(this.top, this.left);
  this.step();
};

Dancer.prototype.step = function () {
  setTimeout(this.step, this.timeBetweenSteps);
};
Dancer.prototype.setPosition = function () {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function (i, side) {
  //leftRight is a string either 'left' or 'right'
  //index is index in the big array of things
  if (side === 'left') {
    var styleSettings = {
      margin: '10px 10px',
      left: ((i * 30) + 9),
      top: 170 + i * 10
    };
  } else if (side === 'right') {
    var styleSettings = {
      top: 670 - i * 10,
      left: ((i * 30) - 6),
      margin: '10px 10px'
    };
  }
  this.$node.animate(styleSettings, 'slow');
};






















