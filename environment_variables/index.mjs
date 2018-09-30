import config from "./config";

console.log(config());

console.log(process.env.foo);
console.log(process.env.NODE_ENV);

console.log(process.env.SENTIMENT_DB_URL);
