import React from "react";
import AdminPageNavigation from "./AdminPageNavigation/AdminPageNavigation";
import AdminPageClientListContainer from "../containers/AdminPageClientListContainer";

const AdminPageView = ({ value, handleChange }) => {
  return (
    <>
      <AdminPageNavigation value={value} handleChange={handleChange} />;
    </>
  );
};

export default AdminPageView;
