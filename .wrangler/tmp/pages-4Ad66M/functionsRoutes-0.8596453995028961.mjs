import { onRequestPost as __api_chat_ts_onRequestPost } from "C:\\Users\\pc\\Desktop\\Ayoub_Hadi_Portfolio\\functions\\api\\chat.ts"

export const routes = [
    {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_chat_ts_onRequestPost],
    },
  ]