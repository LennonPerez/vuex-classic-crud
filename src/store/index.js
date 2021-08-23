import { createStore } from "vuex";
import AxiosClient from "@/api/Axios";

export default createStore({
  state: {
    loading: true,
    employees: [],
    selected: null,
    form: false,
  },
  mutations: {
    getEmployees(state, employees) {
      state.employees = employees.reverse();
      state.selected = null;
    },
    updateLoading(state, bool) {
      state.loading = bool;
    },
    selectEmployee(state, employee) {
      state.selected = employee;
    },
    openForm(state, bool) {
      state.form = bool;
    },
  },
  actions: {
    async getEmployees({ commit }) {
      commit("updateLoading", true);
      const { data } = await AxiosClient.get("/Employees.json");
      const results = [];
      for (let id of Object.keys(data)) {
        results.push({
          id,
          ...data[id],
        });
      }
      commit("getEmployees", results);
      commit("updateLoading", false);
    },
    async selectEmployee({ commit }, id) {
      const { data } = await AxiosClient.get(`/Employees/${id}.json`);
      data.id = id;
      commit("selectEmployee", data);
    },
    async setNewEmployee(e, employee) {
      await AxiosClient.post("/Employees.json", employee);
    },
    async updateEmployee(e, employee) {
      await AxiosClient.put(`/Employees/${employee.id}.json`, employee);
    },
    async deleteEmployee(e, id) {
      await AxiosClient.delete(`/Employees/${id}.json`);
    },
  },
});
