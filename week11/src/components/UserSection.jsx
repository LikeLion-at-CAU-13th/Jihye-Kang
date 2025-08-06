import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import UserCard from './UserCard'
import PageSelection from './PageSelection'
import { getPerPage } from '../apis/userlist'

const UserSection = ({filter, userData, curPage, setUserData, setCurPage}) => {
  const [allUserData, setAllUserData] = useState([]); // 전체 데이터

  useEffect(() => {
    const fetchAll = async () => {
      const res = await getPerPage(0); 
      setAllUserData(res);
      setUserData(res.slice(0, 5)); 
    };
    fetchAll();
  }, []);

  useEffect(() => {
    const offset = curPage * 5;
    setUserData(allUserData.slice(offset, offset + 5));
  }, [curPage, allUserData]);

  return (
    <UserSecLayout>
        <UserCardBox>
            { userData.map((data, idx) => <UserCard key={idx} data={data} />) }
        </UserCardBox>
        {filter === "all" && <PageSelection curPage={curPage} setCurPage={setCurPage} setUserData={setUserData} totalPage={Math.ceil(allUserData.length / 5)} />}
    </UserSecLayout>
  )
}

export default UserSection

const UserSecLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const UserCardBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`