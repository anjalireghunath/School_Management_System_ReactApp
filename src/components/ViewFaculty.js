import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const ViewFaculty = () => {
    var [viewfaculty,setViewfaculty]=useState([])
    var [loadstatus,setLoadstatus]=useState(true)
    axios.get("http://localhost:4008/api/facultiesview").then((response)=>{
      console.log(response.data)
      setViewfaculty(response.data)
      setLoadstatus(false)
    })

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
<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>

                  {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> : <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Education</th>
      <th scope="col">Mobile</th>
      <th scope="col">Address</th>
      <th scope="col">Pincode</th>
      <th scope="col">District</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {viewfaculty.map((value,key)=>{
      return <tr>
      <td>{value.fname}</td>
      <td>{value.education}</td>
      <td>{value.fmobile}</td>
      <td>{value.faddress}</td>
      <td>{value.pincode}</td>
      <td>{value.district}</td>
      <button className='btn btn-danger' onClick={()=>{deleteData(value._id)}}>DELETE</button>
    </tr>
    })}
    
    
    
  </tbody>
</table>
}
                



                    </div>
               

              </div>

            </div>

          </div>

        </div>


    </div>
  )
}

export default ViewFaculty