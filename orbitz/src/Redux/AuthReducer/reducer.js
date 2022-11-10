
import { LocalData, saveData } from '../../Utilis/LocalData'
import { auth_actions } from './action';
const initialState = {
    isAuth: LocalData('token') === "" ? false : true,
    token: LocalData("token") || "",
    user:LocalData("token") || "admin",
    isLoading: false,
    isError: false,

}
export const auth_reducer = (state = initialState, action) => {
  switch (action.type) {
    case auth_actions.REQUEST:
      return { ...state, isLoading: true, auth: false };
    case auth_actions.SUCCESS:
      return { ...state, isLoading: false, auth: true, data:action.payload };
    case auth_actions.FAILURE:
      return { ...state, isLoading: false, auth: false, isError: true };
    default:
      return state;
  }
};