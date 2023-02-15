import type { Config } from "jest";

const config: Config = {
  rootDir: "./components",
  coverageDirectory: "../coverage",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

export default config;
