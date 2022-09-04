const ftoc = function(faren) {
  let cel = (faren - 32) * 0.5555555555555556;
  cel = Math.round(cel * 10) / 10;
  return cel;
};

const ctof = function(cel) {
  let faren = (cel * 1.8) + 32;
  faren = Math.round(faren * 10) / 10;
  return faren;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
