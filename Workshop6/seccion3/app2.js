let timeUser = parseInt(prompt("ingresa los segundos para mostrarte un mensaje"))

setTimeout(() => {
    console.log("hola bro")
}, timeUser*1000);


fetch("https://jsonplaceholder.typicode.com/posts")
    
    .then(res => {
        if(!res.ok) throw new Error("error mi bro")
        return res.json()
    })
    .then(data => console.log(data))
    .catch(console.log)