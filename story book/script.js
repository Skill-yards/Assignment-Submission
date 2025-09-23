function display(start) {
  const data = {
    start: {
      text: "At the forest fork, do you go left or right?",
      choices: [
        { text: "Left", next: "left" },
        { text: "Right", next: "right" }
      ]
    },
    left: {
      text: "A river blocks the way. Swim or build a raft?",
      choices: [
        { text: "Swim", next: "endA" },
        { text: "Build a raft", next: "endB" }
      ]
    },
    right: {
      text: "A mountain rises ahead. Climb or walk around?",
      choices: [
        { text: "Climb", next: "endC" },
        { text: "Walk around", next: "endD" }
      ]
    },
    endA: { text: "You swim safely across. The End.", choices: [] },
    endB: { text: "The raft breaks, but you make it. The End.", choices: [] },
    endC: { text: "You reach the top and see the view. The End.", choices: [] },
    endD: { text: "You stroll through flowers. The End.", choices: [] }
  };

  document.getElementById('story').textContent = data.start.text;
  const choicesDiv = document.getElementById('choices'); 
  choicesDiv.innerHTML = "";

  data.start.choices.forEach(choice => {
    let btn = document.createElement('button');
    btn.textContent = choice.text;
    btn.onclick = () => display(choice.next);
    choicesDiv.appendChild(btn);
  });
}

display('start');
