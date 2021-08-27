import { createStore } from "vuex";
import AxiosClient from "@/api/Axios";
import {employeeInterface} from "@/types"

export interface State{
  loading : boolean
  employees : employeeInterface[]
  selected : employeeInterface | null
}

export default createStore<State> ({
  state: {
    loading: true,
    employees: [],
    selected: null,
  },
  mutations: {
    getEmployees(state, employees : employeeInterface[]) : void {
      state.employees = employees.reverse();
      state.selected = null;
    },
    updateLoading(state, bool : boolean) : void{
      state.loading = bool;
    },
    selectEmployee(state, employee : employeeInterface) {
      state.selected = employee;
    },
  },
  actions: {
    async getEmployees({ commit }) : Promise<void>{
      commit("updateLoading", true);
      const { data } = await AxiosClient.get("/Employees.json");
      const results : employeeInterface[] = [];
      for (const id of Object.keys(data)) {
        results.push({
          id,
          ...data[id],
        });
      }
      commit("getEmployees", results);
      commit("updateLoading", false);
    },
    async selectEmployee({ commit }, id : string): Promise<void> {
      const { data } = await AxiosClient.get(`/Employees/${id}.json`);
      data.id = id;
      commit("selectEmployee", data);
    },
    async setNewEmployee(e, employee : employeeInterface) : Promise<void> {
      await AxiosClient.post("/Employees.json", employee);
    },
    async updateEmployee(e, employee : employeeInterface) : Promise<void> {
      await AxiosClient.put(`/Employees/${employee.id}.json`, employee);
    },
    async deleteEmployee(e, id : string) : Promise<void>{
      await AxiosClient.delete(`/Employees/${id}.json`);
    },
  },
});
