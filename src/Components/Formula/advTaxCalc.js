export const hufTaxCalc=({
    income,
    relief,
    tds,
  })=>{
let Inc=income;
let result={
    income_tax:0,
    surcharge:0,
    health_and_education_cess:0,
    total_tax_liability:0,
    assessed_tax:0
}

// Income Tax
if(Inc<300000){
    return result
}
if(Inc>1500000){
    let exceeded_amount=(Inc-1500000)
    result.income_tax+=exceeded_amount*0.3;
    Inc-=exceeded_amount;
}
if(Inc>1200000){
    let exceeded_amount=(Inc-1200000)
    result.income_tax+=exceeded_amount*0.2;
    Inc-=exceeded_amount;
}
if(Inc>900000){
    let exceeded_amount=(Inc-900000)
    result.income_tax+=exceeded_amount*0.15;
    Inc-=exceeded_amount;
}
if(Inc>600000){
    let exceeded_amount=(Inc-600000)
    result.income_tax+=exceeded_amount*0.1;
    Inc-=exceeded_amount;
}
if(Inc>300000){
    let exceeded_amount=(Inc-300000)
    result.income_tax+=exceeded_amount*0.05;
    Inc-=exceeded_amount;
}
// Surcharge
Inc=income;
if(Inc>5000000 && Inc<10000000){
    result.surcharge=result.income_tax*0.1;
}
else if(Inc>10000000 && Inc<20000000){
    result.surcharge=result.income_tax*0.15;
}
else if(Inc>20000000 && Inc<50000000){
    result.surcharge=result.income_tax*0.25;
}
else if(Inc>50000000){
    result.surcharge=result.income_tax*0.37;
}
// Cess 4%
result.health_and_education_cess=result.income_tax*0.04;
// Total Tax Liability
result.total_tax_liability=result.income_tax+result.surcharge+result.health_and_education_cess;
// Assessed Tax
result.assessed_tax=result.total_tax_liability-relief-tds;

return result ;

}
export const domesticCompanyTaxCalc=({
    income,
    relief,
    tds,
  })=>{
let Inc=income;
let result={
    income_tax:0,
    surcharge:0,
    health_and_education_cess:0,
    total_tax_liability:0,
    assessed_tax:0
  }
// Income Tax
result.income_tax=income*0.3;
// Surcharge
Inc=income;
if(Inc>10000000 && Inc<100000000){
    result.surcharge=result.income_tax*0.07;
}
else if(Inc>100000000){
    result.surcharge=result.income_tax*0.12;
}
// Cess 4%
result.health_and_education_cess=result.income_tax*0.04;
// Total Tax Liability
result.total_tax_liability=result.income_tax+result.surcharge+result.health_and_education_cess;
// Assessed Tax
result.assessed_tax=result.total_tax_liability-relief-tds;
return result ;

}
export const foreignCompanyTaxCalc=({
    income,
    relief,
    tds,
  })=>{
let Inc=income;
let result={
    income_tax:0,
    surcharge:0,
    health_and_education_cess:0,
    total_tax_liability:0,
    assessed_tax:0
  }
// Income Tax 
    result.income_tax=income*0.4;

// Surcharge
Inc=income;
if(Inc>10000000 && Inc<100000000){
    result.surcharge=result.income_tax*0.02;
}
else if(Inc>100000000){
    result.surcharge=result.income_tax*0.05;
}
// Cess 4%
result.health_and_education_cess=result.income_tax*0.04;
// Total Tax Liability
result.total_tax_liability=result.income_tax+result.surcharge+result.health_and_education_cess;
// Assessed Tax
result.assessed_tax=result.total_tax_liability-relief-tds;
return result ;
}
export const firmTaxCalc=({
    income,
    relief,
    tds,
  })=>{
let Inc=income;
let result={
    income_tax:0,
    surcharge:0,
    health_and_education_cess:0,
    total_tax_liability:0,
    assessed_tax:0
  }
// Income Tax 
    result.income_tax=income*0.3;

// Surcharge
Inc=income;
if(Inc>10000000){
    result.surcharge=result.income_tax*0.12;
}
// Cess 4%
result.health_and_education_cess=result.income_tax*0.04;
// Total Tax Liability
result.total_tax_liability=result.income_tax+result.surcharge+result.health_and_education_cess;
// Assessed Tax
result.assessed_tax=result.total_tax_liability-relief-tds;
return result ;
}
export const cooperativeTaxCalc=({
    income,
    relief,
    tds,
  })=>{
let Inc=income;
let result={
    income_tax:0,
    surcharge:0,
    health_and_education_cess:0,
    total_tax_liability:0,
    assessed_tax:0
  }
// Income Tax 
if(Inc>20000){
    let exceeded_amount=(Inc-20000)
    result.income_tax+=exceeded_amount*0.3;
    Inc-=exceeded_amount;
}
if(Inc>10000){
    let exceeded_amount=(Inc-10000)
    result.income_tax+=exceeded_amount*0.2;
    Inc-=exceeded_amount;
}
if(Inc>0){
    let exceeded_amount=(Inc-0)
    result.income_tax+=exceeded_amount*0.1;
    Inc-=exceeded_amount;
}

// Surcharge
Inc=income;
if(Inc>10000000 && Inc<100000000){
    result.surcharge=result.income_tax*0.07;
}
else if(Inc>100000000){
    result.surcharge=result.income_tax*0.12;
}
// Cess 4%
result.health_and_education_cess=result.income_tax*0.04;
// Total Tax Liability
result.total_tax_liability=result.income_tax+result.surcharge+result.health_and_education_cess;
// Assessed Tax
result.assessed_tax=result.total_tax_liability-relief-tds;
return result ;
}




