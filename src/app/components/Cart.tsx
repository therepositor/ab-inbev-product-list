import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@/lib/mui";
import React, { Dispatch, SetStateAction } from "react";
import { ICart } from "../types/cart";
import CartItem from "./CartItem";
import { IProduct } from "../types/product";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  cart: IProduct[];
  setCount: Dispatch<SetStateAction<number>>;
  count: number;
  removeFromCart: (id: string) => void;
};

const Cart = (props: Props) => {
  const { open, setOpen, cart, setCount, count, removeFromCart } = props;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog sx={{ width: "300px" }} open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
          minWidth: "300px",
          zIndex: 99,
        }}
      >
        <DialogTitle sx={{ textAlign: "center", fontWeight: 600 }}>
          Items on Cart
        </DialogTitle>
        <Divider />
        <DialogContent>
          {cart.map((item, index) => (
            <CartItem
              key={index}
              description={item.difficulty}
              price={item.price!}
              title={item.title}
              id={item.id}
              decrement={setCount}
              count={count}
              removeFromCart={removeFromCart}
            />
          ))}
        </DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};
export default Cart;
