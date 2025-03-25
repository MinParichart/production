import { useAuthStore } from '@/stores/auth';
import apiClient from './AxiosClient'

export default {
  getAdvisors() {
    return apiClient.get('/advisors');
  },
  getAdvisor(id: number) {
    return apiClient.get(`/advisors/${id}`);
  },
  getStudentByAdvisor(id: number) {
    return apiClient.get(`/advisors/advisor-feedback/${id}`);
  },
  async getAdvisorIdByUserId() {
    const authStore = useAuthStore()
    const id = Number(authStore.user?.id)
    const respone = await apiClient.get(`/advisors/advisorid/${id}`);
    return respone.data.advisor_id
  },
};
