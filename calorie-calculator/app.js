function inputCaloriesByDay(day) {
  if (day === 'Monday') {
    return 3500;
    }
  if (day === 'Tuesday') {
    return 2500;
    }
  if (day === 'Wednesday') {
    return 1500;
    }
  if (day === 'Thursday') {
    return 2300;
    }
  if (day === 'Friday') {
    return 3300;
    }
  if (day === 'Saturday') {
    return 2500;
    }
  if (day === 'Sunday') {
    return 1200;
    }
  else {
    return 'Please choose valid day';
    }
}

//console.log(inputCaloriesByDay('Monday');
//console.log(inputCaloriesByDay('Tuesday');


function getTotalCalories() {
  return inputCaloriesByDay("Monday") + inputCaloriesByDay("Tuesday") + inputCaloriesByDay("Wednesday") + inputCaloriesByDay("Thursday") + inputCaloriesByDay("Friday") + inputCaloriesByDay("Saturday") + inputCaloriesByDay("Sunday");
}

function getIdealCalories() {
  var idealDailyCalories = 2000;
  return idealDailyCalories * 7
}


function calculateHealthPlan() {
  var actualCalories = getTotalCalories();
  var idealCalories = getIdealCalories();
  if (actualCalories === idealCalories) {
    return "You ate just the right amount of food!"
  }
  if (actualCalories > idealCalories) {
    return "Time to head to the gym!"
  }
  else {
    return "Time for seconds!"
  }
}

console.log(calculateHealthPlan());
