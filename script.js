let vehicle1 = prompt('Qual o nome do primeiro veículo? ')
let speed1 = parseInt(prompt('Qual a velocidade do primeiro veículo? '))
let vehicle2 = prompt('Qual a nome de segundo veículo?')
let speed2 = parseInt(prompt('Qual a velocidade do segundo veículo?'))

if (speed1 === speed2){
  alert(`Tanto o ${vehicle1} quanto o ${vehicle2} estão na mesma velocidade de ${speed1}km/h`)
} else if (speed1 > speed2) {
  alert(`O ${vehicle1} está a ${speed1}km/h, e está mais rápido  que o ${vehicle2}, que está a ${speed2}km/h`)
} else {
  alert(`O ${vehicle2} está a ${speed2}km/h, e está mais rápido que o ${vehicle1}, que está a ${speed1}km/h`)
}
