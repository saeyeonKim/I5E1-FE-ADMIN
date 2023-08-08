import { theme } from '@styles/theme'
import { useState } from 'react'
import { styled } from 'styled-components'
import { useEmployeeStore } from 'zustandState/store'
import Item from './Item'

const EmployeeList = () => {
  const { searchdata } = useEmployeeStore()
  console.log('employeedata:', searchdata)

  return (
    <>
      {searchdata?.map((el, v) => (
        <Item data={el} index={v} key={v} />
      ))}
    </>
  )
}

export default EmployeeList
