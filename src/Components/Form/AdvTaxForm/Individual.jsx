import React from 'react'

const Individual = ({type,inputIndividual,setinputIndividual,resIndividual}) => {
  const changeHandler=(e)=>{
    const {name,value}=e.target;
    setinputIndividual({
      ...inputIndividual,[name]:value
    })
  }
  return (
    <div className='typebaseform'>
    <div>
    <label>Whether opting for taxation under Section 115BAC?</label>
    <select name="">
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
    </select>
  </div>
  <div> 
    <label>Gender</label>
    <select name="gender" onChange={changeHandler}>
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Senior Citizen">Senior Citizen</option>
        <option value="Super Senior Citizen">Super Senior Citizen</option>
    </select>
  </div>
  <div> 
    <label>Residential Status</label>
    <select name="">
        <option value="">Select</option>
        <option value="Resident">Resident</option>
        <option value="Non-Resident">Non-Resident</option>
        <option value="Not Ordinary Resident">Not Ordinary Resident</option>
    </select>
  </div>
  <div> 
    <label>Income from Salary (Income from salary after standard deduction of Rs.50000.)</label>
    <input type="number" name='commission' />
  </div>
  <div>
    <label>Income From House Property</label>
    <input type="number" name='commission'  />
  </div>
  <div> 
    <label>Capital Gains</label>
    <input type="number" name='commission'  />
  </div>
  <div>
    <label>Income From Other Sources</label>
    <input type="number" name='commission'  />
  </div>
  <div>
       <label>Net Taxable Income</label>
       <input type="number" name='income' value={inputIndividual.income} onChange={changeHandler} />
     </div>
    <div>
       <label>Income Tax</label>
       <input type="number" name='income_tax' value={resIndividual.income_tax}  disabled />
     </div>
    <div>
       <label>Surcharge</label>
       <input type="number" name='surcharge' value={resIndividual.surcharge}  disabled />
     </div>
    <div>
       <label>Health and Education Cess</label>
       <input type="number" name='health_and_education_cess' value={resIndividual.health_and_education_cess}  disabled />
     </div>
    <div>
       <label>Total Tax Liability</label>
       <input type="number" name='total_tax_liability' value={resIndividual.total_tax_liability}  disabled />
     </div>
    <div>
       <label>Relief</label>
       <input type="number" name='relief' value={inputIndividual.relief} onChange={changeHandler} />
     </div>
    <div>
       <label>TDS/TCS/MAT (AMT) Credit Utilized</label>
       <input type="number" name='tds' value={inputIndividual.tds} onChange={changeHandler} />
     </div>
    <div>
       <label>Assessed Tax</label>
       <input type="number" name='assessed_tax' value={resIndividual.assessed_tax}  disabled />
     </div>
  </div>
  )
}

export default Individual