import React, { useContext } from 'react'
import Form from './Form';
import { useNavigate} from 'react-router-dom'
import { ThemeColorContext } from '../../context/context';
import { Button, FormWrapper, Modal, ModalContent, SubmitWrapper, Wrapper } from '../layout/common';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { emailAtom, isSubmittedAtom, userNameAtom } from '../../recoil/atom';
import { useModal } from '../../context/modalcontext';


const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();

    const setItSubmitted = useSetRecoilState(isSubmittedAtom);

    const { isOpen, openModal, closeModal } = useModal();

    const handleBtn = () => {
        setItSubmitted(true);
        navigate('/mypage');
    }

    const userName = useRecoilValue(userNameAtom);
    const userEmail = useRecoilValue(emailAtom);

  return (
    <Wrapper>
        <Form type='home' inputType='이름'/>
        <Form type='email' inputType='이메일'/>
        <Button mode={mode.button} onClick={openModal}>
            제출
        </Button>
        {isOpen && (
        <Modal>
          <ModalContent>
            <strong>입력한 정보를 확인해주세요</strong>
            <FormWrapper>
            <div>이름 : {userName}</div>
            <div>이메일 : {userEmail}</div>
            </FormWrapper>
            <SubmitWrapper>
            <Button mode={mode.button} onClick={closeModal}>다시 입력</Button>
            <Button mode={mode.button} onClick={handleBtn}>확인</Button>
            </SubmitWrapper>
          </ModalContent>
        </Modal>
      )}
    
    </Wrapper>
  )
}

export default FormSection