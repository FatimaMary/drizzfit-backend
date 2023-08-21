import Orders from "../models/Orders.js";

export const postOrder = (req, res) => {
  const userId = req.body.userId;
  const productSize = req.body.productSize;
  const productOrdered = req.body.productOrdered;

  const newOrder = new Orders({
    userId,
    productSize,
    productOrdered,
  });

  newOrder
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getOrder = (req, res) => {
  Orders.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
};
