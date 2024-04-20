const StaffModel = require("../models/StaffAdmin");

const StaffController = {
  getStaffCountByDepartment: async (req, res) => {
    try {
      const department = req.params.department.toLowerCase();
      const staffCount = await StaffModel.countDocuments({
        specialization: department,
      });

      res.json({ success: true, count: staffCount });
    } catch (error) {
      console.error("Error getting staff count:", error);
      res
        .status(500)
        .json({
          success: false,
          message: "An error occurred while getting staff count",
        });
    }
  },

  addStaff: async (req, res) => {
    try {
      const formData = req.body;

      console.log("Received staffid:", formData.staffid); // Add this line

      const newStaff = new StaffModel({
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
        bloodgroup: formData.bloodgroup,
        mobilenumber: formData.mobilenumber,
        email: formData.email,
        address: formData.address,
        degree: formData.degree,
        workexperience: formData.workexperience,
        specialization: formData.specialization,
        staffid: formData.staffid,
        password: formData.password,
      });

      await newStaff.save();

      res.json({ success: true, message: "Staff added successfully" });
    } catch (error) {
      console.error("Error adding staff:", error);
      res
        .status(500)
        .json({
          success: false,
          message: "An error occurred while adding staff",
        });
    }
  },

  getAllStaff: async (req, res) => {
    try {
      const allStaff = await StaffModel.find({});
      res.json({ success: true, data: allStaff });
    } catch (error) {
      console.error("Error fetching all staff data:", error);
      res
        .status(500)
        .json({
          success: false,
          message: "An error occurred while fetching staff data",
        });
    }
  },

  editStaffById: async (req, res) => {
    try {
      const staffId = req.params.id;
      const formData = req.body;

      const updatedStaff = await StaffModel.findByIdAndUpdate(
        staffId,
        formData,
        { new: true }
      );

      if (!updatedStaff) {
        return res
          .status(404)
          .json({ success: false, message: "Staff not found" });
      }

      res.json({
        success: true,
        data: updatedStaff,
        message: "Staff updated successfully",
      });
    } catch (error) {
      console.error("Error editing staff:", error);
      res
        .status(500)
        .json({
          success: false,
          message: "An error occurred while editing staff",
        });
    }
  },

  deleteStaffById: async (req, res) => {
    try {
      const staffId = req.params.id;

      const deletedStaff = await StaffModel.findByIdAndRemove(staffId);

      if (!deletedStaff) {
        return res
          .status(404)
          .json({ success: false, message: "Staff not found" });
      }

      res.json({ success: true, message: "Staff deleted successfully" });
    } catch (error) {
      console.error("Error deleting staff:", error);
      res
        .status(500)
        .json({
          success: false,
          message: "An error occurred while deleting staff",
        });
    }
  },

  getNextStaffId: async (req, res) => {
    try {
      const department = req.params.department.toUpperCase();

      const largestStaff = await StaffModel.findOne({
        specialization: { $regex: new RegExp("^" + department, "i") },
      })
        .sort({ staffid: -1 })
        .limit(1);

      let nextStaffId;

      if (largestStaff) {
        const currentStaffId = largestStaff.staffid;
        const currentCount = parseInt(currentStaffId.slice(3), 10);

        nextStaffId = `${department}${(currentCount + 1)
          .toString()
          .padStart(5, "0")}`;
      } else {
        nextStaffId = `${department}00001`;
      }

      res.json({ success: true, staffId: nextStaffId });
    } catch (error) {
      console.error("Error getting next staff ID:", error);
      res
        .status(500)
        .json({
          success: false,
          message: "An error occurred while getting the next staff ID",
        });
    }
  },
  
  // Add this function to your StaffController
getDoctors: async (req, res) => {
  try {
    const doctors = await StaffModel.find({ specialization: "doctor" });
    res.json({ success: true, data: doctors });
  } catch (error) {
    console.error("Error fetching doctors data:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while fetching doctors data",
      });
  }
},
};

module.exports = StaffController;
