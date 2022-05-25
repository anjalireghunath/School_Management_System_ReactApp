import React, { useState } from 'react'
import Header from './Header'

const AddFaculty = () => {
    var [fname,setFname]=useState("")
    var [education,setEducation]=useState("")
    var [fmobile,SetFmobile]=useState("")
    var [faddress,setFaddres]=useState("")
    var [pincode,setPincode]=useState("")
    var [district,setDistrict]=useState("")
    const facultyData=()=>{
        const data={"fname":fname,"education":education,"mobile":fmobile,"address":faddress,"pincode":pincode,"district":district}
        console.log(data)
    }
  return (
    <div>
<Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(b)=>{setFname(b.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Education</label>
                    <select onChange={(b)=>{setEducation(b.target.value)}} name="" id="" class="form-control">
                       <option value="MBA">MBA</option>
                       <option value="MCA">MCA</option>
                       <option value="BBA">BBA</option>
                       <option value="BTECH">BTECH</option>
                   </select>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile</label> 
                    <input onChange={(b)=>{SetFmobile(b.target.value)}} type="text" className="form-control"/>  
                   
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Address</label>
                    <input onChange={(b)=>{setFaddres(b.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Pincode</label>
                    <input onChange={(b)=>{setPincode(b.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">District</label>
                    <input onChange={(b)=>{setDistrict(b.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={facultyData} className="btn btn-primary">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AddFaculty