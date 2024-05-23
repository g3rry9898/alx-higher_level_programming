#!/usr/bin/node

const fetch = require('node-fetch');

async function getCompletedTasksByUserId(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const tasks = await response.json();

        if (response.ok) {
            // Create a map to store completed task counts by user ID
            const completedTaskCounts = new Map();

            // Filter completed tasks
            tasks.forEach((task) => {
                if (task.completed) {
                    const userId = task.userId;
                    completedTaskCounts.set(userId, (completedTaskCounts.get(userId) || 0) + 1);
                }
            });

            // Print the results
            completedTaskCounts.forEach((count, userId) => {
                console.log(`User ${userId}: ${count} completed tasks`);
            });
        } else {
            console.error(`Error fetching task data: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Usage: node completed_tasks.js <API_URL>
if (process.argv.length !== 3) {
    console.error('Usage: node completed_tasks.js <API_URL>');
    process.exit(1);
}

const apiUrl = process.argv[2];
getCompletedTasksByUserId(apiUrl);

