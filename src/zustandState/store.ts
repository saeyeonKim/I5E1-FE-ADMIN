import { getAnnual, getDuty, getUser } from '@pages/api/api'
import create from 'zustand'
import { IAnnualList, IDutyList, IEmployeeList } from '@type/api'

export const useAnnualStore = create<{
  data: IAnnualList[]
  readAnnual: () => void
}>((set) => ({
  data: [],
  readAnnual: () => {
    getAnnual().then((res) => {
      console.log(res.data.annuals)
      set(() => ({ data: res.data.annuals }))
    })
  }
}))
export const useDutyStore = create<{ data: IDutyList[]; readDuty: () => void }>(
  (set) => ({
    data: [],
    readDuty: () => {
      getDuty().then((res) => {
        console.log(res.data.duties)
        set(() => ({ data: res.data.duties }))
      })
    }
  })
)
export const useEmployeeStore = create<{
  data: IEmployeeList
  readEmployee: () => void
}>((set) => ({
  data: undefined,
  readEmployee: () => {
    getUser().then((res) => {
      console.log(res.data)
      set(() => ({ data: res.data }))
    })
  }
}))
