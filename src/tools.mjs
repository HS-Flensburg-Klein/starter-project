export function simulateBlockingOperation(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        // This loop runs for 'duration' milliseconds, blocking the main thread
    }
    console.log('Blocking operation completed');
}


