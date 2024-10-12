// Existing Chart.js data and config setup
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 60, max: 180 }; 

const data = {
    labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
    datasets: [
        {
            label: 'Systolic',
            data: [120, 118, 160, 110, 160, 155, 160, 180],
            fill: false,
            borderColor: 'rgba(255, 9, 107, 1)',
            backgroundColor: 'rgba(255, 9, 107, 1)',
            tension: 0.4,
            pointRadius: 9
        },
        {
            label: 'Diastolic',
            data: [110, 65, 85, 75, 70, 65, 78],
            fill: false,
            borderColor: 'rgba(107, 107, 255,1)',
            backgroundColor: 'rgba(107, 107, 255,1)',
            tension: 0.4,
            pointRadius: 9
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right', 
                labels: {
                    usePointStyle: true, 
                    pointStyle: 'circle'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 60 
            }
        }
    }
};

const ctx = document.getElementById('bloodPressureChart').getContext('2d');
const bloodPressureChart = new Chart(ctx, config);

// Function to randomly update diagnosis history data
function updateDiagnosisHistory(chart) {
    chart.data.datasets.forEach(dataset => {
        dataset.data = Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * (180 - 60 + 1)) + 60);
    });
    chart.update();
}

// Button to trigger random update of diagnosis history
const updateButton = document.createElement('button');
updateButton.innerText = "Update Diagnosis History";
updateButton.onclick = () => updateDiagnosisHistory(bloodPressureChart);
document.getElementById('actionsContainer').appendChild(updateButton);

// Fetch and display random patient data on button click
const examplePatients = [
    { name: 'John Doe', profile_picture: 'john.jpg', date_of_birth: '1985-03-25', gender: 'Male', phone_number: '123-456-7890', emergency_contact: 'Jane Doe', insurance_type: 'Private' },
    { name: 'Jane Smith', profile_picture: 'jane.jpg', date_of_birth: '1990-07-14', gender: 'Female', phone_number: '098-765-4321', emergency_contact: 'John Smith', insurance_type: 'Public' },
    // Add more sample patients as needed
];

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
}

// Button to fetch random patient data
const patientButton = document.createElement('button');
patientButton.innerText = "Next Patient";
patientButton.onclick = displayRandomPatient;
document.getElementById('actionsContainer').appendChild(patientButton);

// Call functions to initialize first patient data and chart updates
document.addEventListener('DOMContentLoaded', () => {
    displayRandomPatient();
    updateDiagnosisHistory(bloodPressureChart);
});