// import React, { useState,useEffect } from 'react';
// import './Masterdashboard.css';
// import axios from 'axios';
// import PharmacyNav from './PharmacyNav';

// const Masterdashboard = () => {
//   const [invoiceNumber, setInvoiceNumber] = useState('');
//   const [tableData, setTableData] = useState([]);
//   const [stockName, setStockName] = useState('');
//   const [date, setDate] = useState('');
//   const [Medicine, setMedicine] = useState('');
//   const [Batch, setBatch] = useState('');
//   const [BatchExpiry, setBatchExpiry] = useState('');
//   const [Unit, setUnit] = useState('');
//   const [strips, setStrips] = useState('');
//   const [Freestrips, setFreeStrips] = useState('');
//   const [Gst, setGst] = useState('');
//   const [price, setPrice] = useState('');
//   const [MRP, setMRP] = useState('');
//   const [Total, setTotal] = useState('');
//   const [isChecked, setIsChecked] = useState(false);
//   const [HSNcode, setHSNcode] = useState('');
//   const [RackNo, setRackNo] = useState('');
//   const [BookNo, setBookNo] = useState('');
//   const [NetPrice, setNetPrice] = useState('');
//   const [ManufactureName, setManufactureName] = useState('');
//   const [MedID, setMedID] = useState('');
//   const [StockistName, setStockistName] = useState('');
//   const [Stockistemail, setStockistEmail] = useState('');
//   const [Category, setCategory] = useState('');
//   const [AddDate, setAddDate] = useState('');
//   const [Orderno, setOrderno] = useState('');
//   const [gstno, setgstNo] = useState('');
//   const [stockistID, setStockistID] = useState('');
//   const [packprice, setPackPrice] = useState('');
//   const [packmrp, setPackMRP] = useState('');
//   const [unitsperpack, setUnitsPerPack] = useState('');
//   // const [unitprice, setUnitPrice] = useState('');
//   const [personname, setpersonname] = useState('');
//   const [time, settime] = useState('');
//   const [OrderID, setOrderID] = useState('');
//   const [podate, setpodate] = useState('');
//   const [InvoiceID, setInvoiceID] = useState('');
//   const [Totalmedicines, setTotalmedicines] = useState('');
//   const [Totalmanufacturers, setTotalmanufacturers] = useState('');
//   const [Totalbilled, setTotalbilled] = useState('');
//   const [outstanding, setoutstanding] = useState('');
//   const [collectedbycash, setcollectedbycash] = useState('');
//   const [collectedbycard, setcollectedbycard] = useState('');
//   const [mobile, setmobile] = useState('');
//   // const [Return, setReturn] = useState('');
//   // const [returnbycash, setreturnbycash] = useState('');
//   // const [returnbycard, setreturnbycard] = useState('');
//   const [stockID, setstockID] = useState('');
//   const [Totalbalance, setTotalbalance] = useState('');
//   const [Totalpaid, setTotalpaid] = useState('');
//   const [balance, setbalance] = useState('');
//   const [TotalAmount, setTotalAmount] = useState('');
//   const [Invoicenumber, setInvoicenumber] = useState('');
//   const [unitsprice, setunitsprice] = useState('');
//   const [unitsinstock, setunitsinstock] = useState('');
//   const [expiry, setexpiry] = useState('');
//   const [percentdiscount, setpercentdiscount] = useState('');
//   const [percentgst, setpercentgst] = useState('');
//   const [intax, setintax] = useState('');
//   const [noofstrips, setnoofstrips] = useState('');
//   const [discount, setdiscount] = useState('');
//   const [beforestocks, setbeforestocks] = useState('');
//   const [afterstocks, setafterstocks] = useState('');
//   const [stockdifference, setstockdifference] = useState('');
//   const [totalgst, settotalgst] = useState('');
//   const [grossamount, setgrossamount] = useState('');
//   const [roundoff, setroundoff] = useState('');
//   const [stocksreturned, setstocksreturned] = useState('');
//   const [purchaseamount, setpurchaseamount] = useState('');
//   // const [collectedbyothers, setcollectedbyothers] = useState('');
//   // const [totalsales, settotalsales] = useState('');
//   // const [totalcollect, settotalcollect] = useState('');
//   // const [currentinventorycost, setcurrentinventorycost] = useState('');
//   // const [currentinventorymrp, setcurrentinventorymrp] = useState('');
//   // const [instockmedicineinventoryquantity, setinstockmedicineinventoryquantity] = useState('');
//   // const [medicineoutofstock, setmedicineoutofstock] = useState('');
//   // const [sales, setsales] = useState('');
//   // const [paid, setpaid] = useState('');
//   useEffect(() => {
//     fetchData();
//     handleUpdateData();
//     handleDeleteData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/properties');
//       setTableData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleUpdateData = async (data) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/properties`
//       );
//       console.log(response.data);
//       window.alert('Data updated successfully');
//       fetchData();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeleteData = async (data) => {
//     try {
//       const response = await axios.delete(`http://localhost:5000/properties`);
//       console.log(response.data);
//       window.alert('Data deleted successfully');
//       fetchData();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSaveData = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/properties', {
    
//         date,
//         Medicine,
//         Batch,
//         BatchExpiry,
//         Unit,
//         strips,
//         Freestrips,
//         Gst,
//         price,
//         MRP,
//         Total,
//         isChecked,
//         HSNcode,
//         RackNo,
//         BookNo,
//         NetPrice,
//         ManufactureName,
//         MedID,
//         StockistName,
//         Stockistemail,
//         Category,
//         AddDate,
//         Orderno,
//         gstno,
//         stockistID,
//         packprice,
//         packmrp,
//         unitsperpack,
//         personname,
//         time,
//         OrderID,
//         InvoiceID,
//         Totalmedicines,
//         Totalmanufacturers,
//         outstanding,
//         // Totalbilled,
//         // collectedbycash,
//         // collectedbycard,
//         mobile,
//         // Return,
//         // returnbycash,
//         // returnbycard,
//         stockID,
//         Totalbalance,
//         Totalpaid,
//         balance,
//         podate,
//         TotalAmount,
//         Invoicenumber,
//         unitsprice,
//         unitsinstock,
//         expiry,
//         percentdiscount,
//         percentgst,
//         intax,
//         noofstrips,
//         discount,
//         beforestocks,
//         afterstocks,
//         stockdifference,
//         totalgst,
//         grossamount,
//         roundoff,
//         stocksreturned,
//         purchaseamount,
//         // collectedbyothers,
//         // totalsales,
//         // totalcollect,
//         // currentinventorycost,
//         // currentinventorymrp,
//         // instockmedicineinventoryquantity,
//         // medicineoutofstock,
//         // sales,
//         // paid,

//       });
//       console.log(response.data);
//       window.alert('Data added successfully');
//       // Clear all state variables
//       setInvoiceNumber('');
//       setTableData([]);
//       setStockName('');
//       setDate('');
//       setMedicine('');
//       setBatch('');
//       setBatchExpiry('');
//       setUnit('');
//       setStrips('');
//       setFreeStrips('');
//       setGst('');
//       setPrice('');
//       setMRP('');
//       setTotal('');
//       setIsChecked(false);
//       setHSNcode('');
//       setRackNo('');
//       setBookNo('');
//       setNetPrice('');
//       setManufactureName('');
//       setMedID('');
//       setStockistName('');
//       setStockistEmail('');
//       setCategory('');
//       setAddDate('');
//       setOrderno('');
//       setgstNo('');
//       setStockistID('');
//       setPackPrice('');
//       setPackMRP('');
//       setUnitsPerPack('');
//       // setUnitPrice('');
//       setpersonname('');
//       settime('');
//       setOrderID('');
//       setInvoiceID('');
//       setTotalmedicines('');
//       setTotalmanufacturers('');
//       // setTotalbilled('');
//       setoutstanding('');
//       setcollectedbycash('');
//       setcollectedbycard('');
//       setmobile('');
//       // setReturn('');
//       // setreturnbycash('');
//       // setreturnbycard('');
//       setstockID('');
//       setTotalbalance('');
//       setTotalpaid('');
//       setbalance('');
//       setTotalAmount('');
//       setInvoicenumber('');
//       setunitsprice('');
//       setunitsinstock('');
//       setexpiry('');
//       setpercentdiscount('');
//       setpercentgst('');
//       setintax('');
//       setnoofstrips('');
//       setdiscount('');
//       setbeforestocks('');
//       setafterstocks('');
//       setstockdifference('');
//       settotalgst('');
//       setgrossamount('');
//       setroundoff('');
//       setstocksreturned('');
//       setpurchaseamount('');
//       // setcollectedbyothers('');
//       // settotalsales('');
//       // settotalcollect('');
//       // setcurrentinventorycost('');
//       // setcurrentinventorymrp('');
//       // setinstockmedicineinventoryquantity('');
//       // setmedicineoutofstock('');
//       // setsales('');
//       // setpaid('');


//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <><PharmacyNav/>
//     <div className='container-txj-11-ipog'>
  
//     <div className='main-container-tjx1-ipog' >
//       <div className='header-tjx-ipog'>
//     <h3 >Master Dashboard</h3>
//     </div>
      
//       <hr/>
//       <div className="input-row-ipog" >
    
      
//         </div>
//       </div>
//       </div>
      
//       <div className='second-container-txj-ipog'>
//       <div className="input-row-1-ipog" >
    

//     <div className="input-container-1-ipog">
//     <label htmlFor="Medicine">Medicine</label>
//  <input
//         type="text"
//         id="Medicine"
//         value={Medicine}
//         onChange={(e) => setMedicine(e.target.value)}
//       />
//     </div>

//     <div className="input-container-1-ipog">
//       <label htmlFor="Batch">Batch </label>
//       <input
//         type="Batch"
//         id="Batch"
//         value={Batch}
//         onChange={(e) => setBatch(e.target.value)}
//       />
//     </div>
//     <div className="input-container-1-ipog">
//       <label htmlFor="BatchExpiry">Batch Expiry</label>
//       <input
//         type="date"
//         id="BatchExpiry"
//         value={BatchExpiry}
//         onChange={(e) => setBatchExpiry(e.target.value)}
//       />
//     </div>
//     <div className="input-container-1-ipog">
//       <label htmlFor="Unit">Unit</label>
//       <input
//         type="number"
//         id="Unit"
//         value={Unit}
//         onChange={(e) => setUnit(e.target.value)}
//       />
//     </div>
//     <div className="input-container-1-ipog">
//       <label htmlFor="strips">strips</label>
//       <input
//         type="number"
//         id="strips"
//         value={strips}
//         onChange={(e) => setStrips(e.target.value)}
//       />
//     </div>
//     <div className="input-container-1-ipog">
//       <label htmlFor="Freestrips">Free strips</label>
//       <input
//         type="number"
//         id="Freestrips"
//         value={Freestrips}
//         onChange={(e) => setFreeStrips(e.target.value)}
//       />
//     </div>
//     <div className="input-container-1-ipog">
//       <label htmlFor="Gst">Gst</label>
//       <input
//         type="number"
//         id="Gst"
//         value={Gst}
//         onChange={(e) => setGst(e.target.value)}
//       />
//     </div>
//     <div className="input-container-1-ipog">
//       <label htmlFor="price">price</label>
//       <input
//         type="number"
//         id="price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       />
//     </div>
//     <div className="input-container-1-ipog">
//       <label htmlFor="MRP">MRP</label>
//       <input
//         type="number"
//         id="MRP"
//         value={MRP}
//         onChange={(e) => setMRP(e.target.value)}
//       />
//     </div>
//     <div className="input-container-1-ipog">
//       <label htmlFor="Total">Total</label>
//       <input
//         type="number"
//         id="Total"
//         value={Total}
//         onChange={(e) => setTotal(e.target.value)}
//       />
//     </div> 
//     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//     <div className="input-row-3" >
    
//     <div className="input-container-2-ipog">
//     <label htmlFor="HSNCode">HSN Code</label>
//  <input
//         type="text"
//         id="HSNcode"
//         value={HSNcode}
//         onChange={(e) => setHSNcode(e.target.value)}
//       />
//     </div>
//     <div className="input-container-2-ipog">
//     <label htmlFor="RackNo">Rack No</label>
//  <input
//         type="number"
//         id="RackNo"
//         value={RackNo}
//         onChange={(e) => setRackNo(e.target.value)}
//       />
//     </div>
//     <div className="input-container-2-ipog">
//     <label htmlFor="BookNo">Book No</label>
//  <input
//         type="number"
//         id="BookNo"
//         value={BookNo}
//         onChange={(e) => setBookNo(e.target.value)}
//       />
//     </div>
//     <div className="input-container-2-ipog">
//     <label htmlFor="NetPrice">Net Price</label>
//  <input
//         type="number"
//         id="NetPrice"
//         value={NetPrice}
//         onChange={(e) => setNetPrice(e.target.value)}
//       />
//     </div >

//     <div className="input-container-2-ipog">
//     <label htmlFor="Manufacturename">Manufacture Name</label>
//  <input
//         type="text"
//         id="manufacturename"
//         value={ManufactureName}
//         onChange={(e) => setManufactureName(e.target.value)}
//       />
//     </div >

//     <div className="input-container-2-ipog">
//     <label htmlFor="MED ID">Med ID</label>
//  <input
//         type="text"
//         id="Medid"
//         value={MedID}
//         onChange={(e) => setMedID(e.target.value)}
//       />
//     </div >

//     <div className="input-container-2-ipog">
//     <label htmlFor="StockistName">StockistName</label>
//  <input
//         type="text"
//         id="StockistName"
//         value={StockistName}
//         onChange={(e) => setStockistName(e.target.value)}
//       />
//     </div >

//     <div className="input-container-2-ipog">
//     <label htmlFor="Stockistemail">Stockistemail</label>
//  <input
//         type="email"
//         id="Stockistemail"
//         value={Stockistemail}
//         onChange={(e) => setStockistEmail(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="Category">Category</label>
//  <input
//         type="text"
//         id="Category"
//         value={Category}
//         onChange={(e) => setCategory(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="AddDate">AddDate</label>
//  <input
//         type="date"
//         id="AddDate"
//         value={AddDate}
//         onChange={(e) => setAddDate(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="Orderno">Orderno</label>
//  <input
//         type="number"
//         id="Orderno"
//         value={Orderno}
//         onChange={(e) => setOrderno(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="gstno">gstno</label>
//  <input
//         type="string"
//         id="gstno"
//         value={gstno}
//         onChange={(e) => setgstNo(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="stockistID">StockistID</label>
//  <input
//         type="text"
//         id="stockistID"
//         value={stockistID}
//         onChange={(e) => setStockistID(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="packprice">Packprice</label>
//  <input
//         type="number"
//         id="packprice"
//         value={packprice}
//         onChange={(e) => setPackPrice(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="packmrp">Packmrp</label>
//  <input
//         type="number"
//         id="packmrp"
//         value={packmrp}
//         onChange={(e) => setPackMRP(e.target.value)}
//       />
//     </div >

//     <div className="input-container-1-ipog">
//       <label htmlFor="podate">PO Date</label>
//       <input
//         type="date"
//         id="podate"
//         value={podate}
//         onChange={(e) => setpodate(e.target.value)}
//       />
//     </div>

//     <div className="input-container-2-ipog">
//     <label htmlFor="unitsperpack">Unitsperpack</label>
//  <input
//         type="number"
//         id="unitsperpack"
//         value={unitsperpack}
//         onChange={(e) => setUnitsPerPack(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="personname">Personname</label>
//  <input
//         type="text"
//         id="personname"
//         value={personname}
//         onChange={(e) => setpersonname(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="time">Time</label>
//  <input
//         type="time"
//         id="time"
//         value={time}
//         onChange={(e) => settime(e.target.value)}
//       />
//     </div >



//     <div className="input-container-2-ipog">
//     <label htmlFor=" OrderID"> OrderID</label>
//  <input
//         type="text"
//         id=" OrderID"
//         value={ OrderID}
//         onChange={(e) => setOrderID(e.target.value)}
//       />
//     </div >



//     <div className="input-container-2-ipog">
//     <label htmlFor=" InvoiceID"> InvoiceID</label>
//  <input
//         type="text"
//         id=" InvoiceID"
//         value={ InvoiceID}
//         onChange={(e) => setInvoiceID(e.target.value)}
//       />
//     </div >



//     <div className="input-container-2-ipog">
//     <label htmlFor="Totalmedicines">Totalmedicines</label>
//  <input
//         type="number"
//         id="Totalmedicines"
//         value={Totalmedicines}
//         onChange={(e) => setTotalmedicines(e.target.value)}
//       />
//     </div >



//     <div className="input-container-2-ipog">
//     <label htmlFor="Totalmanufacturers">Totalmanufacturers</label>
//  <input
//         type="text"
//         id="Totalmanufacturers"
//         value={Totalmanufacturers}
//         onChange={(e) => setTotalmanufacturers(e.target.value)}
//       />
//     </div >

//     {/* <div className="input-container-2-ipog">
//     <label htmlFor="Totalbilled">Totalbilled</label>
//  <input
//         type="number"
//         id="Totalbilled"
//         value={Totalbilled}
//         onChange={(e) => setTotalbilled(e.target.value)}
//       />
//     </div > */}


//     <div className="input-container-2-ipog">
//     <label htmlFor="outstanding">Outstanding</label>
//  <input
//         type="text"
//         id="outstanding"
//         value={outstanding}
//         onChange={(e) => setoutstanding(e.target.value)}
//       />
//     </div >


//     {/* <div className="input-container-2-ipog">
//     <label htmlFor="collectedbycash">Collectedbycash</label>
//  <input
//         type="number"
//         id="collectedbycash"
//         value={collectedbycash}
//         onChange={(e) => setcollectedbycash(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="collectedbycard">Collectedbycard</label>
//  <input
//         type="number"
//         id="collectedbycard"
//         value={collectedbycard}
//         onChange={(e) => setcollectedbycard(e.target.value)}
//       />
//     </div > */}


//     <div className="input-container-2-ipog">
//     <label htmlFor="mobile">Mobile</label>
//  <input
//         type="number"
//         id="mobile"
//         value={mobile}
//         onChange={(e) => setmobile(e.target.value)}
//       />
//     </div >


//     {/* <div className="input-container-2-ipog">
//     <label htmlFor=" Return"> Returns</label>
//  <input
//         type="text"
//         id=" Return"
//         value={ Return}
//         onChange={(e) => setReturn(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="returnbycash">Returnbycash</label>
//  <input
//         type="number"
//         id="returnbycash"
//         value={returnbycash}
//         onChange={(e) => setreturnbycash(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="returnbycard">Returnbycard</label>
//  <input
//         type="number"
//         id="returnbycard"
//         value={returnbycard}
//         onChange={(e) => setreturnbycard(e.target.value)}
//       />
//     </div > */}


//     <div className="input-container-2-ipog">
//     <label htmlFor="stockID">StockID</label>
//  <input
//         type="text"
//         id="stockID"
//         value={stockID}
//         onChange={(e) => setstockID(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="Totalbalance">Totalbalance</label>
//  <input
//         type="number"
//         id="Totalbalance"
//         value={Totalbalance}
//         onChange={(e) => setTotalbalance(e.target.value)}
//       />
//     </div >

//     <div className="input-container-2-ipog">
//     <label htmlFor=" Totalpaid"> Totalpaid</label>
//  <input
//         type="number"
//         id=" Totalpaid"
//         value={ Totalpaid}
//         onChange={(e) =>  setTotalpaid(e.target.value)}
//       />
//     </div >

//     <div className="input-container-2-ipog">
//     <label htmlFor="balance">Balance</label>
//  <input
//         type="number"
//         id="balance"
//         value={balance}
//         onChange={(e) => setbalance(e.target.value)}
//       />
//     </div >

//     <div className="input-container-2-ipog">
//     <label htmlFor="TotalAmount">Totalamount</label>
//  <input
//         type="number"
//         id="TotalAmount"
//         value={TotalAmount}
//         onChange={(e) => setTotalAmount(e.target.value)}
//       />
//     </div >

//     <div className="input-container-2-ipog">
//     <label htmlFor="Invoicenumber">Invoicenumber</label>
//  <input
//         type="text"
//         id="Invoicenumber"
//         value={Invoicenumber}
//         onChange={(e) => setInvoicenumber(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="unitsprice">Unitsprice</label>
//  <input
//         type="number"
//         id="unitsprice"
//         value={unitsprice}
//         onChange={(e) => setunitsprice(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="unitsinstock">Unitsinstock</label>
//  <input
//         type="number"
//         id="unitsinstock"
//         value={unitsinstock}
//         onChange={(e) => setunitsinstock(e.target.value)}
//       />
//     </div >



//     <div className="input-container-2-ipog">
//     <label htmlFor="expiry">Expiry</label>
//  <input
//         type="date"
//         id="expiry"
//         value={expiry}
//         onChange={(e) => setexpiry(e.target.value)}
//       />
//     </div >



//     <div className="input-container-2-ipog">
//     <label htmlFor="percentdiscount">Percentdiscount</label>
//  <input
//         type="number"
//         id="percentdiscount"
//         value={percentdiscount}
//         onChange={(e) => setpercentdiscount(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="percentgst">Percentgst</label>
//  <input
//         type="number"
//         id="percentgst"
//         value={percentgst}
//         onChange={(e) => setpercentgst(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="intax">Intax</label>
//  <input
//         type="number"
//         id="intax"
//         value={intax}
//         onChange={(e) => setintax(e.target.value)}
//       />
//     </div >


//     <div className="input-container-1-ipog">
//     <label htmlFor="date">Date</label>
//  <input
//         type="date"
//         id="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//     </div>


//     <div className="input-container-2-ipog">
//     <label htmlFor="noofstrips">No.ofstrips</label>
//  <input
//         type="number"
//         id="noofstrips"
//         value={noofstrips}
//         onChange={(e) => setnoofstrips(e.target.value)}
//       />
//     </div >


//     <div className="input-container-2-ipog">
//     <label htmlFor="discount">Discount</label>
//  <input
//         type="number"
//         id="discount"
//         value={discount}
//         onChange={(e) => setdiscount(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="beforestocks">Before Stocks</label>
//  <input
//         type="number"
//         id="beforestocks"
//         value={beforestocks}
//         onChange={(e) => setbeforestocks(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="afterstocks">After Stocks</label>
//  <input
//         type="number"
//         id="afterstocks"
//         value={afterstocks}
//         onChange={(e) => setafterstocks(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="stockdifference">Stock Difference</label>
//  <input
//         type="number"
//         id="stockdifference"
//         value={stockdifference}
//         onChange={(e) => setstockdifference(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="totalgst">Total GST</label>
//     <input
//         type="number"
//         id="totalgst"
//         value={totalgst}
//         onChange={(e) => settotalgst(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="grossamount">Gross Amount</label>
//     <input
//         type="number"
//         id="grossamount"
//         value={grossamount}
//         onChange={(e) => setgrossamount(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="roundoff">Round Off</label>
//     <input
//         type="number"
//         id="roundoff"
//         value={roundoff}
//         onChange={(e) => setroundoff(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="stocksreturned">Stocks Returned</label>
//     <input
//         type="number"
//         id="stocksreturned"
//         value={stocksreturned}
//         onChange={(e) => setstocksreturned(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="purchaseamount">Purchase Amount</label>
//     <input
//         type="number"
//         id="purchaseamount"
//         value={purchaseamount}
//         onChange={(e) => setpurchaseamount(e.target.value)}
//       />
//     </div >
//     {/* <div className="input-container-2-ipog">
//     <label htmlFor="collectedbyothers">Collected By Others</label>
//     <input
//         type="number"
//         id="collectedbyothers"
//         value={collectedbyothers}
//         onChange={(e) => setcollectedbyothers(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="totalsales">Total Sales</label>
//     <input
//         type="number"
//         id="totalsales"
//         value={totalsales}
//         onChange={(e) => settotalsales(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="totalcollect">Total Collect</label>
//     <input
//         type="number"
//         id="totalcollect"
//         value={totalcollect}
//         onChange={(e) => settotalcollect(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="currentinventorycost">Current Inventory Cost</label>
//     <input
//         type="number"
//         id="currentinventorycost"
//         value={currentinventorycost}
//         onChange={(e) => setcurrentinventorycost(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="currentinventorymrp">Current Inventory MRP</label>
//     <input
//         type="number"
//         id="currentinventorymrp"
//         value={currentinventorymrp}
//         onChange={(e) => setcurrentinventorymrp(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="instockmedicineinventoryquantity">Instock Medicine Inventory Quantity</label>
//     <input
//         type="number"
//         id="instockmedicineinventoryquantity"
//         value={instockmedicineinventoryquantity}
//         onChange={(e) => setinstockmedicineinventoryquantity(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="medicineoutofstock">Medicine Out Of Stock</label>
//     <input
//         type="number"
//         id="medicineoutofstock"
//         value={medicineoutofstock}
//         onChange={(e) => setmedicineoutofstock(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="sales">Sales</label>
//     <input
//         type="number"
//         id="sales"
//         value={sales}
//         onChange={(e) => setsales(e.target.value)}
//       />
//     </div >
//     <div className="input-container-2-ipog">
//     <label htmlFor="paid">Paid</label>
//     <input
//         type="number"
//         id="paid"
//         value={paid}
//         onChange={(e) => setpaid(e.target.value)}
//       />
//     </div > */}
    



    
// <button onClick={handleSaveData}>Add</button>  
  
//     </div>
//     </div>

//       </>
   
   
//   )
// }

// export default Masterdashboard;