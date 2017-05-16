import React from 'react' // import react

class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
    this.bitrateEvent = this.bitrateEvent.bind(this)
    this.resolutionEvent = this.resolutionEvent.bind(this)
  }

  bitrateEvent() {
    this.setState({
      settings: Object.assign({},
        this.state.settings, {
        bitrate: 12
      }),
    });
  }

  resolutionEvent() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.video, {
          resolution: '720p'
        })
      }),
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateEvent}></button>
        <button className="resolution" onClick={this.resolutionEvent}></button>
      </div>
    )
  }
}

export default YouTubeDebugger;
