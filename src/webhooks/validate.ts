import { env } from "node:process";
import { WebhookBodyRequest } from "../@types";
import { server } from "../server";
import sender from "./sender";

server.post("/sender", async (req, res): Promise<any> => {

  const { webhookUrl: url, content, embeds, avatarURL, files, username } = <WebhookBodyRequest>req.body ?? {};

  if (req.headers?.authorization !== env.WEBHOOK_ACCESS)
    return res
      .status(401) // Unauthorized
      .send("Unauthorized");

  if (!url)
    return res
      .status(204)
      .send({ status: "Unknown Webhook URL" });

  if (!content && (!embeds || !Array.isArray(embeds)))
    return res
      .status(204)
      .send({ status: "Unknown Content and Embeds" });

  if (content && typeof content !== "string")
    return res
      .status(406) // Not Acceptable
      .send({ status: "Content is not string" });

  return sender({ url, username, avatarURL, content, embeds, files }, res)
    .catch(() => null);

});