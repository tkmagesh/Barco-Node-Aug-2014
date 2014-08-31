/*function getEngine(){
	var fns = [];
	return {
		add : function(fn){
			fns.push(fn);
		},
		run : function(){
			for(var i = fns.length-2;i>=0;i++)
				fns[i] = (function(req,res,current,next){
					return current(req,res,next)
				})(req,res, fns[i], fns[i+1]);
			return function(req,res){
				fns[0](req,res);	
			}
		}
	}
}*/

function getEngine(){
   var fns = [];
   return {
      add : function(fn){
           fns.push(fn);
      },
      run : function(){
           for(var i=fns.length-2;i>=0;i--){
                fns[i] = (function(current, next){
                     return function(){
                          var args = arguments.slice(0);
                          args.push(next);
                          current.apply(this,args);
                     }
                })(fns[i],fns[i+1])
           }
           return function(req,res){
              fns[0](req,res);
           }
       }
    }
}
