import React, { useContext } from 'react'
import Form from './Form';
import { useNavigate} from 'react-router-dom'
import { ThemeColorContext } from '../../context/context';
import { Button, Modal, ModalContent, Wrapper } from '../layout/common';
import { useSetRecoilState } from 'recoil';
import { isSubmittedAtom } from '../../recoil/atom';
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
            <p>입력한 정보를 확인해주세요</p>
            <Button mode={mode.button} onClick={closeModal}>다시 입력</Button>
            <Button mode={mode.button} onClick={handleBtn}>확인</Button>
          </ModalContent>
        </Modal>
      )}
    
    </Wrapper>
  )
}

export default FormSection