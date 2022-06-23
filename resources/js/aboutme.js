const burger2 = document.querySelector('#testingBtn');
const mobileMenu2 = document.querySelector('#test2');

function close() {
  mobileMenu2.style.top = '-100%';
}

function show() {
  mobileMenu2.style.display = 'flex';
  mobileMenu2.style.top = '0';
}

burger2.addEventListener('click', show);

mobileMenu2.addEventListener('click', close);
