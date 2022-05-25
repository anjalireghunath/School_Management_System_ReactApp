import React, { useState } from 'react'

const SearchStudent = () => {
    var [admno,setAdmno]=useState("")
    const searchData=()=>{
        const data={"admno":admno}
        console.log(data)
    }
  return (
    <div>

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

    </div>
  )
}

export default SearchStudent