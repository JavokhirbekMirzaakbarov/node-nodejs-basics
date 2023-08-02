const parseArgs = () => {
  process.argv.slice(2).forEach((arg, index, args) => {
    if (arg.startsWith("--")) {
      const keyName = arg.substring(2);
      const value = args[++index];
      console.log(`${keyName} is ${value}`);
    }
  });
};

parseArgs();
