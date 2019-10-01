const events = require("events");
const eventEmitter = new events.EventEmitter();

const dispatchAction = "dispatchAction";

function handleEvent() {
  console.log("handle event ...");
}

exports.eventOn = function() {
  console.log("event on ...");
  eventEmitter.on(dispatchAction, handleEvent);
};

exports.eventEmit = function() {
  console.log("event emit ...");
  eventEmitter.emit(dispatchAction);
};
