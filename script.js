const send = document.querySelector('#button-send')

const URL = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products"

fetch(URL).then(function(res){ 
  res.json().then(function(data){
    console.log(data)
  })
})
.catch(function(err){
  console.error('Não foi possível achar a informação', err)
})



