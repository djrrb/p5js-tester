// drawing a regular rect in p5
let x = 20, y = 20, w = 100, h = 100
rect(x, y, w, h)

// creating a body in matter.js
// *center* the x and y values.
let body = Bodies.rectangle(
	x + w/2,
	y + h/2,
	w,
	h
)

// drawing the body with p5
// no adjustment needed *i think*
let pos = body.position

push()
translate(pos.x, pos.y)
rotate(body.angle)
rect(0, 0, w, h)
