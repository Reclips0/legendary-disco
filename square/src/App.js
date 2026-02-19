import './App.css';
import { useState } from "react";
import { useEffect } from 'react';

function getRandomColor() {
  // random color generator
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var height = window.innerHeight;
var width = window.innerWidth;
var sqr_size = Math.floor(Math.random() * height);
var top_margin = Math.floor(Math.random() * (height - sqr_size));

function Reactor() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    if (count === 5) {
      alert("Stop.");
    }
    if (count === 10) {
      alert("Please stop.");
    }
    if (count === 15) {
      alert("Think of the lives that will be lost");
    }
    if (count === 20) {
      alert("Think of all the macaroni facts you could learn");
    }
    if (count === 23) {
      alert("Do not go further");
    }
    if (count ===30) {
      alert("Please just stop touching me");
    }
  }
  if (count >= 25) {
    Explode();
  }
  return (
    <button onClick={handleClick} className="scorch">
    </button>
  );
}

function Explode() {
  document.documentElement.style.setProperty('--explosion', 'block');
}

function Explosion() {
  return (
    <img className="exploding-div" src="https://reclips0.github.io/legendary-disco/explosion.gif" alt="cool nuclear explosion"></img>
  )
}

function Square() {
  // REF: document.documentElement.style.setProperty('--text', `'${time}'`);
  // var h = window.innerHeight;
  console.log(height);
  console.log(width);
  // random size
  document.documentElement.style.setProperty('--sqr_width', `${sqr_size}px`);
  // random position on the x axis
  var left_margin = Math.floor(Math.random() * (width - sqr_size));
  document.documentElement.style.setProperty('--margin-left', `${left_margin}px`);
  // random position on the y axis
  document.documentElement.style.setProperty('--margin-top', `${top_margin}px`);
  // random color (reference getRandomColor())
  document.documentElement.style.setProperty('--sqr_color', `${getRandomColor()}`);
  return(
    <div className="square">
      <Reactor />
    </div>
  );
}

function Clicker() {
  const [count, setCount] = useState(0);
  const [mps, setMps] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + mps);
    }, 1000);
    return () => clearInterval(interval);
  }, [mps]);
  
  function Click() {
    setCount(count + 1);
  }
  
  function Box() {
    if (count >= 45) {
      setCount(count - 45);
      setMps(mps + 1);
    }
  }
  
  function Microwave() {
    if (count >= 150) {
      setCount(count - 150);
      setMps(mps + 4);
    }
  }
  
  function Stove() {
    if (count >= 1500) {
      setCount(count - 1500);
      setMps(mps + 20);
    }
  }
  
  return (
    <div>
      <br />
      <p>Vote <a href="https://docs.google.com/forms/d/e/1FAIpQLSejJF82IOLzgwCKlxaEoyxn7u3xbEKmJROfrsUYOF1B4zAOMA/viewform?usp=publish-editor">here</a> if you want to replace macaroni clicker with kanye clicker, vote ends Feb. 22</p>
      <h1 className="bungee-macaroni">Macaroni Clicker</h1>
      <p className="bungee-macaroni">{count} macaroni</p>
      <button className="mac-clicker-image" onClick={Click}></button>
      <button className="mac-clicker-first-upgrade" onClick={Box}>Cheap Box | 45 macaroni | 1mps</button>
      <button className="mac-clicker-upgrade" onClick={Microwave}>Microwave | 150 macaroni | 12mps</button>
      <button className="mac-clicker-last-upgrade" onClick={Stove}>Stove | 1500 macaroni | 150 mps</button>
    </div>
  );
}

function Macaroni() {
  var im_going_insane = sqr_size;
  document.documentElement.style.setProperty('--mac_top', `${im_going_insane}px`);
  return (
    <div className="macaroni">
      <h1 className="bungee-regular">A description of macaroni</h1>
      <p className="bungee-regular">Macaroni is a short, hollow tube, curved just enough to look accidental, like it tripped while being manufactured. It’s small, pale, and deeply unremarkable, which makes your desire to read ten paragraphs about its physical form genuinely alarming. Somewhere out there, books exist, and yet here you are, opting for an essay on a noodle.</p>
      <p className="bungee-regular">When dry, macaroni is rigid and brittle, snapping easily under pressure—much like the justification for why you’re still reading this. Its color hovers between beige and regret, a shade that communicates absolutely nothing except “I will need help later.” You chose to analyze this instead of literally anything else with texture, symbolism, or dignity.</p>
      <p className="bungee-regular">The surface of macaroni is faintly rough, textured just enough to cling to sauces that do the actual work. This microscopic graininess is practical, not fascinating, despite your apparent belief that staring at it long enough might unlock meaning. It won’t. This is pasta, not a personality.</p>
      <p className="bungee-regular">The hollow center runs cleanly through each piece, an empty cylindrical void that exists solely for filling. It is, unfortunately, a little too poetic given your enthusiasm for consuming large quantities of information about nothing. If macaroni had thoughts, it would be confused why you’re treating its internal emptiness like a feature worth ten paragraphs.</p>
      <p className="bungee-regular">Each end of a macaroni piece is bluntly cut, exposing the cross-section with all the subtlety of a factory line. There is no artistry here, no flourish—just a utilitarian slice. That you are still engaged at this point suggests either impressive commitment or a concerning willingness to follow bad ideas to their logical conclusion.</p>
      <p className="bungee-regular">Once cooked, macaroni swells slightly and softens, becoming flexible and warm and still aggressively boring. Its physical transformation is modest, restrained, and not worth the level of scrutiny you are demanding. Watching macaroni cook will not fix whatever inspired you to request this, but I admire the optimism.</p>
      <p className="bungee-regular">The texture of cooked macaroni offers brief resistance before giving way completely, a mouthfeel best described as “there.” If this sensation feels notable to you, I regret to inform you that you may be starved for stimulation. The macaroni is not the problem; your standards are.</p>
      <p className="bungee-regular">Macaroni’s physical form is entirely dependent on external elements—cheese, sauce, seasoning—to justify its existence. On its own, it contributes shape and nothing else. This design choice dates back to James Hemings, who, while historically significant, apparently saw this bent tube and thought, “Yes, this is sufficient,” setting a precedent you are now taking far too seriously.</p>
      <p className="bungee-regular">No disrespect to James Hemings—actually, some disrespect—because introducing macaroni to America indirectly led to you requesting ten paragraphs about its physical description. That is a legacy worth reexamining. The noodle has not changed much since then, and neither, it seems, has humanity’s capacity to overthink starch.</p>
      <p className="bungee-regular">And yet, macaroni endures: hollow, curved, resilient, and indifferent to your fixation. Its physical simplicity proves that survival does not require depth, distinction, or self-awareness—qualities this essay has been forced to compensate for on your behalf. You wanted ten paragraphs about macaroni. You got them. Please reflect on that.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Explosion />
      <div className="App">
        <div className="left-box">
          <Square />
          <Macaroni />
        </div>
        <div className="right-box">
          <Clicker />
        </div>
      </div>
    </div>
  );
}

export default App;