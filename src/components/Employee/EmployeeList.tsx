import { useEmployeeStore } from 'zustandState/store'
import Item from './Item'

const EmployeeList = () => {
  const { data } = useEmployeeStore()
  // console.log('employeedata:', data)

  return (
    <>
      {data?.members.map((el, v) => (
        <Item data={el} index={v} key={v} />
      ))}
    </>
  )
}

export default EmployeeList
