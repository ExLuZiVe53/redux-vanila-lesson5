// створюємо початковий стан state
const INITIAL_STATE = {
  postDetailsData: null,
  isLoading: false,
  error: null,
};

// Ред'юсер це функція яка приймає state, action
export const postDetailsReducer = (state = INITIAL_STATE, action) => {
  // action-> {type: 'postDetails/setIsLoading', payload: true}
  // перевіряємо тип інструкції яка прийшла в наш ред'юсер
  switch (action.type) {
    case 'postDetails/setIsLoading': {
      return {
        ...state,
        // єдиний спосіб коли значення прийдуть це тільки action.payload
        isLoading: action.payload,
      };
    }

    case 'postDetails/setPostDetails': {
      return {
        ...state,
        postDetailsData: action.payload,
      };
    }

    case 'postDetails/setError': {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
