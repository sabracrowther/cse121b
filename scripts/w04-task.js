/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Sabra Crowther",
    photo: "images/profilePic.png",
    favoriteFoods: ["pizza", "alfredo", "cheesecake", "roast and potatoes"],
    hobbies: ["sewing", "reading", "playing games"],
    placesLived: []

};



/* Populate Profile Object with placesLive objects */


myProfile.placesLived.push(
    {
        place: 'Sacramento, CA',
        length: '21 years'
    }
);
 myProfile.placesLived.push(
    {
        place: 'Paradise, CA',
        length: '24 years'
    }
 );
 myProfile.placesLived.push(
    {
        place: 'Provo, UT',
        length: '9 months'
    }
 );

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const setPhotoSrc = document.querySelector('#photo');
const setPhotoAlt = document.querySelector('#photo');
setPhotoSrc.setAttribute('src', myProfile.photo);
setPhotoAlt.setAttribute('alt', myProfile.name);


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(function(food) {
    let foods = document.createElement('li');
    foods.textContent = food;
    document.querySelector('#favorite-foods').appendChild(foods);
});


/* Hobbies List */

myProfile.hobbies.forEach(function(hobby) {
    let funTime = document.createElement('li');
    funTime.textContent = hobby;
    document.querySelector('#hobbies').appendChild(funTime);
});


/* Places Lived DataList */
const dl = document.querySelector('#dl');
myProfile.placesLived.forEach(function(lived) {
    let home = document.createElement('dt');
    let time = document.createElement('dd');
    home.textContent = lived.place;
    time.textContent = lived.length;
    document.querySelector('#places-lived').appendChild(home);
    document.querySelector('#places-lived').appendChild(time);
});

