const whichSchool = function(age) {
  if(age < 13) {
    return "Elementary school";
  } else if(age >= 13 && age <= 18) {
    return "Secondary school";
  } else if (age > 18) {
    return "Lighthouse Labs";
  }
}

  console.log("I am 15. Which school should I go to?");
  console.log(whichSchool(15));