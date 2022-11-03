import { APIAttachment, APIEmbed, Attachment, AttachmentBuilder, AttachmentPayload, BufferResolvable, JSONEncodable } from "discord.js";
import { Stream } from "node:stream";
import { FastifyRequest, FastifyReply } from "fastify";
import { Response as UndiciResponse } from "undici"
import { DocumentSetOptions } from "mongoose";

export interface TopGGWebhookPostResult {
  user: string
  type: string
  query?: string
  bot: string
}

export interface WebhookBodyRequest extends FastifyRequest {
  webhookUrl: string,
  content: string,
  embeds: APIEmbed[],
  avatarURL: string,
  username: string,
  files: (
    | Stream
    | BufferResolvable
    | JSONEncodable<APIAttachment>
    | Attachment
    | AttachmentBuilder
    | AttachmentPayload
  )[]
}

export interface Response extends FastifyReply {
  FastifyReply: FastifyReply
}

export interface Request extends FastifyRequest {
  query: {
    code?: string
  }
}

export interface CommandsSaphire {
  name: string,
  id: string,
  category: string,
  description: string
}

export interface ResponseGetIp extends UndiciResponse {
  ip: string
}

export interface ModelType extends DocumentSetOptions {
  ip: string,
  id: string,
  username: string,
  avatar: string,
  discriminator: string,
  email: string,
  guildsOwner: object[],
  loginDate: number
}

export interface UserData {
  id: string,
  username: string,
  avatar: string | null,
  avatar_decoration: string | null,
  discriminator: string,
  public_flags: number,
  flags: number,
  banner: string,
  banner_color: string,
  accent_color: number,
  locale: string,
  mfa_enabled: boolean,
  premium_type: number,
  email: string,
  verified: boolean
}

export interface DatabaseType {
  saphireResult: string | Error
  cacheResult: string | Error
}