import { Box, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { HOVER_BG } from "../configs/colorConfigs";
import { ICart } from "../types/cart";

interface Props extends ICart {
  decrement: Dispatch<SetStateAction<number>>;
  count: number;
  removeFromCart: (id: string) => void;
}

const CartItem = (props: Props) => {
  const { description, price, title, decrement, count, removeFromCart, id } =
    props;
  const handleRemoveFromCart = () => {
    removeFromCart(id);
    decrement(count - 1);
  };
  return (
    <Box sx={{ width: "100%", marginY: 1, padding: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: HOVER_BG,
          padding: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
        </Box>
        <Box>{`NGN ${price}`}</Box>
        <Box
          sx={{
            backgroundColor: "red",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            color: HOVER_BG,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          onClick={handleRemoveFromCart}
        >
          X
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
