import axios from 'axios';


export const register = (account,password,invitecode) =>{
   return axios.post('http://localhost:3000/auth/register',{
      account,
      password,
      invitecode,
   });
}
export const login = (account,password) =>{
   return axios.post('http://localhost:3000/auth/login',{
      account,
      password,
   })
}
export const newinvite = (account,password) =>{
   return axios.post('http://localhost:3000/invite/add',{
      account,
      password,
   })
}