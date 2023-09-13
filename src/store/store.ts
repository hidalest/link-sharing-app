import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

type UserLink = {
  name: string;
  userLink: string;
  linkId: string;
  placeholderLink: string;
  icon: string;
  isValid: boolean;
};

type AppState = {
  links: UserLink[];
};

type PayloadReplaceLink = {
  linkId: string;
  findPlatform: UserLink;
};

type updateUserLinkProps = {
  linkId: string;
  inputValue: string;
};
const initialState: AppState = {
  links: [],
};

const mainStore = createSlice({
  name: 'links',
  initialState,
  reducers: {
    addingNewLink(state) {
      state.links.push({
        name: 'Github',
        userLink: '',
        linkId: Math.random().toString(),
        placeholderLink: 'https://www.github.com/hidalest',
        icon: '/src/assets/images/icon-github.svg',
        isValid: false,
      });
    },

    removeLink(state, action: PayloadAction<string>) {
      state.links = state.links.filter(
        (link) => link.linkId !== action.payload
      );
    },

    updateTheLinkPlatform(state, action: PayloadAction<PayloadReplaceLink>) {
      const { linkId, findPlatform } = action.payload;
      const linkFound = state.links.find((link) => link.linkId === linkId);
      if (linkFound) {
        linkFound.name = findPlatform.name;
        linkFound.placeholderLink = findPlatform.placeholderLink;
        linkFound.icon = findPlatform.icon;
        linkFound.userLink = findPlatform.userLink;
      }
    },
    updateTheUserLink(state, action: PayloadAction<updateUserLinkProps>) {
      const { linkId, inputValue } = action.payload;
      const linkFound = state.links.find((link) => link.linkId === linkId);
      if (linkFound) {
        linkFound.userLink = inputValue;
        linkFound.isValid = true;
      }
    },

    updateWholeLinksOrder(state, action: PayloadAction<UserLink[]>) {
      state.links = action.payload;
    },
  },
});

// Use the PayloadAction type to declare the contents of `action.payload`
/*incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      },*/

const store = configureStore({
  reducer: {
    links: mainStore.reducer,
    //anotherSlice: ....
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const linkActions = mainStore.actions;

export default store;
