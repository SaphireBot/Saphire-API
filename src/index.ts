process.env.TZ = "America/Sao_Paulo"
import "dotenv/config";
import "./services";
import "./webhooks";
import "./routes"
import { server, httpServer } from "./server";
import dataJSON from "./json/data.json";
import listen from "./webhooks/listen"
import { env } from "process";
import "./websocket/index"

server.get("/", (_, res) => res.status(200).send({ status: "Saphire's API Online" }));
server.get("/connections", (_, res) => res.send(dataJSON.urls.discordPrincipalServer));
server.get("/ping", (_, res) => res.status(200).send("Saphire's API PING"))

httpServer.listen(env.SERVER_PORT, "0.0.0.0", () => listen())