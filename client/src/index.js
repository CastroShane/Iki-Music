import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { EditorialContextProvider } from "./component/context/EditorialContext";
import { GenreContextProvider } from "./component/context/GenreContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { CurrentUserContextProvider } from "./component/context/CurrentUserContext";
import { FavoritesContextProvider } from "./component/context/FavoritesContext";
import { ArtistContextProvider } from "./component/context/ArtistContext";
import { AlbumContextProvider } from "./component/context/AlbumContext";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <CurrentUserContextProvider>
        <EditorialContextProvider>
          <GenreContextProvider>
            <FavoritesContextProvider>
              <ArtistContextProvider>
                <AlbumContextProvider>
                  <App />
                </AlbumContextProvider>
              </ArtistContextProvider>
            </FavoritesContextProvider>
          </GenreContextProvider>
        </EditorialContextProvider>
      </CurrentUserContextProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
