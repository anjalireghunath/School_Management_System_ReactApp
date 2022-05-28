import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const ViewStudent = () => {
    var [viewstudent,setViewstudent]=useState([])
    var [loadstatus,setLoadstatus]=useState(true)
    axios.get("http://localhost:4008/api/studentview").then((response)=>{
      console.log(response.data)
      setViewstudent(response.data)
      setLoadstatus(false)
    })

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
<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>

                  {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :  <table className="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">AdmNo</th>
      <th scope="col">RollNo</th>
      <th scope="col">Name</th>
      <th scope="col">Class</th>
      <th scope="col">Parent Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {viewstudent.map((value,key)=>{
      return <tr>
      <td>{value.admno}</td>
      <td>{value.rollno}</td>
      <td>{value.name}</td>
      <td>{value.classs}</td>
      <td>{value.parentname}</td>
      <td>{value.mobile}</td>
      <td>{value.address}</td>
      <button className="btn btn-danger" onClick={()=>{deleteData(value._id)}}>DELETE</button>
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

export default ViewStudent