import { getAnnual, getDuty, getUser } from '@pages/api/api'
import create from 'zustand'
import { IAnnualList, IDutyList, IEmployeeItem, IEmployeeList } from '@type/api'

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
  searchdata: IEmployeeItem[]
  readEmployee: () => void
  searchEmployee: (name: string) => void
}>((set) => ({
  data: undefined,
  searchdata: [],
  readEmployee: () => {
    getUser().then((res) => {
      console.log(res.data)
      set(() => ({ data: res.data }))

      set(() => ({
        searchdata: res.data.members
      }))
    })
  },

  searchEmployee: (name: string) => {
    set((item) => ({
      searchdata: item.data.members.filter((item) => item.name.includes(name))
    }))
  }
}))
