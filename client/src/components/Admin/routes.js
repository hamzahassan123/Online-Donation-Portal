import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
import Admin from './Admin'
import AddNGO from './AdminComponents/AddNGO'
import EditDonationRecord from './AdminComponents/Medicine_Donation/EditDonationRecord'
import ManageDonationRecords from './AdminComponents/Medicine_Donation/ManageDonationRecords'
import AddDonation from './AdminComponents/Medicine_Donation/AddDonation'
import EditRequestRecord from './AdminComponents/Request_Medicine/EditRequestRecord'
import AddRequest from './AdminComponents/Request_Medicine/AddRequest'
import ManageRequestRecords from './AdminComponents/Request_Medicine/ManageRequestRecords'

function AdminRoutes() {
    const { state: auth, dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth?.isAdmin) {
            navigate("/");
        }
    }, [auth?.isAdmin, navigate]);

    return (
        <div>
            <Routes>
                <Route
                    index
                    element={<Admin />}
                />
                <Route path="medicine-donation">
                    <Route path="editmedicinerecord">
                        <Route path=":id" element={<EditDonationRecord />} />
                    </Route>
                    <Route path="add" element={<AddDonation />} />
                    <Route
                        path="managerecords"
                        element={<ManageDonationRecords />}
                    />
                </Route>
                <Route path="medicine-request">
                    <Route path="editrequestrecord">
                        <Route path=":id" element={<EditRequestRecord />} />
                    </Route>
                    <Route path="add" element={<AddRequest />} />
                    <Route
                        path="managerecords"
                        element={<ManageRequestRecords />}
                    />
                </Route>
                <Route exact path="/add-NGO" element={<AddNGO />} />
            </Routes>
        </div>
    )
}

export default AdminRoutes