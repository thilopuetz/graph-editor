const calcEdgeLength = (n1, n2) => {
	let n1_x = n1.getNodeCenterX();
	let n1_y = n1.getNodeCenterY();
	let n2_x = n2.getNodeCenterX();
	let n2_y = n2.getNodeCenterY();
	let n1_r = n1.getRadius();
	let n1_b = n1.getBorder();

  	//Euclidean distance of the node centers minus the radius
	return Math.sqrt(((n1_x - n2_x) * (n1_x - n2_x)) + ((n1_y - n2_y) * (n1_y - n2_y))) - 2*n1_r;
}

const calcEdgeCenterX = (n1, n2) => {
	let n1_x = n1.getNodeCenterX();
	let n2_x = n2.getNodeCenterX();
	let length = calcEdgeLength(n1, n2);

	//Calculates the center of the x dimension between two points. The length/2 is subtracted because of a shift by calculating the angle
	return ((n1_x + n2_x) / 2) - (length/2);
}

const calcEdgeCenterY = (n1, n2) => {
	let n1_y = n1.getNodeCenterY();
	let n2_y = n2.getNodeCenterY();
	let length = calcEdgeLength(n1, n2);

	//Calculates the center of the y dimension between two points.
	return ((n1_y + n2_y) / 2);
}

const calcEdgeAngle = (n1, n2) => {
	let n1_x = n1.getNodeCenterX();
	let n1_y = n1.getNodeCenterY();
	let n2_x = n2.getNodeCenterX();
	let n2_y = n2.getNodeCenterY();

	// Calculates the angle between two points. 
	return Math.atan2((n1_y - n2_y), (n1_x - n2_x)) * (180 / Math.PI);
}

export { calcEdgeLength, calcEdgeCenterX, calcEdgeCenterY, calcEdgeAngle }
