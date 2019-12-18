 let movie = {
    'title': "bob",
    'year':2002,
    'directors': 3,
    'director names':"richard, arnold, stallone"
}

showProperties(movie)

function showProperties (obj){
    for( let key in obj){
        if ( typeof obj[key] ==='string'){
            console.log(key, obj[key])
        }
    }
}