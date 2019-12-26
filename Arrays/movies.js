const movies = [
    {'title': 'a', 'year': 2018, 'rating': 4.5},
    {'title': 'b', 'year': 2018, 'rating': 4.7},
    {'title': 'c', 'year': 2018, 'rating': 3},
    {'title': 'd', 'year': 2017, 'rating': 4.5},
]

//All the movies in 2018 with rating > 4
//Sort them by their rating
//Descending order
//Pick their title

getMovies(2018,4)
function getMovies (year, rating){
    const release = movies.filter(movie => movie.year === year)
    const rate = release.filter(movie => movie.rating > rating)
    const display = rate.reverse()
    const title = display.map(film=> film.title)
    console.log(title);
}

//Alternate way
// const titleMovies = movies
// .filter(movie => movie.year === 2018 && movie.rating >=4)
// .sort((a,b)=> a.rating - b.rating)
// .reverse()
// .map(m => m.title)
// console.log(titleMovies)