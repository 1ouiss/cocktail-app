import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      component={"header"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
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
          width: "60px",
          height: "60px",
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

      <Box
        component={"nav"}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Box>
          <Link to="/">Home</Link>
        </Box>
        <Box>
          <Link to="/cocktails">Cocktails</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
