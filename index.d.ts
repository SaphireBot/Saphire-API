import "discord.js"
import { Dispatcher } from "undici"

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TOP_GG_AUTHORIZATION: string
      TOP_GG_TOKEN: string
      WEBHOOK_ACCESS: string
      GET_COMMANDS_ACCESS: string
      COMMAND_ACCESS: string
      GUILDS_ACCESS: string
      PHRASES_ACCESS: string
      CONNECTION_URL: string
      WEBHOOK_TOP_GG_COUNTER: string
      WEBHOOK_STATUS: string
      TOP_GG_WEBHOOK_AVATAR: string
      DB_LOGIN: string
      DB_CREDENTIALS: string
      AUTH_LOGIN_LINK: string
      CLIENT_ID: string
      CLIENT_SECRET: string
      SERVER_PORT: number
      APP_ID: string
      DISCLOUD_TOKEN: string
      DISCLOUD_APP_ID: string
      COMMIT_AUTHORIZATION: string
      SAPHIRE_ID: string
      SAPHIRE_BOT_ID: string
      LOGIN_ACCESS: string
      SAPHIRE_API_ID: string
      ROUTE_GET_DATA_FROM_DATABASE_PASSWORD: string
      ROUTE_GUILDS_FROM_DATABASE: string
      ROUTE_ANIMES_FROM_DATABASE: string
      ROUTE_CANTADAS_FROM_DATABASE: string
      ROUTE_CLIENTS_FROM_DATABASE: string
      ROUTE_ECONOMIES_FROM_DATABASE: string
      ROUTE_FANARTS_FROM_DATABASE: string
      ROUTE_INDICATIONS_FROM_DATABASE: string
      ROUTE_MEMES_FROM_DATABASE: string
      ROUTE_RATHERS_FROM_DATABASE: string
      ROUTE_REMINDERS_FROM_DATABASE: string
      ROUTE_USERS_FROM_DATABASE: string
      BOT_TOKEN_REQUEST: string
      WEHBHOOK_SYSTEM_AVATAR: string
      CHANNEL_WEBHOOK_STATUS: string
      GET_BACKUP_ZIP: string
      API_BOT_TOKEN: string
      GET_DATA_AUTHORIZATION: string
      DISCORD_TOKEN: string
      POST_MESSAGE: string
      WEBSOCKET_SAPHIRE_API_LOGIN_PASSWORD: string
      BOT_USERS_TOKEN_REQUEST: string
      LINKED_ROLES_AUTHORIZATION: string
      SAPHIRE_BOT_ID: string
      DATABASE_LINK_CONNECTION: string
      SERVER_BUG_REPORT: string
      REQUESTER1: string
      REDIS_RANKING_PASSWORD: string
      REDIS_RANKING_HOST_URL: string
      REDIS_RANKING_HOST_PORT: string
      REDIS_USER_CACHE_PASSWORD: string
      REDIS_USER_CACHE_HOST_URL: string
      REDIS_USER_CACHE_HOST_PORT: string
    }
  }

}

declare namespace Dispatcher {
  interface ResponseData {
    content?: string
  }

}

declare module "discord.js" {
  interface Collection<K, V> {
    getMany: (keys: K[]) => Collection<K, V>
  }
}