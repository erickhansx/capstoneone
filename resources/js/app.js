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

const artistsList = document.getElementById('featured');

for (let i = 0; i < artistObj.length; i++) {
  const artistInfo = `
  <div class="featured__artist">
  <div class="featured__artist-img">
    <img src="${artistObj[i].image}" alt="Artist Picture" />
  </div>
  <div class="featured__artist-info">
    <h5 class="artist__name">${artistObj[i].name}</h5>
    <p class="artist__cv">${artistObj[i].cv}</p>
    <div class="hr"><hr></div>
    <p class="artist__story">${artistObj[i].story}</p>
  </div>`;

  document.getElementById('featured').innerHTML += artistInfo;
}

// const buttonSeeMore = document.createElement('a');
// buttonSeeMore.innerHTML = `See More`;
// buttonSeeMore.setAttribute('id', 'see-more');
// document.getElementById('featured').appendChild(buttonSeeMore);

// buttonSeeMore.addEventListener('click', () => {
//   const featuredChildren = document.getElementById('featured').children;
//   if (featuredChildren.length > 2) {
//     featuredChildren[3].classList.add('seemore');
//     featuredChildren[4].classList.add('seemore');
//     featuredChildren[5].classList.add('seemore');
//   } else {
//     featuredChildren[3].classList.remove('seemore');
//     featuredChildren[4].classList.remove('seemore');
//     featuredChildren[5].classList.remove('seemore');
//   }
//   console.log(featuredChildren.length);
// });
