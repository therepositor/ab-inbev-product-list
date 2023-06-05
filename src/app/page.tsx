"use client";
import styles from "./page.module.css";
import { Header } from "../app/components/Header";
import { Box } from "../lib/mui";
import { IProduct } from "./types/product";
import { useEffect, useState } from "react";

import SearchComp from "./components/Search";
import { GET_PRODUCT } from "./configs/endpoint";

import SortComp from "./components/Sort";
import FloatingActionButtin from "./components/FloatingActionButtin";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";

import NotificationBadge from "./components/NotificationBadge";
import Cart from "./components/Cart";
import { ACTIVE_BG, HOVER_BG } from "./configs/colorConfigs";

export default function Home() {
  // set product list
  const [products, setProducts] = useState<IProduct[]>([
    {
      difficulty: "easy",
      id: "1",
      image: "src/app/assets/images/png/abinbev.png",
      title: "first",
      price: 5,
    },
    {
      difficulty: "easy",
      id: "2",
      image: "src/app/assets/images/png/abinbev.png",
      title: "second",
      price: 56,
    },
    {
      difficulty: "easy",
      id: "3",
      image: "src/app/assets/images/png/abinbev.png",
      title: "third",
      price: 67,
    },
    {
      difficulty: "easy",
      id: "4",
      image: "src/app/assets/images/png/abinbev.png",
      title: "fourth",
      price: 3,
    },
    {
      difficulty: "easy",
      id: "5",
      image: "src/app/assets/images/png/abinbev.png",
      title: "fifth",
      price: 90,
    },
  ]);
  const getProducts = async () => {
    const options = {
      method: "GET",
      url: GET_PRODUCT,
      headers: {
        "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
      },
    };
    try {
      // const response = await axios.request(options);
      // console.log(response.data);
      // setProducts(response.data);
    } catch (error) {
      console.error(error);
      if (error === 400) {
        return "Bad request";
      } else if (error === 401) {
        return "Unauthorized";
      } else if (error === 403) {
        return "request is forbidden";
      } else if (error === 404) {
        return "Page not found";
      } else if (error === 500) {
        return "Internal Server error";
      } else {
        return "Request Failed";
      }
    }
  };
  // useEffect to request product list when the page mount
  useEffect(() => {
    getProducts();

    return () => {};
  }, [products]);
  // open form to add a product

  const [open, setOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpen(true);
  };

  // open cart
  const [openCart, setOpenCart] = useState<boolean>(false);
  const handleOpenCart = () => {
    setOpenCart(true);
  };

  // add to cart
  const [cart, setCart] = useState<IProduct[]>([]);
  const addToCart = (id: string) => {
    //check if the id match with any product on the product list
    const findProduct = products.find((product) => product.id === id)!;

    setCount((count) => count + 1);
    return setCart([...cart, findProduct]);
  };
  // handle count
  const [count, setCount] = useState<number>(0);
  // handle remove item form cart
  const removeItemFromCart = (id: string) => {
    const filteredCart = cart.filter((product) => product.id !== id);

    setCart(filteredCart);
  };
  return (
    <main className={styles.main}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Header />
        <Box onClick={handleOpenCart}>
          {" "}
          <NotificationBadge count={count} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: `calc(100vh - 60px)`,
          width: "100%",
          overflow: "scroll",
          marginTop: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flexx-start",
            alignItems: "center",
            width: "100%",
            paddingLeft: "0.5rem",
            gap: 1,
            position: "fixed",
            backgroundColor: HOVER_BG,
            zIndex: 10,
          }}
        >
          <SearchComp products={products} setProducts={setProducts} />
          <Box sx={{ paddingY: "1rem" }}>
            <SortComp products={products} setProducts={setProducts} />
          </Box>
        </Box>
        <Box sx={{ marginTop: "100px" }}>
          {" "}
          <Products products={products} addToCart={addToCart} />
        </Box>

        {/* <FloatingActionButtin onClick={handleOpenModal} /> */}
      </Box>
      {open && <AddProduct open={open} setOpen={setOpen} />}
      {openCart && (
        <Cart
          open={openCart}
          setOpen={setOpenCart}
          cart={cart}
          setCount={setCount}
          count={count}
          removeFromCart={removeItemFromCart}
        />
      )}
    </main>
  );
}
