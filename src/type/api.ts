export interface ILogin {
  email: string
  password: string
}
export interface IAnnualList {
  endDate: string
  annualId: number
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
  dutyId: number
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

export interface IEmployeeItem {
  annualCount: number
  completedDutyCount: number
  createdAt: string
  email: string
  id: number
  name: string
  position: string
  tel: string
}

export interface IEmployeeList {
  currentPage: number
  members: IEmployeeItem[]
  totalPages: number
}
