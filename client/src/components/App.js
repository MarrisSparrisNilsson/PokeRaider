import React from "react";
import addRaid from "../images/icons/Valor_icons/Add_Raid_icon_dark_Valor.png";
import globe from "../images/icons/utility_icons/Globe.svg";
import friends from "../images/icons/utility_icons/Firend_icon.svg";

const App = () => {
    return (
        <div className="main-window">
            <div className="service-name">Poké Raider</div>
            <div className="container">
                {/* <div className="groupChat-section">
                    <div className="groupChat-bubble home"></div>
                    <hr />
                    <div className="groupChat-bubble"></div>
                    <div className="groupChat-bubble different"></div>
                    <div className="groupChat-bubble"></div>
                </div> */}

                <div className="secoundary-container fdc-a-c fdc-j-sb">
                    {/* <nav className="route-viewer">
                        home
                        <span>&#8250;</span>
                        about
                        <span>&#8250;</span>
                        contact
                    </nav> */}

                    <div>
                        <span className="side-menu-btn active">
                            <img
                                id="add-raid-icon"
                                className="menu-icon"
                                src={addRaid}
                                alt="icon"
                            />
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
            </div>
        </div>
    );
};

export default App;
