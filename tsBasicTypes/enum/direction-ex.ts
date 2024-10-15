/**
 * Direction
 * 
 * Reference:
 * 	- https://juejin.cn/post/7168843998331666446
 */
{
	// 數字
	enum Direction {
		NORTH, // 0
		SOUTH, // 1
		EAST, // 2
		WEST, // 3
	}

	let d: Direction = Direction.NORTH;
	console.log(d); // 0

	// 字串 string
	enum StandardDirection {
		NORTH = 'NORTH',
		SOUTH = "SOUTH",
		EAST = "EAST",
		WEST = "WEST",
	}

	let sd: StandardDirection = StandardDirection.EAST;
	console.log(sd); // EAST
}


{
	// 混合 "數字" 和 "字串string"
	enum Direction {
		NORTH, // 0
		SOUTH, // 1
		EAST = "EAST",
		WEST = "WEST",		
	}

	console.log(Direction[0]); // NORTH
	console.log(Direction[1]); // SOUTH
	console.log(Direction[2]); // undefined
	console.log(Direction[10]); // undefined
	console.log(Direction.EAST); // EAST
	console.log(Direction.WEST); // WEST
}