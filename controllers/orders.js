import orders from "../models/Orders.js";

export const postorder = (req, res) => {
  const userId = req.body.userId;
  const productSize = req.body.productSize;
  const productOrdered = req.body.productOrdered;

  const newUser = new Users({
    userId,
    productSize,
    productOrdered,
  });

  newUser
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getOrder = (req, res) => {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
};
