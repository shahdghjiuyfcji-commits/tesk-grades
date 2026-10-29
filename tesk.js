// 1. مصفوفة افتراضية تمثل درجات الطلاب
const grades = [35, 42, 48, 55, 60, 40, 49, 30, 46, 50, 43, 38, 47, 52, 41, 33, 45, 58, 39, 44];

// 2. استخدام filter لاستخراج الطلاب الذين تتراوح درجاتهم من 40 إلى 49
const strugglingStudents = grades.filter(grade => grade >= 40 && grade <= 49);

// 3. استخدام map لإضافة 5 درجات لكل طالب تم استخراجه
const upgradedGrades = strugglingStudents.map(grade => grade + 5);

// 4. استخدام reduce لجمع الدرجات الجديدة
const totalGrades = upgradedGrades.reduce((sum, grade) => sum + grade, 0);

// 5. كتابة كود حساب المتوسط مع تفعيل "درع الحماية" لتجنب القسمة على صفر
let average = 0;
if (upgradedGrades.length > 0) {
    average = totalGrades / upgradedGrades.length;
} else {
    average = 0; // حماية ضد القسمة على صفر في حال عدم وجود طلاب متعثرين
}

// طباعة النتايج للتأكد
console.log("الدرجات بعد الرأفة:", upgradedGrades);
console.log("المتوسط الحسابي:", average);