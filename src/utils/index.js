const API_DOMAIN ="http://localhost:3002/";
 export const get = async ()=>{
  const response = await fetch('/database/database.json');
  const result = await response.json();
  return result.doctors;
 }