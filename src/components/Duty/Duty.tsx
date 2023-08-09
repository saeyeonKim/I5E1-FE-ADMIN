import { styled } from 'styled-components'
import Duty_Table from './Duty_Table'
import { useState } from 'react'
import { useDutyStore } from 'zustandState/store'
import { theme } from '@styles/theme'

const Duty = () => {
  const [offset, setOffset] = useState(0)
  const { data, totalCount, currentPage } = useDutyStore()
  console.log('666', data)
  console.log('offset:', offset)
  return (
    <Contain>
      <Duty_Table />
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
                    }}
                  >
                    {index + 1}
                  </PageActiveBtn>
                ) : (
                  <PageBtn
                    onClick={() => {
                      setOffset(index)
                    }}
                  >
                    {index + 1}
                  </PageBtn>
                )}
              </PageLi>
            ))}
        </PageUl>
      </Pagination>
    </Contain>
  )
}
const Contain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Pagination = styled.div`
  width: 80%;
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

export default Duty
