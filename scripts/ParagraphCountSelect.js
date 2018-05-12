class ParagraphCountSelect extends React.Component {
  render() {
    return (
      <div className="paragraph-count-wrapper">
        <select name="paragraph-count" value={this.props.value} onChange={this.props.onChange}>
          <option value="1">1 paragraph</option>
          <option value="2">2 paragraphs</option>
          <option value="3">3 paragraphs</option>
          <option value="4">4 paragraphs</option>
          <option value="5">5 paragraphs</option>
        </select>
      </div>
    )
  }
} 