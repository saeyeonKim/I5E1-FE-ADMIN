import axios from 'axios'
import { IContent, ILogin } from '@type/api'

// API 공통 영역 변수
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

// 로그인
const login = async ({ email, password }: ILogin) => {
  const res = await api({
    method: 'POST',
    url: '/login',
    data: { email, password }
  })
  return res.data
}

// 모든 연차 조회
const getAnnual = async () => {
  const res = await api.get(`/annual?page=${1}`)
  return res.data
}
// 연차 수정
const editAnnual = async (annualId: IContent) => {
  const res = await api.put(`/annual/${annualId}`)
  return res.data
}
// 연차 삭제
const deleteAnnual = async (annualId: IContent) => {
  const res = await api.delete(`/annual/${annualId}`)
}
// 모든 당직 조회
const getDuty = async () => {
  const res = await api.get(`/duty?page=${1}`)
  return res.data
}
// 당직 수정
const editDuty = async (dutyId: IContent) => {
  const res = await api.put(`/duty/${dutyId}`)
  return res.data
}
// 당직 삭제
const deleteDuty = async (dutyId: IContent) => {
  const res = await api.delete(`/duty/${dutyId}`)
  return res.data
}
// 모든 회원 조회
const getUser = async () => {
  const res = await api.get(`/user?page=${1}`)
  return res.data
}
// 회원 직급 조정
const editEmployee = async (userId: IContent) => {
  const res = await api.patch(`/position/${userId}`)
  return res.data
}
// 회원 연차횟수 조정
const editAnnualCount = async (userId: IContent) => {
  const res = await api.get(`/annual/${userId}`)
  return res.data
}

export {
  login,
  getAnnual,
  getDuty,
  getUser,
  editAnnual,
  deleteAnnual,
  editDuty,
  deleteDuty,
  editEmployee,
  editAnnualCount
}
