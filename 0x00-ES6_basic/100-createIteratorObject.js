export default function* createIteratorObject(report) {
  if (report && report.allEmployees) {
    for (const department in report.allEmployees) {
      if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
        const employeeList = report.allEmployees[department];
        if (Array.isArray(employeeList)) {
          for (const employee of employeeList) {
            yield employee;
          }
        }
      }
    }
  }
}
