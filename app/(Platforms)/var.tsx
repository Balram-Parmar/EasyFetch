export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://backend.transends.space";

//serves video from videos/ 
export function downloadUrl(fileName: string): string {
  return `${BACKEND_URL}/downloads/${encodeURIComponent(fileName)}`;
}


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
