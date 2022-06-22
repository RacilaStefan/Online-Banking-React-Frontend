import { useAtom } from "jotai";
import { useState } from "react";
import AccountContainer from "../Components/AccountContainerForDashboard";
import { contextAtom } from "../Components/Context/ContextProvider";
import RequireAuth from "../Components/RequireAuth";
import { Logger } from "../Utils/Logger";
import { Button } from "@mui/material";
import AccountModalForm from "../Components/ModalForms/AccountModalForm";

const log = new Logger("Dashboard");

function DashboardComponent() {
    const [ context ] = useAtom(contextAtom);
    const [ open, setOpen ] = useState(false);

    let accounts;
    accounts = context.user.accounts._accounts.map((account) => {
        return (
            <AccountContainer key={account.id} account={account}/>
        )
    })

    return (
        <div className="container">
            <h4>Dashboard</h4>
            {accounts}
            <div>
                <Button variant="contained" onClick={() => setOpen(true)}>Add Account</Button>
                <AccountModalForm open={open} close={() => setOpen(false)}/>
            </div>
        </div>
    );
}

export default function Dashboard() {
    return (
        <RequireAuth>
            <DashboardComponent/>
        </RequireAuth>
    );
}