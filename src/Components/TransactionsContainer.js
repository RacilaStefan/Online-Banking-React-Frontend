import React from "react";
import { getFormattedDateString } from "../Utils/UtilFunctions";


export default function TransactionsContainer({show, transactions, currentIBAN}) {

	const transJSX = [];
	for (let i = 0; i < transactions.length; i++) {

		let temp = "+";
		if (transactions[i].fromAccountIBAN === currentIBAN) {
			temp = "-";
		}

		transJSX.push(
			<div className="transaction card-panel" key={transactions[i].date}>
				<div className="second">
					<span>{` ${temp}${transactions[i].amount} ${transactions[i].currency}`}</span>
				</div>
				{temp === "+" ? <p>From:</p> : <p>To:</p>}
				<p>{transactions[i].toAccountIBAN}</p>
				<p>{getFormattedDateString(transactions[i].date)}</p>
			</div>
		)
	}

	return (
		show ? 
		<div className="transactions-container card-panel hoverable">
			{transJSX}
		</div> : <></>
	)
}
