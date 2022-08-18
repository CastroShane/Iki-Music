import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { EditorialContextProvider } from "./component/context/EditorialContext";
import { GenreContextProvider } from "./component/context/GenreContext";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <EditorialContextProvider>
        <GenreContextProvider>
          <App />
        </GenreContextProvider>
      </EditorialContextProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
