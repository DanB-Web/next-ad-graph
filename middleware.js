export { default } from "next-auth/middleware";

// Routes protected by next-auth middleware
export const config = {
  matcher: ["/dashboard"],
};
