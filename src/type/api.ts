export interface IContent {
  annualId: string
  userId: string
  dutyId: string
}
export interface ILogin {
  email: string
  password: string
}
export interface IList {
  endDate: string
  id: number
  reason: string
  spentDays: number
  startDate: string
  status: string
  summary: string
  member: {
    annualCount: number
    email: string
    id: number
    name: string
    position: string
  }
}
