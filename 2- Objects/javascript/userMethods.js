var totalNumberOfUsers = 1; //1 as we have 1 initial user.

function createNewUserAndAddThemToList() {
    var firstName = document.querySelector('#input_firstName').value;
    var lastName = document.querySelector('#input_lastName').value;
    var age = document.querySelector('#input_age').value;
    var job = document.querySelector('#input_job').value;

    var newUser = new User(firstName, lastName, age, job);
    addNewUserElement(newUser);
}

/**
 * Takes in a user object and will add a new element to the page
 * displaying that user's information
 * @param {*} user 
 */
function addNewUserElement(user) {
    var newDiv = document.createElement("div");
    var firstName = document.createTextNode("Name: " + user.firstName + " ");
    newDiv.appendChild(firstName);
    var lastName = document.createTextNode(user.lastName + "   ||");
    newDiv.appendChild(lastName);
    var age = document.createTextNode("Age: " + user.age + "   ||");
    newDiv.appendChild(age);
    var job = document.createTextNode("Job: " + user.job + "   ||");
    newDiv.appendChild(job);
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

/**
 * Functional constructor
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} age 
 * @param {*} job 
 */
function User(firstName, lastName, age, job) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.job = job;
}