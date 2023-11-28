const initialState = {
  customers: [],
};

// action = {
//     type: "ADD CASH",
//     payload: 1000000
// }

const ADD_CUSTOMER = "ADD CUSTOMER";
const DEL_CUSTOMER = "DEL CUSTOMER";

export const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    // break

    case DEL_CUSTOMER:
      console.log("Длина массива до удаления: ", state.customers.length);

      state.customers = state.customers.filter(
        (item) => item !== action.payload
      );

      console.table(state.customers);
      console.log("Длина массива после удаления: ", state.customers.length);

      return state;

    default:
      return state;
  }
};

export const addCustomer = (payload) => ({ type: ADD_CUSTOMER, payload });
export const delCustomer = (payload) => ({ type: DEL_CUSTOMER, payload });
