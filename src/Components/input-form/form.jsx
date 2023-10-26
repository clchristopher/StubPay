import React , {useState} from 'react'
import styles from './form.module.css'

const Form = () => {

	const [hours, setHours] = useState("");
	const [wage, setWage] = useState("");
	const [tips, setTips] = useState("");
	const [occurrence, setOccurrence] = useState("");

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
	}


	return (
		<div className = {styles.page}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.columnLeft}>
						<div className ={styles.leftHalf}>
							<h1>Stub Calculator</h1>
							
							<form >
								<p className = {styles.inputLabel}>Hours Worked</p>
								<input  
								className={styles.input} 
								type='number' 
								step=".1" 
								placeholder="40" 
								value = {hours}
								onChange = {handleHours}
								/>
								<p className = {styles.inputLabel}>Hourly Wage </p>
								<input 
								className={styles.input}
								type='number'
								pattern="^\d+(\.\d{1,2})?$"
								placeholder="15.50"
								value = {wage}
								onChange = {handleWage}
								/>
								<p className = {styles.inputLabel}>Tips</p> 
								<input
								className={styles.input} 
								type='number'
								pattern="^\d+(\.\d{1,2})?$" 
								placeholder="200"
								value = {tips}
								onChange = {handleTips}
								/>
								<p className = {styles.inputLabel}>How often do you get paid a year?</p>
								<input 
								className={styles.input} 
								type='number'step="1" 
								placeholder="How often do you get paid a year?" 
								value = {occurrence}
								onChange = {handleOccurrence}
								/>
								<div>
									<input className={styles.submit} type='submit' OnClick={handleSubmit}value='Calculate my paycheck' />
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

