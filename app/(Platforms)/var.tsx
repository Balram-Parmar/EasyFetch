export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://backend.transends.space";

// Downloaded files are served by nginx straight out of the backend's videos/
// directory, at /downloads/<fileName>.
export function downloadUrl(fileName: string): string {
  return `${BACKEND_URL}/downloads/${encodeURIComponent(fileName)}`;
}

// The backend reports failures as { error: "..." } (see routes.js).
export function apiErrorMessage(payload: unknown, fallback: string): string {
  if (
    payload &&
    typeof payload === "object" &&
    "error" in payload &&
    typeof payload.error === "string" &&
    payload.error
  ) {
    return payload.error;
  }

  return fallback;
}
