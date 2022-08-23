const express = require("express");
const morgan = require("morgan");

const app = express();
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
} = require("./serverHandlers");
app
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

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

  .listen(8000, () => console.log("Listening on port 8000"));
