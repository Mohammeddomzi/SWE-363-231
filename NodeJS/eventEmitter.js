const EventEmitter = require('events');

class CustomEventEmitter extends EventEmitter {}

const eventEmitter = new CustomEventEmitter();
const getRandomTime = () => Math.random() * (2 - 0.1) + 0.1;

  setInterval(() => {
    const userId = Math.floor(Math.random() * 100) + 1;
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${timestamp}: USER_${userId} logged in`);
    eventEmitter.emit('userLoggedIn');
  }, getRandomTime() * 1000);
  eventEmitter.on('userLoggedIn', () => {
    // Additional logic when a user logs in
    process.exit()
  });