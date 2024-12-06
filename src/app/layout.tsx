import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Bridge | Automate, Integrate, and Manage Tasks",
  description: "TaskBridge connects your digital tools like never before. Automate, integrate, and manage tasks effortlessly across Instagram, Slack, Discord, and Notion to create seamless workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
