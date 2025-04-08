(function() {
    const hourlyRate = 5531; // Tarifa fija por hora valor hora actualizado
    let attempts = 0;
    const maxAttempts = 3;
    const validUsername = 'admin';
    const validPassword = '123';
    let isLoggedIn = false;
    
    let employees = [];

    function login() {
        while (attempts < maxAttempts && !isLoggedIn) {
            const username = prompt('Ingrese su nombre de usuario:');
            const password = prompt('Ingrese su contraseña:');
            if (username === validUsername && password === validPassword) {
                isLoggedIn = true;
                console.log('Inicio de sesión exitoso.');
            } else {
                attempts++;
                console.log(`Credenciales incorrectas. Intentos restantes: ${maxAttempts - attempts}`);
            }
        }
        if (!isLoggedIn) {
            console.log('Número máximo de intentos alcanzado. Inténtelo más tarde.');
        }
    }

    function addEmployee() {
        const name = prompt('Ingrese el nombre del empleado:');
        const hours = parseInt(prompt('Ingrese las horas trabajadas:'), 10);

        if (hours < 24) {
            alert('Ingrese un número de horas trabajadas mayor a 24');
            return;
        }

        let salary = hours * hourlyRate;
        let extraHours = 0;

        if (hours > 96) {
            extraHours = hours - 96;
            salary += extraHours * hourlyRate * 0.4;
        }

        if (salary > 3000000) {
            salary *= 0.9;
        } else if (salary < 2000000) {
            salary += 115000;
        }

        employees.push({ name, hours, hourlyRate, salary, extraHours });
        console.log(`Empleado ${name} agregado exitosamente.`);
    }

    function showSummary() {
        let totalSalary = 0;
        let countLessThan2M = 0;
        let countMoreThan3M = 0;

        let summary = 'Resumen de Nómina:\n';
        summary += 'Nombre\tHoras\tTarifa por Hora\tSalario\tHoras Extras\n';

        employees.forEach(employee => {
            totalSalary += employee.salary;
            if (employee.salary < 2000000) {
                countLessThan2M++;
            }
            if (employee.salary > 3000000) {
                countMoreThan3M++;
            }

            summary += `${employee.name}\t${employee.hours}\t${employee.hourlyRate}\t${employee.salary.toFixed(2)}\t${employee.extraHours}\n`;
        });

        const averageSalary = (employees.length === 0) ? 0 : (totalSalary / employees.length);

        summary += `\nTotal de empleados: ${employees.length}`;
        summary += `\nPromedio salarial: ${averageSalary.toFixed(2)}`;
        summary += `\nEmpleados que ganan menos de 2 millones: ${countLessThan2M}`;
        summary += `\nEmpleados que ganan más de 3 millones: ${countMoreThan3M}`;

        console.log(summary);
    }

    function menu() {
        let option;
        do {
            option = prompt(`Seleccione una opción:
1. Agregar empleado
2. Mostrar resumen
3. Cerrar`);
            switch (option) {
                case '1':
                    addEmployee();
                    break;
                case '2':
                    showSummary();
                    break;
                case '3':
                    console.log('Cerrando la aplicación.');
                    break;
                default:
                    console.log('Opción no válida.');
            }
        } while (option !== '3');
    }

    login();
    if (isLoggedIn) {
        menu();
    }
})();
