// Code your solution here
function findMatching(drivers,name) {
   return drivers.filter(function(driver){
        return driver.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, letter){
    return drivers.filter(driver => driver.slice(0, letter.length) === letter)
}

function matchName(drivers, name){
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase()
    )
}