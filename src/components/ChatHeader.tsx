export default function ChatHeader({ conversation }: any) {
  if (!conversation) {
    return (
      <div className="chat-header">
        <div>
          <div className="chat-title">Nenhuma conversa selecionada</div>
          <div className="chat-subtitle">
            Escolha uma conversa na lista à esquerda
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-header">
      <div>
        <div className="chat-title">{conversation.contactName}</div>
        <div className="chat-subtitle">{conversation.contactPhone}</div>
      </div>
    </div>
  );
}
