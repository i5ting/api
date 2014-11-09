function isDefined(x) { 
	return x !== null && x !== undefined; 
} 

Array.prototype.contain = function(obj) {
  return this.indexOf(obj) !== -1;
}
