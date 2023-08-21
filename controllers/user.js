import Users from "../models/Users.js";

export const postUser = (req, res) => {
  const userId = req.body.userId;
  console.log("userId: ", userId);
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const newUser = new Users({
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
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
};
