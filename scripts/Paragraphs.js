class Paragraphs extends React.Component {
  render(){
    const paragraphs = this.props.paragraphs.map((paragraph, index) => {
      return (
        <p key={index}>{paragraph}</p>
      )
    })

    return (
      <div className="paragraphs">
        {paragraphs}
      </div>
    )
  }
} 
