export const getMoviesTitle = async (titleMovie) => {
  const url = `https://www.omdbapi.com/?apikey=89747369&type=movie&s=${titleMovie}`;
  let response = {
    films: [],
    hasError: false
  };
  try {
    const resp = await fetch(url);
    const { Search, Response, Error } = await resp.json();

    if (Response == "True") {
      response.films = Search.slice(0, 5).map((film) => ({
        id: film.imdbID,
        title: film.Title,
        url: film.Poster,
        type: film.Type,
        year: film.Year,
      }));
    }{
        response.hasError = Error
        console.log(response.hasError)
    }

  } catch (error) {
    response.hasError = error
  }

  return {
    ...response
  };
};
