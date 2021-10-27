export default function currentReducer(currentUser = {}, action) {
    switch (action.type) {
      case "CURRENT_USER": {
        return { ...currentUser, ...action.payload };
      }
      default: {
        return { ...currentUser };
      }
    }
  }
  