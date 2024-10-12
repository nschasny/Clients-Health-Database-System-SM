document.addEventListener("DOMContentLoaded", function() {
    let patientIndex = 0;
    const patients = document.querySelectorAll(".scrollable-list li:not(.add-patient)");
    const patientInfoSection = document.querySelector(".patient-info");
    const showInfoButton = document.getElementById("show-info-button");

    const insuranceProviders = ["Sunrise Health Assurance", "Blue Cross", "Aetna", "Cigna", "United Health"];
    
    function getRandomDateOfBirth() {
        const start = new Date(1960, 0, 1);
        const end = new Date(2006, 11, 31);
        const dob = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        const day = String(dob.getDate()).padStart(2, '0');
        const month = String(dob.getMonth() + 1).padStart(2, '0');
        const year = dob.getFullYear();
        return `${month}/${day}/${year}`;
    }

    function getRandomPhoneNumber() {
        const areaCode = Math.floor(Math.random() * 900) + 100;
        const prefix = Math.floor(Math.random() * 900) + 100;
        const lineNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        return `(${areaCode}) ${prefix}-${lineNumber}`;
    }

    function getRandomInsuranceProvider() {
        return insuranceProviders[Math.floor(Math.random() * insuranceProviders.length)];
    }

    function determineGender(name) {
        const maleNames = ["Ryan", "Brandon", "Kevin", "Tyler", "Nathan", "Mike", "Dylan"];
        return maleNames.includes(name) ? "Male" : "Female";
    }

    function updatePatientInfo(index) {
        const patient = patients[index];
        const profileImgSrc = patient.querySelector(".profile-img").src;
        const patientName = patient.querySelector(".text-content").innerText.split('\n')[0].split(" ")[0];

        const dob = getRandomDateOfBirth();
        const phone = getRandomPhoneNumber();
        const emergencyPhone = getRandomPhoneNumber();
        const insuranceProvider = getRandomInsuranceProvider();
        const gender = determineGender(patientName);
        
        // Keep the FemaleIcon.png for all genders
        const genderIconSrc = "FemaleIcon.png";

        // Update the Patient Info section with the current patient's info
        patientInfoSection.querySelector(".profile-img").src = profileImgSrc;
        patientInfoSection.querySelector("h2").textContent = patientName;
        patientInfoSection.querySelectorAll("li")[0].innerHTML = `<img src="BirthIcon.png" alt="Calendar Icon"> Date of Birth <br> ${dob}`;
        patientInfoSection.querySelectorAll("li")[1].innerHTML = `<img src="${genderIconSrc}" alt="Gender Icon"> Gender <br> ${gender}`;
        patientInfoSection.querySelectorAll("li")[2].innerHTML = `<img src="PhoneIcon.png" alt="Phone Icon"> Contact Information <br> ${phone}`;
        patientInfoSection.querySelectorAll("li")[3].innerHTML = `<img src="PhoneIcon.png" alt="Emergency Icon"> Emergency Contact <br> ${emergencyPhone}`;
        patientInfoSection.querySelectorAll("li")[4].innerHTML = `<img src="InsuranceIcon.png" alt="Insurance Icon"> Insurance Provider <br> ${insuranceProvider}`;
    }

    // Initial load with the first patient’s info
    if (patients.length > 0) {
        updatePatientInfo(patientIndex);
    }

    // Event listener for cycling through patients
    showInfoButton.addEventListener("click", function() {
        patientIndex = (patientIndex + 1) % patients.length;
        updatePatientInfo(patientIndex);
    });
});