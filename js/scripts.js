/* funcion para obtener datos desde randomuser*/
async function getuser() {
    const person = await fetch('https://randomuser.me/api/?&noinfo')
    //const person = await fetch('../data.json')
        .then(response => response.json())
        .then(data => data.results[0])
    console.log("find new person in randomuser");
    saveDataPerson(person);
    //checkDataPerson(person);
    setPersonInHTML();
}

checkDataPerson();
/* De forma predeterminada se carga la seccion About*/
buttons("sectionAbout");

/* Chequea si los datos de una persona existen en el localstorage, si existe carga los datos en el html, pero si no existe en el localstorage
llama a la funcion getuser para obtener los datos de una nueva persona guarda los datos y los carga en el html*/
function checkDataPerson() {
    if (localStorage.getItem("name")) {
        setPersonInHTML();
    } else {
        getuser();
    }
}

/*Se guardan los datos obtenidos en el localstorage*/
function saveDataPerson(perso) {
    localStorage.setItem("name", perso.name.first+" "+perso.name.last);
    localStorage.setItem("picture", perso.picture.large);
    localStorage.setItem("profession", "Web Designer & Developer");
    localStorage.setItem("age", perso.dob.age);
    localStorage.setItem("residence", perso.location.city + ", " + perso.location.country);
    localStorage.setItem("address", perso.location.street.name + " " + perso.location.street.number);
    localStorage.setItem("email", perso.email);
    localStorage.setItem("phone", perso.phone);
    localStorage.setItem("freelance", "Available");
}

/* Funcion para completar el HTML con los datos alojados en el localdatastore */
function setPersonInHTML() {
    let varName = "name";
    document.getElementById('name').innerHTML = localStorage.getItem(varName);
    document.getElementById('nameAbout').innerHTML = "Hello! I'm " + localStorage.getItem(varName) + ".";
    document.getElementById('photo').src = localStorage.getItem("picture");
    let prof = localStorage.getItem("profession");
    document.getElementById('job').innerHTML = prof;
    document.getElementById('pAbout').innerHTML = prof + " from USA, California. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.";
    document.getElementById('pWebDesigner').innerHTML = "As a web designer, my responsible for big-picture decisions, like the menus listed on the site, and smaller details, like which fonts, colors, and graphics to use.";
    document.getElementById('pDeveloper').innerHTML = "Modern and mobile-ready website that will help you reach all of your marketing.";
    document.getElementById('pAdverstising').innerHTML = "Advertising services include television, radio, print, mail, and web apps.";
    document.getElementById('pGame').innerHTML = "Developing memorable and unique mobile android, ios and video games.";
    document.getElementById('spanAddress2').innerHTML = localStorage.getItem("address");
    document.getElementById('spanEmail').innerHTML = localStorage.getItem("email");
    document.getElementById('spanTel').innerHTML = localStorage.getItem("phone");
    document.getElementById('spanFreelance2').innerHTML = localStorage.getItem("freelance");
    document.getElementById('spanAge').innerHTML = localStorage.getItem("age");
    document.getElementById('spanResidence').innerHTML = localStorage.getItem("residence");
    document.getElementById('spanAddress').innerHTML = localStorage.getItem("address");
}

/* Funciones de Botones */

function hideSections() {
    document.getElementById("sectionAbout").style.display="none";
    document.getElementById("sectionResume").style.display="none";
    document.getElementById("sectionWorks").style.display="none";
    document.getElementById("sectionContact").style.display="none";
}

/* Muestra la seccion que el usuario elige y oculta las otras*/
function buttons(section) {
    hideSections();
    document.getElementById(section).style.display="block";
}

/*
document.getElementById('btnAbout').addEventListener('click', function() {
    hideSections();
    document.getElementById("sectionAbout").style.display="block";
})

document.getElementById('btnResume').addEventListener('click', function() {
    hideSections();
    document.getElementById("sectionResume").style.display="block";
})
*/