import Customers from "../models/Customers.js";

export const postCustomer = (req, res) => {
  const couponCode = req.body.couponCode;
  const customerName = req.body.customerName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const address = req.body.address;
  const town = req.body.town;
  const postcode = req.body.postcode;
  const state = req.body.state;
  const totalAmount = req.body.totalAmount;
  const paymentDetails = req.body.paymentDetails;
  const orderId = req.body.orderId;

  const newCustomer = new Customers({
    couponCode,
    customerName,
    email,
    phoneNumber,
    address,
    town,
    postcode,
    state,
    totalAmount,
    paymentDetails,
    orderId,
  });

  newCustomer
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getCustomer = (req, res) => {
  Orders.find()
    .then((customers) => res.json(customers))
    .catch((err) => res.status(400).json("Error: " + err));
};
