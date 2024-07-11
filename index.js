function receivesAFunction(customfunction){
    customfunction()
}
function returnsANamedFunction(){
    const namedFunc= ()=>{
        return 'just text'
    }
    return namedFunc
}
function returnsAnAnonymousFunction(){
    return () => "some other text";
  };