const initialState = {
  team: '',
  result: '',
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default filtersReducer;