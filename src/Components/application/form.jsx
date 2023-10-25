import React from 'react'
import styles from './form.module.css'

const Form = () => {
	return (
		<div className={styles.container}>
			<div className={styles.row}>
			<div className={styles.columnLeft}>
				<div className ={styles.leftHalf}>
				<h1>Stub Calculator</h1>
				
				<form >
					<p className = {styles.inputLabel}>Hours Worked</p>
					<input  className={styles.input} type='number' step=".1" placeholder="40"/>
					<p className = {styles.inputLabel}>Hourly Wage </p>
					<input className={styles.input} type='number' pattern="^\d+(\.\d{1,2})?$" placeholder="15.50"/>
					<p className = {styles.inputLabel}>Tips</p> 
					<input className={styles.input} type='number' pattern="^\d+(\.\d{1,2})?$" placeholder="200"/>
					<p className = {styles.inputLabel}>Pay period</p>
					<input className={styles.input} type='number'step="1"placeholder="How often do you get paid a year?"/>
					<div>
						<input className={styles.submit} type='submit' value='Calculate my paycheck' />
					</div>
				</form>
				
				</div>
			</div>
			<div className = {styles.columnRight}>
				<img src={`${process.env.PUBLIC_URL}/tax.png`} alt = 'tax-cartoon'/>
			</div>
			</div>
		</div>
	  );
}

export default Form

