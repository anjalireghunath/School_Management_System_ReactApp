import React, { useState } from 'react'

const SearchFaculty = () => {
    var [name,setName]=useState("")
    const searchFacul=()=>{
        const data={"name":name}
        console.log(data)
    }
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(c)=>{setName(c.target.value)}} type="text" className="form-control"/>
                </div>
               
                <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchFacul} className="btn btn-primary">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default SearchFaculty