// Exercise 1

// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.  Find the bug and fix it.


function writeDing() {
  console.log('Ding!');
}

let timerId = setTimeout(writeDing, 3000);
// Solution : The problem with this code was that the function writeDing was being invoked inside the setTimeout method which did not allow the setTimout method to work properly.


