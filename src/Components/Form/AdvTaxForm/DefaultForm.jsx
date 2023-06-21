import React from 'react'
import './AdvTax.css'
const DefaultForm = () => {
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
    <label>Net Taxable Income</label>
    <input type="number" name='commission' />
  </div>
  <div>
    <label>Income Tax</label>
    <input type="number" name='hra' />
  </div>
  <div>
    <label>Surcharge</label>
    <input type="number" name='rent'  />
  </div>
  <div>
    <label>Education Cess</label>
    <input type="number" name='rent'  />
  </div>
  <div>
    <label>Secondary and higher education cess</label>
    <input type="number" name='rent'  />
  </div>
  <div>
    <label>Total Tax Liability</label>
    <input type="number" name='rent'  />
  </div>
  <div>
    <label>Relief</label>
    <input type="number" name='rent'  />
  </div>
  <div>
    <label>TDS/TCS/MAT (AMT) Credit Utilized</label>
    <input type="number" name='rent'  />
  </div>
  <div>
    <label>Assessed Tax</label>
    <input type="number" name='rent'  />
  </div>
    </div>
  )
}

export default DefaultForm