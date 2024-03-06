export function loadFile(uri: string | null) {
  if (!uri) return "";
  return `${process.env.API_BASE_URL}/files/${uri}`;
}
