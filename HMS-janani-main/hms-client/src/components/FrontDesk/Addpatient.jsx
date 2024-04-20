
// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Barcode from "react-barcode";
// import "./Addpatient.css";
// import { useNavigate } from "react-router-dom";
// import { AiOutlineDelete } from "react-icons/ai";
// import { BsPrinter } from "react-icons/bs";
// import { TfiEmail } from "react-icons/tfi";
// import Navbar from "./Navbar";
// // const pid=localStorage.getItem('id')
// function generateUniqueId() {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// }

// function PatientDetails() {
//   const navigate = useNavigate();
//   const isMounted = useRef(true);
//   const [pid, setPID] = useState(generateUniqueId());
//   const [patients, setPatients] = useState([]);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [name, setName] = useState("");
//   const [gender, setGender] = useState("");
//   const [age, setAge] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [referredBy, setReferredBy] = useState("");
//   const [addedItems, setAddedItems] = useState([]);
//   const [selectedType, setSelectedType] = useState("");
//   const [unitPrice, setUnitPrice] = useState("");
//   const [discount, setDiscount] = useState("");
//   const [showAdditionalForm, setShowAdditionalForm] = useState(false);
//   const [selectedDoctor, setSelectedDoctor] = useState("");
//   const [appointmentDate, setAppointmentDate] = useState("");
//   const [selectedDuration, setSelectedDuration] = useState("");
//   const [selectedHour, setSelectedHour] = useState("");
//   const [selectedMinute, setSelectedMinute] = useState("");
//   const [selectedTimeOfDay, setSelectedTimeOfDay] = useState("AM");
//   const [inputError, setInputError] = useState(false);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [showBill, setShowBill] = useState(false);
//   const [selectedPaymentMode, setSelectedPaymentMode] = useState("cash");
//   const [billingData, setBillingData] = useState({
//     items: [],
//     selectedDoctor: "",
//     appointmentDate: "",
//     selectedDuration: "",
//     selectedHour: "",
//     selectedMinute: "",
//     selectedTimeOfDay: "AM",
//     selectedPaymentMode: "cash",
//     selectedAmountStatus: "",
//     email: "",
//     pid: pid,
//   });

//   const [doctorList, setDoctorList] = useState([]);
//   const [selectedDoctorName, setSelectedDoctorName] = useState("");
//   const [selectedDoctorStaffId, setSelectedDoctorStaffId] = useState("");
//   const [selectedDoctorId, setSelectedDoctorId] = useState("");
  
//   useEffect(() => {
//     return () => {
//       // Set the mounted status to false when the component unmounts
//       isMounted.current = false;
//     };
//   }, []);

//   const updateBillingData = (newBillingData) => {
//     setBillingData(newBillingData);
//   };
//   const [selectedAmountStatus, setselectedAmountStatus] = useState("");
  
//   const handleAddClick = () => {
//     if (isInputValid) {
//       setInputError(false);
//       const newItem = {
//         pid: pid,
//         type: selectedType,
//         price: unitPrice,
//         discount: discount,
//       };

//       setAddedItems([...addedItems, newItem]);
//       setUnitPrice("");
//       setDiscount("");
//       setSelectedType("");
//       setShowAdditionalForm(true);
//     } else {
//       setInputError(true);
//       setTimeout(() => {
//         setInputError(false);
//       }, 2000);
//     }
//   };
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // const localPid = localStorage.getItem('id');
    
//     if (!isFormValid()) {
//       setInputError(true);
//       setTimeout(() => {
//         setInputError(false);
//       }, 2000);
//       return;
//     }

//     const combinedData = {
//       name,
//       gender,
//       age,
//       mobile,
//       bloodGroup,
//       email,
//       address,
//       city,
//       pincode,
//       referredBy,
//       items: addedItems,
//       doctor: selectedDoctor,
//       date: appointmentDate,
//       duration: selectedDuration,
//       hour: selectedHour,
//       minute: selectedMinute,
//       timeOfDay: selectedTimeOfDay,
//       totalAmount: totalAmount,
//       paymentMode: selectedPaymentMode,
//       AmountStatus: selectedAmountStatus,
//       staffid: selectedDoctorId, // Include the staffId here
//     };

//     console.log(combinedData);

//     localStorage.setItem("id", pid);

//   try {
//     const response = await axios.post(
//       "https://hmsbackend-wbfe.onrender.com/api/v1/combined-data",
//       combinedData
//     );
//     console.log(response.data);

//     window.alert("Patient added successfully");
//     navigate("/Patient", { state: { patientName: name } });
//     fetchPatients();
//     if (response.status === 201) {
//       console.log("Patient added:", response.data);
//     } else {
//       console.error("Failed to add patient");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
  

//   const handleDoctorChange = (event) => {
//     const selectedDoctorName = event.target.value;
//     setSelectedDoctorName(selectedDoctorName);
  
//     // Find the selected doctor's ID based on the name
//     const doctor = doctorList.find(
//       (doctor) => doctor.name === selectedDoctorName
//     );
//     if (doctor) {
//       setSelectedDoctorId(doctor.staffid);
//       console.log("doctor.staffid"+doctor.staffid)
//     }
  
//     setSelectedDoctor(selectedDoctorName); // Update selectedDoctor
//   };
  

//   const generateAndStorePatientId = () => {
//     const id = generateUniqueId();
//     localStorage.setItem("id", id);
//     setPID(id); // Update the state variable with the new ID
//     return id;
//   };

//   // Check if pid is already in localStorage, if not, generate and store it
//   useEffect(() => {
//     const localPid = localStorage.getItem("id");
//     if (!localPid) {
//       generateAndStorePatientId();
//     } else {
//       setPID(localPid);
//     }
//   }, []);

//   // Check if pid is already in localStorage, if not, generate and store it
//   // pid = localStorage.getItem("id") || generateAndStorePatientId();
//   //   console.log('pid', pid )

//   const handleDeleteClick = (index) => {
//     const updatedItems = addedItems.filter((_, i) => i !== index);
//     setAddedItems(updatedItems);
//   };

//   const handleContinueClick = () => {
//     const total = addedItems.reduce((acc, item) => {
//       const itemPrice = parseFloat(item.price);
//       const itemDiscount = parseFloat(item.discount);
//       const discountedAmount = itemPrice * ((100 - itemDiscount) / 100);
//       return acc + discountedAmount;
//     }, 0);

//     setTotalAmount(total);
//     setShowAdditionalForm(false);
//   };
//   const isInputValid = selectedType && unitPrice && discount;

//   const handleTypeChange = (event) => {
//     setSelectedType(event.target.value);
//   };

//   const handleUnitPriceChange = (event) => {
//     setUnitPrice(event.target.value);
//   };

//   const handleDiscountChange = (event) => {
//     setDiscount(event.target.value);
//   };

//   const handleBackClick = () => {
//     setShowAdditionalForm(false);
//   };
//   const handlePrintClick = () => {
//     window.print();
//   };
//   const isFormValid = () => {
//     // Add conditions to check the validity of the form data
//     return (
//       name &&
//       gender &&
//       age &&
//       mobile &&
//       bloodGroup &&
//       email &&
//       address &&
//       city &&
//       pincode &&
//       referredBy &&
//       addedItems.length > 0 &&
//       selectedDoctor &&
//       appointmentDate &&
//       selectedDuration &&
//       selectedHour &&
//       selectedMinute &&
//       !isNaN(totalAmount) &&
//       selectedPaymentMode &&
//       selectedAmountStatus
//     );
//   };
//   const isAdditionalFormValid =
//     selectedDoctor &&
//     appointmentDate &&
//     selectedDuration &&
//     selectedHour &&
//     selectedMinute;

//   const fetchPatients = async () => {
//     try {
//       const response = await axios.get(
//         "https://hmsbackend-wbfe.onrender.com/api/v1/combined-data"
//       );
//       setPatients(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleBarcodeScan = (barcodeValue) => {
//     const patient = patients.find((patient) => patient.id === barcodeValue);
//     if (patient) {
//       setSelectedPatient(patient);
//     }
//   };

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const response = await axios.get("https://hmsbackend-wbfe.onrender.com/api/doctors");
//         if (response.data.success) {
//           const fetchedDoctors = response.data.data || [];
//           console.log(response.data.data);

//           // Check if there are doctors in the response
//           if (fetchedDoctors.length > 0) {
//             setDoctorList(fetchedDoctors);

//             // Access the first doctor if available
//             const selectedDoctor = fetchedDoctors[0];
//             if (selectedDoctor) {
//               setSelectedDoctorName(selectedDoctor.name);
//               setSelectedDoctorStaffId(selectedDoctor.staffid);
//             }
//           } else {
//             // Handle the case when there are no doctors
//             console.error("No doctors found in the response.");
//           }
//         } else {
//           console.error("Failed to fetch doctors");
//         }
//       } catch (error) {
//         console.error("Error fetching doctors:", error);
//       }
//     };

//     fetchDoctors();
//   }, []); // Run this effect only once when the component mounts

//   return (
//     <>
//       <Navbar />
//       <div className="form-container12" style={{fontFamily: "Inria Serif"}}>
//         <h1 className="title12">Hospital Reception System</h1>
//         <form className="formjagu" onSubmit={handleFormSubmit}>
//           <label className="label12">Name:</label>
//           <input
//             className="input12"
//             type="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <label className="label12">Gender:</label>
//           <select
//             className="select12"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="others">Others</option>
//           </select>
//           <label className="label12">Age:</label>
//           <input
//             className="input12"
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             required
//           />
//           <label className="label12">Mobile:</label>
//           <input
//             className="input12"
//             type="number"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             required
//           />
//           <label htmlFor="BlooGroup" className="label12">
//             Blood Group:
//           </label>
//           <select
//             className="select12"
//             id="Blood Group"
//             value={bloodGroup}
//             onChange={(e) => setBloodGroup(e.target.value)}
//           >
//             <option value="">Select Blood Group</option>
//             <option value="A+">A+</option>
//             <option value="A-">A-</option>
//             <option value="B+">B+</option>
//             <option value="B-">B-</option>
//             <option value="AB+">AB+</option>
//             <option value="AB-">AB-</option>
//             <option value="O+">O+</option>
//             <option value="O-">O-</option>
//           </select>
//           <label className="label12">Email:</label>
//           <input
//             className="input12"
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <label className="label12">Address:</label>
//           <input
//             className="input12"
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           />
//           <label className="label12">City:</label>
//           <input
//             className="input12"
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             required
//           />
//           <label className="label12">Pincode:</label>
//           <input
//             className="input12"
//             type="tel"
//             value={pincode}
//             onChange={(e) => setPincode(e.target.value)}
//             required
//           />
//           <label className="label12">ReferredBy:</label>

//           <input
//             className="input12"
//             type="text"
//             value={referredBy}
//             onChange={(e) => setReferredBy(e.target.value)}
//             required
//           />
//           <div className="dashboard-container12">
//             <div className="input-table-container12">
//               <table className="input-table12">
//                 <thead>
//                   <tr>
//                     <th>Service Name</th>
//                     <th>Price</th>
//                     <th>Discount (%)</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {addedItems.map((item, index) => (
//                     <tr key={index}>
//                       <td>{item.type}</td>
//                       <td>₹{item.price}</td>
//                       <td>{item.discount}%</td>
//                       <td>
//                         <button onClick={() => handleDeleteClick(index)}>
//                           <AiOutlineDelete size={"20px"} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                   <tr>
//                     <td>
//                       <select
//                         className="select12"
//                         value={selectedType}
//                         onChange={handleTypeChange}
//                       >
//                         <option value="type">Select service</option>
//                         <option value="consultation">Consultation</option>
//                         <option value="surgery">Surgery</option>
//                         <option value="followupconsultation">
//                           follow-Up Consultation
//                         </option>
//                         <option value="freefollowup">Free followup</option>
//                         <option value="gynic">gynic</option>
//                         <option value="dental">Dental</option>
//                       </select>
//                     </td>
//                     <td>
//                       <input
//                         className="input23"
//                         type="number"
//                         value={unitPrice}
//                         onChange={handleUnitPriceChange}
//                       />
//                     </td>
//                     <td>
//                       <input
//                         className="input23"
//                         type="number"
//                         value={discount}
//                         onChange={handleDiscountChange}
//                       />
//                     </td>
//                     <td>
//                       <button type="button" onClick={handleAddClick} className="add-button12">
//                         +
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//               {inputError && (
//                 <p className="message">Please enter required fields.</p>
//               )}
//             </div>
//             {showAdditionalForm && !showBill && (
//               <div>
//                 <div className="input-group">
//                   <label className="label-with-border12" htmlFor="doctor">
//                     Choose Doctor:
//                   </label>
//                   <select
//                     className="input-field"
//                     value={selectedDoctorName}
//                     onChange={handleDoctorChange}
//                   >
//                     <option>Select doctor</option>
//                     {doctorList.map((doctor) => (
//                       <option key={doctor.staffid} value={doctor.name}>
//                         {doctor.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Display the selected doctor's staff ID */}
//                 <div className="input-group">
//                   <label className="label-with-border12">
//                     Doctor Staff ID:
//                   </label>
//                   <input
//                     className="input-field"
//                     type="text"
//                     value={selectedDoctorId}
//                     readOnly 
//                   />
//                 </div>

//                 <div className="input-group">
//                   <label
//                     className="label-with-border12"
//                     htmlFor="appointmentDate"
//                   >
//                     Appointment Date:
//                   </label>
//                   <input
//                     className="input-field"
//                     type="date"
//                     id="appointmentDate"
//                     value={appointmentDate}
//                     onChange={(e) => setAppointmentDate(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="input-group">
//                   <label className="label-with-border12" htmlFor="duration">
//                     Duration:
//                   </label>
//                   <select
//                     className="input-field"
//                     id="duration"
//                     value={selectedDuration}
//                     onChange={(e) => setSelectedDuration(e.target.value)}
//                   >
//                     <option>Select duration</option>
//                     <option value="15">15 minutes</option>
//                     <option value="30">30 minutes</option>
//                     <option value="45">45 minutes</option>
//                     <option value="60">1 hour</option>
//                   </select>
//                 </div>
//                 <div className="input-group">
//                   <label
//                     className="label-with-border12"
//                     htmlFor="appointmentTime"
//                   >
//                     Appointment Time:
//                   </label>
//                   <div className="time-inputs">
//                     <select
//                       className="time-dropdown"
//                       value={selectedHour}
//                       onChange={(e) => setSelectedHour(e.target.value)}
//                     >
//                       <option value="">Hour</option>
//                       {Array.from({ length: 12 }, (_, i) => i + 1).map(
//                         (hour) => (
//                           <option key={hour} value={hour}>
//                             {hour}
//                           </option>
//                         )
//                       )}
//                     </select>
//                     <select
//                       className="time-dropdown"
//                       value={selectedMinute}
//                       onChange={(e) => setSelectedMinute(e.target.value)}
//                     >
//                       <option value="">Minute</option>
//                       {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
//                         <option key={minute} value={minute}>
//                           {minute}
//                         </option>
//                       ))}
//                     </select>
//                     <select
//                       className="time-dropdown"
//                       value={selectedTimeOfDay}
//                       onChange={(e) => setSelectedTimeOfDay(e.target.value)}
//                     >
//                       <option value="AM">AM</option>
//                       <option value="PM">PM</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="button-group">
//                   <button onClick={handleBackClick} className="back-button">
//                     Back
//                   </button>
//                   <button
//                     onClick={handleContinueClick}
//                     disabled={!isAdditionalFormValid}
//                   >
//                     Continue{" "}
//                   </button>
//                 </div>
//                 {inputError && (
//                   <p className="message">Please enter all fields.</p>
//                 )}
//               </div>
//             )}
//             {!showAdditionalForm && addedItems.length > 0 && !showBill && (
//               <div className="total-section">
//                 <label className="label-with-border12">Consultations</label>
//                 <span className="total-value">
//                   &nbsp;&nbsp;₹{totalAmount.toFixed(2)}
//                 </span>
//                 <br />
//                 <hr />
//                 <label className="label-with-border12">Total:</label>
//                 <span className="total-value">
//                   &nbsp;&nbsp;&nbsp;&nbsp;₹{totalAmount.toFixed(2)}
//                 </span>
//                 <br />
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <button
//                   className="create-bill-button"
//                   onClick={() => setShowBill(true)}
//                 >
//                   Create Bill
//                 </button>
//               </div>
//             )}
//             {showBill && (
//               <div className="total-section">
//                 <label className="label-with-border12">Consultations:</label>
//                 <span className="total-value">₹{totalAmount.toFixed(2)}</span>
//                 <hr />
//                 <label className="label-with-border12">Total Balance:</label>
//                 <span className="total-value">₹{totalAmount.toFixed(2)}</span>
//                 <div className="input-group">
//                   <label className="label-with-border12">Mode:</label>
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                   <select
//                     className="input-field"
//                     value={selectedPaymentMode}
//                     onChange={(e) => setSelectedPaymentMode(e.target.value)}
//                   >
//                     <option value="cash">Cash</option>
//                     <option value="wallet">M-Wallet</option>
//                     <option value="online">Online</option>
//                   </select>
//                 </div>
//                 <div className="input-group">
//                   <label className="label-with-border12">Amount Status:</label>
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                   <select
//                     className="input-field"
//                     value={selectedAmountStatus}
//                     onChange={(e) => setselectedAmountStatus(e.target.value)}
//                   >
//                     <option value="----">----</option>
//                     <option value="paid">paid</option>
//                     <option value="Not paid">Not paid</option>
//                   </select>
//                 </div>
//                 <div className="button-group">
//                   &nbsp;&nbsp;&nbsp;
//                   <button className="pay-button">
//                     Pay ₹{totalAmount.toFixed(2)}
//                   </button>
//                   <br />
//                   <br />
//                   &nbsp;&nbsp;&nbsp;
//                   <button
//                     className="print-bill-button"
//                     onClick={handlePrintClick}
//                   >
//                     <BsPrinter size={"20px"} />
//                     &nbsp;Print Bill
//                   </button>
//                 </div>
                
//               </div>
//             )}
//           </div>

//           <button className="subbutton" type="submit">Submit</button>
//         </form>

//       </div>
//     </>
//   );
// }

// export default PatientDetails;
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Addpatient.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPrinter } from "react-icons/bs";

import Navbar from './Navbar23';
// const pid=localStorage.getItem('id')
function generateUniqueId() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function PatientDetails() {
  const navigate = useNavigate();
  const isMounted = useRef(true);
  const [pid, setPID] = useState(generateUniqueId());
  const [, setPatients] = useState([]);
 
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [addedItems, setAddedItems] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [showAdditionalForm, setShowAdditionalForm] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState("AM");
  const [inputError, setInputError] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showBill, setShowBill] = useState(false);
  const [selectedPaymentMode, setSelectedPaymentMode] = useState("cash");
  const [,] = useState({
    items: [],
    selectedDoctor: "",
    appointmentDate: "",
    selectedDuration: "",
    selectedHour: "",
    selectedMinute: "",
    selectedTimeOfDay: "AM",
    selectedPaymentMode: "cash",
    selectedAmountStatus: "",
    email: "",
    pid: pid,
  });

  const [doctorList, setDoctorList] = useState([]);
  const [selectedDoctorName, setSelectedDoctorName] = useState("");
  const [, setSelectedDoctorStaffId] = useState("");
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  
  useEffect(() => {
    return () => {
      // Set the mounted status to false when the component unmounts
      isMounted.current = false;
    };
  }, []);

  // const updateBillingData = (newBillingData) => {
  //   setBillingData(newBillingData);
  // };
  const [selectedAmountStatus, setselectedAmountStatus] = useState("");
  
  const handleAddClick = () => {
    if (isInputValid) {
      setInputError(false);
      const newItem = {
        pid: pid,
        type: selectedType,
        price: unitPrice,
        discount: discount,
      };

      setAddedItems([...addedItems, newItem]);
      setUnitPrice("");
      setDiscount("");
      setSelectedType("");
      setShowAdditionalForm(true);
    } else {
      setInputError(true);
      setTimeout(() => {
        setInputError(false);
      }, 2000);
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // const localPid = localStorage.getItem('id');
    
    if (!isFormValid()) {
      setInputError(true);
      setTimeout(() => {
        setInputError(false);
      }, 2000);
      return;
    }

    const combinedData = {
      name,
      gender,
      age,
      mobile,
      bloodGroup,
      email,
      address,
      city,
      area,
      referredBy,
      items: addedItems,
      doctor: selectedDoctor,
      date: appointmentDate,
      duration: selectedDuration,
      hour: selectedHour,
      minute: selectedMinute,
      timeOfDay: selectedTimeOfDay,
      totalAmount: totalAmount,
      paymentMode: selectedPaymentMode,
      AmountStatus: selectedAmountStatus,
      staffid: selectedDoctorId, // Include the staffId here
    };

    console.log(combinedData);

    localStorage.setItem("id", pid);

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/v1/combined-data",
  //       combinedData
  //     );

  //     if (isMounted.current) {
  //       window.alert("Patient added successfully");
  //       navigate("/Patient", { state: { patientName: name } });
  //       fetchPatients();
  //     }

  //     if (response.status === 201) {
  //       console.log("Patient added:", response.data);
  //     } else {
  //       console.error("Failed to add patient");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  try {
    const response = await axios.post(
      "https://hmsbackend-wbfe.onrender.com/api/v1/combined-data",
      combinedData
    );
    console.log(response.data);

    window.alert("Patient added successfully");
    navigate("/Patient", { state: { patientName: name } });
    fetchPatients();
    if (response.status === 201) {
      console.log("Patient added:", response.data);
    } else {
      console.error("Failed to add patient");
    }
  } catch (error) {
    console.error(error);
  }
};
  // const generateAndStorePatientId = () => {
  //   const id = generateUniqueId();
  //   localStorage.setItem("id", id); // Store the generated ID in localStorage
  //   return id; // Return the generated ID
  // };

  const handleDoctorChange = (event) => {
    const selectedDoctorName = event.target.value;
    setSelectedDoctorName(selectedDoctorName);
  
    // Find the selected doctor's ID based on the name
    const doctor = doctorList.find(
      (doctor) => doctor.name === selectedDoctorName
    );
    if (doctor) {
      setSelectedDoctorId(doctor.staffid);
      console.log("doctor.staffid"+doctor.staffid)
    }
  
    setSelectedDoctor(selectedDoctorName); // Update selectedDoctor
  };
  

  const generateAndStorePatientId = () => {
    const id = generateUniqueId();
    localStorage.setItem("id", id);
    setPID(id); // Update the state variable with the new ID
    return id;
  };

  // Check if pid is already in localStorage, if not, generate and store it
  useEffect(() => {
    const localPid = localStorage.getItem("id");
    if (!localPid) {
      generateAndStorePatientId();
    } else {
      setPID(localPid);
    }
  }, []);

  // Check if pid is already in localStorage, if not, generate and store it
  // pid = localStorage.getItem("id") || generateAndStorePatientId();
  //   console.log('pid', pid )

  const handleDeleteClick = (index) => {
    const updatedItems = addedItems.filter((_, i) => i !== index);
    setAddedItems(updatedItems);
  };

  const handleContinueClick = () => {
    const total = addedItems.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price);
      const itemDiscount = parseFloat(item.discount);
      const discountedAmount = itemPrice * ((100 - itemDiscount) / 100);
      return acc + discountedAmount;
    }, 0);

    setTotalAmount(total);
    setShowAdditionalForm(false);
  };
  const isInputValid = selectedType && unitPrice && discount;

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleUnitPriceChange = (event) => {
    setUnitPrice(event.target.value);
  };

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  const handleBackClick = () => {
    setShowAdditionalForm(false);
  };
  const handlePrintClick = () => {
    window.print();
  };
  const isFormValid = () => {
    // Add conditions to check the validity of the form data
    return (
      name &&
      gender &&
      age &&
      mobile &&
      bloodGroup &&
      email &&
      address &&
      city &&
      area &&
      referredBy &&
      addedItems.length > 0 &&
      selectedDoctor &&
      appointmentDate &&
      selectedDuration &&
      selectedHour &&
      selectedMinute &&
      !isNaN(totalAmount) &&
      selectedPaymentMode &&
      selectedAmountStatus
    );
  };
  const isAdditionalFormValid =
    selectedDoctor &&
    appointmentDate &&
    selectedDuration &&
    selectedHour &&
    selectedMinute;

  const fetchPatients = async () => {
    try {
      const response = await axios.get(
        "https://hmsbackend-wbfe.onrender.com/api/v1/combined-data"
      );
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleBarcodeScan = (barcodeValue) => {
  //   const patient = patients.find((patient) => patient.id === barcodeValue);
  //   if (patient) {
  //     setSelectedPatient(patient);
  //   }
  // };

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("https://hmsbackend-wbfe.onrender.com/api/doctors");
        if (response.data.success) {
          const fetchedDoctors = response.data.data || [];
          console.log(response.data.data);

          // Check if there are doctors in the response
          if (fetchedDoctors.length > 0) {
            setDoctorList(fetchedDoctors);

            // Access the first doctor if available
            const selectedDoctor = fetchedDoctors[0];
            if (selectedDoctor) {
              setSelectedDoctorName(selectedDoctor.name);
              setSelectedDoctorStaffId(selectedDoctor.staffid);
            }
          } else {
            // Handle the case when there are no doctors
            console.error("No doctors found in the response.");
          }
        } else {
          console.error("Failed to fetch doctors");
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []); // Run this effect only once when the component mounts

  return (
    <>
      <Navbar />
      

      
      <div className="form-container12" style={{fontFamily: "Inria Serif"}}>
        <h1 className="title12">Hospital Reception System</h1>
        <form className="formjagu" onSubmit={handleFormSubmit}>
        <div className="rowst">
          <div className="qs">
          <label className="label12">Name:</label>
          <input
            className="input12"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="rows">
            <div className="gen">
            <label className="label12">Gender:</label>
          <select
            className="select125"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
            </div>
            <div className="ag">
            <label className="label123">Age:</label>
          <input
            className="input123"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
            </div>
          </div>
          
          
          <label className="label12">Mobile:</label>
          <input
            className="input12"
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
           <div className="rows">
            <div className="gen">
            <label htmlFor="BlooGroup" className="label12">
            BloodGroup:
          </label>
          <select
            className="select120"
            id="Blood Group"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
            </div>
            <div className="agedc">
            <label className="label120">Email:</label>
          <input
            className="input120"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
            </div>
          </div>
         
        
          <label className="label12">Address:</label>
          <input
            className="input12"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <div className="rows">
            <div className="cit">
            <label className="label12">City:</label>
          <input
            className="input125"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
            </div>
            <div className="are">
            <label className="label129">Area:</label>
          <input
            className="input127"
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
            </div>
          </div>
          
         
          <label className="label12">ReferredBy:</label>

          <input
            className="input12"
            type="text"
            value={referredBy}
            onChange={(e) => setReferredBy(e.target.value)}
            required
          />
          </div>
          <div className="das">
          <div className="dashboard-container12">
          <div className="col">
            <div className="tal">
            <div className="input-table-container12">
              <table className="input-table12">
                <thead>
                  <tr>
                    <th>Service Name</th>
                    <th>Price</th>
                    <th>Discount (%)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {addedItems.map((item, index) => (
                    <tr key={index}>
                      <td>{item.type}</td>
                      <td>₹{item.price}</td>
                      <td>{item.discount}%</td>
                      <td>
                        <button onClick={() => handleDeleteClick(index)}>
                          <AiOutlineDelete size={"20px"} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <select
                        className="select123"
                        value={selectedType}
                        onChange={handleTypeChange}
                      >
                        <option className="Size" value="type">Select service</option>
                        <option value="consultation">Consultation</option>
                        <option value="surgery">Surgery</option>
                        <option value="followupconsultation">
                          follow-Up Consultation
                        </option>
                        <option value="freefollowup">Free followup</option>
                        <option value="operation">Operation</option>
                      </select>
                    </td>
                    <td>
                      <input
                        className="input236"
                        type="number"
                        value={unitPrice}
                        onChange={handleUnitPriceChange}
                      />
                    </td>
                    <td>
                      <input
                        className="input230"
                        type="number"
                        value={discount}
                        onChange={handleDiscountChange}
                      />
                    </td>
                    <td>
                      <button type="button" onClick={handleAddClick} className="add-button12">
                        Add
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              {inputError && (
                <p className="message">Please enter required fields.</p>
              )}
              </div>
            </div>
            
            <br/>
            <div className="fro">
            {showAdditionalForm && !showBill && (
              <div className="additional-form-borders additional-form">
                <div className="rowp">
                <div className="input-group">
                  <label className="label-with-border12" htmlFor="doctor">
                    Choose Doctor:
                  </label>
                  <select
                    className="input-fieldi"
                    value={selectedDoctorName}
                    onChange={handleDoctorChange}
                  >
                    <option>Select doctor</option>
                    {doctorList.map((doctor) => (
                      <option key={doctor.staffid} value={doctor.name}>
                        {doctor.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Display the selected doctor's staff ID */}
                <div className="input-group">
                  <label className="label-with-border12">
                    Doctor Staff ID:
                  </label>
                  <input
                    className="input-fieldrw"
                    type="text"
                    value={selectedDoctorId}
                    readOnly 
                  />
                </div>
                </div>

                <div className="rowp">
                <div className="input-group">
                  <label
                    className="label-with-border12"
                    htmlFor="appointmentDate"
                  >
                    Appointment Date:
                  </label>
                  <input
                    className="input-fieldi"
                    type="date"
                    id="appointmentDate"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    required
                  />
                </div>
                
                <div className="input-group">
                  <label className="label-with-border12" htmlFor="duration">
                    Duration:
                  </label><br/>
                  <div className="qiu">
                  <select
                    className="input-fieldr"
                    id="duration"
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                  >
                    <option>Select duration</option>
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">1 hour</option>
                  </select>
                  </div>
                </div>
                </div>
                <div className="rowp">
                <div className="input-group">
                  <div className="rowp">
                    <div className="tr">
                  <label
                    className="label-with-border12e"
                    htmlFor="appointmentTime"
                  >
                    AppointmentTime:
                  </label>
                  </div>
                  <div className="g">
                  <div className="time-inputs">
                    <select
                      className="time-dropdown"
                      value={selectedHour}
                      onChange={(e) => setSelectedHour(e.target.value)}
                    >
                      <option value="">Hour</option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(
                        (hour) => (
                          <option key={hour} value={hour}>
                            {hour}
                          </option>
                        )
                      )}
                    </select>
                    <select
                      className="time-dropdown"
                      value={selectedMinute}
                      onChange={(e) => setSelectedMinute(e.target.value)}
                    >
                      <option value="">Minute</option>
                      {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                        <option key={minute} value={minute}>
                          {minute}
                        </option>
                      ))}
                    </select>
                    <select
                      className="time-dropdown"
                      value={selectedTimeOfDay}
                      onChange={(e) => setSelectedTimeOfDay(e.target.value)}
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                  </div>
                  </div>
                </div>
               

                <div className="button-groups">
                  <button onClick={handleBackClick} className="back-button">
                    Back
                  </button>
                  <button
                    onClick={handleContinueClick}
                    disabled={!isAdditionalFormValid}
                    className="cont"
                  >
                    Continue{" "}
                  </button>
                </div>
                </div>
                {inputError && (
                  <p className="message">Please enter all fields.</p>
                )}
              </div>
            )}
            {!showAdditionalForm && addedItems.length > 0 && !showBill && (
              <div className="total-section">
                <label className="label-with-border120">Consultations</label>
                <span className="total-value">
                  &nbsp;&nbsp;₹{totalAmount.toFixed(2)}
                </span>
                <br />
                <hr />
                <label className="label-with-border120">Total:</label>
                <span className="total-value">
                  &nbsp;&nbsp;&nbsp;&nbsp;₹{totalAmount.toFixed(2)}
                </span>
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="create-bill-button"
                  onClick={() => setShowBill(true)}
                >
                  Create Bill
                </button>
              </div>
            )}
            {showBill && (
              <div className="total-section">
                <label className="label-with-border120">Consultations:</label>
                <span className="total-value">₹{totalAmount.toFixed(2)}</span>
                <hr />
                <label className="label-with-border120">Total Balance:</label>
                <span className="total-value">₹{totalAmount.toFixed(2)}</span>
                <div className="input-group">
                  <label className="label-with-border120">Mode:</label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                  <select
                    className="input-fieldg"
                    value={selectedPaymentMode}
                    onChange={(e) => setSelectedPaymentMode(e.target.value)}
                  >
                    <option value="cash">Cash</option>
                    <option value="wallet">M-Wallet</option>
                    <option value="online">Online</option>
                  </select>
                  </div>
                </div>
                <div className="input-group">
                  <label className="label-with-border120">Amount Status:</label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                  <select
                    className="input-fieldg"
                    value={selectedAmountStatus}
                    onChange={(e) => setselectedAmountStatus(e.target.value)}
                  >
                    <option value="----">----</option>
                    <option value="paid">paid</option>
                    <option value="Not paid">Not paid</option>
                  </select>
                  </div>
                </div>
                <div className="button-group">
                  &nbsp;&nbsp;&nbsp;
                  <button className="pay-button">
                    Pay ₹{totalAmount.toFixed(2)}
                  </button>
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;
                  <button
                    className="print-bill-button"
                    onClick={handlePrintClick}
                  >
                    <BsPrinter size={"20px"} />
                    &nbsp;Print Bill
                  </button>
                </div>
                
              </div>
            )}
            </div>
            </div>
          </div>

          <button className="submittts" type="submit">Submit</button>
          </div>

          </div>
        </form>

      </div>

   </>
  );
}

export default PatientDetails;