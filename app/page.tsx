"use client";

import React from "react";
import styles from "./page.module.css";
import { basicChatTitle, description } from "./assistant-config";

const Home = async () => {
  let categories = {};
  categories[basicChatTitle]="basic-chat";
  const otherCategories = {
    "Function calling": "function-calling",
    "File search": "file-search",
    All: "all",
  };
  categories = {...categories,...otherCategories}


  return (
    <main className={styles.main}>
      <div className={styles.title}>
        {description}
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/examples/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
