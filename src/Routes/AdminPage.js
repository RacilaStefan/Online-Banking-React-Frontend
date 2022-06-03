import RequireAuth from "../Components/RequireAuth";
import { ROLES } from "../Utils/Constants";

export default function AdminPage() {
  return (
    <RequireAuth roleRequired={ ROLES.ROLE_ADMIN }>
        <div className="container">
            <h4>Admin Page</h4>
        </div>
    </RequireAuth>
  )
}
