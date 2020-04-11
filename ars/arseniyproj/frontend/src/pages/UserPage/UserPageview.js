import React from "react";
import CustomCheckbox from "../../commonComponents/CustomCheckbox";
const UserPageView = (props) => {
  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/itFnr-M-MAU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <CustomCheckbox text="text" type="text" />
      <CustomCheckbox text="circle" type="circle" />
      <CustomCheckbox text="picture" type="picture" />
    </>
  );
};
export default UserPageView;
