import { useAtom } from "jotai";
import AccountContainer from "../Components/AccountContainerForDashboard";
import { contextAtom } from "../Components/Context/ContextProvider";
import RequireAuth from "../Components/RequireAuth";
import { Logger } from "../Utils/Logger";

const log = new Logger("Dashboard");

function DashboardComponent() {
    const [ context ] = useAtom(contextAtom);

    let accounts;
    accounts = context.user.accounts._accounts.map((account) => {
        return (
            <AccountContainer key={account.id} account={account}/>
        )
    })

    return (
        <div className="container">
            <h4>Dashboard</h4>
            <div>
                {accounts}
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