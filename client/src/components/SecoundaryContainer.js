import React from "react";

const SecoundaryContainer = () => {
    return (
        <div className="secoundary-container fdc-a-c fdc-j-sb">
            <div>
                <span className="side-menu-btn active">
                    <img id="add-raid-icon" className="menu-icon" src={addRaid} alt="icon" />
                    <span className="menu-text">Add Raid</span>
                </span>

                <span className="side-menu-btn">
                    <img id="globe" className="menu-icon" src={globe} alt="icon" />
                    <span className="menu-text">Join Raid</span>
                </span>

                <span className="side-menu-btn">
                    <img id="friends" className="menu-icon" src={friends} alt="icon" />
                    <span className="menu-text">Friends</span>
                </span>
            </div>

            <div className="bottom-menu">
                <div className="fa-s">
                    <div className="team-logo-valor"></div>
                    <div className="trainer-info">
                        <span className="trainer-name">TMartin20</span>
                        <hr />
                        <span className="trainer-level">Lvl 40</span>
                    </div>
                </div>
                <div className="settings-bgd">
                    <div className="settings-btn"></div>
                </div>
            </div>
        </div>
    );
};

export default SecoundaryContainer;
