import { styled } from 'styled-components'

interface ListType {
  NO: number
  직급: string
  사원명: string
  신청일자: string
  마감일자: string
  처리상태: string
}

const List = () => {
  //더미데이터
  const Dumy = [
    {
      NO: 1,
      사원명: '김세연1',
      직급: '사원',
      신청일자: '2023.08.08',
      마감일자: '2023.08.09',
      처리상태: '미승인'
    },
    {
      NO: 2,
      사원명: '김세연2',
      직급: '사원',
      신청일자: '2023.08.08',
      마감일자: '2023.08.09',
      처리상태: '미승인'
    },
    {
      NO: 3,
      사원명: '김세연3',
      직급: '사원',
      신청일자: '2023.08.08',
      마감일자: '2023.08.09',
      처리상태: '미승인'
    }
  ]
  return (
    <>
      {Dumy.map((el, v) => {
        ;<>
          <ListContainer key={v}>
            <p>{el.NO}</p>
            <p>{el.사원명}</p>
            <p>{el.직급}</p>
            <p>{el.신청일자}</p>
            <p>{el.마감일자}</p>
            <p>{el.처리상태}</p>
            <p></p>
          </ListContainer>
        </>
      })}
    </>
  )
}
const ListContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: transparent;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default List
