

class Generator extends React.Component {
  constructor(props){
    super(props);
    this.rerollHandler = this.rerollHandler.bind(this);
    this.generateLorem = this.generateLorem.bind(this);
    this.changeParagraphCount = this.changeParagraphCount.bind(this);
    this.state = {
      paragraphs: [LOREM.lore[0]],
      paragraphCount: "1"
    }
  }

  componentWillUpdate(nextProps, nextState){
    if (nextState.paragraphCount !== this.state.paragraphCount) {
      this.generateLorem(nextState.paragraphCount)
    }
  }

  generateLorem(paragraphCount){
    var items = LOREM.lore
    var paragraphCount = parseInt(paragraphCount)
    var paragraphs = []

    for (var i = 0; i < paragraphCount; i++) {
      var randomIndex = Math.floor(Math.random() * items.length);
      paragraphs.push(items[randomIndex])
    }
    
    this.setState({
      paragraphs: paragraphs
    })
  }

  rerollHandler(){
    this.generateLorem(this.state.paragraphCount)
  }

  changeParagraphCount(e){
    this.setState({
      paragraphCount: e.target.value
    })
  }

  getChats(){
    const chatIndex = Math.floor(Math.random() * LOREM.chat.length);
    if (Array.isArray(LOREM.chat[chatIndex])) {
      var chatArray = []
      for (var i = 0; i < LOREM.chat[chatIndex].length; i++) {
        chatArray.push(<p>{LOREM.chat[chatIndex][i]}</p>)
      }
      return chatArray;
    } else {
      return <p>{LOREM.chat[chatIndex]}</p>
    }
  }

  render(){
    const paragraphs = this.state.paragraphs.map((paragraph, index) => {
      return (
        <p key={index}>{paragraph}</p>
      )
    })

    

    const chats = this.getChats()
    return (
      <div className="generator">
        <div className="controls">
          <a className="accept" onClick={this.rerollHandler}>
            <img src="./images/reroll.png" />
          </a>
          <div className="paragraph-count-wrapper">
            <select name="paragraph-count" value={this.state.paragraphCount} onChange={this.changeParagraphCount}>
              <option value="1">1 paragraph</option>
              <option value="2">2 paragraphs</option>
              <option value="3">3 paragraphs</option>
              <option value="4">4 paragraphs</option>
              <option value="5">5 paragraphs</option>
            </select>
          </div>
        </div>
        
        
        {paragraphs}

        <h2>/all</h2>
        {chats}
      </div>
    )
  }
} 
