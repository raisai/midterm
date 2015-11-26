function toOrdinalNumber(a){
  if(a==1){
    return a + "st";
  }else if(a==2){
    var c = a
    return c + "nd";
  }else if(a==3){
    var d = a
    return d + "rd";
  }else if(a>=4 && a<=20){
    var e =a
    return e + "th";
  }else if(a%10==1 && a>=21){
    var f =a
    return f + "st"
  }else if(a%10==2 && a>=21){
    var g=a
    return g + "nd";
  }else if(a%10==3 && a>=21){
    var h=a
    return h + "rd";
  }else{
    var i=a
    return i + "th";
  }
}
