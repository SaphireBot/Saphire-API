import cache from "./model/cache";
import client from "./model/client";
import guild from "./model/guilds";
import reminder from "./model/reminder";
import user from "./model/user";

export default new class Database {
    Client: typeof client
    Cache: typeof cache
    Guild: typeof guild
    User: typeof user
    Reminder: typeof reminder

    constructor() {
        this.Client = client
        this.Cache = cache
        this.Guild = guild
        this.User = user
        this.Reminder = reminder
    }
}