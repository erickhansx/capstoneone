const artistObj = [
  {
    image: './resources/img/ariana-grande.png',
    name: 'Ariana Grande',
    cv: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    story:
      'Benkler studies common-based pier production, and published his seminal book. The wealth of networks in 2006.',
  },
  {
    image: './resources/img/eminem.webp',
    name: 'Eminem',
    cv: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    story:
      'Benkler studies common-based pier production, and published his seminal book. The wealth of networks in 2006.',
  },
  {
    image: './resources/img/Avril-Lavigne.webp',
    name: 'Avril Lavigne',
    cv: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    story:
      'Benkler studies common-based pier production, and published his seminal book. The wealth of networks in 2006.',
  },
  {
    image: './resources/img/the_weeknd.webp',
    name: 'The Weeknd',
    cv: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    story:
      'Benkler studies common-based pier production, and published his seminal book. The wealth of networks in 2006.',
  },
  {
    image: './resources/img/danreynolds.webp',
    name: 'Dan Reynolds',
    cv: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    story:
      'Benkler studies common-based pier production, and published his seminal book. The wealth of networks in 2006.',
  },
  {
    image: './resources/img/dualipa.webp',
    name: 'Dua Lipa',
    cv: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    story:
      'Benkler studies common-based pier production, and published his seminal book. The wealth of networks in 2006.',
  },
];

for (let i = 0; i < artistObj.length; i += 1) {
  const artistInfo = `
  <article class="featured__artist artist-container${[i]}">
  <div class="featured__artist-img">
    <img src="${artistObj[i].image}" alt="Artist Picture" />
  </div>
  <div class="featured__artist-info">
    <h5 class="artist__name">${artistObj[i].name}</h5>
    <p class="artist__cv">${artistObj[i].cv}</p>
    <div class="hr"><hr></div>
    <p class="artist__story">${artistObj[i].story}</p>
  </div> </article>`;

  document.getElementById('featured').innerHTML += artistInfo;
}

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

function close() {
  mobileMenu.style.top = '-100%';
}

function show() {
  mobileMenu.style.display = 'flex';
  mobileMenu.style.top = '0';
}

burger.addEventListener('click', show);
mobileMenu.addEventListener('click', close);
