import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getResult } from "../apis/quizlist";

const QuizResult = () => {
  const location = useLocation();
  const score = location.state?.score;
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
        const data = await getResult(score);
        setResultData(data);
      };
    fetchResult();
  }, [score]);

  return (
    <div style={{ padding: "40px" }}>
      <h1>퀴즈 결과</h1>
      <p>당신의 점수는 {score}점입니다.</p>
      
      <p>{resultData?.message || "결과를 불러오는 중입니다..."}</p>
    </div>
  );
};

export default QuizResult;
