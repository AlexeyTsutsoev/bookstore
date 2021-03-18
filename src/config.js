const envType =
  process.env.NODE_ENV || process.env.REACT_APP_NODE_ENV || "development";

const config = {
  development: {
    currentAddress: "http://localhost:3000",
    serverAddress: "http://3.12.228.201/api/",
  },
  production: {
    currentAddress: "http://3.12.228.201",
    serverAddress: "http://3.12.228.201/api/",
  },
};

export default config[envType];
