export default function authReducer(user = {}, action) {
  switch (action.type) {
    case "ADD_USER": {
      return { ...user, ...action.payload };
    }
    default: {
      return { ...user };
    }
  }
}
