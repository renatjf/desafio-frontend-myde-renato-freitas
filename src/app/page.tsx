"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Chat from "@/components/Chat";
import { useConversations } from "@/features/conversations/hooks";

export default function Page() {
  const [selectedId, setSelectedId] = useState("");
  const { data: conversations, isLoading, isError } = useConversations();
  const selectedConversation = conversations?.find(
    (conversation: any) => conversation.id === selectedId,
  );

  useEffect(() => {
    if (!selectedId && conversations?.length) {
      setSelectedId(conversations[0].id);
    }
  }, [conversations, selectedId]);

  return (
    <main className="container">
      <Sidebar
        conversations={conversations}
        selectedId={selectedId}
        onSelect={setSelectedId}
        isLoading={isLoading}
        isError={isError}
      />
      <section className="chat-pane">
        <Chat id={selectedId} conversation={selectedConversation} />
      </section>
    </main>
  );
}
