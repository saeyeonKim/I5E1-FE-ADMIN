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
  readAnnual: (page: number) => void
}>((set) => ({
  data: [],
  totalCount: 0,
  currentPage: 0,
  readAnnual: (page: number) => {
    getAnnual(page).then((res) => {
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
  readDuty: (page: number) => void
}>((set) => ({
  data: [],
  totalCount: 0,
  currentPage: 0,
  readDuty: (page: number) => {
    getDuty(page).then((res) => {
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
  searchdata: IEmployeeList
  searchCount: number
  searchCurrent: number
  readEmployee: (page: number) => void
  searchData: (name: string, page: number) => void
}>((set) => ({
  data: undefined,
  totalCount: 0,
  currentPage: 0,
  searchdata: undefined,
  searchCurrent: 0,
  searchCount: 0,
  readEmployee: (page: number) => {
    getUser(page).then((res) => {
      console.log('555', res.data)
      set(() => ({
        data: res.data,
        currentPage: res.data.currentPage,
        totalCount: res.data.totalCount
      }))

      set(() => ({
        searchdata: res.data
      }))
    })
  },

  searchData: (query: string, page: number) => {
    searchUser(query, page).then((res) => {
      console.log('searchstore:', res.data)
      set(() => ({
        searchdata: res.data,
        searchCount: res.data.totalCount,
        searchCurrent: res.data.currentPage
      }))
    })
  }
}))
// export const searchEmployeeStore = create<{
//   searchList: ISearchEmployee
//   searchData: (query: string, page: number) => void
// }>((set) => ({
//   searchList: undefined,
//   searchData: (query: string, page: number) => {
//     searchUser(query, page).then((res) => {
//       console.log('searchstore:', res.data)
//       set(() => ({
//         searchList: res.data
//       }))
//     })
//   }
// }))
