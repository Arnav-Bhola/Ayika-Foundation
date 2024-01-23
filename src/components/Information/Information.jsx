import styles from "./Information.module.scss";

import InformationSide from "./InformationSide";

const Information = () => {
  return (
    <div className={styles["container"]}>
      <InformationSide
        header={"who we are"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium nulla id erat scelerisque dignissim. Praesent a finibus orci, quis suscipit nisl. Suspendisse accumsan mi tellus, at tincidunt dui luctus ultrices. Donec sed sodales urna, ut viverra neque. Etiam fringilla sem sapien, quis consectetur ligula gravida eu. Etiam et turpis id arcu ornare iaculis. Praesent pretium congue magna porta tristique. Nam id blandit arcu, sed ullamcorper neque. Aenean pretium, dui id ornare scelerisque, mi ante sodales velit, quis varius felis massa id sem. Aenean congue posuere nisi sed iaculis. Integer a dui tellus. Cras in cursus purus."
        }
      />
      <InformationSide
        header={"what we do"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium nulla id erat scelerisque dignissim. Praesent a finibus orci, quis suscipit nisl. Suspendisse accumsan mi tellus, at tincidunt dui luctus ultrices. Donec sed sodales urna, ut viverra neque. Etiam fringilla sem sapien, quis consectetur ligula gravida eu. Etiam et turpis id arcu ornare iaculis. Praesent pretium congue magna porta tristique. Nam id blandit arcu, sed ullamcorper neque. Aenean pretium, dui id ornare scelerisque, mi ante sodales velit, quis varius felis massa id sem. Aenean congue posuere nisi sed iaculis. Integer a dui tellus. Cras in cursus purus."
        }
        filled
      />
    </div>
  );
};

export default Information;
