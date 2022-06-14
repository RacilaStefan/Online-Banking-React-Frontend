import { Button } from "@mui/material";
import React, { useState } from "react";
import { Logger } from "../Utils/Logger";
import PaymentForm from "./ModalForms/PaymentModalForm";
import TransactionsContainer from "./TransactionsContainer";

const log = new Logger("Account Container");

export default function AccountContainer({ account }) {
	const [open, setOpen] = useState(false);
	const [showTransactions, setShowTransactions] = useState(false);

	//log.trace("Account given", account);

  	return (
		<>
			<div className="card-panel">
				<div className="card-content row">
					<span className="card-title col s8">{account.type}</span>
					<div className="acc-balance col s4">
						{/* <span>Balance</span> */}
						<span>{` ${account.balance} ${account.currency}`}</span>
					</div>
					<span className="col">{account.iban}</span>
				</div>
				<div className="card-action">
					<Button onClick={() => setShowTransactions(!showTransactions)}> Transaction history </Button>
					<Button onClick={() => setOpen(true)}> New Payment </Button>
					<PaymentForm open={open} close={() => setOpen(false)} account={account}/>
				</div>
				
			</div>
			<TransactionsContainer show={showTransactions} iban={account.iban}/>
		</>
  	);
}
