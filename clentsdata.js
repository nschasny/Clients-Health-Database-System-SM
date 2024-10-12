const examplePatients = [
    {
        name: 'John Doe',
        profile_picture: 'john.jpg',
        date_of_birth: '1985-03-25',
        gender: 'Male',
        phone_number: '123-456-7890',
        emergency_contact: 'Jane Doe',
        insurance_type: 'Private',
        heart_rate: 78,
        temperature: 98.6,
        respiratory_rate: 20
    },
    {
        name: 'Jane Smith',
        profile_picture: 'jane.jpg',
        date_of_birth: '1990-07-14',
        gender: 'Female',
        phone_number: '098-765-4321',
        emergency_contact: 'John Smith',
        insurance_type: 'Public',
        heart_rate: 82,
        temperature: 99.1,
        respiratory_rate: 18
    },
    // Add more patients as needed
];

// Function to display a random patient's data
function displayRandomPatient() {
    const randomPatient = examplePatients[Math.floor(Math.random() * examplePatients.length)];
    
    document.getElementById('profile-picture').src = randomPatient.profile_picture;
    document.getElementById('patient-name').textContent = randomPatient.name;
    document.getElementById('date-of-birth').textContent = new Date(randomPatient.date_of_birth).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    document.getElementById('gender').textContent = randomPatient.gender;
    document.getElementById('phone-number').textContent = randomPatient.phone_number;
    document.getElementById('emergency-contact').textContent = randomPatient.emergency_contact;
    document.getElementById('insurance-type').textContent = randomPatient.insurance_type;

    // Update vital signs: heart rate, temperature, respiratory rate
    document.getElementById('heart-rate').textContent = `${randomPatient.heart_rate} bpm`;
    document.getElementById('temperature').textContent = `${randomPatient.temperature}°F`;
    document.getElementById('respiratory-rate').textContent = `${randomPatient.respiratory_rate} bpm`;

    // Update normal status indicators
    document.getElementById('heart-rate-status').textContent = 'Normal';
    document.getElementById('temperature-status').textContent = 'Normal';
    document.getElementById('respiratory-rate-status').textContent = 'Normal';
}

document.getElementById('next-patient-button').addEventListener('click', displayRandomPatient);


document.addEventListener('DOMContentLoaded', displayRandomPatient);