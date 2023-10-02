const Filterfun = (array,blan)=>{

    let result =[]
    for(let i=0;i<array.length;i++)
      if(blan(array[i])){
        result.push(array[i])
      }
    return result
  }
 
export default Filterfun;