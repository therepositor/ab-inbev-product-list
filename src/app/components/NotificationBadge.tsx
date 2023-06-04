import { Box } from "@/lib/mui";
import React, { Dispatch, SetStateAction, useState } from "react";
import { styled } from "@mui/system";
import Badge, { badgeClasses } from "@mui/base/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ACTIVE_BG, PRIMARY_CTA } from "../configs/colorConfigs";

type Props = {
  count: number;
};
function BadgeContent() {
  return (
    <Box
      component="span"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        borderRadius: "12px",
        background: (theme) =>
          theme.palette.mode === "dark" ? grey[700] : grey[200],

        verticalAlign: "middle",
      }}
    >
      <ShoppingCartIcon style={{ color: ACTIVE_BG }} />
    </Box>
  );
}
const blue = {
  100: "#DAECFF",
  500: "#007FFF",
  900: "#003A75",
};

const grey = {
  200: "#d0d7de",
  700: "#424a53",
};
const StyledBadge = styled(Badge)(
  ({ theme }) => `
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-variant: tabular-nums;
    list-style: none;
    font-family: IBM Plex Sans, sans-serif;
    position: relative;
    display: inline-block;
    line-height: 1;
  
    & .${badgeClasses.badge} {
      z-index: auto;
      position: absolute;
      top: 0;
      right: 0;
      min-width: 22px;
      height: 22px;
      padding: 0 6px;
      color: #fff;
      font-weight: 600;
      font-size: 12px;
      line-height: 22px;
      white-space: nowrap;
      text-align: center;
      border-radius: 12px;
      background: ${blue[500]};
      box-shadow: 0px 2px 24px ${
        theme.palette.mode === "dark" ? blue[900] : blue[100]
      };
      transform: translate(50%, -50%);
      transform-origin: 100% 0;
    }
    `
);
const NotificationBadge = (props: Props) => {
  const { count } = props;
  const [badgeCount, setBadgeCount] = useState<number>(5);
  return (
    <StyledBadge sx={{ cursor: "pointer" }} badgeContent={count}>
      <BadgeContent />
    </StyledBadge>
  );
};

export default NotificationBadge;
