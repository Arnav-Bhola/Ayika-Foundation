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
            Ayika Foundation is a youth-led organization that works to{" "}
            <strong>mitigate climate change</strong> and harness the untapped potential of the youth
            in the climate action movement. We've hosted <strong>7+</strong> campaigns, impacted{" "}
            <strong>1 million +</strong> lives, cleared <strong>1000+</strong> kgs of waste, and
            educated millions about <strong>climate action</strong> through our social media and
            offline work. We also pioneered{" "}
            <strong>Mumbai's biggest flower recycling effort</strong> during the Ganpati Festival in
            Mumbai. We've partnered with MNCs and esteemed brands like Decathlon, Doms, The London
            Bubble, Enerzal, The Recycling Company, Apex Sports Surfaces, Mobitrash, and so on. We
            have also been <strong>featured in multiple newspapers</strong> like The Navbharat
            Times, Maharashtra Times, Midday Gujarati, Janambhoomi, Textile World, Vyaapar, and so
            on, with a circulation of10M+. We have a <strong>volunteer network of 500+</strong>,
            cumulatively amounting to 3000+ service hours. We've also fundraised{" "}
            <strong>20k+ for animal care</strong>. Currently, we are undertaking a curriculum
            project, aimed at <strong>teaching school students</strong> about climate action through
            interactive activities and engaging workshops to engrave the climate ACTION attitude in
            them from a very young age. We have handcrafted a{" "}
            <strong>climate action curriculum</strong> from scratch, and we customize it to fit the
            needs of the students and schools we teach at. In addition to these activities, we have
            also hosted a <strong>plastic eradication month</strong> in which we hosted community
            engagement and collection drives on waste recycling
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
        <div
          className={styles["content"]}
          id='story'
        >
          <h1 className={styles["heading"]}>Our Story</h1>
          <p className={styles["text"]}>
            Siya and Litisha hail from <strong>Mumbai</strong> - a city with a population of more
            than 20 million people. Such a huge population signals an environmental hazard as
            well:&nbsp;
            <em>deforestation</em> to set up buildings, <em>vehicular pollution</em>, and{" "}
            <em>improper waste management</em> system. Both of them saw{" "}
            <strong>heaps of waste</strong> accumulated in their surroundings every day while going
            to school, and they wanted to make a change. The change could be made by targeting the
            root cause, and that can be brought about by <strong>awareness</strong> itself. They saw
            that people did not care about their environment, and through Ayika, what they want to
            do is make people <strong>mindful</strong> of the environment and{" "}
            <strong>protect</strong> the Earth, which is the simplest solution to the climatic
            hazards the planet is facing. Hence, Siya and Litisha started Ayika Foundation, an
            initiative to target a large audience and <strong>invest youth energy</strong> in this
            process.
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
