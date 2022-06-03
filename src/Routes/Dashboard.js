import RequireAuth from "../Components/RequireAuth";

export default function Dashboard() {

    return (
        <RequireAuth>
            <div className="container">
                <h4>Dashboard</h4>
            </div>
        </RequireAuth>
    );
}