// d3.scaleBand()

/*

<--------------------range------------------------>
<-op->                <--ip-->               <-op->
      |---------------|      |---------------|
      0               1      1               2
      <---bandwidth--->      <---bandwidth--->

      <---------step--------->

op = outer padding
ip = inner padding
step = distance between starts of adjacent bands
bandwidth = width of each band

*/

const bandScale = d3.scaleBand();
console.log(bandScale.domain());
console.log(bandScale.range());
console.log(bandScale(0));
console.log(bandScale.domain([0, 1]));
console.log(bandScale.domain());
console.log(bandScale(0));
console.log(bandScale(0.5));
console.log(bandScale(1));
console.log(bandScale(2));
console.log(bandScale.bandwidth());
console.log(bandScale.step());

bandScale.range([0, 2]);
console.log(bandScale(0));
console.log(bandScale(0.5));
console.log(bandScale(1));
console.log(bandScale(2));
console.log(bandScale.bandwidth());
console.log(bandScale.step());

console.log(bandScale.paddingInner());

bandScale.paddingInner(0.1);
console.log(bandScale(0));
console.log(bandScale(1));
console.log(bandScale.bandwidth());
console.log(bandScale.step());
console.log(bandScale.paddingInner());

console.log(bandScale.bandwidth() + bandScale.paddingInner());
console.log(
  bandScale.bandwidth() + bandScale.paddingInner() * bandScale.step()
);
console.log(
  bandScale.bandwidth() +
    bandScale.paddingInner() * bandScale.step() +
    bandScale.bandwidth()
);

console.log(bandScale.paddingOuter());
bandScale.paddingOuter(0.1);
console.log(bandScale(0));
console.log(bandScale(1));
console.log(bandScale.bandwidth());
console.log(bandScale.step());

console.log(bandScale.paddingOuter());
console.log(
  bandScale.paddingOuter() + bandScale.bandwidth() + bandScale.paddingInner()
);
console.log(
  bandScale.paddingOuter() * bandScale.step() +
    bandScale.bandwidth() +
    bandScale.paddingInner() * bandScale.step()
);
console.log(bandScale(1));

console.log(bandScale.padding());

console.log(bandScale.align());

console.log(
  bandScale.paddingOuter() * bandScale.step() +
    bandScale.bandwidth() +
    bandScale.paddingInner() * bandScale.step() +
    bandScale.bandwidth() +
    bandScale.paddingOuter() * bandScale.step()
);

// only rangeRound() and copy() helper methods can be used
