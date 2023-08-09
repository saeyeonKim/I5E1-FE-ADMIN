import SideBar from '../components/SideBar'
import { styled } from 'styled-components'
import Employee_Table from '@components/Employee/Employee_Table'
import { theme } from '@styles/theme'
import { useEmployeeStore } from 'zustandState/store'
import { useEffect, useState } from 'react'

const Employee = () => {
  const { readEmployee, searchEmployee, currentPage, totalCount } =
    useEmployeeStore()
  const [search, setSearch] = useState('')
  const [offset, setOffset] = useState(0)
  console.log('search:', search)

  useEffect(() => {
    readEmployee(1)
  }, [])
  const onClickSearch = () => {
    searchEmployee(search)
  }
  const OnKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      searchEmployee(search) // Enter 입력이 되면 클릭 이벤트 실행
    }
  }

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
              <Search
                placeholder="사원명을 입력해주세요"
                onChange={(e) => {
                  setSearch(e.target.value)
                }}
                onKeyPress={OnKeyPress}
              />
              <Icon
                src="/imgs/search-icon.png"
                onClick={() => onClickSearch()}
              />
            </SearchWrap>
          </SearchArea>
          <TableArea>
            <Employee_Table />
          </TableArea>
          <PaginationArea>
            <Pagination>
              <PageUl
                onClick={(e) => {
                  if (e.target instanceof HTMLLIElement) {
                    setOffset(currentPage)
                  }
                }}
              >
                {Array(parseInt((totalCount / 10 + 1).toString()))
                  .fill(0)
                  .map((i, index) => (
                    <PageLi key={index} value={i}>
                      {index == offset ? (
                        <PageActiveBtn
                          onClick={() => {
                            setOffset(index)
                            readEmployee(index + 1)
                          }}
                        >
                          {index + 1}
                        </PageActiveBtn>
                      ) : (
                        <PageBtn
                          onClick={() => {
                            setOffset(index)
                            readEmployee(index + 1)
                          }}
                        >
                          {index + 1}
                        </PageBtn>
                      )}
                    </PageLi>
                  ))}
              </PageUl>
            </Pagination>
          </PaginationArea>
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
  cursor: pointer;
`
const TableArea = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PaginationArea = styled.div`
  width: 100%;
  height: 10%;
`
const Pagination = styled.div`
  width: 100%;
  height: 10%;
`
const PageUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const PageLi = styled.li`
  list-style: none;
`
const PageActiveBtn = styled.button`
  width: 35px;
  height: 35px;
  background-color: ${theme.colors.green};
  border: none;
  border-radius: 6px;
  color: ${theme.colors.white};
  cursor: pointer;
`
const PageBtn = styled.button`
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export default Employee
