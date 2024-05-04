function sumMajorCredits(subject1, subject2) {
    var totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, _majorBrand: undefined };
}
function sumMinorCredits(subject1, subject2) {
    var totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, _minorBrand: undefined };
}
//# sourceMappingURL=main.js.map