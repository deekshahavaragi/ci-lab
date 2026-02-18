console.log("Running unit tests...");

// Simple test example
function sampleTest() {
    const result = 2 + 3;
    if (result !== 5) {
        console.error("Test failed!");
        process.exit(1);
    }
}

sampleTest();

console.log("All tests passed!");
