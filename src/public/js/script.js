function consoleTextEffect(words, id, colors) {
  if (colors === undefined) {
    colors = ["#fff"];
  }
  let visible = true;
  let console = document.getElementById("line");
  let charCount = 1;
  let char = 1;
  let waiting = false;
  let target = document.getElementById(id);

  target.setAttribute("style", "color:" + colors[0]);

  window.setInterval(function () {
    if (charCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, charCount);
      window.setTimeout(function () {
        let usedColor = colors.shift();
        colors.push(usedColor);

        let usedWord = words.shift();
        words.push(usedWord);

        char = 1;

        target.setAttribute("style", "color:" + colors[0]);

        charCount += char;

        waiting = false;
      }, 1000);
    } else if (charCount === words[0].length + 1 && waiting === false) {
      waiting = true;

      window.setTimeout(function () {
        char = -1;
        charCount += char;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, charCount);

      charCount += char;
    }
  }, 120);

  window.setInterval(function () {
    if (visible === true) {
      console.className = "console__line hidden";
      visible = false;
    } else {
      console.className = "console__line";
      visible = true;
    }
  }, 400);
}

consoleTextEffect(
  ["Make an Account.", "Make your Notes.", "Write your Tasks."],
  "des-text",
  ["#0cbcfc", "#E3595D"]
);
