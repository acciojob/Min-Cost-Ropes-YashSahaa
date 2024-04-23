function mincost(arr)
{ 
//write your code here
// return the min cost
	let min = 0
	while(arr.length>1){
		arr.sort((a,b)=>{
			return b-a
		})
		let first = arr.pop()
		let sec = arr.pop()
		min+=first+sec
		arr.push(first+sec)
	}
	return min
}

module.exports=mincost;
