import apiClient from './AxiosClient'
export default {
  getAppointments() {
    return apiClient.get('/appointments');
  },
  getAppointment(id: number) {
    return apiClient.get(`/appointments/${id}`);
  },
  getAppointmentByAdvisorId(id: number) {
    return apiClient.get(`/appointments/appointment-advisor/${id}`);
  },
};
