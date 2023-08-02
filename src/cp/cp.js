import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", ["./files/script.js", ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2", "arg3"]);
