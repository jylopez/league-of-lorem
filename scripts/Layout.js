class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.rerollHandler = this.rerollHandler.bind(this);
    this.generateLorem = this.generateLorem.bind(this);
    this.changeParagraphCount = this.changeParagraphCount.bind(this);
    this.selectView = this.selectView.bind(this);
    this.state = {
      paragraphs: [LOREM.lore[Math.floor(Math.random() * LOREM.lore.length)]],
      paragraphCount: "1",
      selectedView: 'paragraphs'
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.paragraphCount !== this.state.paragraphCount) {
      this.generateLorem(nextState.paragraphCount)
    }
  }

  generateLorem(paragraphCount) {
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

  rerollHandler() {
    this.generateLorem(this.state.paragraphCount)
  }

  changeParagraphCount(e) {
    this.setState({
      paragraphCount: e.target.value
    })
  }

  selectView(viewName){
    this.setState({
      selectedView: viewName
    })
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <div className="logo-wrapper">
              <img src="./images/logo.png" />
            </div>
            <div className="controls">
              <ControlItem onClick={this.selectView} viewName="paragraphs" name="LEAGUE LOREM" selectedView={this.state.selectedView}/>
              <ControlItem onClick={this.selectView} viewName="allChat" name="/all CHAT" selectedView={this.state.selectedView}/>
              
              { this.state.selectedView === 'paragraphs' &&
                <ParagraphCountSelect value={this.state.paragraphCount} onChange={this.changeParagraphCount} />
              }
              <div className="reroll-wrapper">
                <a className="reroll" onClick={this.rerollHandler}>
                  <img src="./images/reroll.png" />
                </a>
              </div>
              
            </div>
          </div>
          <div className="col-sm-9 right-column">
            { this.state.selectedView === 'paragraphs' &&
              <Paragraphs
                paragraphs={this.state.paragraphs}
              />
            }
            
            { this.state.selectedView === 'allChat' &&
              <AllChat />
            }
          </div>
        </div>
      </div>
    )
  }
} 
