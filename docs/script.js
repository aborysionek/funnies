import {
  FunniesComponent as Component,
  Funnies,
} from '../src';

// Funnies class
// This is the non-react version
document.addEventListener("DOMContentLoaded", function() {
  function construct(funnies, messageContainer, reloadButton) {
    function reload() {
      messageContainer.innerHTML = funnies.message();
    }
    reloadButton.onclick = reload;
    reload();
  }

  construct(
    new Funnies(),
    document.getElementById('funny-message-1'),
    document.getElementById('reload-funny-message-1')
  );
  construct(
    // This is a little different than the code specified, I know.
    // If I didn't pass some of these in particular, then it'd be hard to see that
    // the passed messages were even used.
    new Funnies([
      "foo", "bar", "baz", "hello", "world",
      "May the forks be with you",
      "Distracted by cat gifs",
      "Making sure all the i's have dots..",
      "Swapping time and space...",
      "Adjusting flux capacitor...",
    ], {appendMessages: false}),
    document.getElementById('funny-message-2'),
    document.getElementById('reload-funny-message-2')
  );
});

// React
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Component />, document.getElementById('react-1'));

let Wrapper = React.createClass({
  getInitialState() {
    return {interval: 2000};
  },
  updateInterval(value) {
    this.setState({interval: parseInt(value)});
  },
  render() {
    return <div className="funnies-wrapper">
      <Component key={this.state.interval} interval={this.state.interval} />
      <input
        type="range"
        min={1000}
        max={8000}
        step={1000}
        value={this.state.interval}
        onChange={e => this.updateInterval(e.target.value)}
      />
      <span>{this.state.interval / 1000} seconds</span>

      <h4>Code:</h4>
      <pre>
        import {'{FunniesComponent}'} from 'funnies';<br/>
        ReactDOM.render(<br/>
        &nbsp;&nbsp;&lt;FunniesComponent interval={'{'}{this.state.interval}{'}'} /&gt;<br/>
        , elem);
      </pre>
    </div>;
  },
})
ReactDOM.render(<Wrapper />, document.getElementById('react-2'));
