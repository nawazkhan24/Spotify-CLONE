console.log("Lets write JavaScript")
async function main (){
let a =await fetch("http://127.0.0.1:5500/Gitdemo/Spotify-CLONE/songs/")
let response = await a.text();
console.log(response)
}
main()