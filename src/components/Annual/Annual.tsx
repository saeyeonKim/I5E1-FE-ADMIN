import { styled } from 'styled-components'
import Annual_Table from './Annual_Table'

const Annual = () => {
  return (
    <Contain>
      <Annual_Table />
    </Contain>
  )
}
const Contain = styled.div`
  width: 100%;
  height: 93%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Annual
