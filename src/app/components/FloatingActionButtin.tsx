import { Box, Fab } from "@/lib/mui";
import React, { Dispatch, SetStateAction } from "react";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  onClick: () => void;
};

const FloatingActionButtin = (props: Props) => {
  const { onClick } = props;
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 10,
        right: 0,
        bottom: 0,
        "& > :not(style)": { m: 1 },
      }}
      onClick={onClick}
    >
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default FloatingActionButtin;
