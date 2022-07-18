import Api from './api';

 const NotesService = {
   index: () => Api.get('http://localhost:3001/notes', {
      headers: { 'x-acess-token': localStorage.getItem('token') }
   }),
   create: () => Api.post('http://localhost:3001/notes', { 'title': 'Nova nota', 'body': 'Nova nota...' }, {
      headers: { 'x-acess-token': localStorage.getItem('token') }
   }),
   delete: (id) => Api.delete(`http://localhost:3001/notes/${id}`, {
      headers: { 'x-acess-token': localStorage.getItem('token') }
   }),
   update: (id, params) => Api.put(`http://localhost:3001/notes/${id}`, params, {
      headers: { 'x-acess-token': localStorage.getItem('token') }
   }),
   search: (query) => Api.get(`http://localhost:3001/notes/search?query=${query}`, {
      headers: { 'x-acess-token': localStorage.getItem('token') }
   })
}
export default NotesService

