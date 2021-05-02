function randomNumber() {
var sum = 0
var loses = 0
var wins = 0

var randomNum = Math.ceil(Math.random() * 245)
var green = Math.ceil(Math.random() * 8)
var blue = Math.ceil(Math.random() * 6*green)
var red = Math.ceil(Math.random() * 2*blue)
var yellow = Math.ceil(Math.random() * red)
console.log( green )
console.log( red )
console.log( blue )

console.log( yellow )

    check = () => {
        if(sum == randomNum) {
            wins += 1
            $('.win-score').html(wins)
            alert("You win")
            $('.target-score').html(randomNumber)
            $('.your-score').html(0)
        }
        if (sum > randomNum) {
            loses += 1
            $('.lose-score').html(loses)
            alert('Sorry,You lost!')
            $('.your-score').html(0)
            $('.target-score').html(randomNumber)

        }
        
    }
    $('.target-score').html(randomNum)
    $('.blue').on('click', function () {
        sum += blue
        $('.your-score').html(sum)
        check()
    })
    $('.green').on('click', function () {
        sum += green
        $('.your-score').html(sum)
        check()
    })
    $('.red').on('click', function () {
        sum += red
        $('.your-score').html(sum)
        check()
    })
    $('.yellow').on('click', function () {
        sum += yellow
        $('.your-score').html(sum)
        check()
    })

}
randomNumber()