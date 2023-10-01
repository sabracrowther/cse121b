/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
/*let fullName = 'Sabra Crowther';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/SabraInSweater.png';


/* Step 3 - Element Variables */
/*const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');




/* Step 4 - Adding Content */

/*nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
/*let favFoods = ['pizza', 'alfredo', 'fried chicken and mashed potatoes', 'sub sandwiches'];
foodElement.textContent = favFoods;

let moreFavFood = 'carne asada fries';
favFoods.push(moreFavFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;*/


// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function isHit() {
    if(Math.random() > .5) {
        return true;
    }
}

function shipCanFire() {
    if (shipHealth > 0 && shipAmmo > 0) {
        return true;
    }
}

function isDestroyed (health) {
    if (health <= 0) {
        return true;
    }
}

function reloadShip() {
    shipHealth--;
    shipAmmo += 3;
}




