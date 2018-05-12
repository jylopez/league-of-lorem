class AllChat extends React.Component {
  getChats() {
    const chatIndex = Math.floor(Math.random() * LOREM.chat.length);
    if (Array.isArray(LOREM.chat[chatIndex])) {
      var chatArray = []
      for (var i = 0; i < LOREM.chat[chatIndex].length; i++) {
        chatArray.push(<p key={i}>{LOREM.chat[chatIndex][i]}</p>)
      }
      return chatArray;
    } else {
      return <p>{LOREM.chat[chatIndex]}</p>
    }
  }

  

  render() {
    const chats = this.getChats()
    if (!chats) debugger
    return (
      <div className="all-chat">
        {chats}
      </div>
    )
  }
} 
