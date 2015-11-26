function distance(a,b,c,d){
  if(a==c && b==d){
    return 0;
  }else{
    return Math.sqrt((c-a)*(c-a)+(d-b)*(d-b)) ;
  }
}
