import React from "react";
import styles from "./meals-loading.module.css";

const MealsLoading = () => {
  return <p className={styles.loading}>Fetching meals...</p>;
};

export default MealsLoading;
