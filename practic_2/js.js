function circleArea(radius) {
    console.log(radius)
    const p = 3.14;
    let radius2 = radius * 5;
  
    if(radius > 0){
      return(p * radius);
    }
    else if(radius > 30) {
      return(p * radius2);
    }
    else if (radius => 0) {
      throw new Error("Error")
    }
    return 0;
  }