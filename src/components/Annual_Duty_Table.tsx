import { styled } from 'styled-components'

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
    </TableArea>
  )
}
const TableArea = styled.div`
  width: 1400px;
  height: 670px;
  border: 1px solid #0474e4;
  border-radius: 20px;
`
const NameArea = styled.div`
  width: 100%;
  height: 9.1%;
  background-color: #0474e4;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  justify-content: space-around;
  color: #ffffff;
  align-items: center;
  font-size: 16px;
  letter-spacing: -0.05rem;
`
export default Annual_Duty_Table
