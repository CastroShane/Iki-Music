const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8000;
const {
  getGenres,
  getEditorial,
  getNewReleases,
  addNewUser,
  verifyUser,
  addGoogleUser,
  updateFavorites,
  getOneArtist,
  getArtistAlbums,
  getArtistRelated,
  getArtistTopSongs,
  getAlbum,
  getGenreArtists,
  getPlaylist,
  searchForArtist,
  searchForAlbums,
  searchForSongs,
} = require("./serverHandlers");

app
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, OPTIONS"
    );
    next();
  })
  // erndpoints

  .get("/all-genres", getGenres)
  .get("/editorial", getEditorial)
  .get("/new-releases", getNewReleases)
  .get("/artist/:id", getOneArtist)
  .get("/artist/:id/albums", getArtistAlbums)
  .get("/artist/:id/related", getArtistRelated)
  .get("/artist/:id/top", getArtistTopSongs)
  .get("/genre/:id/artists", getGenreArtists)
  .get("/album/:id", getAlbum)
  .get("/playlist/:id", getPlaylist)
  .get("/search-artist", searchForArtist)
  .get("/search-albums", searchForAlbums)
  .get("/search-songs", searchForSongs)

  .post("/sign-up", addNewUser)
  .post("/sign-in", verifyUser)
  .post("/google-signin", addGoogleUser)

  .post("/favorites", updateFavorites)

  .get("/test", (req, res) => {
    res.send("I'm working!");
  })

  // handle 404s
  .use((req, res) =>
    res.status(404).type("txt").send("There is something wrong :(")
  )

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
