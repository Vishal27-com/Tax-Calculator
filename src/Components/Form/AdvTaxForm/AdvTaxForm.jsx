import React, { useEffect, useState } from "react";
import DefaultForm from "./DefaultForm";
import Individual from "./Individual";
import UnIndividual from "./UnIndividual";
import './AdvTax.css'
import { cooperativeTaxCalc, domesticCompanyTaxCalc, firmTaxCalc, foreignCompanyTaxCalc, hufTaxCalc } from "../../Formula/advTaxCalc";
const initUnindividual={
  income:0,
  relief:0,
  tds:0,
}
const initIndividual={
  gender:'',
  income:0,
  relief:0,
  tds:0,
}
const initRes={
  income_tax:0,
  surcharge:0,
  health_and_education_cess:0,
  total_tax_liability:0,
  assessed_tax:0
}
const AdvTaxForm = () => {
  const [type, setType] = useState("");
  const [inputUnindividual,setinputUnindividual]=useState(initUnindividual);
  const [resUnindividual,setResUnindividual]=useState(initRes);
  const [inputIndividual,setinputIndividual]=useState(initIndividual);
  const [resIndividual,setResIndividual]=useState(initRes);
  const typeHandler = (e) => {
    setType(e.target.value);
  };

 const calculate=()=>{
  if(type==="Individual"){
    let result=hufTaxCalc(inputIndividual);
    setResIndividual(result);
  }
  if(type==="HUF" || type==="AOPs/BOI"){
    let result=hufTaxCalc(inputUnindividual);
    setResUnindividual(result);
  }
  if(type==="Domestic Company"){
    let result=domesticCompanyTaxCalc(inputUnindividual);
    setResUnindividual(result);
  }
  if(type==="Foreign Company"){
    let result=foreignCompanyTaxCalc(inputUnindividual);
    setResUnindividual(result);
  }
  if(type==="Firms" || type==="LLP"){
    let result=firmTaxCalc(inputUnindividual);
    setResUnindividual(result);
  }
  if(type==="Co-operative Society"){
    let result=cooperativeTaxCalc(inputUnindividual);
    setResUnindividual(result);
  }
 }
 const resetHandler=()=>{
  setinputUnindividual(initUnindividual)
  setResUnindividual(initRes)
  setinputIndividual(initIndividual)
  setResIndividual(initRes)
 }

 useEffect(()=>{
  calculate()
},[type,inputUnindividual,inputIndividual])

  return (
    <form>
      <div>
        <label>Tax Payer</label>
        <select name="type" onChange={typeHandler}>
          <option value="">Select</option>
          <option value="Individual">Individual</option>
          <option value="HUF">HUF</option>
          <option value="AOPs/BOI">AOPs/BOI</option>
          <option value="Domestic Company">Domestic Company</option>
          <option value="Foreign Company">Foreign Company</option>
          <option value="Firms">Firms</option>
          <option value="LLP">LLP</option>
          <option value="Co-operative Society">Co-operative Society</option>
        </select>
      </div>
      {type === "" ? (
        <DefaultForm />
      ) : type === "Individual" ? (
        <Individual 
        inputIndividual={inputIndividual}
        setinputIndividual={setinputIndividual}
        resIndividual={resIndividual}
        />
      ) : (
        <UnIndividual 
        type={type}
        inputUnindividual={inputUnindividual}
        setinputUnindividual={setinputUnindividual}
        resUnindividual={resUnindividual}
        />
      )}

      <div id="buttons">
        <input type="submit" value="Calculate" id="submit" onClick={calculate} />
        <input type="button" value="Reset" id="reset" onClick={resetHandler} />
      </div>
    </form>
  );
};

export default AdvTaxForm;
