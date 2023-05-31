const asyncHandler = require("express-async-handler");
const cartData = [
  {
    _id: 1,
    userId: 1,
    name: "Will",
    secondName: "Smith",
    age: 54,
    lastActive: new Date("2023-05-30T10:00:00.000Z"), // Set the last active timestamp here
  },
  {
    _id: 2,
    userId: 2,
    name: "elon",
    secondName: "musk",
    age: 51,
    lastActive: new Date("2023-05-30T10:00:00.000Z"), // Set the last active timestamp here
  },
  {
    _id: 3,
    userId: 3,
    name: "Kevin",
    secondName: "MS",
    age: 21,
    lastActive: new Date("2023-05-30T10:00:00.000Z"), // Set the last active timestamp here
  },
  {
    _id: 4,
    userId: 4,
    name: "Islam",
    secondName: "Belamri",
    age: 21,
    lastActive: new Date("2023-05-30T10:00:00.000Z"), // Set the last active timestamp here
  },
];

const getContacts = asyncHandler(async (req, res) => {
  const currentTime = new Date();
  const inactiveTime = cartData.map((cart) => {
    const inactiveDuration = currentTime - cart.lastActive;
    const durationInSeconds = Math.floor(inactiveDuration / 1000);
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;

    return {
      userId: cart.userId,
      hours,
      minutes,
      seconds,
      name: cart.name,
      age: cart.age,
    };
  });
  res.status(200).json(inactiveTime);
});

module.exports = { getContacts };
