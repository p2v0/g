//BMR
function calculateCalories() {
    var gender = document.getElementById('gender').value;
    var age = parseInt(document.getElementById('age').value);
    var weight = parseInt(document.getElementById('weight').value);
    var height = parseInt(document.getElementById('height').value);
    var activityLevel = parseFloat(document.getElementById('activity-level').value);

    var bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * age - 161;
}
var calories = bmr * activityLevel;


document.getElementById('result').innerHTML = 'السعرات الحرارية اليومية الموصى بها: ' + calories.toFixed(2)+ 
'اذا كنت تريد زيادة الوزن اضف علي هذه النسبة مابين 200 الي 1000 سعرة .. اذا كنت تريد انقاص الوزن اطرح من القيمة من 200 الي 1000 سعرة ';
};



//BMI
function calculateBMI() {
    var weight = parseFloat(document.getElementById('w').value);
    var height = parseFloat(document.getElementById('h').value);

    if (weight && height) {
      var bmi = weight / (height * height);
      var bmiCategory;

      if (bmi < 18.5) {
        bmiCategory = 'الوزن ناقص';
      } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory = 'وزن طبيعي';
      } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = 'زيادة طفيفة في الوزن';
      } else if (bmi >= 30) {
        bmiCategory = 'زيادة في الوزن';
      }

      document.getElementById('res').innerHTML = 'مؤشر كتلة الجسم (BMI): ' + bmi.toFixed(2) + '<br>' + 'التصنيف: ' + bmiCategory; 
        } else {
      document.getElementById('res').innerHTML = 'يرجى إدخال قيم صحيحة للوزن والطول.';
    }
  }




// البروتين
document.getElementById('proteinCalc').addEventListener('submit', function(e) {
    e.preventDefault();
    var weight = document.getElementById('weight2').value;
    var activity = document.getElementById('activity2').value;
    var gender = document.getElementById('gender2').value;
    var min_protein;
    var max_protein;
    if(gender === 'male'){
    if (activity === 'yes') {
        min_protein = weight * 1.6;
        max_protein = weight * 2.2;
    } else {
        min_protein = weight * 0.9;
        max_protein = weight * 1.3;
    }
}
    if (gender === 'female') {
        if (activity === 'yes') {
        min_protein = weight * 0.8;
        max_protein = weight * 1.3;
    } else {
        min_protein = weight *0.6;
        max_protein = weight * 1;
    }
    }
    document.getElementById('result2').innerText = ' الحد الادني هو ' + min_protein.toFixed(2) +' و الحد الاقصي هو '+ max_protein.toFixed(2)+' غرام من البروتين يوميا. ' +' ملحوظة * اذا كنت في فترة تنشيف يجب الا تقل عن الحد الاقصي ';
});


// الكارب
document.getElementById('carbCalc').addEventListener('submit', function(e) {
    e.preventDefault();
    var cal = document.getElementById('cal').value;
    var activity = document.getElementById('activity3').value;
    var gender = document.getElementById('gender3').value;
    var min_carb;
    var max_carb;
    if(gender === 'male'){
    if (activity === 'yes') {
       min_carb = (cal / 2) / 5.5;
        max_carb =(cal / 2) / 4;
    } else {
        min_carb = (cal / 2) / 7.5;
        max_carb =(cal / 2) / 5;
    }
}
    if (gender === 'female') {
        if (activity === 'yes') {
            min_carb = (cal / 2) / 12;
            max_carb =(cal / 2) / 10;
    } else {
        min_carb = (cal / 2) / 13;
        max_carb =(cal / 2) / 11;
    }
    }
    document.getElementById('result3').innerText = ' الحد الادني هو ' + min_carb.toFixed(2) +' و الحد الاقصي هو '+ max_carb.toFixed(2)+' غرام من الكاربوهيدرات يوميا.  ';
});

// fat
document.getElementById('fatCalc').addEventListener('submit', function(e) {
    e.preventDefault();
    var cal = document.getElementById('cal1').value;
    var activity = document.getElementById('activity4').value;
    var gender = document.getElementById('gender4').value;
    var min_fat;
    var max_fat;
    if(gender === 'male'){
    if (activity === 'yes') {
       min_fat = (cal*0.07) / 8;
       max_fat =(cal * 0.1) / 8;
    } else {
        min_fat = (cal * 0.05) / 8;
        max_fat=(cal * 0.07) / 8;
    }
}
    if (gender === 'female') {
        if (activity === 'yes') {
            min_carb = (cal * 0.11) / 8;
            max_carb =(cal * 0.13) / 8;
    } else {
        min_fat = (cal * 0.07) / 8;
        max_fat =(cal / 0.1) / 8;
    }
    }
    document.getElementById('result4').innerText = ' الحد الادني هو ' + min_fat.toFixed(2) +' و الحد الاقصي هو '+ max_fat.toFixed(2)+' غرام من الدهون الصحية يوميا.  ';
});

//زرار الاسكرول 
// عندما يتم التمرير بمقدار 20px من الأعلى، يظهر الزر

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop >100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myBtn").style.display = "block";
    
  } else {
    document.getElementById("myBtn").style.display = "none";
    
  }
}

// عند النقر على الزر، يتم التمرير إلى الأعلى من الصفحة
function topFunction() {
    scroll({
        top:0,
        left:0,
        behavior:"smooth",
    })
  
}