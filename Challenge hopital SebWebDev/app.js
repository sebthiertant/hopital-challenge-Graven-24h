// gestion du menu dropdown

const menuButton = document.querySelector('#drop');
const menuButtonBurger = document.querySelector('.fa-bars');
const applicationButton = document.querySelector('.appDropDown');

const firstMenuDrop = document.querySelector('.menuDrop');
const appMenuDrop = document.querySelector('.applicationMenuDrop');



// fonction d'écoute du clic sur le bouton menu
menuButton.addEventListener('click', function() {

    if (firstMenuDrop.style.display === 'block') {
        firstMenuDrop.style.display = 'none';
        menuButtonBurger.style.transform = 'scale(3)';
        menuButtonBurger.style.transition = '0.2s';
        menuButtonBurger.style.color = '#535b5c';
    } else {
        firstMenuDrop.style.display = 'block';
        menuButtonBurger.style.transform = 'scale(4) rotate(90deg)';
        menuButtonBurger.style.transition = '0.2s';
        menuButtonBurger.style.color = '#2980b9';
    }
})

//fonction d'écoute du clic sur le bouton application dans le sous-menu
applicationButton.addEventListener('click', function() {
    if (appMenuDrop.style.display === 'block') {
        appMenuDrop.style.display = 'none';
    } else {
        appMenuDrop.style.display = 'block';
    }
})




// Intersections Observers 
// Écoute l'intersection des items avec un seuil de 0.3 et ajoute ou enlève la classe visible 


const observer = new IntersectionObserver((entries, target) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
}, {
    threshold: 0.2
});


// selectionne l'intégralité des items dans une nodeList
const nodeItems = document.querySelectorAll('.container');

// stock la nodelist dans un array
const sectionsArray = [];
for (let i = nodeItems.length; i--; sectionsArray.unshift(nodeItems[i]));


//  observe l'intégralité des index de l'array contenant les containers nodeItems
sectionsArray.forEach(index =>
    observer.observe(index)
);

const homeTxtFirst = document.querySelector('.homeText1');
const homeTxtSecond = document.querySelector('.homeText2');

observer.observe(homeTxtFirst);
observer.observe(homeTxtSecond);