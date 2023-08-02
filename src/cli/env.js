const parseEnv = () => {
  Object.entries(process.env).forEach(
    ([key, value]) => key.startsWith("RSS_") && console.log(`${key}=${value}`)
  );
};

parseEnv();
