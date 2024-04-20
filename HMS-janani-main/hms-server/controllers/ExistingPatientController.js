const CombinedData = require('../models/existingPatient');

async function generateAndAssignId() {
    try {
      const sequenceName = 'combinedDataId';
  
      const sequence = await db.collection('sequences').findOneAndUpdate(
        { _id: sequenceName },
        { $inc: { sequence_value: 1 } },
        { upsert: true, returnOriginal: false }
      );
  
      const formattedId = `JC${String(sequence.value.sequence_value).padStart(5, '0')}`;
  
      return formattedId;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to generate and assign ID');
    }
  }

  async function addExistingPatient(req, res) {
    try {
      const combinedData = new CombinedData({
        patientId: req.body.patientData.patientId,
        name: req.body.patientData.name,
        gender: req.body.patientData.gender,
        age: req.body.patientData.age,
        mobile: req.body.patientData.mobile,
        bloodGroup: req.body.patientData.bloodGroup,
        email: req.body.patientData.email,
        address: req.body.patientData.address,
        items: req.body.services,
        doctor: req.body.appointment.doctor,
        date: req.body.appointment.date,
        duration: req.body.appointment.duration,
        hour: req.body.appointment.time.split(':')[0],
        minute: req.body.appointment.time.split(':')[0],
        timeOfDay: req.body.appointment.time.split(' ')[1],
        totalAmount: req.body.payment.totalAmount,
        paymentMode: req.body.payment.mode,
        AmountStatus: req.body.payment.amountStatus,
        staffid:req.body.appointment.staffid,
      });
  
      await combinedData.save();
      res.status(201).json(combinedData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add data' });
    }
  }

  async function fetchCombinedData(req, res) {
    try {
      const combinedData = await CombinedData.find(); // Fetch all data from the collection
  
      if (!combinedData) {
        return res.status(404).json({ error: 'No data found' });
      }
  
      res.status(200).json(combinedData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }

  async function fetchCombinedDataByPatientId(req, res) {
    try {
      const patientId = req.params.patientId;

      // Find single document instead of all
      const patientData = await CombinedData.findOne({ patientId });   // Find data in your database based on patientId
  
      if (!patientData) {
        return res.status(404).json({ error: 'Patient data not found' });
      }
  
      res.status(200).json(patientData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch patient data' });
    }
  }

  async function fetchallCombinedDataByPatientId(req, res) {
    try {
      const patientId = req.params.patientId;
  
      const patientData = await CombinedData.find({ patientId }); // Find all data with the specific patientId
  
      if (!patientData || patientData.length === 0) {
        return res.status(404).json({ error: 'Patient data not found' });
      }
  
      res.status(200).json(patientData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch patient data' });
    }
  }
  

module.exports = {
  addExistingPatient,
  fetchCombinedData,
  fetchCombinedDataByPatientId,
  fetchallCombinedDataByPatientId,
};
