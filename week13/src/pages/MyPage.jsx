import React, { useContext } from 'react'
import { Button, Title, Wrapper } from '../components/layout/common'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { ThemeColorContext } from '../context/context';
import { birthDateAtom, emailAtom, genderAtom, isSubmittedAtom, userNameAtom } from '../recoil/atom';
import { useNavigate} from 'react-router-dom'
import { useModal } from '../context/modalcontext';

const MyPage = () => {
  const userName = useRecoilValue(userNameAtom);
  const mode = useContext(ThemeColorContext);

  const navigate = useNavigate();
  const resetUserName = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const resetIsSubmitted = useResetRecoilState(isSubmittedAtom);
  const resetBirthDate = useResetRecoilState(birthDateAtom);
  const resetGender = useResetRecoilState(genderAtom);

  const { isOpen, openModal, closeModal } = useModal();
  const resetModal = closeModal;

  const handleReset = () => {
    resetUserName();
    resetEmail();
    resetIsSubmitted();
    resetModal();
    resetBirthDate();
    resetGender();
    navigate("/");
  }

  return (
    <Wrapper>
      <Title>Welcome {userName}!</Title>
      <Button mode={mode.button} onClick={handleReset}>
        Reset
      </Button>
    </Wrapper>
  )
}

export default MyPage