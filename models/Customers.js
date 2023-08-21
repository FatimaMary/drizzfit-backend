import mongoose from "mongoose";
import autoIncrement from "mongoose-plugin-autoinc";

const customerSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
    unique: true,
  },
  couponCode: {
    type: Boolean,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Boolean,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  town: {
    type: String,
    required: true,
  },
  postcode: {
    type: Boolean,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: String,
    required: true,
  },
  paymentDetails: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
});

customerSchema.plugin(autoIncrement.plugin, {
  model: "DrizzfitCustomers",
  field: "customerId",
  startAt: 1,
  incrementBy: 1,
});

const Customers = mongoose.model("DrizzfitCustomers", customerSchema);

export default Customers;
