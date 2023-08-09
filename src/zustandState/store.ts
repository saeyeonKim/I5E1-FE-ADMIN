import { getAnnual, getDuty, getUser, searchUser } from '@pages/api/api';
import create from 'zustand';
import {
  IAnnualList,
  IDutyList,
  IEmployeeItem,
  IEmployeeList,
  ISearchEmployee,
} from '@type/api';

export const useAnnualStore = create<{
  data: IAnnualList[];
  totalCount: number;
  currentPage: number;
  updateDataStatus: (annualId: number, status: string) => void;
  readAnnual: (page: number) => void;
}>((set) => ({
  data: [],
  totalCount: 0,
  currentPage: 0,
  updateDataStatus: (annualId: number, status: string) => {
    set((state) => ({
      data: state.data.map((el) =>
        el.annualId === annualId ? { ...el, status } : el
      ),
    }));
  },
  readAnnual: (page: number) => {
    getAnnual(page).then((res) => {
      set({
        data: res.data.annuals,
        totalCount: res.data.totalCount,
        currentPage: res.data.currentPage,
      });
    });
  },
}));

export const useDutyStore = create<{
  data: IDutyList[];
  totalCount: number;
  currentPage: number;
  updateDataStatus: (dutyId: number, status: string) => void;
  readDuty: (page: number) => void;
}>((set) => ({
  data: [],
  totalCount: 0,
  currentPage: 0,
  updateDataStatus: (dutyId: number, status: string) => {
    set((state) => ({
      data: state.data.map((el) =>
        el.dutyId === dutyId ? { ...el, status } : el
      ),
    }));
  },
  readDuty: (page: number) => {
    getDuty(page).then((res) => {
      set({
        data: res.data.duties,
        totalCount: res.data.totalCount,
        currentPage: res.data.currentPage,
      });
    });
  },
}));

export const useEmployeeStore = create<{
  data: IEmployeeList | undefined;
  totalCount: number;
  currentPage: number;
  searchdata: IEmployeeItem[];
  updateDataStatus: (id: number, updatedData: Partial<IEmployeeItem>) => void;
  searchEmployee: (name: string) => void;
  readEmployee: (page: number) => void;
}>((set) => ({
  data: undefined,
  totalCount: 0,
  currentPage: 0,
  searchdata: [],
  updateDataStatus: (id: number, updatedData: Partial<IEmployeeItem>) => {
    set((state) => ({
      data: state.data
        ? {
            ...state.data,
            members: state.data.members.map((item) =>
              item.id === id ? { ...item, ...updatedData } : item
            ),
          }
        : undefined,
    }));
  },
  readEmployee: (page: number) => {
    getUser(page).then((res) => {
      set({
        data: res.data,
        totalCount: res.data.totalCount,
        currentPage: res.data.currentPage,
        searchdata: res.data.members,
      });
    });
  },
  searchEmployee: (name: string) => {
    set((state) => ({
      searchdata: state.data
        ? state.data.members.filter((item) => item.name.includes(name))
        : [],
    }));
  },
}));

export const searchEmployeeStore = create<{
  data: ISearchEmployee | undefined;
  searchData: (query: string) => void;
}>((set) => ({
  data: undefined,
  searchData: (query: string) => {
    searchUser(query).then((res) => {
      set({ data: res.data });
    });
  },
}));
