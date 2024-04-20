// Function to get the count of registered doctors
const AdminDoctor = require('../models/AdminDoctor');

// Function to get the count of registered doctors
exports.getDoctorCount = async (req, res) => {
    try {
        const doctorCount = await AdminDoctor.countDocuments();
        res.json({ success: true, count: doctorCount });
    } catch (error) {
        console.error('Error getting AdminDoctor count:', error);
        res.status(500).json({ success: false, message: 'An error occurred while getting AdminDoctor count' });
    }
};

// Function to register a new AdminDoctor
exports.registerDoctor = async (req, res) => {
    try {
        const { name, password, age, gender, bloodgroup, mobilenumber, email, address, degree, workexperience, department } = req.body;

        // Find the highest existing "DOC" ID
        const highestDoc = await AdminDoctor.findOne({}, { docid: 1 }).sort({ docid: -1 });
  
        let nextDocId = 'DOC00001'; // Default value if no doctors are registered yet
  
        if (highestDoc) {
            const lastDocId = highestDoc.docid;
            // Extract the numeric part and increment it
            const lastDocIdNumber = parseInt(lastDocId.replace('DOC', ''), 10);
            nextDocId = `DOC${String(lastDocIdNumber + 1).padStart(5, '0')}`;
        }
  
        // Create a new AdminDoctor instance
        const newDoctor = new AdminDoctor({
            docid: nextDocId,
            name,
            password,
            age,
            gender,
            bloodgroup,
            mobilenumber,
            email,
            address,
            degree,
            workexperience,
            department,
        });
  
        // Save the new AdminDoctor to the database
        await newDoctor.save();
  
        res.json({ success: true, message: 'AdminDoctor registered successfully' });
    } catch (error) {
        console.error('Error registering AdminDoctor:', error);
        res.status(500).json({ success: false, message: 'An error occurred while registering the AdminDoctor' });
    }
};

// Function to get the largest AdminDoctor ID
exports.getLargestDoctorId = async (req, res) => {
    try {
        const largestDoctor = await AdminDoctor.findOne({}, { docid: 1 }, { sort: { docid: -1 } });
        if (largestDoctor) {
            const largestDocId = largestDoctor.docid;
            res.json({ success: true, docid: largestDocId });
        } else {
            // No doctors in the database yet
            res.json({ success: true, docid: 'DOC00000' });
        }
    } catch (error) {
        console.error('Error getting largest AdminDoctor ID:', error);
        res.status(500).json({ success: false, message: 'An error occurred while getting the largest AdminDoctor ID' });
    }
};

// Function to get all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await AdminDoctor.find();
        res.json(doctors);
    } catch (error) {
        console.error('Error getting doctors:', error);
        res.status(500).json({ success: false, message: 'An error occurred while getting doctors' });
    }
};

// Function to delete a AdminDoctor by ID
exports.deleteDoctor = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedDoctor = await AdminDoctor.findByIdAndRemove(id);

        if (deletedDoctor) {
            res.json({ success: true, message: 'AdminDoctor deleted successfully' });
        } else {
            res.status(404).json({ success: false, message: 'AdminDoctor not found' });
        }
    } catch (error) {
        console.error('Error deleting AdminDoctor:', error);
        res.status(500).json({ success: false, message: 'An error occurred while deleting the AdminDoctor' });
    }
};

// Function to handle doctor login
exports.doctorLogin = async (req, res) => {
    const { docid, password } = req.body;
  
    try {
      // Find a doctor with the provided docid and password
      const doctor = await AdminDoctor.findOne({ docid, password });
  
      if (doctor) {
        // Authentication successful
        res.status(200).json({ success: true, message: 'Doctor authenticated successfully', doctor });
      } else {
        // Authentication failed
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error while logging in:', error);
      res.status(500).json({ success: false, message: 'An error occurred while logging in' });
    }
  };
  
  
  

