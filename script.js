const human = document.querySelector('.card1')
const bot = document.querySelector('.card2')

const a = ["Stone", "Paper", "Scissors"]

const button = document.querySelectorAll(".button")

button.forEach((but) => {
    but.addEventListener('click', (e) => {
        human.textContent = e.target.textContent
        let botvalue = a[Math.floor(Math.random() * a.length)]
        bot.textContent = botvalue
        var hum = e.target.textContent
        var boti = botvalue
        setTimeout(() => {
            if (hum == boti) {
                alert("TIE")
            } else if (hum == "Paper" && boti == 'Stone') {
                alert("U have won")
            } else if (hum == 'Scissors' && boti == 'Paper') {
                alert("U have Won")
            } else if (hum == "Stone" && boti == "Scissors") {
                alert("U have Won")
            } else {
                alert("U have lost")
            }
            human.textContent = "Human"
            bot.textContent = "Bot"
        }, 200)
    })
})