export const hracalc=(data)=>{
    const {salary,da,commission,
        hra,rent,isMetroCity
    }=data
    let exempted_hra=0;
    let actual_salary=salary+da+commission
    if(isMetroCity){
     exempted_hra=Math.min(hra,rent-(actual_salary*0.1),actual_salary*0.5);
    }
    else{
    exempted_hra=Math.min(hra,rent-(actual_salary*0.1),actual_salary*0.4);
    }
    return {
        exempted_hra,
        taxable_hra:hra-exempted_hra
    }
    // Minimum of (Actual HRA received, Rent paid - 10% of salary, 50% of salary (metro city) or 40% of salary (non-metro city))
}