import './App.css';

function getRandomColor() {
  // random color generator
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Square() {
  // REF: document.documentElement.style.setProperty('--text', `'${time}'`);
  // var h = window.innerHeight;
  var height = window.innerHeight;
  var width = window.innerWidth;
  // random size
  var sqr_size = Math.floor(Math.random() * height);
  document.documentElement.style.setProperty('--sqr_width', `${sqr_size}px`);
  // random position on the x axis
  var left_margin = Math.floor(Math.random() * (width - sqr_size));
  document.documentElement.style.setProperty('--margin-left', `${left_margin}px`)
  // random position on the y axis
  var top_margin = Math.floor(Math.random() * (height - sqr_size));
  document.documentElement.style.setProperty('--margin-top', `${top_margin}px`)
  // random color (reference getRandomColor())
  document.documentElement.style.setProperty('--sqr_color', `${getRandomColor()}`)
  return(
    <div className="square">

    </div>
  )
}

function App() {
  return (
    <div>
      <Square />
    </div>
  );
}

export default App;
