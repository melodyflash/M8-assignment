//STEP 1
// let faveMovies = ['Pulp Fiction', 'Us', 'Shutter Island', 'Nightmare on Elm Street', 'Free Solo']
// console.log(faveMovies[1])

//STEP 2
// let movies = new Array(5)
// movies[0] = 'Pulp Fiction'
// movies[1] = 'Us'
// movies[2] = 'Shutter Island'
// movies[3] = 'Nightmare on Elm Street'
// movies[4] = 'Free Solo'

// console.log(movies[0])

//STEP 3
// let movies = new Array(5)
// movies[0] = 'Pulp Fiction'
// movies[1] = 'Us'
// movies[2] = 'Shutter Island'
// movies[3] = 'Nightmare on Elm Street'
// movies[4] = 'Free Solo'

// movies[2] = 'Fine Lines'
// movies[5] = 'Shutter Island'
// console.log(movies.length)

//STEP 4
// let movies1 = []
// movies1[0] = 'Pulp Fiction'
// movies1[1] = 'Us'
// movies1[2] = 'Shutter Island'
// movies1[3] = 'Nightmare on Elm Street'
// movies1[4] = 'Free Solo'

// delete movies1[0]
// console.log(movies1)

//STEP 5
// let movies1 = []
// movies1[0] = 'Pulp Fiction'
// movies1[1] = 'Us'
// movies1[2] = 'Shutter Island'
// movies1[3] = 'Nightmare on Elm Street'
// movies1[4] = 'Free Solo'
// movies1[5] = 'Fine Lines'
// movies1[6] = 'Aristocats'

// for (let i in movies1) {
// 	if (movies1.hasOwnProperty(i)) {
// 		console.log(movies1[i])
// 	}
// }



//STEP 6
// let movies1 = []
// movies1[0] = 'Pulp Fiction'
// movies1[1] = 'Us'
// movies1[2] = 'Shutter Island'
// movies1[3] = 'Nightmare on Elm Street'
// movies1[4] = 'Free Solo'
// movies1[5] = 'Fine Lines'
// movies1[6] = 'Aristocats'

// for (let i of movies1) {
// 	console.log(i)
// }

//STEP 7

// let movies1 = []
// movies1[0] = 'Pulp Fiction'
// movies1[1] = 'Us'
// movies1[2] = 'Shutter Island'
// movies1[3] = 'Nightmare on Elm Street'
// movies1[4] = 'Free Solo'
// movies1[5] = 'Fine Lines'
// movies1[6] = 'Aristocats'

// for (let i of movies1.sort()) {
// 	console.log(i)
// }


//STEP 8
// let movies1 = []
// movies1[0] = 'Pulp Fiction'
// movies1[1] = 'Us'
// movies1[2] = 'Shutter Island'
// movies1[3] = 'Nightmare on Elm Street'
// movies1[4] = 'Free Solo'
// movies1[5] = 'Fine Lines'
// movies1[6] = 'Aristocats'

// let leastFavMovies = []
// leastFavMovies[0] = 'Lazarus effect'
// leastFavMovies[1] = 'Critters'
// leastFavMovies[2] = 'Puppet master'

// console.log('Movies I like:')
// console.log(' ')
// console.log(movies1[0])
// console.log(movies1[1])
// console.log(movies1[2])
// console.log('...')
// console.log(' ')
// console.log('Movies I regret watching')
// console.log(' ')
// console.log(leastFavMovies[0])
// console.log(leastFavMovies[1])
// console.log(leastFavMovies[2])
// console.log('...')

//STEP 9
// let movies1 = []
// movies1[0] = 'Pulp Fiction'
// movies1[1] = 'Us'
// movies1[2] = 'Shutter Island'
// movies1[3] = 'Nightmare on Elm Street'
// movies1[4] = 'Free Solo'
// movies1[5] = 'Fine Lines'
// movies1[6] = 'Aristocats'

// let leastFavMovies = []
// leastFavMovies[0] = 'Lazarus effect'
// leastFavMovies[1] = 'Critters'
// leastFavMovies[2] = 'Puppet master'

// let movies = movies1.concat(leastFavMovies)

// console.log(movies.reverse())

//STEP 10
// let movies1 = []
// movies1[0] = 'Pulp Fiction'
// movies1[1] = 'Us'
// movies1[2] = 'Shutter Island'
// movies1[3] = 'Nightmare on Elm Street'
// movies1[4] = 'Free Solo'
// movies1[5] = 'Fine Lines'
// movies1[6] = 'Aristocats'

// let leastFavMovies = []
// leastFavMovies[0] = 'Lazarus effect'
// leastFavMovies[1] = 'Critters'
// leastFavMovies[2] = 'Puppet master'

// let movies = movies1.concat(leastFavMovies)

// console.log(movies.slice(-1))

//STEP 11
// let movies1 = []
// movies1[0] = 'Pulp Fiction'
// movies1[1] = 'Us'
// movies1[2] = 'Shutter Island'
// movies1[3] = 'Nightmare on Elm Street'
// movies1[4] = 'Free Solo'
// movies1[5] = 'Fine Lines'
// movies1[6] = 'Aristocats'

// let leastFavMovies = []
// leastFavMovies[0] = 'Lazarus effect'
// leastFavMovies[1] = 'Critters'
// leastFavMovies[2] = 'Puppet master'

// let movies = movies1.concat(leastFavMovies)

// console.log(movies[0])

//STEP 12

// console.log(`${movies[7]} is index ${movies.indexOf('Lazarus effect')}`)
// console.log(`${movies[8]} is index ${movies.indexOf('Critters')}`)
// console.log(`${movies[9]} is index ${movies.indexOf('Puppet master')}`)
// delete movies[7]
// delete movies[8]
// delete movies[9]
// movies[7] = 'Get out'
// movies[8] = 'Nueve reinas'
// movies[9] = 'Cronocrimenes'
// console.log(movies)


//STEP 13

// let movies = [
//     ['Fine Lines', 1],
//     ['Us', 2],
//     ['Free Solo', 3],
//     ['Shutter Island', 4],
//     ['Nightmare on Elm Street', 5]
// ]

// let namesOnly = movies.filter((item) => {
//     return typeof item !== "number"
// })

// console.log(namesOnly)

//STEP 14

// let employees = []

// employees[0] = 'ZAK'
// employees[1] = 'JESSICA'
// employees[2] = 'MARK'
// employees[3] = 'FRED'
// employees[4] = 'SALLY'

// let showEmployee = (passedArray) => { 
//     console.log('Employees:')
//     console.log(' ')
//     passedArray.forEach((item) => {
//         console.log(item)
//     })
// }

// showEmployee(employees)

//STEP 15

// let filterValues = [58, '', 'abcd', true, null, false, 0]

// let filteredValues = filterValues.filter((item) => {
//     return typeof item !== "boolean"
// })

// console.log(filteredValues)


//STEP 16


//STEP 17

