import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getQuestions } from '../apis/quizlist';
import { useNavigate } from "react-router-dom";
import { postAnswers } from "../apis/quizlist";

const Quiz = () => {
  const [questions, setquestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await getQuestions();
      setquestions(response);

      const answersArray = response.map((q) => ({
        questionId: q.id,
        answer: "",
      }));
      setAnswers(answersArray);
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (questionId, selectedAnswer) => {
    setAnswers((prev) =>
      prev.map((answer) =>
        answer.questionId === questionId ? { ...answer, answer: selectedAnswer } : answer
      )
    );
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
  const response = await postAnswers({
    answers: answers.map(a => ({ id: a.questionId, answer: a.answer }))
  });

  const score = response.results.filter(r => r.correct).length;
  navigate("/quiz/result", { state: { score } });
};

  return (
    <MenuDom>
      <QuizListDom>
        <Title>Start Quiz📝</Title>
          {questions.map((question, index) => (
          <QuestionBlock key={question.id}>
            <QuestionTitle>{index + 1}. {question.question}</QuestionTitle>
            <AnswersList>
              {question.answers.map((answer, i) => (
                <AnswerItem key={i}>
                    <input
                      type="radio"
                      name={`${question.id}`} 
                      value={answer}
                      checked={answers.find(a => a.questionId === question.id)?.answer === answer}
                      onChange={() => handleAnswer(question.id, answer)}
                    />
                    {answer}
                </AnswerItem>
              ))}
            </AnswersList>
          </QuestionBlock>
        ))}
        <Button onClick={handleSubmit}>퀴즈 제출하기</Button>
      </QuizListDom>
    </MenuDom>
  );
};

export default Quiz;

const MenuDom = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 180vh;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const QuizListDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: white;
  padding: 50px;
  height: 80%;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const QuestionBlock = styled.div`
  margin-bottom: 10px;
  margin-top: 20px;
`;

const QuestionTitle = styled.div`
  font-weight: 600;
  margin-bottom: 12px;
`;

const AnswersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AnswerItem = styled.div`
  label {
    cursor: pointer;
  }
`;

const Button = styled.button`
  background-color: #75b5f5;
  border-radius: 25px;
  width: 100px;
  padding: 10px 20px;
  font-size: 16px;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #9ecfff;
  }
`;  

