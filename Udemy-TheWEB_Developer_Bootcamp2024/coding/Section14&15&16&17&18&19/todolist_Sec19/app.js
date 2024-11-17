let input = prompt("What would you like to do?");
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*************');
    } else if (input === 'new') {
        const newTodo = prompt("Okay, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list.`);
    } else if (input === 'delete') {
        const index = parseInt(prompt("Okay, enter an index to delete:"));
        if (!Number.isNaN(index) && index >= 0 && index < todos.length) {
            const deleted = todos.splice(index, 1); // Correctly store the deleted item
            console.log(`Okay, deleted ${deleted[0]}.`);
        } else {
            console.log("Invalid index. Please try again.");
        }
    } else {
        console.log("Unknown command. Please enter 'list', 'new', 'delete', or 'quit'.");
    }
    input = prompt("What would you like to do?");
}
console.log("Okay you quit the app.");
