require('dotenv').config();
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

console.log("ImageKit config test:");
console.log("Public:", process.env.IMAGEKIT_PUBLIC_KEY);
console.log("Endpoint:", process.env.IMAGEKIT_URL_ENDPOINT);

if (!process.env.IMAGEKIT_PUBLIC_KEY || !process.env.IMAGEKIT_PRIVATE_KEY || !process.env.IMAGEKIT_URL_ENDPOINT) {
  throw new Error("❌ Missing ImageKit .env values");
}

module.exports = imagekit;
