import React, { useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '@styles/theme'
import { useEmployeeStore } from 'zustandState/store'
import { editEmployee, editAnnualCount } from '@pages/api/api'

const Item = ({ data, index }) => {
  const { currentPage, searchCurrent, searchData } = useEmployeeStore()
  const [mode, setMode] = useState(false)
  const [position, setPosition] = useState<string>(data.position)
  const [count, setCount] = useState<number>(data.annualCount)
  const positionList = [
    // 'Intern',
    // 'Staff',
    // 'Assistant Manager',
    // 'Chief',
    // 'Assistant Manager',
    // 'Manager',
    // 'General Manager',
    // 'Deputy General Manager',
    // 'Department Manager',
    // 'Managing Director',
    // 'Senior Managing Director',
    // 'Senior Executive Vice President',
    // 'President  ',
    // 'Vice Chairman',
    // 'Chairman'
    'BOSS',
    'STAFF'
  ]
  const editHandler = () => {
    const res = editEmployee(data.id, position)

    res.then(() => {
      editAnnualCount(data.id, count).then(() => {
        setMode(false)
      })
    })
  }
  console.log('searchcurrent:', searchCurrent)

  return (
    <ListContainer>
      <No>{index + 1 + (searchCurrent - 1) * 10}</No>

      <Name>{data.name}</Name>
      {mode ? (
        <SelectedArea>
          <SelectedPo
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            {positionList.map((el, v) => (
              <option value={el} key={v}>
                {el}
              </option>
            ))}
          </SelectedPo>
        </SelectedArea>
      ) : (
        <Position>{data.position}</Position>
      )}
      <Start>{data.createdAt?.slice(0, 10)}</Start>
      {mode ? (
        <SelectedCount>
          <MinusBtn onClick={() => setCount((el) => el - 1)}>-</MinusBtn>
          <Count>{count}</Count>
          <PlusBtn onClick={() => setCount((el) => el + 1)}>+</PlusBtn>
        </SelectedCount>
      ) : (
        <CountArea>
          <Count>{data.annualCount}</Count>
        </CountArea>
      )}
      <State>{data.completedDutyCount}</State>
      <BtnArea>
        {mode ? (
          <BtnActive onClick={() => editHandler()}>수정</BtnActive>
        ) : (
          <Btn onClick={() => setMode(true)}>수정</Btn>
        )}
      </BtnArea>
    </ListContainer>
  )
}
const ListContainer = styled.div`
  width: 100%;
  height: 10.01%;
  background-color: transparent;
  border-bottom: 1px solid ${theme.colors.blue.main};
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const No = styled.div`
  height: 100%;
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Name = styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Position = styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SelectedArea = styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SelectedPo = styled.select`
  width: 70px;
  height: 30px;
  font-size: 14px;
  outline: none;
  border: 1px solid ${theme.colors.gray};
  border-radius: 6px;
`
const Start = styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SelectedCount = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
`
const PlusBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${theme.colors.blue.main};
  font-size: 20px;
  cursor: pointer;
  margin-top: 2px;
`
const MinusBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${theme.colors.blue.main};
  font-size: 25px;
  cursor: pointer;
`
const CountArea = styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Count = styled.div``
const State = styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BtnArea = styled.div`
  height: 100%;
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Btn = styled.button`
  width: 46px;
  height: 32px;
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid ${theme.colors.gray};
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.blue.main};
    color: ${theme.colors.white};
    border: none;
  }
`

const BtnActive = styled.button`
  width: 46px;
  height: 32px;
  border-radius: 6px;
  background-color: ${theme.colors.blue.main};
  border: none;
  color: ${theme.colors.white};
  cursor: pointer;
`

export default Item
