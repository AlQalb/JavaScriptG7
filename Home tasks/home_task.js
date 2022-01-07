document.querySelector('.fizzbtn').onclick = run;
var out = document.querySelector('.out');
function run() {
  num = document.querySelector('.fizzinput').value;
  function FizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      out.innerHTML = 'This Number is FizzBuzz';
    } else if (num % 3 === 0) {
      out.innerHTML = 'This Number is Fizz';
    } else if (num % 5 === 0) {
      out.innerHTML = 'This Number is Buzz';
    } else {
      out.innerHTML = "This Number isn't Fizz and Buzz ";
    }
  }
  FizzBuzz(num);
}

document.querySelector('.ballbtn').onclick = score;
var ballout = document.querySelector('.ballout');
var uball = document.querySelector('.uball');
function score() {
  var m = document.querySelector('.ballinputm').value;
  var h = document.querySelector('.ballinputh').value;
  var p = document.querySelector('.ballinputp').value;
  var l = document.querySelector('.ballinputl').value;

  function scorechecker(m, h, p, l) {
    aball =
      parseInt(m, 10) + parseInt(h, 10) + parseInt(p, 10) + parseInt(l, 10);
    if (aball >= 80) {
      ballout.innerHTML = 'You have been admitted to study on a GRANT basis';
      uball.innerHTML = `Your ball is ${aball}`;
    } else if (aball >= 60 && aball < 80) {
      ballout.innerHTML = 'You have been admitted to study on a Contract basis';
      uball.innerHTML = `Your ball is ${aball}`;
    } else if (aball >= 40 && aball < 60) {
      ballout.innerHTML =
        'You have been admitted to study on a SupperContract basis';
      uball.innerHTML = `Your ball is ${aball}`;
    } else if (aball >= 0 && aball < 40) {
      ballout.innerHTML = 'You failed exam';
      uball.innerHTML = `Your ball is ${aball}`;
    } else if ((aball = isNaN)) {
      ballout.innerHTML = 'Pleace enter your ball';
    }
  }
  scorechecker(m, h, p, l);
}


