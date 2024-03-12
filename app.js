let lifePoints = 100;
let botPoints = 100;

document.querySelector("#attack").addEventListener('click', playerAttack)
document.querySelector("#heal").addEventListener('click', playerHeal)

function playerAttack(evt) {
    // Create random damage
        // Range 10-30
    const dmg = Math.floor(Math.random()*30)+10;
    // Damage the botPoints
    botPoints -= dmg;
    // Change the botPoints on screen
    document.querySelector('.enemy span').innerHTML = botPoints;
    // Triggers the botAttack
}

function playerHeal(evt) {
    // Increase the lifePoints
    const healing = Math.floor(Math.random()*20)+5;
    lifePoints += healing;
    // Update the lifePoints on screen
}

function botAttack() {
    // Damage the playersPoint
    // Change the lifePoints on screen
}