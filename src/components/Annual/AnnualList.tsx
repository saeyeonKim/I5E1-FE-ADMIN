import { theme } from '@styles/theme'
import { styled } from 'styled-components'
import { useAnnualStore } from 'zustandState/store'

const AnnualList = () => {
  const { data } = useAnnualStore()
  console.log('data:', data)

  return (
    <>
      {data.map((el, v) => (
        <ListContainer key={v}>
          <No>{el.id}</No>
          <Name>{el.member.name}</Name>
          <Position>{el.member.position}</Position>
          <Start>{el.startDate}</Start>
          <End>{el.endDate}</End>
          <State>{el.status}</State>
          <BtnArea>
            <Btn>수정</Btn>
          </BtnArea>
        </ListContainer>
      ))}
    </>
  )
}
const ListContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: transparent;
  border-top: 1px solid ${theme.colors.blue.main};
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
const Start = styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const End = styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`
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
`

export default AnnualList
