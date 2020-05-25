
// As the css position of the div-node is set at the top left of the div, the max number 
// for x and y needs to be subtracted by the nodes radius*2 and the nodes border*2

const getRandomXinDisplayBounds = (boundsX:number, boundsW:number, nodeRadius:number, nodeBorder:number) => {
	return getRandomInt(boundsX, boundsX + boundsW - nodeRadius*2 - nodeBorder*2);
}

const getRandomYinDisplayBounds = (boundsY:number, boundsH:number, nodeRadius:number, nodeBorder:number) => {
	return getRandomInt(boundsY, boundsY + boundsH - nodeRadius*2 - nodeBorder*2);
}


// Generates a random integer within the min and max boundaries
const getRandomInt = (minimum:number, maximum:number) => {
	let min = Math.ceil(minimum);
	let max = Math.floor(maximum);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomXinDisplayBounds, getRandomYinDisplayBounds }
