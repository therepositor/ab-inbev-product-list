import React, { Dispatch, SetStateAction, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@/lib/mui";
import { GET_PRODUCT } from "../configs/endpoint";
import { IProduct } from "../types/product";
import axios from "axios";
import Product from "./Product";
import { WHITE } from "../configs/colorConfigs";

type Props = {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
};

const SearchComp = (props: Props) => {
  const { products, setProducts } = props;
  const [searchTermResult, setSearchTermResult] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // handle search term
  const handleSearchTerm = (event: any) => {
    event.preventDefault();
    const term = event.target.value;
    console.log(term, "term");
    setSearchTerm(term);
    // queryBySearchTerm(term);
    const filteredproduct = products.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    // console.log("filtered res", filteredproduct);
    setSearchTermResult(filteredproduct);
    setProducts(filteredproduct);
  };

  // query by a search parameter
  const queryBySearchTerm = async (searchTerm: string) => {
    const options = {
      method: "GET",
      url: `GET_PRODUCT${searchTerm}`,
      headers: {
        "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
      },
    };
    try {
      const response = await axios.request(options);
      //   console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    // <Search>
    //   <Box
    //     sx={{
    //       padding: "0rem 1rem",
    //       height: "100%",
    //       position: "absolute",
    //       pointerEvents: "none",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <SearchIcon />
    //   </Box>
    //   <StyledInputBase
    //     placeholder="Search…"
    //     inputProps={{ "aria-label": "search" }}
    //     value={searchTerm}
    //     onChange={handleSearchTerm}
    //   />
    // </Search>
    <input
      style={{
        height: "50px",
        backgroundColor: WHITE,
        padding: "0 0.2rem",
        outline: "none",
        borderRadius: "8px",
        borderStyle: "none",
        border: "1px solid #1a202c",
      }}
      type="search"
      value={searchTerm}
      onChange={handleSearchTerm}
      placeholder="Search..."
    />
  );
};

export default SearchComp;
