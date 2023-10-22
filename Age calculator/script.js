document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const birthdateInput = document.getElementById("birthdate");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const birthdate = new Date(birthdateInput.value);
        const currentDate = new Date();

        if (isNaN(birthdate.getTime())) {
            resultElement.textContent = "Please enter a valid date.";
            resultElement.style.color = "#ff3333"; 
        } else {
            const age = calculateAge(birthdate, currentDate);
            resultElement.textContent = `Your age is ${age} years.`;
            resultElement.style.color = "#007BFF"; 
        }
    });

    function calculateAge(birthdate, currentDate) {
        const birthYear = birthdate.getFullYear();
        const currentYear = currentDate.getFullYear();
        const age = currentYear - birthYear;


        const birthMonth = birthdate.getMonth();
        const currentMonth = currentDate.getMonth();
        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthdate.getDate())) {
            return age - 1;
        }

        return age;
    }
});
