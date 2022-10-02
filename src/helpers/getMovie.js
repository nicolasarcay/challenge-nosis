export const getMovie = async (id) => {
  const urlMovie = `https://www.omdbapi.com/?apikey=89747369&i=${id}`;
  let movie= {};

  try {
    const resp = await fetch(urlMovie);

    movie = await resp.json();

    if (!movie.Response) {
      movie.hasError = movie.Error;
    }
  } catch (error) {
    movie.hasError = error;
  }
  
  return {
    movie
  };
};
