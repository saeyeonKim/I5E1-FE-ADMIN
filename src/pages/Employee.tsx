import SideBar from '../components/SideBar'
import { styled } from 'styled-components'
import Employee_Table from '../components/Employee_Table'
import { theme } from '@styles/theme'

const Employee = () => {
  return (
    <Wrap>
      <SideBar active={false} />
      <MainArea>
        <LogoArea>
          <Logo src="/imgs/logo.png" />
        </LogoArea>
        <Main>
          <SearchArea>
            <SearchWrap>
              <Search placeholder="사원명을 입력해주세요" />
              <Icon src="/imgs/search-icon.png" />
            </SearchWrap>
          </SearchArea>
          <TableArea>
            <Employee_Table />
          </TableArea>
          <PaginationArea></PaginationArea>
        </Main>
      </MainArea>
    </Wrap>
  )
}
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`
const MainArea = styled.div`
  width: 100%;
  height: 100%;
`
const LogoArea = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  margin-left: 10px;
`
const Main = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const SearchArea = styled.div`
  width: 100%;
  height: 10%;
  padding: 0 85px;
  display: flex;
  align-items: center;
`
const SearchWrap = styled.div`
  width: 270px;
  height: 45px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
`
const Search = styled.input`
  outline: none;
  font-size: 15px;
  height: 100%;
  width: 230px;
  border: none;
`
const Icon = styled.img`
  width: 24px;
  height: 24px;
`
const TableArea = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PaginationArea = styled.div`
  width: 100%;
  height: 10%;
`

export default Employee
