export default function config() {
  const { API_BASE_URL, TOKEN_EXPIRE_AT_MS, NODE_ENV } = process.env;

  return {
    apiBaseUrl: API_BASE_URL || "https://api.development.goziri.com/v1",
    tokenExpireAtMs: TOKEN_EXPIRE_AT_MS,
    environment: NODE_ENV,
  };
}
