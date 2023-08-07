import { getAnnual, getDuty } from '@pages/api/api'
import create from 'zustand'
import { IList } from '@type/api'

export const useAnnualStore = create<{
  data: IList[]
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
export const useDutyStore = create<{ data: IList[]; readDuty: () => void }>(
  (set) => ({
    data: [],
    readDuty: () => {
      getDuty().then((res) => {
        console.log(res.data.dutys)
        set(() => ({ data: res.data.annuals }))
      })
    }
  })
)
