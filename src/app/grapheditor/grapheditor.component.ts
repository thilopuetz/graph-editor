import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { Type } from '@angular/compiler';
import { CdkDragMove, CdkDrag } from '@angular/cdk/drag-drop';

import { Node } from '../models/Node';
import { getRandomXinDisplayBounds, getRandomYinDisplayBounds } from '../utilities/node-functions';
import { calcEdgeLength, calcEdgeCenterX, calcEdgeCenterY, calcEdgeAngle } from '../utilities/edge-functions';

@Component({
  selector: 'app-grapheditor',
  templateUrl: './grapheditor.component.html',
  styleUrls: ['./grapheditor.component.css']
})
export class GrapheditorComponent implements OnInit {

	index1:number;
	index2:number;
	showIds:boolean;
	nodeClicked:boolean;
	nodes:Node[] = [];
  	edges:Array<Node>[] = [];
  	displayBounds;
  	radius:number = 25;
  	border:number = 2;
  	message:string;

  	constructor(private renderer: Renderer2, private el: ElementRef) { }

  	ngOnInit(): void {
  		let div = document.getElementById('graph-display');
    	this.displayBounds = div.getBoundingClientRect();
    	this.showIds = true;
  	}

  	toggleId() : void {
    	if(this.showIds){
    		this.showIds = false;
    	} else {
    		this.showIds = true;
    	}
  	}  

  	newNode() : void {
  		// A new node is created such that its position gets randomly defined within the displayBounds
  		let x = getRandomXinDisplayBounds(this.displayBounds.x, this.displayBounds.width, this.radius, this.border);
	  	let y = getRandomYinDisplayBounds(this.displayBounds.y, this.displayBounds.height, this.radius, this.border);
	  	let new_node = new Node(this.nodes.length+1, x, y, this.radius, this.border);
    	this.nodes.push(new_node);
  	}

  	newEdge(index1, index2) : void {
  		let node1;
    	let node2;

    	//Checks if node at the given index exists
    	if(this.nodes[index1-1]){
       		node1 = this.nodes[index1-1];
    	} else {
      		this.message = `Node ${index1} doesn't exists.`;
    	}

    	//Checks if node at the given index exists
    	if(this.nodes[index2-1]){
       		node2 = this.nodes[index2-1];
    	} else {
      		this.message = `Node ${index2} doesn't exists.`;
    	}

    	if(node1 === node2){
    		this.message = `You can't set an edge of a node to the node itself.`
    	}

    	//If both nodes exists it is checked if the edge between them already exists
    	if(node1 && node2 && node1 !== node2){
      		let edgeExists = this.checkIfEdgeExists(node1, node2);

      		//If not a new edge is created, otherwise a message is printed
      		if(!edgeExists){
        		this.edges.push(new Array<Node>(node1, node2));
        		//node1.setEdgeTo(node2.getId());
      		} else {
        		this.message = `The Edge between node ${node1.getId()} and node ${node2.getId()} already exists.`;
      		}
    	}
  	}

  	checkIfEdgeExists = (node1, node2) => {
    	for(let i=0; i<this.edges.length; i++){
      		let edge = this.edges[i];
      		if(edge[0]===node1 && edge[1]===node2){
        		return true; 
      		} else if(edge[0]===node2 && edge[1]===node1){
        		return true;
      		}
    	}
    	return false;
  	}

  	mouseDown(event, node){
  		let mousemove = this.renderer.listen('document', 'mousemove', (e) => {
			node.setX(e.clientX - node.getRadius() - node.getBorder());
  			node.setY(e.clientY - node.getRadius() - node.getBorder());
		});
		let mouseup = this.renderer.listen('document', 'mouseup', (evt) => {
		  	mousemove();
		})
  	}

  	clearMessage(){
  		this.message = '';
  	}

  	length(n1, n2){
    return Math.round(calcEdgeLength(n1, n2));
  	}

  	centerX(n1, n2){
    	return Math.round(calcEdgeCenterX(n1, n2));
  	}

  	centerY(n1, n2){
    	return Math.round(calcEdgeCenterY(n1, n2));
  	}

  	angle(n1, n2){
    	return Math.round(calcEdgeAngle(n1, n2));
  	}

}
