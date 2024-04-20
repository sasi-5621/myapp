const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    bloodgroup: { type: String, required: true },
    mobilenumber: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    degree: { type: String, required: true },
    workexperience: { type: Number, required: true },
    specialization: { type: String, required: true },
    staffid: { type: String, required: true },
    password: { type: String, required: true },
});

staffSchema.pre('save', async function (next) {
    if (this.isNew && this.specialization === 'Administration') {
        try {
            // Find the count of existing staff in the Administration department
            const staffCount = await StaffModel.countDocuments({ specialization: 'Administration' });

            // Calculate the next staff ID
            const nextStaffId = `ADM${(staffCount + 1).toString().padStart(3, '0')}`;
            this.staffid = nextStaffId; // Set the calculated staff ID
        } catch (error) {
            console.error('Error calculating next staff ID:', error);
        }
    }
    next();
});

module.exports = mongoose.model('Staff', staffSchema);
