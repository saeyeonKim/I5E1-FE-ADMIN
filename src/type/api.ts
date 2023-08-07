export interface IContent {
  annualId: string
  userId: string
  dutyId: string
}
export interface ILogin {
  email: string
  password: string
}
export interface IAnnualList {
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
export interface IDutyList {
  dutyDate: string
  id: number
  reason: string
  status: string
  member: {
    annualCount: number
    email: string
    id: number
    name: string
    position: string
  }
}
export interface IEmployeeList {
  currentPage: number
  members: [
    {
      annualCount: number
      completedDutyCount: number
      createdAt: string
      email: string
      id: number
      name: string
      position: string
      tel: string
    }
  ]
  totalPages: number
}
