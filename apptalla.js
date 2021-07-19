const items = document.getElementById('items')
//const templateCard = document.getElementById('template-card').content 
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded',() => {
fetchData()
})

const fetchData = async () => {
 
    try{

        const res = await fetch('http://200.63.107.98/APIDECASA/api/producto/' + localStorage.itm_sg1 + '/' + localStorage.itm_sg3)
        const data = await res.json()
        
        pintarCards(data)
    }catch (error){
        console.log(error)

    }
}

const pintarCards = data => {
    console.log(data)
    var temp = "";
    data.forEach(producto => {
        document.getElementById("img").src = producto.itm_imgurl
      temp += "<tr>" ;
      temp += "<td>" + producto.itm_des + "</td>";
      if (producto.bit_stkdis == 0) 
      temp += "<td>" + 'AGOTADO' + "</td>";
      else
      temp += "<td>" + producto.bit_stkdis + "</td>";
      temp += "<td>" + '$ ' + producto.itm_pvp_2 + "</td></tr>";
    })
    //items.appendChild(fragment) 
    document.getElementById("data").innerHTML = temp;
}