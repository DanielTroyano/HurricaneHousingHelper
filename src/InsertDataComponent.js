import React, { useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
import { firestore } from './firebase'; // Import your Firestore configuration

function InsertDataComponent() {
  useEffect(() => {
    // Function to insert data into Firestore
    async function insertData() {
      const houses = [
        { address: "123 Main Street, Apt 4B", guardianSSN: "111-22-3333", isDestroyed: false },
        { address: "456 Elm Drive", guardianSSN: "222-33-4445", isDestroyed: true },
        { address: "789 Oak Lane", guardianSSN: "333-44-5566", isDestroyed: false },
        { address: "101 Pine Avenue", guardianSSN: "444-55-6677", isDestroyed: true },
        { address: "202 Maple Circle", guardianSSN: "555-66-7788", isDestroyed: false },
        { address: "303 Cedar Court", guardianSSN: "666-77-8899", isDestroyed: true },
        { address: "404 Birch Boulevard", guardianSSN: "777-88-9900", isDestroyed: false },
        { address: "505 Spruce Street", guardianSSN: "888-99-0011", isDestroyed: true },
        { address: "606 Walnut Way", guardianSSN: "999-00-1122", isDestroyed: false },
        { address: "707 Chestnut Crossing", guardianSSN: "000-11-2233", isDestroyed: true },
      ];

      try {
        const collectionRef = collection(firestore, "house"); // Use "house" as the collection name
        for (const house of houses) {
          await addDoc(collectionRef, house); // Add each house document to Firestore
        }
        console.log("Data successfully inserted into 'house' collection!");
      } catch (error) {
        console.error("Error inserting data:", error);
      }
    }

    insertData(); // Call the function when the component loads
  }, []); // Empty dependency array ensures it only runs once

  return <div>Data Insertion in Progress...</div>;
}

export default InsertDataComponent;
