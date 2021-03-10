import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#3aaa29",
  primaryBright: "#29aa61",
  primaryDark: "#31aa29",
  secondary: "#4560D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#0BF02E",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F9FAF9",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#416FCF",
  textDisabled: "#BDC2C4",
  textSubtle: "#5E84D2",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#416FCF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#4E6DAB",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #353547 100%)",
  },
};
