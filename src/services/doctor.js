import { get } from "../utils"

export const getDoctors = async ()=>{
  const result = await get("doctors");
  return result;
}