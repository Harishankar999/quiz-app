import { Box, Button, grid, Radio, RadioGroup, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
const Quiz = () => {
    const navigate = useNavigate();

  const [value, setValue] = useState("");
  const quiz = useSelector((store) => store.rooms);
const handleClick = (el) => {
    localStorage.setItem("que",JSON.stringify(el));
    navigate("/result")
}
  return (
    <Box className={style.container}>
      {quiz
        ? quiz.map((el) => (
            <Box key={el._id} style={{ border: "1px solid red" }}>
              <Text fontWeight={"bold"}>
                Question: {el.question.split("%20").join(" ")} ?
              </Text>
              {/* <RadioGroup style={{ display: "flex", flexDirection: "column" }}>
                <Radio
                  onChange={(e) => setValue(e.target.value)}
                  value={el.correct_answer.split("%20").join(" ")}
                >
                  {el.correct_answer.split("%20").join(" ")}
                </Radio>
                <Radio
                  onChange={(e) => setValue(e.target.value)}
                  value={el.incorrect_answers[0].split("%20").join(" ")}
                >
                  {el.incorrect_answers[0].split("%20").join(" ")}
                </Radio>
                <Radio
                  onChange={(e) => setValue(e.target.value)}
                  value={el.incorrect_answers[1].split("%20").join(" ")}
                >
                  {el.incorrect_answers[1].split("%20").join(" ")}
                </Radio>
                <Radio
                  onChange={(e) => setValue(e.target.value)}
                  value={el.incorrect_answers[2].split("%20").join(" ")}
                >
                  {el.incorrect_answers[2].split("%20").join(" ")}
                </Radio>
              </RadioGroup> */}
              <Button onClick={() => handleClick(el)}>Write Ans</Button>
            </Box>
          ))
        : "Please select another Choice"}
    </Box>
  );
};

export default Quiz;
