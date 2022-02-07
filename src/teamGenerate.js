const generateTeam = team => {

    const generateManager = manager => {
        return `
            <div class="card employee-card">
                <div class="card-header bg-primary text-white"
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title">${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="TBDNAME:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
            `;
    };


    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title">${engineer.getRole()}</h3>
            </div> 
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="TBDNAME:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://Github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `
    }

    const generateIntern = intern => {
        return `
        <div class="card employee-card">
        <div class="text-white bg-primary card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title">${intern.getRole()}</h3>
        </div> 
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="TBDNAME:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );

    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );

    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    )
    return html.join("")
};

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mb-3 team-heading bg-danger jumbotron">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="d-flex row col-12 jsutify-content-center team-area">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
        
    </body>
    </html>
    `;
};
