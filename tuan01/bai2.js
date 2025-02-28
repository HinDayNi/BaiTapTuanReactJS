var Mark = { chieuCao: 1.69, canNang: 78 };
var John = { chieuCao: 1.95, canNang: 92 };

var tinhBMI = function(chieuCao, canNang) {
    return canNang / (chieuCao * chieuCao);
}

var bmiMark1 = tinhBMI(Mark.chieuCao, Mark.canNang);
var bmiJohn1 = tinhBMI(John.chieuCao, John.canNang);

if (bmiMark1 > bmiJohn1) {
    console.log(`BMI của Mark (${bmiMark1}) cao hơn BMI của John (${bmiJohn1})!`);
} else {
    console.log(`BMI của John (${bmiJohn1}) cao hơn BMI của Mark (${bmiMark1})!`);
}

// Dữ liệu 2
Mark = { chieuCao: 1.88, canNang: 95 };
John = { chieuCao: 1.76, canNang: 85 };

var bmiMark2 = tinhBMI(Mark.chieuCao, Mark.canNang);
var bmiJohn2 = tinhBMI(John.chieuCao, John.canNang);

if (bmiMark2 > bmiJohn2) {
    console.log(`BMI của Mark (${bmiMark2}) cao hơn BMI của John (${bmiJohn2})!`);
} else {
    console.log(`BMI của John (${bmiJohn2}) cao hơn BMI của Mark (${bmiMark2})!`);
}