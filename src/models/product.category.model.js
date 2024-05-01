import mongoose, { Schema } from "mongoose";

const prodCategorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Category Name is required"],
      trim: true,
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const ProductCategory = mongoose.model("ProductCategory", prodCategorySchema);
