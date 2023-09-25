//attack the monster functionality
//logic to the monster to fight back :

//logic to attack the monster of connect a function with the attack button and affect the monster bar const ATTACK_VALUE = 10;
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
// let chosenHealth = 100;
const enteredValue = prompt(
    "maximum life health for the player and the monster",
    "100"
  );
  
let chosenHealth = parseInt(enteredValue);
if (isNaN(chosenHealth) || chosenHealth <= 0) {
  chosenHealth = 100;
}
let currentPlayerHealth = chosenHealth;
let currentMonsterHealth = chosenHealth;
let hasBounsLife = true;


adjustHealthBars(chosenHealth);

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamge;
  if (currentPlayerHealth <= 0 && hasBounsLife) {
    hasBounsLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);

    alert("you would be dead but the bouns life saved you !");
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("YOU WON !");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("YOU LOST :(");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert(" you have a draw !");
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  let maxDamge;
  if (mode === "ATTACK") {
    maxDamge = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamge = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamge);
  currentMonsterHealth -= damage;
  const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamge;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("YOU WON !");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("YOU LOST :(");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert(" you have a draw !");
  }
}

function attackHandler() {
  attackMonster("ATTACK");
}
function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}
// 'Heal Player functionality'
function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenHealth - HEAL_VALUE) {
    alert(" YOU can't heal more than you max life health");
    healValue = chosenHealth - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth += HEAL_VALUE;
  endRound();
}
function reset() {
  currentPlayerHealth = chosenHealth;
  currentMonsterHealth = chosenHealth;
  resetGame(chosenHealth);
}
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
