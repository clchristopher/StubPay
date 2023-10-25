import React from 'react'
import styles from './success.module.css'

const Success = () => {
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
							<td>13.00</td>
							
						</tr>
						<tr>
							<td>CA Income Tax</td>
							<td>13.00</td>
							
						</tr>
						<tr>
							<td>CA Disability Ins.</td>
							<td>13.00</td>
							
						</tr>
						<tr>
							<td>Federal Income Tax</td>
							<td>13.00</td>
							
						</tr>
						<tr>
							<td>Medicare</td>
							<td>13.00</td>
							
						</tr>
						<tr>
							<td>Social Security</td>
							<td>13.00</td>
							
						</tr>
						<tr>
							<td>Total Taxes</td>
							<td>13.00</td>
							
						</tr>
						<tr>
							<td>Net Pay</td>
							<td>13.00</td>
							
						</tr>

						</table>
					</div>
					<div>
						<button type="button">Dismiss Message</button>
					</div>
					
				</div>	
			</div>
		</div>
		
	);
}

export default Success

