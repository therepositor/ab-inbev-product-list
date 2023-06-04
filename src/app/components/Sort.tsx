import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@/lib/mui";
import React, { Dispatch, SetStateAction } from "react";
import { HOVER_BG } from "../configs/colorConfigs";
import { IProduct } from "../types/product";

type Props = {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
};

const SortComp = (props: Props) => {
  const { products, setProducts } = props;
  const [sortType, setSortType] = React.useState("");
  const [sortOrder, setSortOrder] = React.useState("asc");

  const sortedProducts = [...products].sort((productA, productB) => {
    if (sortOrder === "asc") {
      return productA.price! - productB.price!;
    } else {
      return productB.price! - productA.price!;
    }
  });

  const handleChange = (event: SelectChangeEvent) => {
    setSortOrder(event.target.value);
    setProducts(sortedProducts);
  };
  return (
    <Box sx={{ minWidth: 120, background: HOVER_BG }}>
      <FormControl sx={{ display: "flex", width: "100%" }}>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortOrder}
          label="sort"
          onChange={handleChange}
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortComp;
