The solution uses async/await to elegantly handle the asynchronous nature of Firebase data retrieval, preventing race conditions.  The code waits for the data to be fully loaded before accessing it.

```javascript
async function fetchData() {
  const snapshot = await db.collection('myCollection').doc('myDoc').get();
  if (snapshot.exists) {
    const data = snapshot.data();
    // Access data safely here
    console.log(data.myField); 
  } else {
    console.log('No such document!');
  }
}
fetchData();
```