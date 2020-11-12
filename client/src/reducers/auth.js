const initialState = ['aaa', 'bbbb'];

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log('Reducer');
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        LOGIN: payload,
      };

    default:
      return state;
  }
}
