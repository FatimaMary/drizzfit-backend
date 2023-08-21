import mongoose from "mongoose";
import autoIncrement from "mongoose-plugin-autoinc";

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  productSize: {
    type: String,
    required: true,
  },
  productsOrdered: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

orderSchema.plugin(autoIncrement.plugin, {
  model: "DrizzfitOrders",
  field: "orderId",
  startAt: 1,
  incrementBy: 1,
});

const Orders = mongoose.model("DrizzfitOrders", orderSchema);

export default Orders;
