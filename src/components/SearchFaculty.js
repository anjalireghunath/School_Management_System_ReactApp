import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const SearchFaculty = () => {

    const [data,setData]=useState([
        {
            "education":"",
            "fmobile":"",
            "faddress":"",
            "pincode":"",
            "district":""
        }
    ])

    var [fname,setFname]=useState("")
    const searchFacul=()=>{
        const data={"fname":fname}
        console.log(data)
        axios.post("http://localhost:4008/api/facsearch",data).then((response)=>{
            console.log(response.data)
            setData(response.data)
        })
    }

const deleteData=(id)=>{
    const data={"_id":id}
    console.log(data)
    axios.post("http://localhost:4008/api/facdelete",data).then((response)=>{
        if(response.data.status=="success")
        {
            alert("successfully deleted")
        }
        else{
            alert("failed to delete")
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
                <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(c)=>{setFname(c.target.value)}} type="text" className="form-control"/>
                </div>
               
                <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchFacul} className="btn btn-primary">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>

{data.map((value,key)=>{
    return <div className="container">
    <div className="row">
        <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Address</label>
                    <input type="text" className="form-control" value={value.faddress}/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Education</label>
                    <input type="text" className="form-control" value={value.education}/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile</label>
                    <input type="text" className="form-control" value={value.fmobile}/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Pincode</label>
                    <input type="text" className="form-control"value={value.pincode}/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">District</label>
                    <input type="text" className="form-control" value={value.district}/>
                </div>
                
            </div><br></br>
            <div>
                  <button className="btn btn-danger" onClick={()=>{deleteData(value._id)}}>DELETE</button>
            </div>
        </div>
    </div>
</div>
})}



    </div>
  )
}

export default SearchFaculty