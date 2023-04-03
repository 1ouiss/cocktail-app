import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        padding: "1rem",
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100px",
          height: "100px",
        }}
      >
        <Link to="/">
          <img
            src="../logo192.png"
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
