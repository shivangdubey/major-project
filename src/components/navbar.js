import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaLink,
  FaBluetooth,
  FaSitemap,
  FaNetworkWired,
  FaEye,
  FaSearch,
} from "react-icons/fa";

import "../css/navbar.css";

const Navbar = () => {
  const location = useLocation();
  const popupRef = useRef(null);
  const connectButtonRef = useRef(null);
  const networkButtonRef = useRef(null);
  const bluetoothButtonRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showNetworkPopup, setNetworkPopup] = useState(false);
  const [showBluetoothPopup, setBluetoothPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [bluetoothAddress, setBluetoothAddress] = useState("11:22:33:44:55:66");
  const [address, setAddress] = useState("ws://192.168.0.35:8266/");
  const [password, setPassword] = useState("ssapi");

  const handleConnectClick = () => {
    setShowPopup(true);
  };

  const handleBluetoothClick = () => {
    setNetworkPopup(false);
    setBluetoothPopup(true);
    setBluetoothAddress("11:22:33:44:55:66");
  };

  const handleBluetoothConnectClick = () => {
    setNetworkPopup(false);
    setBluetoothPopup(false);
    setShowPopup(false);
  };

  const handleSerialClick = () => {
    setShowPopup(false);
    setNetworkPopup(false);
    setBluetoothPopup(false);

  };

  const handleNetworkOptionClick = () => {
    setAddress("ws://192.168.0.35:8266/");
    setPassword("ssapi");
    setNetworkPopup(true);
    setBluetoothPopup(false);
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleScanClick = () => {
    console.log("Scanning devices...");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        event.target !== connectButtonRef.current &&
        event.target !== networkButtonRef.current &&
        event.target !== bluetoothButtonRef.current
      ) {
        setShowPopup(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-logo">SSApi</div>
      <div className="navbar-buttons">
        <Link
          to="/blocks"
          className={`navbar-button ${
            location.pathname === "/blocks" ? "active" : ""
          }`}
        >
          Blocks
        </Link>
        <Link
          to="/console"
          className={`navbar-button ${
            location.pathname === "/console" ? "active" : ""
          }`}
        >
          Console
        </Link>
      </div>
      <div
        ref={connectButtonRef}
        className="navbar-button-connect"
        onClick={handleConnectClick}
      >
        <FaLink className="navbar-button-connect-icon" /> Connect
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-options">
            <div
              className="popup-option"
              onClick={() => handleBluetoothClick()}
              ref={bluetoothButtonRef}
            >
              <FaBluetooth className="popup-option-icon" /> Bluetooth
            </div>
            {showPopup && showBluetoothPopup && (
                <div className="popup-network" ref={popupRef}>
                  <label htmlFor="address" className="popup-network-label">
                    Address
                  </label>
                  <input
                      type="text"
                      className="popup-network-input"
                      id="address"
                      value={bluetoothAddress}
                      onChange={(e) => setBluetoothAddress(e.target.value)}
                  />
                  <div className="popup-network-scan" onClick={handleBluetoothConnectClick}>
                    <FaLink className="popup-network-scan-icon" /> Connect Device
                  </div>
                </div>
            )}
            <div className="popup-option" onClick={() => handleSerialClick()}>
              <FaSitemap className="popup-option-icon" /> Serial
            </div>
            <div
              ref={networkButtonRef}
              className="popup-option"
              onClick={handleNetworkOptionClick}
            >
              <FaNetworkWired className="popup-option-icon" /> Network
            </div>
            {showPopup && showNetworkPopup && (
              <div className="popup-network" ref={popupRef}>
                <label htmlFor="address" className="popup-network-label">
                  Address
                </label>
                <input
                  type="text"
                  className="popup-network-input"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label htmlFor="password" className="popup-network-label">
                  Password
                </label>
                <div className="popup-network-password">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="popup-network-password-input"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FaEye
                    className="popup-network-password-icon"
                    onClick={handlePasswordToggle}
                  />
                </div>
                <div className="popup-network-scan" onClick={handleScanClick}>
                  <FaSearch className="popup-network-scan-icon" /> Scan Devices
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
