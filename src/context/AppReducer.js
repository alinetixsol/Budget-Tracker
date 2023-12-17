export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload.data],
      };
      case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(item => item?.id != action.payload),
      };
    default:
      return state;
  }
};
