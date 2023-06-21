import React from 'react'

const UnIndividual = ({type,inputUnindividual,setinputUnindividual,resUnindividual}) => {
  const changeHandler=(e)=>{
    const {name,value}=e.target;
    setinputUnindividual({
      ...inputUnindividual,[name]:value
    })
  }
  return (
    <div className='typebaseform'>
    <div>
       <label>Net Taxable Income</label>
       <input type="number" name='income' value={inputUnindividual.income} onChange={changeHandler} />
     </div>
    <div>
       <label>Income Tax</label>
       <input type="number" name='income_tax' value={resUnindividual.income_tax}  disabled />
     </div>
    <div>
       <label>Surcharge</label>
       <input type="number" name='surcharge' value={resUnindividual.surcharge}  disabled />
     </div>
    <div>
       <label>Health and Education Cess</label>
       <input type="number" name='health_and_education_cess' value={resUnindividual.health_and_education_cess}  disabled />
     </div>
    <div>
       <label>Total Tax Liability</label>
       <input type="number" name='total_tax_liability' value={resUnindividual.total_tax_liability}  disabled />
     </div>
    <div>
       <label>Relief</label>
       <input type="number" name='relief' value={inputUnindividual.relief} onChange={changeHandler} />
     </div>
    <div>
       <label>TDS/TCS/MAT (AMT) Credit Utilized</label>
       <input type="number" name='tds' value={inputUnindividual.tds} onChange={changeHandler} />
     </div>
    <div>
       <label>Assessed Tax</label>
       <input type="number" name='assessed_tax' value={resUnindividual.assessed_tax}  disabled />
     </div>
   </div>
  )
}

export default UnIndividual