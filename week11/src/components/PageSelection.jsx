import React from 'react'
import styled from 'styled-components'
import {getPerPage} from '../apis/userlist'

const PageSelection = ({curPage, setCurPage, setUserData, totalPage}) => {
    const handleClick = async(page) => {
        setCurPage(page); 
    }

  return (
    <SelectionLayout>
            {Array.from({ length: totalPage }, (_, i) => (
                <PageBox 
                    key={i}
                    $active={i === curPage}
                    onClick={() => handleClick(i)}
                >
                    {i+1}
                </PageBox>
            ))}
        </SelectionLayout>      
  )
}

export default PageSelection

const SelectionLayout = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
`

const PageBox = styled.div`
    font-size: 2rem;
    color: ${(props) => props.$active ? "#000000" : "#C9C9C9"};
    &:hover{
        cursor: pointer;
        color: white;
    }
`