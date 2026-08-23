const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

const enteredValue = prompt("What should the maximum life be for you and the monster?", "100");

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if(isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
    let logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
    // if (event === LOG_EVENT_PLAYER_ATTACK || event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    //     logEntry.target = "MONSTER";
    // }
    // else if (event === LOG_EVENT_MONSTER_ATTACK || LOG_EVENT_PLAYER_HEAL) {
    //     logEntry.target = "PLAYER";
    // }
    switch (event) {
        case LOG_EVENT_PLAYER_ATTACK:
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = "MONSTER";
            break;
        case LOG_EVENT_MONSTER_ATTACK:
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = "PLAYER";
            break;
    }
    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(currentPlayerHealth);
}

function endTurn() {
    const initialPlayerHealth = currentPlayerHealth;
    const damageToPlayer = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= damageToPlayer;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, damageToPlayer, currentMonsterHealth, currentPlayerHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        removeBonusLife();
        hasBonusLife = false;
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(currentPlayerHealth);
        alert("Your bonus life has given you a final chance at defeating the monster!");
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("It's a draw!");
        writeToLog(LOG_EVENT_GAME_OVER, "RESULT_DRAW", currentMonsterHealth, currentPlayerHealth);
    }
    else if (currentMonsterHealth <= 0) {
        alert("You won!");
        writeToLog(LOG_EVENT_GAME_OVER, "RESULT_MONSTER_WIN", currentMonsterHealth, currentPlayerHealth);
    }
    else if (currentPlayerHealth <= 0) {
        alert("You lost!");
        writeToLog(LOG_EVENT_GAME_OVER, "RESULT_PLAYER_WIN", currentMonsterHealth, currentPlayerHealth);
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

function attackMonster(mode) {
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;

    // if (mode === MODE_ATTACK) {
    //     maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // }
    // else if (mode === MODE_STRONG_ATTACK) {
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }

    const damageToMonster = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damageToMonster;
    writeToLog(logEvent, damageToMonster, currentMonsterHealth, currentPlayerHealth);

    endTurn();
}

function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    }
    else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
    endTurn();
}

function printLogHandler() {
    console.log(battleLog);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);