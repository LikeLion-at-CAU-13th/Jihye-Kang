import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getMyPage } from '../apis/user';
import { useNavigate } from "react-router-dom";

const Mypage = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const navigate= useNavigate();

    useEffect(() => {
        getMyPage(localStorage.getItem("access"))
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            alert("토큰 기한 만료");
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            navigate("/signup");
        })
    }, []);

    if(loading) return <div>로딩중 ...</div>

    const onClick = async () => {
        localStorage.removeItem("access");
        navigate("/");
      };

  return (
    <Wrapper>
        <Title>마이페이지</Title>
        <div>이름 : {data.name}</div>
        <div>나이 : {data.age}</div>
        <button onClick={onClick}>로그아웃</button>
    </Wrapper>
  )
}

export default Mypage

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid #89cdf6;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  width: 300px;
  div {
    font-size: 25px;
  }
    button {
    background-color: skyblue;
    color: white;
    font-weight: 700;
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    border: white;
    margin-top: 15px;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
}
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
