const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors"); // Import the cors package
// const routes = require('./index'); // Import the combined routes
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); // Import dotenv
const path = require('path');
dotenv.config({ path: 'Config/.env' }); // Load environment variables from config/.env file


const app = express();

app.use(cors()); // Use the cors middleware to enable CORS

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(bodyParser.json());

//Login
const LoginRouter = require('./routes/LoginRoutes');


// Lab
const testRoutes = require('./routes/TestRoute');
const reportsRoutes = require('./routes/ReportRoute')
const ServiceRouter = require('./routes/ServiceRoute');
const BillRoutes = require('./routes/BillRoute');
const labServiceRoutes = require('./routes/LabServiceRoutes'); // Import the lab service routes
const labEditPatientRoutes = require('./routes/LabEditPatientRoutes'); // Import the lab data routes
const labPatientRoutes = require('./routes/LabPatientRoutes'); // Import the users' routes
const labbillingRoutes = require('./routes/LabbillingRoutes');
const labpaidRoutes = require('./routes/LabpaidRoutes');
const reportDataRoutes = require('./routes/ReportDataRoutes');
const labappointmentsRoutes = require('./routes/LabAppointmentsRoutes');
const labResults = require('./routes/LabResultsRoutes');


// receptionist 
const addPatientData = require('./routes/AddPatientDataRoutes');
const existingPatient = require('./routes/ExistingPatientRoutes');
const fileRoutes = require('./routes/AttachmentRoutes');
const vitalsRoutes = require('./routes/VitalsRoutes');  //still updating
const prescriptionDataRoutes = require('./routes/PrescriptionDataRoutes'); 

//pharma
const createPurchaseOrderRoutes = require('./routes/createPurchaseOrderRoutes');
const inventoryroutes = require('./routes/inventoryRoutes');
const invoicestockRoutes = require('./routes/invoicestockRoutes');
const pharmaBillingRoutes = require('./routes/pharmacyBillingRoutes');
const pharmacystockRoutes = require('./routes/pharmacystockRoutes');
const stockAdjustmentRoutes = require('./routes/stockAdjustmentRoutes');
const stockinvoiceRoutes = require('./routes/pharmacyBillingRoutes');
const stockistRoutes = require("./routes/stockistRoutes");




//Admin

const complaintsRoutes = require('./routes/ComplaintsAdminRoutes');
const vitalAdminRoutes = require('./routes/VitalsAdminRoutes');
const diabeticAdminRoutes = require('./routes/DiabeticCaseAdminRoutes');
const generalAdminRoutes = require('./routes/GeneralCaseAdminRoutes');
const medicalRoutes = require('./routes/MedicalAdminRoutes');
const consultationRoutes = require('./routes/ConsultationAdminRoutes');
const fileDetailsRoutes = require('./routes/fileUploadAdminRoutes');
const appointmentRoutes = require('./routes/AppointmentsAdminRoutes');
const staffRoutes = require('./routes/StaffAdminRoutes');
const adminTableRoutes = require('./routes/AdminTableRoutes');
const doctorRoutes = require('./routes/AdminDoctorRoutes');
const doctoradminRoutes = require('./routes/DoctorAdminRoutes');

//Doctor

const doctorappointmentRoutes = require('./routes/DoctorAppointmentRoutes');
const doctorfileDetailsRoutes = require('./routes/DoctorFileDetailsRoutes');
const doctordataRoutes = require('./routes/DoctorDataRoutes');
const doctordentalRegistrationRoutes = require('./routes/DoctorDentalRegistrationRoutes');
const doctordentistRoutes = require('./routes/DoctorDentistRoutes');
const doctordentalTreatmentRoutes = require('./routes/DoctorDentalTreatmentRoutes');
const doctordiabetesRoutes = require('./routes/DoctorDiabetesRoutes');
const doctorgeneralRoutes = require('./routes/DoctorGeneralRoutes');
const doctormedicalRoutes = require('./routes/DoctorMedicalRoutes');
const doctorcomplaintsRoutes = require('./routes/DoctorComplaintsRoutes');
const doctorvitalsRoutes = require('./routes/DoctorVitalsRoutes');

const doctorInvestigationdataRoutes = require("./routes/InvestigationdataRoutes");
const doctorgynicRoutes = require('./routes/DoctorGynicRoutes');



app.use(express.json());

//Login
app.use('/api', LoginRouter);

// Lab
app.use('/api', testRoutes);
app.use('/api', reportsRoutes);
app.use('/api', ServiceRouter);
app.use('/api', BillRoutes);
app.use('/api', labServiceRoutes);
app.use('/api', labEditPatientRoutes);
app.use('/api', labPatientRoutes);
app.use('/api', labbillingRoutes);
app.use('/api', labpaidRoutes);
app.use('/api', reportDataRoutes);
app.use('/api', labappointmentsRoutes);
app.use('/api', labResults); // Include the route handling file uploads first
app.use('/uploadslab', express.static(__dirname + '/uploadslab'));



//reception
app.use('/api', addPatientData);
app.use('/api', existingPatient);
app.use('/uploads', fileRoutes);
app.use('/api', vitalsRoutes);
app.use('/api', prescriptionDataRoutes);

//pharma
app.use('/api', createPurchaseOrderRoutes);
app.use('/api', inventoryroutes);
app.use('/api', invoicestockRoutes);
app.use('/api', pharmaBillingRoutes);
app.use('/api', pharmacystockRoutes);
app.use('/api', stockAdjustmentRoutes);
app.use('/api', stockinvoiceRoutes);
app.use("/api", stockistRoutes);




//Admin
app.use('/api', complaintsRoutes);
app.use('/api', vitalAdminRoutes);
app.use('/api', diabeticAdminRoutes);
app.use('/api', generalAdminRoutes);
app.use('/api', medicalRoutes);
app.use('/api', consultationRoutes);
app.use('/api', fileDetailsRoutes);
app.use('/api', appointmentRoutes);
app.use('/api', staffRoutes);
app.use('/api', adminTableRoutes);
app.use('/api', doctorRoutes);
app.use('/api', doctoradminRoutes);


//Doctor

app.use('/api', doctorappointmentRoutes);
app.use('/api', doctorfileDetailsRoutes);
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/api', doctordataRoutes);
app.use('/api', doctordentalRegistrationRoutes);
app.use('/api', doctordentistRoutes);
app.use('/api', doctordentalTreatmentRoutes);
app.use('/api', doctordiabetesRoutes);
app.use('/api', doctorgeneralRoutes);
app.use('/api', doctormedicalRoutes);
app.use('/api', doctorcomplaintsRoutes);
app.use('/api', doctorvitalsRoutes);

app.use("/api", doctorInvestigationdataRoutes);
app.use('/api', doctorgynicRoutes);



const PORT = process.env.PORT || 5000 // Use the PORT environment variable
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
