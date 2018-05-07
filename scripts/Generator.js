

class Generator extends React.Component {
  constructor(props){
    super(props);
    this.generateLorem = this.generateLorem.bind(this);
    this.state = {
      lorem: LOREM.yasuoLore[0]
    }
  }

  generateLorem(){
    var items = LOREM.yasuoLore
    var item = items[Math.floor(Math.random() * items.length)];
    this.setState({
      lorem: item
    })
  }

  render(){
    return (
      <div className="generator">
        <a className="accept" onClick={this.generateLorem}>REROLL!</a>
        <p>{this.state.lorem}</p>
      </div>
    )
  }
} 
