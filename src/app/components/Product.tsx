import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@/lib/mui";
import React, { ChangeEvent } from "react";
import { IProduct } from "../types/product";

interface Props extends IProduct {
  onClick: () => void;
}

const Product = (props: Props) => {
  const { onClick, difficulty, id, image, title, price } = props;
  //add to cart

  return (
    <Grid item xs={12} md={6} lg={3} sx={{ marginY: 1 }}>
      <Card sx={{ maxWidth: 345 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            src={image}
            alt="green iguana"
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {" "}
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {difficulty}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>{`NGN ${price}`}</Typography>
              <Button sx={{ zIndex: 0 }} variant="contained" onClick={onClick}>
                Add to cart
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default Product;
