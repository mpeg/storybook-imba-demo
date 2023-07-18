tag my-counter
	attr count = 0
	attr color
	attr background-color

	<self[fs:1rem c:{color} bgc:{background-color} d:flex]>
		<h1[p:1rem]> count
		<button[bd:0 bgc:transparent o:0.5 o@hover:1 fs:2rem cursor:pointer] @click=(count++)> "+"

tag my-button < button
	attr variant = "primary"
	attr color
	attr background-color

	<self
		[c:{color} bgc:{background-color} fs:1.2rem ff:mono cursor:pointer p:8px rd:8px]
		[c:{color || 'white'} bgc:{background-color || 'darkviolet'} bd:2px solid rebeccapurple]=(variant === "primary")
		>
		<slot>