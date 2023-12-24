const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_VERCEL_URL;
};

export const BASE_URL = getBaseUrl();