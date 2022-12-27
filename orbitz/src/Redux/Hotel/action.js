import axios from 'axios';
import * as types from "./actionTypes"



export const searchRequest = (payload) => {
  return {
      type:types.SEARCH_REQUEST,
      payload
  }
}
export const searchSuccess = (payload) => {
  return {
      type: types.SEARCH_SUCCESS,
      payload
  }
}
export const searchFailure = () => {
  return {
      type: types.SEARCH_FAILURE
  }
}

export const getHotelRequest = () => {
  return {
      type: types.GET_HOTEL_REQUEST
  }
}

export const getHotelSuccess = (payload) => {
  return {
      type: types.GET_HOTEL_SUCCESS,
      payload
  }
}

export const getHotelFailure = () => {
  return {
      type: types.GET_HOTEL_FAILURE
  }
}


export const hotel_actions = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

export const hotel_data_request = () => ({
  type: hotel_actions.REQUEST,
});

export const hotel_data_success = (payload) => ({
  type: hotel_actions.SUCCESS,
  payload,
});

export const hotel_data_failure = () => ({
  type: hotel_actions.FAILURE,
});


// export const fetch_hotel_data = (args={})=> (queryParams) => (dispatch) => {
//         const {sortBy="asc" , page=1} = args
//   dispatch(hotel_data_request());
//   axios
//     .get(`https://orbitz-mock-api.onrender.com/hotels?_sort=price&_order=${sortBy}&_page=${page}&_limit=11`,queryParams)
//     .then((res) => {
//       dispatch(hotel_data_success(res.data));
//     })
//     .catch((err) => {
//       dispatch(hotel_data_failure());
//     });
// };


// export const fetch_hotel_data = (queryParams) => (page=1) => (dispatch) => {
//   dispatch(hotel_data_request());
//   axios
//     .get(`https://orbitz-mock-api.onrender.com/hotels?_page=${page}&_limit=11`,queryParams)
//     .then((res) => {
//       dispatch(hotel_data_success(res.data));
//     })
//     .catch((err) => {
//       dispatch(hotel_data_failure());
//     });
// };

export const fetch_hotel_data = (queryParams) => (dispatch) => {
  dispatch(hotel_data_request());
  axios
    .get(`https://orbitz-mock-api.onrender.com/hotels`,queryParams)
    .then((res) => {
      dispatch(hotel_data_success(res.data));
    })
    .catch((err) => {
      dispatch(hotel_data_failure());
    });
};




export const gethotel = (payload)=> (dispatch) => {
    dispatch(getHotelRequest())
    axios.get(`https://orbitz-heroku-data.herokuapp.com/hotels/${payload}`)
        .then((res) => {
            dispatch(getHotelSuccess(res.data));
        })
        .catch((err) => {
            dispatch(getHotelFailure());
        })
}


export const search = (payload) => (dispatch) => {
  dispatch(searchRequest(payload));
  axios.get(`https://orbitz-heroku-data.herokuapp.com/hotels?city=${payload.city}`)
      .then((res) => {
          dispatch(searchSuccess(res.data));
      })
      .catch((err) => {
          dispatch(searchFailure(err));
      })
}
