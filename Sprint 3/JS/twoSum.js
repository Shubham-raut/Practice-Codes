var twoSum = function(nums, target) {
    
  let i=0,check=[];
  while(i<nums.length){
    console.log(i,nums[i]);
    rem=target-nums[i];
    console.log(i,rem);
    console.log(check);
    if(check.includes(nums[i])){
        console.log(i,nums.indexOf(rem));
        //return [i,nums.indexOf(rem)];
    }
    check.push(rem);
    i+=1;
    console.log("end");
  }
};

twoSum([2,7,11,15],9);