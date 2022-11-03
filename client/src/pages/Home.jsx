import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/actions";
const Home = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [limit, setLimit] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function apiCall() {
    let data = await fetch(
      `https://tranquil-coast-78078.herokuapp.com/quiz?category=${category}&difficulty=${difficulty}&limit=${limit}`
    );
    data = await data.json();
    dispatch(getData(data));
    console.log(data);
    navigate("/quiz");
  }
  return (
    <Box>
      <Navbar />
      <Text>Set up Your Quiz</Text>

      <Input placeholder="Enter Your Name" />
      <Select
        placeholder="Select Category"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="History">History</option>
        <option value="General%20Knowledge">General Knowledge</option>
        <option value="Sports">Sports</option>
        <option value="Art">Art</option>
      </Select>
      <Select
        placeholder="Select Difficulty"
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="easy">EASY</option>
        <option value="medium">MEDIUM</option>
        <option value="hard">HARD</option>
      </Select>
      <Input
        placeholder="Choose Number of Question"
        onChange={(e) => setLimit(e.target.value)}
      />
      <Button onClick={apiCall}>START QUIZ</Button>
    </Box>
  );
};

export default Home;
