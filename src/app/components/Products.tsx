import { Box } from "@/lib/mui";
import React, { useEffect, useState } from "react";
import Cocktail from "./Product";
import { IProduct } from "../types/product";
import axios from "axios";
import { GET_PRODUCT } from "../configs/endpoint";
import Product from "./Product";
import styles from "../page.module.css";

type Props = {
  products: IProduct[];
  addToCart: (id: string) => void;
};

const Products = (props: Props) => {
  const { products, addToCart } = props;
  return (
    <Box sx={{ marginTop: "2rem" }} className={styles.container}>
      <Box className="products">
        {products.map((product: IProduct, index: number) => {
          return (
            <Product
              key={index}
              difficulty={product.difficulty}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              onClick={() => addToCart(product.id)}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Products;
