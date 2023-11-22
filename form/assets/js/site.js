
const formParent = document.getElementById('tilMeld');
const alarmTest = document.getElementById('Alarm');

const nameEl = document.getElementById('name');
const surenameEl = document.getElementById('surename');
const adresseEl = document.getElementById('Adresse');
const postEl = document.getElementById('post');
const emailEl = document.getElementById('email');

const myButton = document.getElementById('submitButton');

//myButton.addEventListener('click', callBack);


myButton.addEventListener('click', (event) => {

    // formen bruger ikke sin default som giver page reload
    event.preventDefault();

    // trim whitespace fra navn
    let trimName = nameEl.value.trim();
    let myTrimmedsurename = surenameEl.value.trim();
    let trimAddres = adresseEl.value.trim();




    if (trimName.length > 2 && myTrimmedsurename.length > 2 && trimAddres.length > 5 && testPost(postEl.value) && validateEmail(emailEl.value)) {
        console.log('All inputs are correct');

        formParent.innerHTML = '<h3>tak for tilmeldingen</h3><p>Jeg ejer din email nu HAAAAA haha</p>';

    } else {

        // name evaluation
        if (trimName.length < 2) {
            console.log('Opps');
            alarmTest.innerHTML = '<h3>Navn er mindre er 2 karakterer</h3>';
            nameEl.style = 'border: 2px solid red;'
            nameEl.classList.toggle('errorMarking');
        }        

        if (myTrimmedsurename.length < 2) {
            console.log('Opps');
            alarmTest.innerHTML = '<h3>Efternavn er mindre er 2 karakterer</h3>';
            surenameEl.style = 'border: 2px solid red;'
            surenameEl.classList.toggle('errorMarking');
        }
        if (trimAddres.length < 5) {
            console.log('Opps');
            alarmTest.innerHTML = '<h3>Addres er mindre er 5 karakterer</h3>';
            adresseEl.style = 'border: 2px solid red;'
            adresseEl.classList.toggle('errorMarking');
        }

        if (testPost(postEl.value)) {

        } else {
            console.log('Post Adress er ikke number');
            alarmTest.innerHTML = '<h3>Post Adress er ikke number</h3>';
            postEl.style = 'border: 2px solid red;'
            postEl.classList.toggle('errorMarking');
        }


        // email validation
        if (validateEmail(emailEl.value)) {

        } else {
            console.log('Indtast venligst den korrekte e-mail');
            alarmTest.innerHTML = '<h3>Indtast venligst den korrekte e-mail</h3>';
            emailEl.style = 'border: 2px solid red;'
            emailEl.classList.toggle('errorMarking');
        }

    }




});



function testPost(post) { 
    let numberPattern = /^-?\d*\.?\d+$/;
    let DoValid = numberPattern.test(post);
    return DoValid;
}



function validateEmail(email) {
    // Definer en simpel regulær udtryk for email-validering
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test om emailen matcher det regulære udtryk
    let isValid = emailRegex.test(email);

    // Returner resultatet af valideringen (true eller false)
    return isValid;
}


function callBack(event) {
    event.preventDefault();
    console.log('clicked fra named function');
}