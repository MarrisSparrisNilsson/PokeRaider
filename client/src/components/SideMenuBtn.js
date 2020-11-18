import React from "react";
import addRaid from "../images/icons/Valor_icons/Add_Raid_icon_dark_Valor.png";

const SideMenuBtn = () => {
    return (
        <span className="side-menu-btn active">
            <img id="add-raid-icon" className="menu-icon" src={addRaid} alt="icon" />
            <span className="menu-text">Add Raid</span>
        </span>
    );
};

export default SideMenuBtn;
