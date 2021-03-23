import Pusher from "pusher";
import dotenv from "dotenv";
dotenv.config();

const { appId, key, secret } = process.env;

export const pusher = new Pusher({
  appId: appId,
  key: key,
  secret: secret,
  cluster: "eu",
  useTLS: true,
});
