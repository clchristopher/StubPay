import React , {useState} from 'react'
import styles from './form.module.css'
import Success from "../Success/success"

const Form = () => {

	const [hours, setHours] = useState("");
	const [wage, setWage] = useState("");
	const [tips, setTips] = useState("");
	const [occurrence, setOccurrence] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);

	const handleHours = (e) => {
		const inputHours = e.target.value;
		setHours(inputHours);
	}
	const handleWage = (e) => {
		const inputWage = e.target.value;
		setWage(inputWage);
	}
	const handleTips = (e) => {
		const inputTips = e.target.value;
		setTips(inputTips);
	}
	const handleOccurrence = (e) => {
		const inputOccurrence = e.target.value;
		setOccurrence(inputOccurrence);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if (hours.trim() !== "" && wage.trim() !== "" && occurrence.trim() !== "") {
			setIsSuccess(true);
			console.log("Form submitted");

		} else {
		  console.error("Hours, Wage, and Occurrence are required");
		}
	  }
	  
	const handleExitSuccess = (calculatedData) => {
		setIsSuccess(false)
		setHours('');
		setTips('');
		if (wage.trim() !== ''){
			setWage('');
		}
		setOccurrence('');
	}

	
	
	return isSuccess ? (
	<Success tips = {tips || "0"} wage = {wage} occurrence = {occurrence} hours = {hours} onExitSuccess = {handleExitSuccess}/>
	) : (
		<div className = {styles.page}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.columnLeft}>
						<div className ={styles.leftHalf}>
							<h1>Stub Calculator</h1>
							<p className={styles.note}>* The information on this page is projected rought estimates, not financial advice.</p>
							
							<form >
								<p className = {styles.inputLabel}>Hours Worked</p>
								<input  
								className={styles.input} 
								type='number' 
								step=".1" 
								placeholder="How many hours did you work?" 
								required
								value = {hours}
								onChange = {handleHours}
								/>
								<p className = {styles.inputLabel}>Hourly Wage </p>
								<input 
								className={styles.input}
								type='number'
								pattern="^\d+(\.\d{1,2})?$"
								placeholder="What is your hourly wage?"
								value = {wage}
								required
								onChange = {handleWage}
								/>
								<p className = {styles.inputLabel}>Tips</p> 
								<input
								className={styles.input} 
								type='number'
								pattern="^\d+(\.\d{1,2})?$" 
								placeholder="How much tips did you make?"
								value = {tips}
								onChange = {handleTips}
								/>
								<p className = {styles.inputLabel}>Pay Frequency</p>
								<input 
								className={styles.input} 
								type='number'step="1" 
								placeholder="How many times do you get paid a year?" 
								required
								value = {occurrence}
								onChange = {handleOccurrence}
								/>
								<div>
									<button 
									className={styles.submit}
									type='button' 
									onClick={handleSubmit}>
									Calculate my paycheck
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className = {styles.columnRight}>
						<img src={`${process.env.PUBLIC_URL}/tax.png`} alt = 'tax-cartoon'/>
					</div>
				</div>
			</div>
		</div>
	  );
}

export default Form

