for (let number = 1; number <=100; number++){
    let fizz = number % 3;
    let buzz = number % 5;
    if ( fizz == 0 && buzz == 0){
      console.log('FizzBuzz');
      }
    else if (buzz == 0){
      console.log('Buzz');
      }
    else if (fizz == 0){
      console.log('Fizz');
      }
    else{
      console.log(number);
      }
  }