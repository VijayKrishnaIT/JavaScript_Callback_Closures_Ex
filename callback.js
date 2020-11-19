//passing one function to another function

//arg1 is fun_two

// function fun_one(arg1) {
//   console.log(arg1()); //Hello
// }

// fun_one(function fun_two() {
//   return "Hello";
// });

//f1 function store into arg1 , f2 -->arg2, f3-->arg3

// function fun_one(arg1, arg2, arg3) {
//   console.log(arg1(), arg2(), arg3()); //ReactJS NODEJS MongoDB
// }

// fun_one(
//   function f1() {
//     return "ReactJS";
//   },
//   function f2() {
//     return "NODEJS";
//   },
//   function f3() {
//     return "MongoDB";
//   }
// );
/*
function networkCall(callback1, callback2) {
  console.log(callback1(), callback2()); //success failure
}

networkCall(
  () => {
    return "success";
  },
  () => {
    return "failure";
  }
);
*/

// function add(num, callback) {
//   return callback(num + 5, false);
// }

// add(5, (addRes, error) => {
//   if (!error) {
//     console.log(addRes); //10
//   }
// });

/*
function add(num, callback) {
  return callback(num + 5, false);
}

function sub(num, callback) {
  return callback(num - 3, false);
}

function mul(num, callback) {
  return callback(num * 2, false);
}

function div(num, callback) {
  return callback(num / 2 - 2, false);
}

add(5, (addRes, error) => {
  if (!error) {
    sub(addRes, (subRes, error) => {
      if (!error) {
        // console.log(subRes); // 7
        mul(subRes, (mulRes, error) => {
          if (!error) {
            div(mulRes, (divRes, error) => {
              if (!error) {
                console.log(divRes); //5
              }
            });
          }
          // console.log(mulRes); // 14
        });
      }
    });
  }
});
*/

//supply num=5 result is 10

function add(num) {
  return new Promise((resolve, reject) => {
    resolve(num + 5);
  });
}

function sub(num) {
  return new Promise((resolve, reject) => {
    resolve(num - 3);
  });
}

(async () => {
  let addRes = await add(5);
  let subRes = await sub(addRes);
  console.log(subRes); // 7
})();
