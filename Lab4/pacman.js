pacman = {
		x: 6,
		y: 3
	}
	ghost1 = {
		x: 1,
		y: 5,
		atribute: 4
	}
	ghost2 = {
		x: 11,
		y: 1,
		atribute: 6
	}
	Count = 52;

	map = [ 
		[1,1,1,1,1,1,1,1,1,1,1,1,1], 
		[1,2,2,2,2,2,2,2,2,2,2,6,1], 
		[1,2,2,1,1,1,1,1,1,1,2,1,1], 
		[1,1,2,2,2,1,5,2,2,1,2,2,1], 
		[1,2,1,1,2,1,2,2,2,1,2,1,1], 
		[1,4,2,1,1,1,2,2,2,1,2,2,1], 
		[1,2,2,2,2,2,2,1,1,1,2,1,1], 
		[1,2,2,1,2,1,2,2,2,2,2,2,1], 
		[1,1,1,1,1,1,1,1,1,1,1,1,1]
	]

	var el = document.getElementById('world');
	
	function drawWorld(){
		el.innerHTML = '';
		for(var y = 0; y < map.length ; y = y + 1) {
			for(var x = 0; x < map[y].length ; x = x + 1) {		
				if (map[y][x] === 1) {
					el.innerHTML += "<div class='wall'></div>";
				}
				else if (map[y][x] === 2) {
					el.innerHTML += "<div class='coin'></div>";
				}
				else if (map[y][x] === 3) {
					el.innerHTML += "<div class='ground'></div>";
				}
				else if (map[y][x] === 4) {
					el.innerHTML += "<div class='ghost1'></div>";
				}
				else if (map[y][x] === 5) {
					el.innerHTML += "<div class='pacman'></div>";
				}
				else if (map[y][x] === 6){
					el.innerHTML += "<div class='ghost2'></div>";
				}
	
			}
			el.innerHTML += "<br>";
		}
	}

	drawWorld();

	function random(){
		var numPool = [ 1, 2, 3, 4 ],
		rand = numPool[Math.floor(Math.random() * numPool.length)];
		return rand;
	}
	//1-left
	//2-right
	//3-up
	//4-down

	function ghostMoving(ghost){
		if (random() === 1 && map[ghost.y][ghost.x-1] !== 1 && map[ghost.y][ghost.x-1] !== 4 && map[ghost.y][ghost.x-1] !== 6){
					if(map[ghost.y][ghost.x-1] === 5){
						ghost.x = ghost.x - 1;
						map[ghost.y][ghost.x] = ghost.atribute;
						drawWorld();
						GameCondition = confirm("Game Over!");
						if (GameCondition == true || GameCondition == false){
							location.reload()
						}
					}
					if(map[ghost.y][ghost.x-1] === 2){
						map[ghost.y][ghost.x] = 2;
					}
					else{
						map[ghost.y][ghost.x] = 3;
					}
					ghost.x = ghost.x - 1;
					map[ghost.y][ghost.x] = ghost.atribute;
					drawWorld();
		}
		if (random() === 2 && map[ghost.y][ghost.x+1] !== 1 && map[ghost.y][ghost.x+1] !== 4 && map[ghost.y][ghost.x+1] !== 6){
					if(map[ghost.y][ghost.x+1] === 5){
						ghost.x = ghost.x + 1;
						map[ghost.y][ghost.x] = ghost.atribute;
						drawWorld();
						GameCondition = confirm("Game Over!");
						if (GameCondition == true || GameCondition == false){
							location.reload()
						}
					}
					if(map[ghost.y][ghost.x+1] === 2){
						map[ghost.y][ghost.x] = 2;
					}
					else{
						map[ghost.y][ghost.x] = 3;
					}
					ghost.x = ghost.x + 1;
					map[ghost.y][ghost.x] = ghost.atribute;
					drawWorld();
		}
		if (random() === 3 && map[ghost.y-1][ghost.x] !== 1 && map[ghost.y-1][ghost.x] !== 4 && map[ghost.y-1][ghost.x] !== 6){
					if(map[ghost.y-1][ghost.x] === 5){
						ghost.y = ghost.y - 1;
						map[ghost.y][ghost.x] = ghost.atribute;
						drawWorld();
						GameCondition = confirm("Game Over!");
						if (GameCondition == true || GameCondition == false){
							location.reload()
						}
					}
					if(map[ghost.y-1][ghost.x] === 2){
						map[ghost.y][ghost.x] = 2;
					}
					else{
						map[ghost.y][ghost.x] = 3;
					}
					ghost.y = ghost.y - 1;
					map[ghost.y][ghost.x] = ghost.atribute;
					drawWorld();

		}
		if (random() === 4 && map[ghost.y+1][ghost.x] !== 1 && map[ghost.y+1][ghost.x] !== 4 && map[ghost.y+1][ghost.x] !== 6){
					if(map[ghost.y+1][ghost.x] === 5){
						ghost.y = ghost.y + 1;
						map[ghost.y][ghost.x] = ghost.atribute;
						drawWorld();
						GameCondition = confirm("Game Over!");
						if (GameCondition == true || GameCondition == false){
							location.reload()
						}
					}
					if(map[ghost.y+1][ghost.x] === 2){
						map[ghost.y][ghost.x] = 2;
					}
					else{
						map[ghost.y][ghost.x] = 3;
					}
					ghost.y = ghost.y + 1;
					map[ghost.y][ghost.x] = ghost.atribute;
					drawWorld();
		}
	}

	function gameWin(Count){
		if (Count === 0){
			GameCondition = confirm("You Win!")
			if (GameCondition == true || GameCondition == false){
					location.reload()
				}
		}
	}

	let firstMoving = setInterval(ghostMoving, 350, ghost1);
	let secondMoving = setInterval(ghostMoving, 350, ghost2);

	document.onkeydown = function(event){
		// console.log(event);
		if (event.keyCode === 37){ // PACMAN MOVE LEFT

			if ( map[pacman.y][pacman.x-1] !== 1 &&  map[pacman.y][pacman.x-1] !== 4 && map[pacman.y][pacman.x-1] !== 6){

				if (map[pacman.y][pacman.x-1] === 2){
					Count--;
					gameWin(Count);
				}
				map[pacman.y][pacman.x] = 3;
				pacman.x = pacman.x - 1;
				map[pacman.y][pacman.x] = 5;
				drawWorld();
				// ghostMoving(ghost1);
				// ghostMoving(ghost2);

			}
			else if (map[pacman.y][pacman.x-1] == 4 || map[pacman.y][pacman.x-1] == 6){

				map[pacman.y][pacman.x] = 3;
				pacman.x = pacman.x - 1;
				map[pacman.y][pacman.x] = 5;
				drawWorld();	
				GameCondition = confirm("Game Over!");
				clearInterval(firstMoving);
				clearInterval(secondMoving);

				if (GameCondition == true || GameCondition == false){
					location.reload()
				}

			}
		}
		else if (event.keyCode === 38){ // PACMAN MOVE UP
			
			if ( map[pacman.y-1][pacman.x] !== 1 && map[pacman.y-1][pacman.x] !== 4 && map[pacman.y-1][pacman.x] !== 6){
				
				if (map[pacman.y-1][pacman.x] === 2){
					Count--;
					gameWin(Count);
				}
				map[pacman.y][pacman.x] = 3;
				pacman.y = pacman.y - 1;
				map[pacman.y][pacman.x] = 5;
				drawWorld();
				// ghostMoving(ghost1);
				// ghostMoving(ghost2);

			}

			else if (map[pacman.y-1][pacman.x] == 4 || map[pacman.y-1][pacman.x] == 6){
				
				map[pacman.y][pacman.x] = 3;
				pacman.y = pacman.y - 1;
				map[pacman.y][pacman.x] = 5;
				drawWorld();
				GameCondition = confirm("Game Over!");
				clearInterval(firstMoving);
				clearInterval(secondMoving);
				
				if (GameCondition == true || GameCondition == false){
					location.reload()
				}

			}
		}
		else if (event.keyCode === 39){ // PACMAN MOVE RIGHT
			
			if ( map[pacman.y][pacman.x+1] !== 1 && map[pacman.y][pacman.x+1] !== 4 && map[pacman.y][pacman.x+1] !== 6){
				
				if (map[pacman.y][pacman.x+1] === 2){
					Count--;
					gameWin(Count);
				}
				map[pacman.y][pacman.x] = 3;
				pacman.x = pacman.x + 1;
				map[pacman.y][pacman.x] = 5;
				drawWorld();
				// ghostMoving(ghost1);
				// ghostMoving(ghost2);

			}

			else if (map[pacman.y][pacman.x+1] == 4 || map[pacman.y][pacman.x+1] == 6){
				
				map[pacman.y][pacman.x] = 3;
				pacman.x = pacman.x + 1;
				map[pacman.y][pacman.x] = 5;
				drawWorld();
				GameCondition = confirm("Game Over!");
				clearInterval(firstMoving);
				clearInterval(secondMoving);
				if (GameCondition == true || GameCondition == false){
					location.reload()
				}

			}
		}
		else if (event.keyCode === 40){ // PACMAN MOVE DOWN
			
			if ( map[pacman.y+1][pacman.x] !== 1 && map[pacman.y+1][pacman.x] !== 4 && map[pacman.y+1][pacman.x] !== 6){
				if (map[pacman.y+1][pacman.x] === 2){
					Count--;
					gameWin(Count);
				}
				map[pacman.y][pacman.x] = 3;
				pacman.y = pacman.y + 1;
				map[pacman.y][pacman.x] = 5;
				drawWorld();
				// ghostMoving(ghost1);
				// ghostMoving(ghost2);

			}

			else if (map[pacman.y+1][pacman.x] == 4 || map[pacman.y+1][pacman.x] == 6){
				
				map[pacman.y][pacman.x] = 3;
				pacman.y = pacman.y + 1;
				map[pacman.y][pacman.x] = 5;
				drawWorld();
				GameCondition = confirm("Game Over!");
				clearInterval(firstMoving);
				clearInterval(secondMoving);
				if (GameCondition == true || GameCondition == false){
					location.reload()
				}

			}
		}
		console.log(map)
	}



	