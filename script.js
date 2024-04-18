function mincost(arr)
{ 
//write your code here
// return the min cost
  arr.sort((a,b)=>{
	  return a-b
  })
	let min =0
	let len =0
	for(let i of arr){
		len+=i
		min+=len
	}
	return min
}

module.exports=mincost;
