import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const AddStudent = () => {
    var [admno,setAdmno]=useState("")
    var [rollno,setRollno]=useState("")
    var [name,setName]=useState("")
    var [classs,setclass]=useState("")
    var [parentname,setParentName]=useState("")
    var [mobile,setMobile]=useState("")
    var [address,setAddress]=useState("")
    const addStud=()=>{
        const data={"admno":admno,"rollno":rollno,"name":name,"classs":classs,"parentname":parentname,"mobile":mobile,"address":address}
        console.log(data)
        axios.post("http://localhost:4008/api/studentadd",data).then((response)=>{
            if(response.data.status=="success")
            {
                alert("successfully add")
            }
            else
            {
                alert("failed to add")
            }
        })
    }
  return (
    <div>
<Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">AdmNo</label>
                    <input onChange={(a)=>{setAdmno(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">RollNo</label>
                    <input onChange={(a)=>{setRollno(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(a)=>{setName(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">class</label>
                    <input onChange={(a)=>{setclass(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Parent Name</label>
                    <input onChange={(a)=>{setParentName(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile</label>
                    <input onChange={(a)=>{setMobile(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <input onChange={(a)=>{setAddress(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={addStud} className="btn btn-primary">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AddStudent