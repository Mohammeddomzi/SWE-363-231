//        <article>
//          <h2>Advocating for Data Privacy and Greater Security in Health Information Systems</h1>
//          <label id="articles">Article</label>
//          <label id="date">9/29/2023</label>
//            <p>This report discusses the significance of greater data privacy and security in the healthcare industry. It is highlighting its impact on patients and industry outcomes while still striking a delicate balance between safeguarding data privacy and promoting medical research. <br></p>
//            <a href="MyArticles.html">Read More</a>
//        </article>

Posts =[
    {
        title: "Advocating for Data Privacy and Greater Security in Health Information Systems",
        kind : "Article",
        kindId: "articles",
        Date: "9/29/2023",
        intro:"This report discusses the significance of greater data privacy and security in the healthcare industry. It is highlighting its impact on patients and industry outcomes while still striking a delicate balance between safeguarding data privacy and promoting medical research.",
        link: "MyArticles.html"
    },
    {
        title: "Devil May Cry 5...",
        kind : "Game Review",
        kindId: "GameReviwes",
        Date: "10/27/2023",
        intro:"coming soon...",
        link: "MyArticles.html"  
    }
]


let main = document.querySelector("#posts")
for (let i = 0; i < 2; i++){
    let art = document.createElement("article")
    let title = document.createElement("h2")
    //add title 
    art.appendChild(title)
    title.innerText = Posts[i].title
    //add type
    let type = document.createElement("label")
    type.innerText = Posts[i].kind
    type.id = Posts[i].kindId
    //add date
    let date = document.createElement("label")
    date.innerText = Posts[i].Date
    date.id = "date"
    //add intro
    let intro = document.createElement("p")
    intro.innerText = Posts[i].intro
    //add link 
    let link = document.createElement("a")
    link.innerText = "Read More"
    link.href = Posts[i].link
    //append everthing 
    art.appendChild(title)
    art.appendChild(type)
    art.appendChild(date)
    art.appendChild(intro)
    art.appendChild(link)
    main.appendChild(art)

}

async function loadfact() {
    res = await fetch("https://animechan.xyz/api/random")
    json = await res.json()
    console.log(json)
    let AnimeMain = document.querySelector("#Anime")
    let art = document.createElement("article")
    art.id = "AnimeArticle"
    let anime = document.createElement("h2")
    //add title 
    anime.innerText = json.anime
    //add type
    let character = document.createElement("label")
    character.innerText = json.character
    character.id = "character"
    //add intro
    let quote = document.createElement("p")
    quote.innerText = json.quote
    //append everthing 
    art.appendChild(anime)
    art.appendChild(character)
    art.appendChild(quote)
    AnimeMain.appendChild(art)
  }

for (let i = 0; i < 3; i++){
    loadfact(); 
}
