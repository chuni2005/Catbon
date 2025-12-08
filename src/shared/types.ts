// src/shared/types.ts
export interface BackendResponse {
  message: string;
}

declare global {
  interface Window {
    api: {
      getData: () => Promise<BackendResponse>;
    };
  }
}
