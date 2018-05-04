

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
      <div>
        <p>{this.state.lorem}</p>
        <a onClick={this.generateLorem}>ACCEPT!</a>
      </div>
    )
  }
} 