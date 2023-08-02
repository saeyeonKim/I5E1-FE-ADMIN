import { styled } from 'styled-components'

const Employee_Table = () => {
  return (
    <TableArea>
      <NameArea>
        <p>No.</p>
        <p>사원명</p>
        <p>직급</p>
        <p>입사 일자</p>
        <p>잔여 연차</p>
        <p>수행한 당직 일수</p>
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
export default Employee_Table
