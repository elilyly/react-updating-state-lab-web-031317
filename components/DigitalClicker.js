import React from 'react' // import react

class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
    this.timesClicker = this.timesClicker.bind(this)
  }
  timesClicker() {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }
  render() {
    return (
      <button onClick={this.timesClicker}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;
