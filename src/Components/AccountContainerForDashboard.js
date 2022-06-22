import { Button } from "@mui/material";
import React, { useState } from "react";
import { Logger } from "../Utils/Logger";
import PaymentForm from "./ModalForms/PaymentModalForm";
import TransactionsContainer from "./TransactionsContainer";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { contextAtom } from "./Context/ContextProvider";
import { useAtom } from "jotai";

const log = new Logger("Account Container");

export default function AccountContainer({ account }) {
	const [context] = useAtom(contextAtom);
	const [open, setOpen] = useState(false);
	const [showTransactions, setShowTransactions] = useState(false);

	//log.trace("Account given", account);
	let transactions = [];

	let temp = context.user.transactions._transactions.filter((item) => item.toAccountIBAN === account.iban);
	if (temp.length > 0)
		transactions = transactions.concat(temp);
	

	temp = context.user.transactions._transactions.filter((item) => item.fromAccountIBAN === account.iban);
	if (temp.length > 0)
		transactions = transactions.concat(temp);

	
		log.trace("transactions", transactions);

  	return (
		<>
			<div className="card-panel hoverable">
				<div className="card-content">
					<div className="acc-balance second">
						{/* <span>Balance</span> */}
						<span>{` ${account.balance} ${account.currency}`}</span>
					</div>
					<p>{account.type}</p>
					<p>{account.iban}</p>
				</div>
				<div className="card-action">
					<Button onClick={() => setShowTransactions(!showTransactions)} className="first"> 
						Transaction history 
						{showTransactions ? 
							<ArrowDropDownIcon />
							:
							<ArrowRightIcon />
						}
					</Button>
					<Button onClick={() => setOpen(true)} className="second" variant="outlined"> New Payment </Button>
					<PaymentForm open={open} close={() => setOpen(false)} account={account}/>
				</div>
				
			</div>
			<TransactionsContainer show={showTransactions} transactions={transactions} currentIBAN={account.iban}/>
		</>
  	);
}
