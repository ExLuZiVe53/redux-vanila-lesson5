// створюємо початковий стан state
const INITIAL_STATE = {
  postDetails: null,
  isLoading: false,
  error: null,
};

// Ред'юсер це функція яка приймає state, action
export const postDetailsReducer = (state = INITIAL_STATE, action) => {
  // повертає або змінений state, або незмінений state
};
