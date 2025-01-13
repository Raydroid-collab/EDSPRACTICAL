
        let collectedItems = [];

        // Collect an item (push into the array)
        function collectItem() {
            const newItem = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
            collectedItems.push(newItem); // Add the item to the array
            updateGameStatus();
        }

        // Use an item (pop from the array)
        function useItem() {
            if (collectedItems.length > 0) {
                const usedItem = collectedItems.pop(); // Remove the last item from the array
                alert(`You used item: ${usedItem}`);
            } else {
                alert("No items to use!");
            }
            updateGameStatus();
        }

        // Update the game status displayed on the page
        function updateGameStatus() {
            const itemList = document.getElementById('itemList');
            itemList.innerHTML = ''; // Clear the list

            // Display all collected items
            collectedItems.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `Item: ${item}`;
                itemList.appendChild(listItem);
            });

            // Update the status text
            const statusText = document.getElementById('statusText');
            if (collectedItems.length === 0) {
                statusText.textContent = "You haven't collected any items yet.";
            } else {
                statusText.textContent = `You have collected ${collectedItems.length} item(s).`;
            }
        }
    