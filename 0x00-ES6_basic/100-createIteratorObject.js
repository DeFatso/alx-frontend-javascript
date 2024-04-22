export default function* createIteratorObject(report) {
    if (report && report.allEmployees) {
        for (const department in report.allEmployees) {
            if (report.allEmployees.hasOwnProperty(department)) {
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
