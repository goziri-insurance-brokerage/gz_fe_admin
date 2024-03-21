export default function config() {
  return {
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    tokenExpireAtMs: process.env.NEXT_PUBLIC_TOKEN_EXPIRE_AT_MS,
  };
}
