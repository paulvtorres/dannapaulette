localStorage.itm_sg3="";


const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content 
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded',() => {
fetchData()
})

const fetchData = async () => {
    try{

        const res = await fetch('http://200.63.107.98/APIDECASA/api/subgrupo/' + localStorage.itm_sg1)
        const data = await res.json()
        pintarCards(data)
        detectarBotones(data)
    }catch (error){
        console.log(error)

    }
}

const pintarCards = data => {
    console.log(data)
    data.forEach(producto => {
        templateCard.querySelector('img').setAttribute("src",producto.itm_imgurl)
        templateCard.querySelector('button').dataset.itm_sg3 =  producto.itm_sg3;
        templateCard.querySelector('button').dataset.itm_sg3 =  producto.itm_sg3;
    templateCard.querySelector('des').textContent =  producto.itm_des;
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment) 
}

const detectarBotones = (data) => {
    const botones = document.querySelectorAll('.card button')
    botones.forEach(btn => {
        btn.addEventListener('click',() =>{
         localStorage.itm_sg3 = btn.dataset.itm_sg3 ;
            document.location.href = 'talla.html';
        })
    })    
}


