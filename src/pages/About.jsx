import React from "react";

import styles from "./About.module.scss";

import storyImage from "../assets/images/About/Story.svg";

const About = () => {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <h1 className={styles["heading"]}>About Us</h1>
          <p className={styles["text"]}>
            Ayika Foundation is a youth-led organization that works to mitigate climate change and
            harness the untapped potential of the youth in the climate action movement. We’ve hosted
            7+ campaigns, impacted 1 million+ lives, cleared 1000+ kgs of waste, and educated
            millions about climate action through our social media and offline work. We also
            pioneered Mumbai’s biggest flower recycling effort during the Ganpati Festival in
            Mumbai. We've partnered with MNCs and esteemed brands like Decathlon, Doms, The London
            Bubble, Enerzal, The Recycling Company, Apex Sports Surfaces, Mobitrash, and so on. We
            have also been featured in multiple newspapers like The Navbharat Times, Maharashtra
            Times, Midday Gujarati, Janambhoomi, Textile World, Vyaapar, and so on, with a
            circulation of10M+. We have a volunteer network of 500+, cumulatively amounting to 3000+
            service hours. We've also fundraised 20k+ for animal care. Currently, we are undertaking
            a curriculum project, aimed at teaching school students about climate action through
            interactive activities and engaging workshops to engrave the climate ACTION attitude in
            them from a very young age. We have handcrafted a climate action curriculum from
            scratch, and we customize it to fit the needs of the students and schools we teach at.
            In addition to these activities, we have also hosted a plastic eradication month in
            which we hosted community engagement and collection drives on waste recycling
          </p>
        </div>
        <div>
          <img
            src={storyImage}
            alt={"story"}
            className={styles["image"]}
          ></img>
        </div>
      </div>
      <div className={styles["container-reverse"]}>
        <div className={styles["content"]}>
          <h1 className={styles["heading"]}>Our Story</h1>
          <p className={styles["text"]}>
            Siya and Litisha hail from Mumbai–a city with a population of more than 20 million
            people. Such a huge population signals an environmental hazard as well: deforestation to
            set up buildings, vehicular pollution, and improper waste management system. Both of
            them saw heaps of waste accumulated in their surroundings every day while going to
            school, and they wanted to make a change. The change could be made by targeting the root
            cause, and that can be brought about by awareness itself. They saw that people did not
            care about their environment, and through Ayika, what they want to do is make people
            mindful of the environment and protect the Earth, which is the simplest solution to the
            climatic hazards the planet is facing. Hence, Siya and Litisha started Ayika Foundation,
            an initiative to target a large audience and invest youth energy in this process.
          </p>
        </div>
        <div>
          <img
            src={storyImage}
            alt={"story"}
            className={styles["image"]}
          ></img>
        </div>
      </div>
    </>
  );
};

export default About;
