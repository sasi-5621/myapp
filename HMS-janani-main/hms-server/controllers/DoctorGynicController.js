const GynicModel = require('../models/DoctorGynicModel');

// Handle saving Gynic data
const saveData = async (req, res) => {
    try {
      const data = req.body;
      console.log('Received data:', data); // Log the received data
  
      const gynicData = new GynicModel(data);
      await gynicData.save();
      clg 
  
      console.log('Data saved successfully'); // Log success
      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving data:', error); // Log the error
      res.status(500).json({ error: 'Error saving data. Please try again.' });
    }
  };
  
  

module.exports = { saveData };
