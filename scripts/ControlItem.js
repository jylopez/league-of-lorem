class ControlItem extends React.Component {
  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
    this.props.onClick(this.props.viewName)
  }

  render() {

    return (
      <div className="control-item" onClick={this.clickHandler}>
        <img src={`./images/selection-${this.props.selectedView === this.props.viewName}.png`}/>
        <span>{this.props.name}</span>
      </div>
    )
  }
} 