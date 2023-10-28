"use client";

import { Provider } from "react-redux";
import storee from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(storee);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={storee}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
