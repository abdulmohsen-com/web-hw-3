// المهام -->

// <!-- المهمة الأولى -->

// <!-- .في هذه المهمة، ستقوم بإنشاء نظام توظيف 
//      .ستطرح على المستخدم بعض الأسئلة، واعتمادًا على إجاباته، ستقبل مقدم الطلب أو ترفضه -->

// <!-- :لقبول المتقدم للوظيفة يجد أن تتوفر فيه ثلاث شروط  -->














// console.log("مرحبا بك في برنامج توظيف المبرمجين")

// const languages = ["HTML","CSS", "JavaScript","PHP", "Swift", "Java"]
// const needed_language = 3;

// let name = prompt("ما اسمك؟");
// let age = parseInt(prompt("كم عمرك؟"));
// let experiance = parseInt(prompt("كم عدد سنوات الخبرة لديك؟"));
// console.log(":لغات البرمجة")
// console.log("1. " + languages[0]) 
// console.log("2. " + languages[1])
// console.log("3. " + languages[2])
// console.log("4. " + languages[3])
// console.log("5. " + languages[4])
// console.log("6. " + languages[5])
// let skill1 = prompt("اختار تتقنها من لغات البرمجة المذكورة بإدخال رقمها")
// let skill2 = prompt("اختار لغة برمجة أخرى")



// if (age > 25 && age < 40 && experiance > 3 && skill1 == needed_language ||  skill2 == needed_language)
// {
//       console.log(" تهانيا, تم قبولك يا" + name  )
//     }else{
//  console.log(" .نأسف, انت ليس رائعاً بشكل كافي لتعمل معنا")
// }

//_____________________________________________________________________________




// function logger(tempratures) {

// for (let i = 0; i < tempratures.length; i++) {
//      console.log(tempratures[i])
//  }
// };



// function toCel(tempratures) {
//     for (let i = 0; i < tempratures.length; i++) {
//         result_array.push(parseInt(tempratures - 32) * (5/9));
//     }
// return result_array
// }





// function hottestdays(tempratures, min_value) {
//   for (let i= 0; i < tempratures.length; i++) {
//      if(tempratures[i] > min_value) {
//          hot.push(tempratures[i]);
//      }
      
//   }
// return hot;
// }



// let feh_tremp_array = [32, 70, 99, 106]
// let threshold = 70
// let gt_threshold = [];
// let hot = [];
// let result_array = [];


// function logHottestDays(input_array, min_value) {
//    logger(toCel(hottestdays(input_array, min_value), result_array));
// }

// logHottestDays(feh_tremp_array, threshold)


// //______________________________________________________________________________























//____________________________________________________________________________________

// <!-- أن يكون عمره أكبر من 25 وأقل من 40 -->
// <!-- أن تكون عنده سنوات خبرة تزيد عن 3 سنوات -->
// <!-- أن تكون إحدى لغات البرمجة التي يبرمج بها المتقدم للوظيفة 
//      هي لغة البرمجة المطلوبة من قبل البرنامج -->

// <!-- قم بكتابة السطور البرمجية اللازمة 
//      qu1.mov للحصول على النتيجة الموضحة في الفيديو -->

// <!-- 🔥بونص المهمة الأولى -->
// <!-- قم ببناء واجهة تستقبل المدخلات من المستخدم عن طريق حقول إدخال 
//      وإظهار النتائج على الصفحة -->

// <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- -->

// <!-- المهمة الثانية -->

// <!-- 🌡في هذه المهمة، ستقوم ببناء مقياس درجات حرارة فاخر -->

// <!-- الخطوات -->

































// <!-- consoleقم بكتابة دالة تستقبل مصفوفة من درجات الحرارة وتقوم بطباعتها في ال -->
// <!-- classwork في ال logger() تذكر دالة -->

// <!-- قم بكتابة دالة تستقبل مصفوفة من درجات الحرارة بالفهرنهايت 
//      وترجع مصفوفة بهذه القيم محولة إلى المقياس السيليزي -->
// <!-- C = (F - 32) * (5/9) استخدم العملية -->

// <!-- قم بكتابة دالة تستقبل مصفوفة من درجات بالمقيا السيليزي وقيمة مبدئية/أولية 
//      وتقوم بإرجاع مصفوفة من درجات الحرارة الأكبر من القيمة المبدئية -->
// <!-- classwork في ال hottestDays() تذكر دالة -->

// <!-- قم بكتابة دالة تستقبل مصفوفة من درجات الحرارة وقيمة مبدئية بالفهرنهايت -->
// <!-- console وتقوم بطباعة درجات الحرارة الأكبر من القيمة المبدئية بالسيليزي في ال -->

// <!-- قم بكتابة السطور البرمجية اللازمة 
//      task22.png و task21.png للحصول على النتيجة الموضحة في الصور -->

// <!-- 🔥بونص المهمة الثانية -->
// <!-- for loop بدلاً من .forEach .filter .map قم باستخدام طرق -->

// <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- -->

// <!-- المهمة الثالثة -->

//________


















// ____________________________________________________________________

// let num = document.getElementById("input").value;

// let grade = []

// let add = []

// function  grades(input) {
//      for (let i = 0; i < num.length; i++) {
//             grade.push = num
//          add.push = grade[0] + grade[1] + grade[2] + grade[3]
//          console.log(add)
//      }
//      if (add >= 90) {
//          document.getElementById("gradenum").innerHTML = ("Your Numeric Grade Is : " + add)
//          document.getElementById("gradelt").innerHTML = ("Your Grade Is : A")
//      }ifelse (add >= 80); {
//         document.getElementById("gradenum").innerHTML = ("Your Numeric Grade Is : " + add)
//         document.getElementById("gradelt").innerHTML = ("Your Grade Is : B")
//      }ifelse (add >= 70); {
//         document.getElementById("gradenum").innerHTML = ("Your Numeric Grade Is : " + add)
//         document.getElementById("gradelt").innerHTML = ("Your Grade Is : C")
//      }ifelse (add >= 60); {
//         document.getElementById("gradenum").innerHTML = ("Your Numeric Grade Is : " + add)
//         document.getElementById("gradelt").innerHTML = ("Your Grade Is : D")
//      }ifelse (add < 60); {
//         document.getElementById("gradenum").innerHTML = ("Your Numeric Grade Is : " + add)
//         document.getElementById("gradelt").innerHTML = ("Your Grade Is : F")
//      }
//      return add;
// }




//_________________________________________________________________________


































// <!-- في هذه المهمة ستقوم بإنشاء حاسبة درجات -->

// <!-- تستقبل الآلة الحاسبة درجاتك في من خلال حقول إدخال -->
// <!-- 
//     quizes      /10
//     midterm     /25
//     final test  /50
//     oral        /15 
// -->

// <!-- تقوم الآلة الحاسبة بإجراء الحسابات اللازمة لحساب مجموع درجاتك بحيث -->
// <!-- 
//     90 - 100                 A
//     أكبر من أو يساوي 80      B
//     أكبر من أو يساوي 70      C
//     أكبر من أو يساوي 60      D
//     عدا ذلك                  F 
// -->

// <!-- ثم يظهر مجموعك النهائي على الصفحة
//      A, B, C, D or F مع درجتك بالحروف -->

// <!-- 🔥بونص المهمة الثالثة -->
// <!-- قم بجعل المستخدم يدخل درجاته دفعة 
//      وكتابة فاصلة بين كل درجة ودرجة 
//      task3 فتصبح بحاجة إلى استخدام حقل إدخال واحد فقط كما في الصورة -->

// <!-- A, B, C, D or F مميز في الصفحة لكل درجة GIF قم بإدراج -->

// <!-- HTML and CSS قم بإنشاء التصميم الخاص بك للموقع من خلال لغتي -->

// <!-- 😈لننتقل إلى المرحلة التالية -->

// <!-- انتبه المرحلة القادمة أصعب -->
// <!-- بالشكل المطلوب JavaScript إياك والتقدم إن لم تكن قد فهمت أساسيات -->

// <!-- ⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮ -->

// <!-- المهمة الرابعة -->
// <!--
//     ------------------------------------------------------------------
//     #                                                                #
//     #                                                                #                              
//     #                    هذه المهمة محجوبة حالياً                     #
//     #                إلى أن تنتهي من المهام الثلاث الأولى              #
//     #                                                                #
//     #                                                                #
//     #                                                                #
//     ------------------------------------------------------------------
// -->

// <!-- المهمة الخامسة -->
// <!--
//     ------------------------------------------------------------------
//     #                                                                #
//     #                                                                #                              
//     #                    هذه المهمة محجوبة حالياً                     #
//     #                إلى أن تنتهي من المهام الثلاث الأولى              #
//     #                                                                #
//     #                                                                #
//     #                                                                #
//     ------------------------------------------------------------------
//  -->
