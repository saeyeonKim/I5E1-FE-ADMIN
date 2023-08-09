import { getAnnual, getDuty, getUser, searchUser } from '@pages/api/api'
import create from 'zustand'
import {
  IAnnualList,
  IDutyList,
  IEmployeeItem,
  IEmployeeList,
  ISearchEmployee
} from '@type/api'

export const useAnnualStore = create<{
  data: IAnnualList[]
  totalCount: number
  currentPage: number
  readAnnual: () => void
}>((set) => ({
  data: [],
  totalCount: 0,
  currentPage: 0,
  readAnnual: () => {
    getAnnual().then((res) => {
      console.log('111111111', res.data)
      set(() => ({
        data: res.data.annuals,
        totalCount: res.data.totalCount,
        currentPage: res.data.currentPage
      }))
    })
  }
}))
export const useDutyStore = create<{
  data: IDutyList[]
  totalCount: number
  currentPage: number
  readDuty: () => void
}>((set) => ({
  data: [],
  totalCount: 0,
  currentPage: 0,
  readDuty: () => {
    getDuty().then((res) => {
      console.log('222', res.data)
      set(() => ({
        data: res.data.duties,
        totalCount: res.data.totalCount,
        currentPage: res.data.currentPage
      }))
    })
  }
}))
export const useEmployeeStore = create<{
  data: IEmployeeList
  totalCount: number
  currentPage: number
  // searchdata: IEmployeeItem[]
  readEmployee: () => void
  // searchEmployee: (name: string) => void
}>((set) => ({
  data: undefined,
  totalCount: 0,
  currentPage: 0,
  // searchdata: [],
  readEmployee: () => {
    getUser().then((res) => {
      // console.log(res.data)
      set(() => ({
        data: res.data,
        currentPage: res.data.currentPage,
        totalCount: res.data.totalCount
      }))

      // set(() => ({
      //   searchdata: res.data.members
      // }))
    })
  }

  // searchEmployee: (name: string) => {
  //   set((item) => ({
  //     searchdata: item.data.members.filter((item) => item.name.includes(name))
  //   }))
  // }
}))
export const searchEmployeeStore = create<{
  data: ISearchEmployee
  searchData: (query: string) => void
}>((set) => ({
  data: undefined,
  searchData: (query: string) => {
    searchUser(query).then((res) => {
      console.log('searchstore:', res.data)
      set(() => ({
        data: res.data
      }))
    })
  }
}))
