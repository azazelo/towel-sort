
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ( (typeof matrix==="undefined" )|| (matrix.length===0 ) ){
        return []
      }
    else {
    const arr=matrix.map(function(name){
        if(Array.isArray(name) && (matrix.indexOf(name)+1)%2===0){
            name.sort(function(a,b){return b-a})
            return name.join()
        }
        else if(Array.isArray(name) && (matrix.indexOf(name)+1)%2!==0){
          return name.join()
        }
        return name
        });
        const tin=arr.join(',');
      const er=tin.split(',');
    return er;
      }

  }

