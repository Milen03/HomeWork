function computerFirm (input) {
    let index=0;
    let n = Number (input[index]);
    index++
 
    let totalSales = 0;
    let totalRating = 0;
  
    
    for (let i = 0; i < n; i++) {
      let ratingg = Number (input [index]);
      index++;
      let  rating = ratingg % 10;
      let  sales = Math.floor(ratingg / 10);
  
      switch (rating) {
        case 2:
          totalSales += 0;
          break;
        case 3:
          totalSales += sales * 0.5;
          break;
        case 4:
          totalSales += sales * 0.7;
          break;
        case 5:
          totalSales += sales * 0.85;
          break;
        case 6:
          totalSales += sales;
          break;
        default:
          console.log(totalSales);
      }
  
      totalRating += rating;
    }
  
    let averageRating = (totalRating / n).toFixed(2);
    let  formattedSales = totalSales.toFixed(2);
    console.log(formattedSales);
    console.log(averageRating);
  }
  
  computerFirm(["3",
  "103",
  "103",
  "103"]);