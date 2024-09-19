import { Lato, Inria_Serif } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["900"], variable: "--font-lato"});
const inria = Inria_Serif({ subsets: ["latin"], weight: ["400"], variable: "--font-inria"});

export {lato, inria}