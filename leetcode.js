// elite lite ni solishtirish 1-mashq
//hello world worldni lengthni aniqlash 2-mashq
//  nums = [2,5,1,3,4,7], n = 3  2 5 1 ==x  3 4 7 =y xy,xy,xy
////Output: [2,3,5,4,1,7]
//Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].  3-mashq

//Input: s = "Hello how are you Contestant", k = 4 boshidagi 4indexni olish kk array kyn string
//Output: "Hello how are you"    5-mashq

//sozni teskarisini yozis h  7-mashq

//8-mashq   nums=[1,2,3,4] natija [1,1+2,1+2+3,1+2+3+4]=>[1,3,6,10]
//9-mashq  s = "codeleet", indices = [4,5,6,7,0,2,1,3] s dagi harflariga []dagi sonlarni index sifatida olib  leetcode db yozish 
//10-mashq  Input: nums = [3,2,4], target = 6 Output: [1,2]  nums dan 2ta soni quwib 6chiqadi. shu ikki sonni indexini arrayga solish

//1-mashq
function birnima(a, b) {
  let lite = a.split("").sort();
  let elit = b.split("").sort();
  let ali = lite.join();
  let vali = elit.join();
  console.log(ali)
  console.log(vali)
  // console.log(ali === vali);
  // return ali == vali ? true:false;
  // if (ali == vali) return true;
}

birnima("lite", "elit");

console.log("s");
// console.log(a.split().sort().join())
function birnima(a, b) {
  console.log(a.split("").sort().join() === b.split("").sort().join());
}

birnima("lite", "elit");

//2-mashq
ali("hello world");

function ali(a) {
  let vali = a.split(" ");
  console.log(vali[1].length);
}



//3-mashq
let nums = [2, 5, 1, 3, 4, 7]; // indexlar [0 1 2 3 4 5]
let n = 3;
function push(nums, n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    //i=0bosa 0<3 shart turi. nums[i] 0 indexdagi 2 ni chiqaradi [i+n]0+3 3indexni chiqaradi
    result.push(nums[i]);
    result.push(nums[i + n]);
  }
  return result;
}

console.log(push(nums, n));

//4-mashq

ali(2, 10);

function ali(a, b) {
  console.log(a ** b);
}

let add = "1.1.1.1";

function a(add) {
  console.log(add.split(".").join([]));
  console.log(add.split(".").join("[.]"));
}

a(add);

//5-mashq

let s = "Hello how are you Contestant",
  k = 4;

function str(s, k) {
  return s.split(" ").splice(0, k).join(" ");
}
console.log(str(s, k));

//6-mashq

let jewels = "aA";
let stones = "aAAbbbb";

function str(jewels, stones) {
  let jewelArrs = jewels.split("");   
  let stonesArrs = stones.split("");
  let numOfJewels = 0;

  jewelArrs.forEach((element) => {
    for (let i = 0; i < stonesArrs.length; i++)
      if (stonesArrs[i] === element) numOfJewels += 1;
  });
  return numOfJewels;
}

console.log(str(jewels, stones));

//7-mashq
let s = ["h","e","l","l","o"];

function  str(s){
  
  return s.reverse()
};

console.log(str(s));

//8-mashq
let nums=[1,2,3,4];
function number(nums){
  let array= [];
  for( let i = 0; i<nums.length; i++) {
    if(i==0){
      array.push(nums[i]);
    }else {array.push(array[i-1] + nums[i])  //array[0] +array[1]= 1+2=3
    // console.log(array[1])
    }                                       //3+3-6
  };return array;
  };
  console.log(number(nums))


  //9-mashq

  s = "codeleet", indices = [4,5,6,7,0,2,1,3]

let result='';
function vali(){
  
for(let i= 0; i<s.length; i++){
  let ali = indices.indexOf(i)
  result += s[ali]
  
}

return result
}

console.log(vali())


//10-mashq
nums = [3,2,4]
target=6;

function index(){
  for(let i=0; i<nums.length; i++){
    for(let j=0; j<nums.length; j++){
      if(i==j) continue;
      if(nums[i] + nums[j] == target) return [i,j]
    } 
  }
}
 console.log(index())


 ali(arr);

let obj={
  name:'sadf',
  nameww:'sadf'
}
console.log(obj[key])

let num='5.12';
console.log(parseFloat(num))