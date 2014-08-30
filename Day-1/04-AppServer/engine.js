function getEngine(){
	var fns = [];
	return {
		add : function(fn){
			fns.push(fn);
		},
		run : function(){
			return function(req,res){
				for(var i=0;i<fns.length;i++){
					if (!fns[i](req,res))
						break;
				}	
			}
		}
	}
}
module.exports = getEngine();