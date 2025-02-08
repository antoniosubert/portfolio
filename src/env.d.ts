/// <reference types="react-scripts" />
/// <reference types="vite/client" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_EMAILJS_SERVICE_ID: string;
      REACT_APP_EMAILJS_TEMPLATE_ID: string;
      REACT_APP_EMAILJS_PUBLIC_KEY: string;
    }
  }
}

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
