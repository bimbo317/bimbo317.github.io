/* funcion para leer los datos desde randomuser*/
async function getuser() {
    const person = await fetch('https://randomuser.me/api/?&noinfo')
        .then(response => response.json())
        .then(data => data.results[0])
    checkDataPerson(person);
    console.log(person);
    setPersonInHTML();
}

getuser();
/* De forma predeterminada se carga la seccion About*/
buttons("sectionAbout");

/* Chequea si los datos de la persona existen en el localstorage, si existe compara los nombres, si no son iguales, reemplaza el contenido del localstorage por los datos
obtenidos de la persona*/
function checkDataPerson(per) {
    if (localStorage.getItem("name")) {
        let nameInLocal = localStorage.getItem("name");
        let nameRec = per.name.first + " " + per.name.last;
        if (nameInLocal == nameRec) {
            console.log("it's the same"+nameInLocal+", "+nameRec);
        } else {
            localStorage.clear();
            saveDataPerson(per);
        }
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
    console.log("se guardan datos en localStorage")
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
    document.getElementById("sectionWors").style.display="none";
    document.getElementById("sectionContact").style.display="none";
}

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