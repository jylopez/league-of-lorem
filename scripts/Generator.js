

class Generator extends React.Component {
  constructor(props){
    super(props);
    this.rerollHandler = this.rerollHandler.bind(this);
    this.generateLorem = this.generateLorem.bind(this);
    this.changeParagraphCount = this.changeParagraphCount.bind(this);
    this.state = {
      paragraphs: [LOREM.yasuoLore[0]],
      paragraphCount: "1"
    }
  }

  componentWillUpdate(nextProps, nextState){
    if (nextState.paragraphCount !== this.state.paragraphCount) {
      this.generateLorem(nextState.paragraphCount)
    }
  }

  generateLorem(paragraphCount){
    var items = LOREM.yasuoLore
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

  render(){
    const paragraphs = this.state.paragraphs.map((paragraph, index) => {
      return (
        <p key={index}>{paragraph}</p>
      )
    })
    return (
      <div className="generator">
        <a className="accept" onClick={this.rerollHandler}>REROLL!</a>
        <div>
          <select name="paragraph-count" value={this.state.paragraphCount} onChange={this.changeParagraphCount}>
            <option value="1">1 paragraph</option>
            <option value="2">2 paragraphs</option>
            <option value="3">3 paragraphs</option>
          </select>
        </div>
        
        {paragraphs}
      </div>
    )
  }
} 
