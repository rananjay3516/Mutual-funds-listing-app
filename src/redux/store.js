import { createStore} from 'redux';

//Action Creator
const setUser = (user) => {
  return {
    type: "SIGNUP",
    payload: {
      username: user.username,
      password: user.password,
    },
  };
};

//Reducer
const initialState = {
  username: "",
  password: "",
};

const loggeduser = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

//store
export const store = createStore(loggeduser);
