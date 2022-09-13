var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  if (s.length < 2) return s.length;
  let longestString = s[0];
  let currentString = s[0];
  for (let i = 0; i < s.length; i++) {
    let index = currentString.indexOf(s[i]);
    if (index > -1){
      if(currentString.length > longestString.length){
        longestString = currentString;

      }
      currentString = currentString.substring(index+1,currentString.length) + s[i];

    }else{
      currentString += s[i];
    }
    
  }
  if(currentString.length > longestString.length){
    longestString = currentString;

  }
  return longestString.length;

  };