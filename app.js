
function greet(name) {
    if (!name) {
        return "Hello, Developer!";
    }

    return `Hello, ${name}! Welcome to DevOps CI/CD.`;
}

module.exports = { greet };
