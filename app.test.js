
const { test } = require("node:test");
const assert = require("node:assert");
const { greet } = require("./app");

test("should greet the given user", () => {
    assert.strictEqual(
        greet("Aparna"),
        "Hello, Aparna! Welcome to DevOps CI/CD."
    );
});

test("should return default greeting when name is missing", () => {
    assert.strictEqual(
        greet(""),
        "Hello, Developer!"
    );
});
