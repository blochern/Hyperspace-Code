// Roll for Stats

// modifier formula (score minus ten divided by two and rounded down)
function getModifier(score) {
    let output = ""
    if (score >= 10) {
        output += "+"
    }
    return output += Math.floor((score - 10) / 2)
}

// just a d6
function d6() {
    return Math.ceil(Math.random() * 6);
}

// rolls a stat (and prints the stat block to the console) 'num' times
function rollStat(num) {
    for (let x = 1; x <= num; x++) {
        console.log("---------------------------")
        let array = [d6(), d6(), d6(), d6()]
        console.log("You rolled:          [" + array + "]")
        let min = Math.min.apply(Math, array)
        console.log("(Minimum roll was " + min + ")")
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        sum -= min
        console.log("Your score and mod:    " + sum + " (" + getModifier(sum) + ")")
    }
}

rollStat(6)
