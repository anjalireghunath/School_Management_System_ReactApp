import React from 'react'
import Header from './Header'

const ViewFaculty = () => {
    var viewfaculty=[
        {
            "name":"Anju",
            "education":"MCA",
            "mobile":"7654567698",
            "address":"keazhadethu",
            "pincode":"689691",
            "district":"pathanamthitta"
        },
        {
            "name":"malu",
            "education":"MCA",
            "mobile":"7654567697",
            "address":"abc",
            "pincode":"689691",
            "district":"kollam"
        },
        {
            "name":"devu",
            "education":"MBA",
            "mobile":"7654567654",
            "address":"tyuh",
            "pincode":"689691",
            "district":"tvm"
        }

    ]
  return (
    <div>
<Header/>
<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Education</th>
      <th scope="col">Mobile</th>
      <th scope="col">Address</th>
      <th scope="col">Pincode</th>
      <th scope="col">District</th>
    </tr>
  </thead>
  <tbody>
    {viewfaculty.map((value,key)=>{
      return <tr>
      <td>{value.name}</td>
      <td>{value.education}</td>
      <td>{value.mobile}</td>
      <td>{value.address}</td>
      <td>{value.pincode}</td>
      <td>{value.district}</td>
    </tr>
    })}
    
    
    
  </tbody>
</table>



                    </div>
               

              </div>

            </div>

          </div>

        </div>


    </div>
  )
}

export default ViewFaculty