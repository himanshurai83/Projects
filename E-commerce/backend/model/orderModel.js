import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    address: {
      type: Object,
    },
    product: {
      type: Object,
    },
    payment: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "Order-Placed",
    },
    date: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
