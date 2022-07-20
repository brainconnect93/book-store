const CHECK_STATUS = 'CHECK_STATUS';

export const checkBookStatus = () => ({
  type: CHECK_STATUS,
});

const categories = [];

export default (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state, 'Under construction',
      ];
    default:
      return state;
  }
};
