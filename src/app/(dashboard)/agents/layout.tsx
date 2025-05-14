import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Conversation | Lixichat",
  description: "Interactive agent conversation powered by Lixichat",
  openGraph: {
    title: "Agent Conversation | Lixichat",
    description: "Interactive agent conversation powered by Lixichat",
    type: "website",
  },
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 