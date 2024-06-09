// ** Imports **
// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing Styles
import styles from "./Footer.module.scss";

// Importing Data
import columnData from "../../data/Footer/Columns.json";
import socialsData from "../../data/Footer/Socials.json";

// Importing Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Importing Images
import logo from "../../assets/images/logo-large.png";

// Dictionary that maps icons to string names
const icons = {
  faDiscord,
  faInstagram,
  faLinkedin,
};

// ** Main Component **
const Footer = () => {
  // Getting the columns from an external json file
  const columns = (
    // Container for all the columns
    <div className={styles["content"]}>
      {/* Mapping through the json file to get every column */}
      {columnData.map((column) => {
        return (
          // Making containers for every column
          <div
            className={styles["column"]}
            key={column.header}
          >
            <div className={styles["column-content"]}>
              {/* Adding a header from the json file to each column */}
              <p className={styles["column-header"]}>{column.header}</p>

              {/* Making a container for the links for each column */}
              <div className={styles["links"]}>
                {/* Mapping through the links in each column from the json file */}
                {column.links.map((link) => {
                  // Checking if the link is a link in internio
                  // In json, if the link starts with 'ayika/', it's part of the website.
                  if (link.url.startsWith("ayika/")) {
                    return (
                      // Creating a link for each mapped link using the url, key and title in the json
                      <Link
                        to={link.url.substring("ayika".length)}
                        className={styles["link"]}
                        key={link.title}
                      >
                        {link.title}
                      </Link>
                    );
                  } else {
                    // If the link isn't from internio, just create a normal link
                    return (
                      // Creating a normal Link from the url, key and title in the json
                      <a
                        href={link.url}
                        className={styles["link"]}
                        key={link.title}
                      >
                        {link.title}
                      </a>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  // Getting the socials from an external json file
  const socials = (
    // Creating a container for the socials
    <div className={styles["socials"]}>
      {/* Mapping through each link in the json file */}
      {socialsData.map((link) => {
        return (
          // Creating a link using the url and name provided in the json file.
          <a
            href={link.url}
            key={link.name}
          >
            {/* The icon is mapped from a dictionary using a string of the icon's name in the json file */}
            <FontAwesomeIcon
              className={styles["icon"]}
              icon={icons[link.iconName]}
            />
          </a>
        );
      })}
    </div>
  );

  // ** JSX **
  return (
    <div className={styles["footer"]}>
      {/* Icon in footer */}
      <h1 className={styles["heading"]}>
        <img
          srcSet={logo}
          alt=''
          loading='lazy'
          className={styles["heading-icon"]}
        ></img>
        <p className={styles["heading-text"]}>Ayika Foundation</p>
      </h1>

      {/* Inserting the columns */}
      {columns}

      {/* Ending in footer */}
      <div className={styles["footer-row"]}>
        {/* Copyright text */}
        <p className={styles["copyright"]}>
          <span className={styles["symbol"]}>&copy;</span>
          <span className={styles["brand"]}>
            Ayika Foundation |&nbsp;
            <a href='mailto:ayika.foundation@gmail.com'>ayika.foundation@gmail.com</a>
          </span>
        </p>

        {/* Inserting the socials */}
        {socials}
      </div>
    </div>
  );
};

// ** Exportnig Component **
export default Footer;
