document.getElementById('cgpaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const cgpa = parseFloat(document.getElementById('cgpaInput').value);
    const bmeGrade = document.getElementById('bmeGradeInput').value;
    const wsnGrade = document.getElementById('wsnGradeInput').value;
    const mainProjectGrade = document.getElementById('mainProjectGradeInput').value;
  
    const gradeValues = { 'o': 10, 's': 9, 'a': 8, 'b': 7, 'c': 6, 'd': 5 };
    const bmeValue = gradeValues[bmeGrade.toLowerCase()];
    const wsnValue = gradeValues[wsnGrade.toLowerCase()];
    const mainProjectValue = gradeValues[mainProjectGrade.toLowerCase()];
  
    const k = (bmeValue * 3) + (wsnValue * 3) + (mainProjectValue * 7);
    const m = Math.round(k / 13 * 100) / 100;
    const sum = (cgpa * 147) + (13 * m);
    const ans = Math.round((sum / 160) * 100) / 100;
  
    document.getElementById('result').textContent = "Your CGPA is: " + ans;
  });
  