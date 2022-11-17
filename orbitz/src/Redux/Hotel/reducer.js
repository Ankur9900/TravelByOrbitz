import { hotel_actions } from "./action";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};


export const hotelReducer = (state = initialState, action) => {

  switch (action.type) {
    case hotel_actions.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case hotel_actions.SUCCESS:
      return { 
        ...state,
         isLoading: false, 
        data: action.payload
       };
    case hotel_actions.FAILURE:
      return { 
        ...state,
         isLoading: false, 
         isError: true
       };
    default:
      return state;
  }

};
