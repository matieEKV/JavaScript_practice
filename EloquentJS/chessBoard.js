let size = 8;
let halfSize = size/2;
let boardLineEven = '';
let boardLineOdd = '';
let count1 = 0;
while(count1 < halfSize){
      count1++;
      boardLineEven+=' #';
      boardLineOdd +='# '
    }
for(let line = 0; line < size; line++){
  if(line % 2 == 0){
    console.log(boardLineEven);
    }
  else {
    console.log(boardLineOdd);
    }
  }