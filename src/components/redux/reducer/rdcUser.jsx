const initialValue = {
  users: [],
};

const rdcUser = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "ADD_USER": {
      return {
        users: [...state.users, payload],
      };
    }

    default:
      return state;
  }
};

export default rdcUser;
