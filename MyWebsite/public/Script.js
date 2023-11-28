class posts{
    constructor(title,kind,id,date,intro,link){
        this.title = title;
        this.kind = kind;
        this.id = id;
        this.date = date;
        this.intro = intro;
        this.link = link;
    }

    loadPost(){
        let main = document.querySelector("#posts")
        let art = document.createElement("article")
        let title = document.createElement("h2")
        title.innerText = this.title
        let type = document.createElement("label")
        type.innerText = this.kind
        type.id = this.id
        let date = document.createElement("label")
        date.innerText = this.date
        date.id = "date"
        let intro = document.createElement("p")
        intro.innerText = this.intro
        //add link 
        let link = document.createElement("a")
        link.innerText = "Read More"
        link.href = this.link
        art.appendChild(title)
        art.appendChild(type)
        art.appendChild(date)
        art.appendChild(intro)
        art.appendChild(link)
        main.appendChild(art)
    }
}

let report = new posts("Advocating for Data Privacy and Greater Security in Health Information Systems","Article","articles","9/29/2023","This report discusses the significance of greater data privacy and security in the healthcare industry. It is highlighting its impact on patients and industry outcomes while still striking a delicate balance between safeguarding data privacy and promoting medical research.","MyArticles.html")
let DMC5 = new posts("Devil May Cry 5...","Game Review","GameReviwes","10/27/2023","coming soon...","MyArticles.html")
let HunterXHunter = new posts("Hunter x Hunter","Anime Review","AnimeReviwes","11/7/2023","coming soon...","MyArticles.html")
report.loadPost()
DMC5.loadPost()
HunterXHunter.loadPost()


async function loadquote() {
    res = await fetch("https://animechan.xyz/api/random/anime?title=hunter x hunter")
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

loadquote();
