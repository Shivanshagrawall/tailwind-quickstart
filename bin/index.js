import chalk from "chalk";
import cliSpinners from "cli-spinners";
import { Command } from "commander";
import logUpdate from "log-update";
import addTailwindToNext from '../src/next.js';
import addTailwindToVite from "../src/vite.js";

const program=new Command();

const spinner=cliSpinners.dots;

program.version("1.0.0").description("Add Tailwind CSS to your project");

program
.command("react-vite <path>")
.description("Add Tailwind CSS to a React Vite Project")
.action(async(path)=>{
    console.log(chalk.blueBright("Adding Tailwind CSS to React Vite Project..."));
    addTailwindToVite(path);
})

program
.command("next <path>")
.description("Add Tailwind CSS to a Next.js Project")
.action(async(path)=>{
    console.log(chalk.blueBright("Adding Tailwind CSS to Next.js Project..."));
    addTailwindToNext(path);
})

program.parse(process.argv);