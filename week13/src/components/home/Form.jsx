import React from 'react'
import { useSetRecoilState } from 'recoil'
import { birthDateAtom, emailAtom, genderAtom, userNameAtom } from '../../recoil/atom'
import styled from 'styled-components';

const Form = ({type, inputType}) => {
    const setUserName = useSetRecoilState(userNameAtom);
    const setEmail = useSetRecoilState(emailAtom);
    const setBirthDate = useSetRecoilState(birthDateAtom);
    const setGender = useSetRecoilState(genderAtom);

    const onChange = (e) => {
        const value = e.target.value;
        if (inputType === '이름'){
            setUserName(value);
        } else if (inputType === '이메일'){
            setEmail(value);
        } else if (inputType === '생년월일'){
            setBirthDate(value);
        } else if (inputType === '성별'){
            setGender(value);
        }
    }

    if(inputType === '성별'){
        return (
            <>
                {inputType}
                <GenderWrapper>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="남자"
                        onChange={onChange}
                    /> 남자
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="여자"
                        onChange={onChange}
                    /> 여자
                </label>
                </GenderWrapper>
            </>
        )
    }


  return (
    <>
        <div>{inputType}</div>
        <input type={type} onChange={onChange}/>
    </>
  )
}

export default Form

const GenderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;