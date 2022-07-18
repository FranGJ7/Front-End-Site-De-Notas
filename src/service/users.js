import Api from './api';

const UsersService = {
   register: (params) => Api.post('http://localhost:3001/users/register', params),

   login: async (params) => {
      const response = await Api.post('http://localhost:3001/users/login/', params);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
   },
   logout: () => {
      localStorage.removeItem('user', null);
      localStorage.removeItem('token', null)
   },
   update: async (params) => {
      const response = await Api.put("http://localhost:3001/users", params, {
         headers: { 'x-access-token': localStorage.getItem('token') }
      })
      localStorage.setItem('user', JSON.stringify(response.data));
   },

   updatePassword: async (params) => {
      await Api.put("http://localhost:3001/users/password", params, {
         headers: { 'x-access-token': localStorage.getItem('token') }
      })
   },
   delete: async () => {
      await Api.delete("http://localhost:3001/users", {
         headers: { 'x-access-token': localStorage.getItem('token') }
      })
      localStorage.removeItem('user', null);
      localStorage.removeItem('token', null);
   }
};
export default UsersService;
  




