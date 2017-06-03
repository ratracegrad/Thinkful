
var info = [];


for (var i = 0; i <= 4; i++) {
	info.push(i); // add to the end of the array
	console.log(info)
}
console.log(info);

for (var i = 0; i <= 4; i++) {
	info.pop(i); // removes from the end of the array
}
console.log(info);


for (var i = 0; i <= 4; i++) {
	info.unshift(i); // add to the beginning of the array
	console.log(info);
}
console.log(info);

for (var i = 0; i <= 4; i++) {
	info.shift(i); // removes from the beginning of the array
}
console.log(info);


for (var i = 0; i <= 4; i++) {
	info.push(i); // add to the end of the array
}

// console.log(info);

info.forEach(function(item) {
	console.log(item);
});

// forEach is equivalent to a for loop
for (var i = 0; i < info.length; i++) {
	console.log(info[i]);
}


// For Review


push // add to end of array
pop // remove from end of array
unshift // add to beginning of array
shift // remove from beginning of array
array.forEach(function(item) {
	console.log(item);
}) // loops through all items in an array
