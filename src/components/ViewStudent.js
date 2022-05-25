import React from 'react'
import Header from './Header'

const ViewStudent = () => {
    var viewstudent=[
        {
            "admno":"567",
            "rollno":"1",
            "name":"Anjali",
            "classs":"10",
            "parentname":"Reghu",
            "mobile":"9846453456",
            "address":"keazhadethu"
        },
        {
            "admno":"568",
            "rollno":"2",
            "name":"Ashik",
            "classs":"10",
            "parentname":"Habeeb",
            "mobile":"9846678654",
            "address":"valiyaparambil"
        },
        {
            "admno":"569",
            "rollno":"3",
            "name":"Nidhin",
            "classs":"10",
            "parentname":"Babu",
            "mobile":"9846476456",
            "address":"madamannil"
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
      <th scope="col">AdmNo</th>
      <th scope="col">RollNo</th>
      <th scope="col">Name</th>
      <th scope="col">Class</th>
      <th scope="col">Parent Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Address</th>
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

export default ViewStudent