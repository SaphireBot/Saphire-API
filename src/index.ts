import fastifyWebSocket from "@fastify/websocket";
import fastify from "fastify";
import { env } from "process";
import { topggWebhook } from "./services";

const app = fastify();
app.register(fastifyWebSocket);

app.post("/topgg", (req, res) => {

  if (req.headers.authorization !== env.TOP_GG_AUTHORIZATION)
    return res.status(401);

  topggWebhook.listener(vote => console.log(`TopGG - ${vote}`));
  return res.status(200);
});

app.get("/ws", { websocket: true }, (connection) => {
  console.log("Linha 10");

  connection.socket.on("message", () => {
    console.log("Linha 13");
    connection.socket.send("Hello World!");
  });
});

// app.get("/topgg", { websocket: true }, (connection) => {
//   topggWebhook.listener((vote) => {
//     console.log(`TopGG - ${vote}`);
//     connection.socket.send(vote);
//   });
// });

app.get("/", (_, res) => {
  return res.status(200).send({ status: "Online" });
});

app.get("/saphire", (_, res) => {
  return res.status(200).send("OK");
});

app.listen({
  port: 8080,
  host: "0.0.0.0"
}, (err) => err
  ? console.log(err)
  : console.log("Saphire's API Connected")
);
