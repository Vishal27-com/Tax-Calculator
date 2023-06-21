import React, { useState } from "react";
import "./hraform.css";
import { hracalc } from "../../Formula/hracalc";
const init={
    salary:'',
    da:'',
    commission:'',
    hra:'',
    rent:'',
    isMetroCity:''
}
const res={
    exempted_hra:"",taxable_hra:""
}
const HRAForm = () => {
    const [formData,setFormData]=useState(init);
    const [result,setResult]=useState(res)
    const changeHandler=(e)=>{
        const {name,value,type,checked}=e.target;
        const val=type==="checkbox"?checked:Number(value)
        setFormData({
            ...formData,[name]:val
        })
    }
    const resetHandler=()=>{
        setFormData(init);
        setResult(res);
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        const ans=hracalc(formData)
        setResult(ans)
    }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Basic salary</label>
        <input type="number" name='salary' value={formData.salary} onChange={changeHandler} />
      </div>
      <div>
        <label>DA forming part of salary</label>
        <input type="number" name='da' value={formData.da} onChange={changeHandler} />
      </div>
      <div>
        <label>Commission (as % of turnover achieved by the employee)</label>
        <input type="number" name='commission' value={formData.commission} onChange={changeHandler} />
      </div>
      <div>
        <label>HRA Received</label>
        <input type="number" name='hra' value={formData.hra} onChange={changeHandler} />
      </div>
      <div>
        <label>Rent Paid</label>
        <input type="number" name='rent' value={formData.rent} onChange={changeHandler} />
      </div>
      <div>
        <label>Tick if residing in metro city.</label>
        <div>
        <input type="checkbox" name="isMetroCity" checked={formData.isMetroCity} onChange={changeHandler} />
        <sup>(Tick if yes)</sup>
        </div>
      </div>
      <div>
        <label>Exempted HRA</label>
        <input type="tel" disabled value={result.exempted_hra} />
      </div>
      <div>
        <label>Taxable HRA</label>
        <input type="tel" disabled value={result.taxable_hra} />
      </div>
      <div id='buttons'>
        <input type="submit" value="Calculate" id='submit' />
        <input type="button" value="Reset" id='reset' onClick={resetHandler} />
      </div>
    </form>
  );
};

export default HRAForm;
