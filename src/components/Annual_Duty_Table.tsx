import { styled } from 'styled-components'
import List from './List'
import { theme } from '@styles/theme'

const Annual_Duty_Table = () => {
  return (
    <TableArea>
      <NameArea>
        <p>No.</p>
        <p>사원명</p>
        <p>직급</p>
        <p>신청 일자</p>
        <p>마감 일자</p>
        <p>처리 상태</p>
        <p></p>
      </NameArea>
      <ContentArea>
        <List />
      </ContentArea>
    </TableArea>
  )
}
const TableArea = styled.div`
  width: 1400px;
  height: 670px;
  border: 1px solid ${theme.colors.blue.main};
  border-radius: 20px;
`
const NameArea = styled.div`
  width: 100%;
  height: 9.1%;
  background-color: ${theme.colors.blue.main};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  justify-content: space-around;
  color: ${theme.colors.white};
  align-items: center;
  font-size: 16px;
  letter-spacing: -0.05rem;
`
const ContentArea = styled.div`
  width: 100%;
  height: 90.9%;
  background-color: aliceblue;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`
export default Annual_Duty_Table
