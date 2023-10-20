/* W05: Programming Tasks */

/* Declare and initialize global variables */

let templeList = [];

/* async displayTemples Function */

const displayTemples = (templesToDisplay) => {
    const templesElement = document.querySelector('#temples');
   

   templesToDisplay.forEach(temple => {
    const articleElem = document.createElement('article');
    /*create temple name*/
    const nameElem = document.createElement('h3');
    nameElem.textContent = temple.templeName;
    
    templesElement.append(nameElem);

    /*create temple image*/
    const tempImg = document.createElement('img');
    tempImg.setAttribute('src', temple.imageUrl);
    tempImg.setAttribute('alt', temple.location);
    articleElem.append(tempImg);

    templesElement.append(articleElem);

    /*templeList.push(articleElem);*/
  })
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if(response.ok) {     
        templeList = await response.json();
        templeList.sort(compare);
displayTemples(templeList);
        
    }
    }
   


/* reset Function */
function reset() {
    document.querySelector('#temples').replaceChildren([]);
   
}

/* sortBy Function */

function sortBy(templeList) {
    reset();
    let sortedTemples = templeList.map((x) => x);
    sortedTemples.sort(compare);
    return sortedTemples;
}

document.querySelector('#sortBy').addEventListener('change', (event) => { 
    const selectedValue = event.target.value;
    reset();

switch (selectedValue) {
    case 'utah':
        const utahTemples = templeList.filter((temple) => temple.location.includes("Utah"));       
        displayTemples(utahTemples);
        break;
    case 'notutah':
        const nonUtahTemples = templeList.filter((temple) => !temple.location.includes("Utah"));
        displayTemples(nonUtahTemples);
        break;
    case 'older':
        const olderTemples = templeList.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1));
        displayTemples(olderTemples);
        break;
    case 'all':
        displayTemples(templeList);
        break;
    default:
        break;

}
});


function compare(temp1, temp2) {
    return temp1.templeName.localeCompare(temp2.templeName);
}
getTemples();

/* Event Listener */
