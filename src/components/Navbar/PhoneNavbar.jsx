import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./PhoneNavbar.module.scss";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PhoneNavbar = ({ shouldShow }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      {shouldShow && (
        <div className={styles["container"]}>
          <div className={styles["links"]}>
            <div
              className={styles["link-container"] + " " + styles["dropdown"]}
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              <div className={styles["icon"]}>
                <FontAwesomeIcon icon={showDropdown ? faChevronUp : faChevronDown} />
              </div>
              <p className={styles["link"]}>About Us</p>
            </div>

            {showDropdown && (
              <div className={styles["link-container"] + " " + styles["dropdown-content"]}>
                <div className={styles["icon"]}>
                  <FontAwesomeIcon icon={showDropdown ? faChevronUp : faChevronDown} />
                </div>
                <Link
                  to='/about'
                  className={styles["link"]}
                >
                  Our Story
                </Link>
              </div>
            )}
            {showDropdown && (
              <div className={styles["link-container"] + " " + styles["dropdown-content"]}>
                <div className={styles["icon"]}>
                  <FontAwesomeIcon icon={showDropdown ? faChevronUp : faChevronDown} />
                </div>
                <Link
                  to='/team'
                  className={styles["link"]}
                >
                  Our Team
                </Link>
              </div>
            )}
            <div className={styles["link-container"]}>
              <div className={styles["icon"]}>
                <FontAwesomeIcon icon={showDropdown ? faChevronUp : faChevronDown} />
              </div>
              <Link
                to='/projects'
                className={styles["link"]}
              >
                Projects
              </Link>
            </div>
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

            <div className={styles["link-container"]}>
              <div className={styles["icon"]}>
                <FontAwesomeIcon icon={showDropdown ? faChevronUp : faChevronDown} />
              </div>
              <Link
                to='/recognitions'
                className={styles["link"]}
              >
                Recognitions
              </Link>
            </div>
          </div>
          <button
            className={styles["button"]}
            onClick={() => {
              window.location.href = "https://forms.gle/Q3qbF55uf8EG7wE3A";
            }}
          >
            <p className={styles["link"]}>Contact Us</p>
          </button>
        </div>
      )}
    </>
  );
};

export default PhoneNavbar;
