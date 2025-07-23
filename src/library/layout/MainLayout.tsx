import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app-background flex min-h-screen flex-col">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 5000,
          style: {
            background: "var(--bg)",
            color: "var(--text)",
            border: "1px solid var(--primary)",
          },
        }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
