document.querySelector('.green').onclick = tree;

function tree() {
  var star = '';
  for (let i = 0; i <= 15; i++) {
    for (let k = 15; k > i; k--) {
      star += ' ';
    }
    for (let j = 0; j < i * 2 - 1; j++) {
      star += '*';
    }
    star += '\n';
  }

  document.querySelector('.tree').innerHTML = star;
}

// tree();
