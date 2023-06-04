import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  TextField,
} from "@/lib/mui";
import React, { Dispatch, SetStateAction, useState } from "react";
import { IProduct } from "../types/product";
import { randomUUID } from "crypto";
import { POST_PRODUCT } from "../configs/endpoint";
import axios from "axios";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const AddProduct = (props: Props) => {
  const { open, setOpen } = props;

  // set state for product
  const [product, setProduct] = useState<IProduct>({
    difficulty: "",
    id: "",
    image: "",
    title: "",
    price: 0,
  });

  // add product
  const handleAddProduct = async (event: any) => {
    event.preventDefault();
    const request = {
      productName: product.title,
      productId: randomUUID,
      productPrice: product.price,
      productDescription: product.difficulty,
      productImage: product.image,
    };

    const options = {
      headers: {
        "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
      },
    };
    try {
      const response = await axios.post(POST_PRODUCT, request, options);
      //   console.log(response);
      if (response.status !== 200) {
        return "Failed, something went wrong";
      } else {
        return response.data;
      }
      // setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
    //close dialog
    handleClose();
  };
  // handle form change
  const handleFormChange = (event: any) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add product</DialogTitle>
      <DialogContent>
        <FormControl sx={{ marginY: "0.5rem" }}>
          <TextField
            name="productname"
            required
            id="outlined-required"
            label="Product Name"
            value={product.title}
            onChange={handleFormChange}
          />
        </FormControl>
        <FormControl sx={{ marginY: "0.5rem" }}>
          <TextField
            name="productPrice"
            required
            type="number"
            id="outlined-required"
            label="Price"
            value={product.price}
            onChange={handleFormChange}
          />
        </FormControl>
        <FormControl sx={{ marginY: "0.5rem" }}>
          <TextField
            name="productDescription"
            required
            id="outlined-required"
            label="Description"
            value={product.difficulty}
            onChange={handleFormChange}
          />
        </FormControl>

        <FormControl sx={{ marginY: "0.5rem" }}>
          <TextField
            name="productImage"
            required
            type="file"
            id="outlined-required"
            value={product.image}
            onChange={handleFormChange}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleAddProduct}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProduct;
