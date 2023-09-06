import { createSlice, configureStore } from '@reduxjs/toolkit';

type UserLink = {
  name: string;
  userLink: string;
  linkId: number;
  placeholderLink: string;
  icon: string;
};

const initialState: UserLink[] = [];

const mainStore = createSlice({
  name: 'links',
  initialState,
  reducers: {
    addingNewLink(state) {
      state.push({
        name: 'Github',
        userLink: 'https://www.github.com/hidalest',
        linkId: Math.random(),
        placeholderLink: 'https://www.github.com/hidalest',
        icon: '/src/assets/images/icon-github.svg',
      });
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
