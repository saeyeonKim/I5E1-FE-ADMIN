import { getAnnual, getDuty, getUser } from '@pages/api/api'
import create from 'zustand'
import { IAnnualList, IDutyList, IEmployeeItem, IEmployeeList } from '@type/api'

export const useAnnualStore = create<{
  data: IAnnualList[]
  currentPage: number
  readAnnual: () => void
}>((set) => ({
  data: [],
  currentPage: 0,
  readAnnual: () => {
    getAnnual().then((res) => {
      console.log('111111111', res.data)
      set(() => ({ data: res.data.annuals, currentPage: res.data.currentPage }))
    })
  }
}))
export const useDutyStore = create<{
  data: IDutyList[]
  currentPage: number
  readDuty: () => void
}>((set) => ({
  data: [],
  currentPage: 0,
  readDuty: () => {
    getDuty().then((res) => {
      console.log(res.data)
      set(() => ({ data: res.data.duties, currentPage: res.data.currentPage }))
    })
  }
}))
export const useEmployeeStore = create<{
  data: IEmployeeList
  currentPage: number
  searchdata: IEmployeeItem[]
  readEmployee: () => void
  searchEmployee: (name: string) => void
}>((set) => ({
  data: undefined,
  currentPage: 0,
  searchdata: [],
  readEmployee: () => {
    getUser().then((res) => {
      console.log(res.data)
      set(() => ({ data: res.data, currentPage: res.data.currentPage }))

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
