function saturdayFun (activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun('watch the Dawgs play');

const mondayWork = function(activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective (parameter = '*') {
    return function (adjective = 'special') {
        return (`You are ${parameter}${adjective}${parameter}!`)

    }
}
wrapAdjective ()('a hard worker');