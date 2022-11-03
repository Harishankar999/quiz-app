import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <Link to={"/"}>Home</Link>
    </Box>
  );
};

export default Navbar;
