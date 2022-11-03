import { Button, HStack, Radio, RadioGroup, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { count } from "../Redux/actions";

const Result = () => {
  const [value, setValue] = useState("");
  const que = JSON.parse(localStorage.getItem("que"));

  useEffect(() => {
    setTimeout(() => {
      if (value === que.correct_answer.split("%20").join(" ")) {
        alert("Your Ans is Correct");
      } else {
        alert("Your ans is incorrect");
      }
    }, 1000);
  }, [que]);

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text fontWeight={"bold"}>
          Question: {que.question.split("%20").join(" ")} ?
        </Text>
        <RadioGroup style={{ display: "flex", flexDirection: "column" }}>
          <Radio
            onChange={(e) => setValue(e.target.value)}
            value={que.correct_answer.split("%20").join(" ")}
          >
            {que.correct_answer.split("%20").join(" ")}
          </Radio>
          <Radio
            onChange={(e) => setValue(e.target.value)}
            value={que.incorrect_answers[0].split("%20").join(" ")}
          >
            {que.incorrect_answers[0].split("%20").join(" ")}
          </Radio>
          <Radio
            onChange={(e) => setValue(e.target.value)}
            value={que.incorrect_answers[1].split("%20").join(" ")}
          >
            {que.incorrect_answers[1].split("%20").join(" ")}
          </Radio>
          <Radio
            onChange={(e) => setValue(e.target.value)}
            value={que.incorrect_answers[2].split("%20").join(" ")}
          >
            {que.incorrect_answers[2].split("%20").join(" ")}
          </Radio>
        </RadioGroup>
        <HStack>
          <Button>NEXT</Button>
          <Button>PREVIOUS</Button>
        </HStack>
      </div>
    </>
  );
};

export default Result;
