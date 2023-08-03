import { spawn, fork } from "child_process";

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", ["./files/script.js", ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
  //   fork("./files/script.js", args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2", "arg3", "234"]);
