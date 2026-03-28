const _student = {
	fname: "Ritesh",
	lname: "Deshmukh",
	age: 18,
};

const student = new Proxy(_student, {
	get(target, prop) {
		if (!(prop in target)) throw new Error(`${prop} does not exits!`);
		return target[prop];
	},
	set(target, prop, newValue) {
		if (!(prop in target)) throw new Error(`${prop} does not exits!`);
		switch (prop) {
			case "fname":
			case "lname":
				if (typeof newValue !== "string")
					throw new Error(`${prop} must be a string.`);
				break;
			case "age":
				if (typeof newValue !== "number")
					throw new Error(`${prop} must be a number.`);
				if (newValue <= 0) throw new Error(`${prop} must be positive.`);
				break;
		}
		target[prop] = newValue;
		return true;
	},
});

console.log(student.fname);
student.fname = "Kalyan";
console.log(student.fname);
