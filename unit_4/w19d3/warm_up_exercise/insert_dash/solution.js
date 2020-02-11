const insertDash = (num) => {
  
  const arrNums = ("" + num).split("");
  
  for (let i=0; i < arrNums.length -1; i++) {
    if (arrNums[i] % 2 != 0 && arrNums[i + 1] % 2 != 0) {
      arrNums[i] += "-";
    }
  }
  
  return arrNums.join("");
  
}



