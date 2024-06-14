//variables utiles
let img_bases = {"pyrimidine":"imgs/pyr_wo_num.png","purine":"imgs/purine_wo_num.png","adénine":"imgs/a_wo_label.png","cytosine":"imgs/c_wo_label.png","thymine":"imgs/t_wo_label.png","guanine":"imgs/g_wo_label.png","uracile":"imgs/u_wo_label.png"}
let nom_bases = ["pyrimidine","purine","adénine","cytosine","thymine","guanine","uracile"]
let deja_sorti = []
let nb = 0

//récup d'id pour plus tard
let body = document.getElementById("body")
let start_div = document.getElementById("start_div")
let start_button = document.getElementById("commencer")
let quizz_area = document.getElementById("quizz_area")
//txt des questions
let quest1 = "Quel est le nom de cette base azotée ? (en minuscule)"
let quest2 = "Quel est le nom de ce cycle ? (en minuscule)"


//fonctions utiles ig
function random(n){
    return Math.floor(Math.random()*n)
}

function entrer_rep()
{
    console.log(nb)
    console.log(nom_bases[nb])
    if (rep.value === nom_bases[nb])
    {
        res.innerHTML="Bravo!"
        deja_sorti.push(nb)
    }
                
    else
    {
        res.innerHTML = "Essaie encore."
    }
}


// méca du quizz
function quizz_cycle()
{
    //init quizz_area
    let quizz = `
    <p id="question">${quest1}</p>
    <img id="img"/><br>
    <input id="rep"></input>
    <button id="entrer">Entrer</button>
    <br><p id="res"></p>
    `; 
    quizz_area.innerHTML = quizz
    //récup id
    let question = document.getElementById("question")  
    let img = document.getElementById("img") 
    let entrer = document.getElementById("entrer")

    //boucle principale du quizz
    nb = random(7)    
    if(deja_sorti.length >=7)
    {
        quizz_area.innerHTML= "Fin du quizz!"
    }

    else
    {
        while(!(deja_sorti.indexOf(nb) === -1))
        {
            nb=random(7)
        }
        //choix de la question
        if((nom_bases[nb]==="pyrimidine") || (nom_bases[nb]==="purine"))
        {
            question.innerHTML = quest2
        }
        else
        {
            question.innerHTML = quest1
        }
            
        //aff image
        img.src = img_bases[nom_bases[nb]]

        //validation réponse
        entrer.addEventListener("click",function()
        {
            entrer_rep()
            let suivant = document.createElement("button")
            quizz_area.appendChild(suivant)
            suivant.innerHTML = "Suivant"
            suivant.addEventListener("click",()=>
            {
                quizz_cycle()
            })
        })
    }
    console.log(deja_sorti)
    console.log(deja_sorti.length)
}

start_button.addEventListener("click", function()
    {
        //initialisation du quizz
        body.removeChild(start_div)          
        quizz_cycle()
    }
)
