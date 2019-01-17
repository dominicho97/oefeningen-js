const fees = [
  {
    price: 10.75,
    title: "Normaal tarief"
  },
  {
    price: 9.75,
    title: "Kortingstarief"
  },
  {
    price: 8.05,
    title: "Kinepolis Student Card"
  }
];

const extras = [
  {
    price: 2.0,
    title: "Supplement 3D"
  },
  {
    price: 2.0,
    title: "Supplement Escape"
  },
  {
    price: 3.0,
    title: "Supplement HFR 3D"
  },
  {
    price: 0.75,
    title: "Supplement Film Lange Speelduur (>/=2u15)"
  },
  {
    price: 2.5,
    title: "Supplement Cosy Zone"
  },
  {
    price: 1.0,
    title: "Supplement Atmos"
  }
];

/*
fees.forEach(function(fees) {
  console.log(fees);
});

extras.forEach(function(extras) {
  console.log(extras);
});
*/
fees.forEach(fee => {
  extras.forEach(extra => console.log(fee, price, extras - price));
});
