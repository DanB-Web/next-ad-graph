import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Next Auth Template",
  description: "Weissman Next Auth Template",
};

export default function MainLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="container mx-auto pt-4">
          <Navbar />
          <main className="pt-10">{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
