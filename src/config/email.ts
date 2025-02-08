const getEnvVariable = (key: string): string => {
  if (import.meta && import.meta.env) {
    return import.meta.env[key] || "";
  }
  return (window as any).process?.env?.[key] || "";
};

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
} as const;

// Validate that all required environment variables are present
export const validateEmailConfig = (): boolean => {
  return Boolean(
    emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey
  );
};
