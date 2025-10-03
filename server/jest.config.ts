import type { Config } from "jest";
import { createDefaultPreset } from "ts-jest";

const presetConfig = createDefaultPreset({
  tsconfig: "./tsconfig.json",
  useESM: true,
});

const jestConfig: Config = {
  ...presetConfig,
  extensionsToTreatAsEsm: [".ts"],
};

export default jestConfig;
