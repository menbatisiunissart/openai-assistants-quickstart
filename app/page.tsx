"use client";

import React from "react";
import styles from "./page.module.css";
import { assistantId, title, description } from "./assistant-config";

const Home = async () => {
  const categories = {
    "Click2Trace chat": "basic-chat",
    "Function calling": "function-calling",
    "File search": "file-search",
    All: "all",
  };

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
