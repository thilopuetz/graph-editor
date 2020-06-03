export class Node{
  
  id:number;
  xPos:number; 
  yPos:number;
  radius:number;
  border:number;

  constructor(id:number, x:number, y:number, r:number, b:number){
    this.id = id;
    this.xPos = x;
    this.yPos = y;
    this.radius = r;
    this.border = b;
  }

  getId = () => this.id;
	getX = () => this.xPos;
	getY = () => this.yPos;
	getRadius = () => this.radius;
	getBorder = () => this.border; 

	getNodeCenterX = () => { 
    return this.xPos + this.radius;
  }

	getNodeCenterY = () => {
    return this.yPos + this.radius;
  }

	setX = xPos => {
		this.xPos = xPos;
	}

	setY = yPos => {
		this.yPos = yPos;
	}

	setRadius = radius => {
		this.radius = radius;
	}

}