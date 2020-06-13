import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  return persistReducer(
    {
      key: "plataforma",
      storage,
      whitelist: ["auth", "user"],
    },
    reducers
  );
};
