const LabBilling = require('../models/LabbillingModel');

// Controller functions for fetching billing data
exports.getAllLabBilling = async (req, res) => {
    try {
        const data = await LabBilling.find();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteLabBillingById = async (req, res) => {
    const billId = req.params.id
    try {
        await LabBilling.findByIdAndDelete(billId);
        console.log(`${billId}`)
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: 'Error deleting lab service' });
    }
};
