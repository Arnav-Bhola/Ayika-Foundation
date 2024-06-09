import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./PhoneNavbar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const PhoneNavbar = ({ shouldShow }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      {shouldShow && (
        <div className={styles["container"]}>
          <div className={styles["links"]}>
            <div className={styles["link-container"]}>
              <div className={styles["icon"]}>
                <FontAwesomeIcon icon={showDropdown ? faChevronUp : faChevronDown} />
              </div>
              <Link
                to='/story'
                className={styles["link"]}
              >
                Our Story
              </Link>
            </div>
            <div className={styles["link-container"]}>
              <div className={styles["icon"]}>
                <FontAwesomeIcon icon={showDropdown ? faChevronUp : faChevronDown} />
              </div>
              <Link
                to='/team'
                className={styles["link"]}
              >
                Team
              </Link>
            </div>
            <div
              className={styles["link-container"] + " " + styles["dropdown"]}
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              <div className={styles["icon"]}>
                <FontAwesomeIcon icon={showDropdown ? faChevronUp : faChevronDown} />
              </div>
              <p className={styles["link"]}>Projects</p>
            </div>

            {showDropdown && (
              <div className={styles["link-container"] + " " + styles["dropdown-content"]}>
                <div className={styles["icon"]}>
                  <FontAwesomeIcon icon={showDropdown ? faChevronUp : faChevronDown} />
                </div>
                <Link
                  to='/gallery'
                  className={styles["link"]}
                >
                  Gallery
                </Link>
              </div>
            )}
            <div className={styles["link-container"]}>
              <div className={styles["icon"]}>
                <FontAwesomeIcon icon={showDropdown ? faChevronUp : faChevronDown} />
              </div>
              <Link
                to='/gallery'
                className={styles["link"]}
              >
                Gallery
              </Link>
            </div>
          </div>
          <button className={styles["button"]}>
            <Link
              to='/contact'
              className={styles["link"]}
            >
              Contact Us
            </Link>
          </button>
        </div>
      )}
    </>
  );
};

export default PhoneNavbar;
