import { styled } from 'styled-components'
import Duty_Table from './Duty_Table'

const Duty = () => {
  return (
    <Contain>
      <Duty_Table />
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

export default Duty
