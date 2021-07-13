const baseUrl = "https://platzi-avo.vercel.app"
const appNode = document.querySelector("#app")
appNode.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"

const formatPrice = (price) =>{
    const nwePrice = new window.Intl.NumberFormat('en-EN',{
        style:'currency',
        currency: 'USD'
    }).format(price)
       return nwePrice
}
window 
.fetch(`${baseUrl}/api/avo`)


.then((respuesta) => respuesta.json())


.then((rensponseJson)=>{
    const todosLosItems = []
    rensponseJson.data.forEach((item) => {
        const imagen = document.createElement('img')
        imagen.src = `${baseUrl}${item.image}`
        const title = document.createElement('h2')
        title.textContent = item.name
        title.className = 'text-5xl text-green-900' 
        const price = document.createElement('div')
        price.textContent =formatPrice(item.price)

        const container = document.createElement('div')
        container.append(imagen, title, price)
        container.className = "border-4 border-dashed border-gray-200 rounded-lg h-96 hover:bg-gray-300	 hover:shadow-lg hover:border-transparent "
        container.style.height = "auto"
        


        todosLosItems.push(container)
        
    });

    appNode.append(...todosLosItems)
})