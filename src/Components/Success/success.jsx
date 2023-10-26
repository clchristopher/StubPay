import React from 'react'
import styles from './success.module.css'


const Success = ({ onExitSuccess, hours, wage, tips, occurrence }) => {
	const exitSuccess = ()=> {
		onExitSuccess();
	}
	const totalPay = parseFloat(hours) * parseFloat(wage) + parseFloat(tips);
    const stateDisability = totalPay * 0.009;
    const medicare = totalPay * .0145;
    const socialSecurity = totalPay * .062;
    const estimated = 6748.7
    let stateIncome = 0;
    let federalIncome = 0;
    if (estimated < 10099) {
      stateIncome = 0.01 * estimated;
    }else if (estimated < 23942){
      stateIncome = 100.99 + (estimated - 10099) * 0.02;
    }else if (estimated < 37788){
      stateIncome = 377.85 + (estimated - 23942) * 0.04;
    }else if (estimated < 52455){
      stateIncome = 931.69 + (estimated - 37788) * 0.06;
    }else if (estimated < 66295){
      stateIncome = 1811.71 + (estimated - 52455) * 0.08;
    }else if (estimated < 338369){
      stateIncome = 2918.91 + (estimated - 66295) * 0.093;
    }else if (estimated < 406364){
      stateIncome = 28246.9 + (estimated - 338369) * 0.103;
    }else if (estimated < 677275){
      stateIncome = 35222.58 + (estimated - 406364) * 0.113;
    }else{
      stateIncome = 65835.52 + (estimated - 677275) * 0.123;
    }
    if (estimated < 11000) {
      federalIncome = 0.1 * estimated;
    }else if (estimated < 44725){
      federalIncome = 1100 + (estimated - 11000) * 0.12;
    }else if (estimated < 95275){
      federalIncome = 5147 + (estimated - 44725) * 0.22;
    }else if (estimated < 182100){
      federalIncome = 16290 + (estimated - 95275) * 0.24;
    }else if (estimated < 231250){
      federalIncome = 37104 + (estimated - 182100) * 0.32;
    }else if (estimated < 578125){
      federalIncome = 52832 + (estimated - 231250) * 0.35;
    }else {
      federalIncome = 174238.25 + (estimated - 406364) * 0.37;
    }


	stateIncome /= estimated / totalPay
	federalIncome /= ((estimated-totalPay)/totalPay)
	const totalTax = stateDisability + stateIncome + federalIncome + medicare + socialSecurity
    const netPay = totalPay - totalTax 

	return (
		
		<div className={styles.container}>
			<div className={styles.model}>
				<div className={styles.modelContent}>
					<div>
						<h2>You Paystub!</h2>
					</div>
					<div>
						<table>
						<tr>
                  <th>Categories</th>
                  <th>$</th>
                </tr>
                <tr>
                  <td>Total Pay</td>
                  <td>{totalPay.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>CA Income Tax</td>
                  <td>{stateIncome.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>CA Disability Ins.</td>
                  <td>{stateDisability.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Federal Income Tax</td>
                  <td>{federalIncome.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Medicare</td>
                  <td>{medicare.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Social Security</td>
                  <td>{socialSecurity.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Total Taxes</td>
                  <td>{totalTax.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Net Pay</td>
                  <td>{netPay.toFixed(2)}</td>
                </tr>

						</table>
					</div>
					<div>
						<button type="button" onClick={exitSuccess}>Dismiss Message</button>
					</div>
					
				</div>	
			</div>
		</div>
		
	);
}

export default Success

