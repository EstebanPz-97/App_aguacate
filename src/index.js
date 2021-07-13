const url = "https://platzi-avo.vercel.app/api/avo"


window 
.fetch(url)


.then((respuesta) => respuesta.json())


.then((rensponseJson)=>{
    const todosLosItems = []
    rensponseJson.data.forEach((item) => {
        const imagen = document.createElement('img')
        const title = document.createElement('h2')
        const price = document.createElement('div')

        const container = document.createElement('div')
        container.append(imagen, title, price)

        todosLosItems.push(container)
        
    });

    document.body.append(...todosLosItems)
})