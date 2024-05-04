interface MajorCredits {
  credits: number;
  _majorBrand: void; // Adding a unique brand to differentiate from MinorCredits
}

interface MinorCredits {
  credits: number;
  _minorBrand: void; // Adding a unique brand to differentiate from MajorCredits
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, _majorBrand: undefined };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, _minorBrand: undefined };
}
