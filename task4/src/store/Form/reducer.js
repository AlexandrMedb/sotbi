import { Set_FormData } from "./actions";

const initialState = {
  data: [],
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case Set_FormData: {
      const result = { ...state };
      result.data = action.payload;
      return result;
    }

    default: {
      return state;
    }
  }
};
