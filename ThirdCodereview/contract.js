//I start this and 5 hours later...
function submit_form() {
    var nameField = document.getElementById('name');
    var ageField = document.getElementById('age');
    var genderField = document.getElementById('gender');
    var countryField= document.getElementById('country');
    var horsePowerField= document.getElementById('horse-power');
    var submitButton = document.getElementById('submit');

    var contract = {
        name: nameField.value,
        age: ageField.value,
        gender: genderField.value,
        country: countryField.value,
        horsePower: horsePowerField.value
    }

    var error = validate(contract);

    if (error.length > 0) {
        alert(error);
        return;
    }

    var value = generate_output(contract);
    var respone = "Your monthly insurance fee is " + value + " $";
    alert(respone);
}

function generate_output(contract) {
    var monthly_insurance = 120

    if (contract.gender.toLowerCase() === "male") {
        monthly_insurance *= 2;
    } else if (contract.gender.toLowerCase() === "female") {
        monthly_insurance *= 0.8;
    }
    
    if (contract.country.toLowerCase() === "italy") {
        monthly_insurance *= 2;
    }

    return monthly_insurance;
}
                //the whole thing is functioning in a firefox but not
                //in my Chromium browser, dont know why
function validate(contract) {
    valid_countries = [
        "austria",
        "germany",
        "swizerland",
        "italy"
    ];

    valid_genders = [
        "male",
        "female"
    ];          //This whole thing is bananas to work on

    if (contract.name.length == 0) {
        return "Please provide your name.";
    }
    if (contract.age.length == 0) {
        return "Please provide your age.";
    }
    if (contract.gender.length == 0) {
        return "Please provide your gender.";
    }
    if (contract.country.length == 0) {
        return "Please provide your country of origin.";
    }
    if (contract.horsePower.length == 0) {
        return "Please provide your horse power.";
    }
    if (Number(contract.age) < 1) {
        return "Age can't be negative.";
    }
    if (Number(contract.horsePower) < 1) {
        return "Horse power can't be negative."
    }
    if (! valid_genders.includes(contract.gender.toLowerCase())) {
        return "Please provide a valid gender.";
    }
    if (! valid_countries.includes(contract.country.toLowerCase())) {
        return "Country not supported.";
    }
    return "";
}
