import Customers from "../models/Customers.js";

export const postUser = (req, res) => {
  const userId = req.body.userId;
  console.log("userId: ", userId);
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const newUser = new Customers({
    userId,
    email,
    password,
    name,
  });

  newUser
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getUser = (req, res) => {
  Customers.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getUserById = (req, res) => {
  const userId = req.params.userId;
  Customers.findOne({ userId: userId })
    .then((user) => {
      if (user) {
        const userDetails = {
          email: user.email,
          name: user.name,
        };
        res.json(userDetails);
      } else {
        res.status(404).json("User not found");
      }
    })
    .catch((err) => res.status(400).json("Error: ", err));
};
