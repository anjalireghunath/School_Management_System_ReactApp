import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const SearchStudent = () => {
     var [admno,setAdmno]=useState("")
     const [data,setData]=useState([
         {
             "name":"",
             "rollno":"",
             "classs":"",
             "parentname":"",
             "address":"",
             "mobile":""
         }
     ])
     const searchData=()=>{
        const data={"admno":admno}
        console.log(data)
        axios.post("http://localhost:4008/api/studsearch",data).then((response)=>{
            console.log(response.data)
            setData(response.data)
        })
    }

    const deleteData=(id)=>{
    const data={"_id":id}
      console.log(data)
    axios.post("http://localhost:4008/api/studdelete",data).then((response)=>{
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
                    <label for="" className="form-label">AdmNo</label>
                    <input onChange={(a)=>{setAdmno(a.target.value)}} type="text" className="form-control"/>
                </div>
               
                <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchData} className="btn btn-primary">SEARCH</button>
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
                    <label for="" className="form-label">Name</label>
                    <input type="text" className="form-control"value={value.name}/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">RollNo</label>
                    <input type="text" className="form-control" value={value.rollno}/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Class</label>
                    <input type="text" className="form-control" value={value.classs}/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">ParentName</label>
                    <input type="text" className="form-control" value={value.parentname}/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Address</label>
                    <input type="text" className="form-control" value={value.address}/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile</label>
                    <input type="text" className="form-control" value={value.mobile}/>
                </div>   
            </div><br></br>
            <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                <button onClick={()=>{deleteData(value._id)}} className="btn btn-danger">DELETE</button>
                </div>
        </div>
    </div>
</div>


})}


    </div>
  )
}

export default SearchStudent