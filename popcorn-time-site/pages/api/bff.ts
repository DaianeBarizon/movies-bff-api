import { NextApiRequest, NextApiResponse } from 'next'

function parseMovie(movie, source) {
  if (scource === 'IMDb') {
    return {
      source,
      id: movie.imdbID,
      name: movie.name,
      critics: []
    }
  }

  return {
    id: movie,
    name: movie.name,
    critics: []
  }
}

export default async (_req: NextApiRequest, res: NextApiResponse) => {


  const moviesFromIMDB = await fetch(IMDB_URL)

  const parsedFromIMDB = moviesFromIMDB.map(m => parseMovie(m, 'IMDB'))

  const moviesFromRottenTomatoes = await fetch(ROTTEN_TOMATOES_URL)

  const parsedFromRottenTomatoes = moviesFromRottenTomatoes.map(m => parseMovie(m))

  const moviesFromOmelete = await fetch(OMELETE_URL)

  const parsedFromOmelete = moviesFromOmelete.map(m => parseMovie(m))

  const movies = [...parsedFromIMDB, ...parsedFromRottenTomatoes, ...parsedFromOmelete]

  res.status(200).json({ movies })
}