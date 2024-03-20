const searchWord = document.getElementById('search')
const meaning = document.getElementById('meaning')
const type = document.getElementById('type')
const phonetics = document.getElementById('phonetics')
const pronunciation = document.getElementById('pronunciation')
const word = document.getElementById('word')
const button = document.querySelector('button')

async function getData() {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord.value}`
    const data = await fetch(url)
    const dataJson = await data.json();

    pronunciation.style.display = 'block'

    word.innerHTML = dataJson[0].word
    type.innerHTML = `Part  of Speech: ${dataJson[0]?.meanings[0]?.partOfSpeech}`
    phonetics.innerHTML = dataJson[0].phonetics[1].text
    dataJson[0].phonetics[0].audio? pronunciation.src = dataJson[0].phonetics[0].audio : pronunciation.style.display ='none'
    meaning.innerHTML = `Meaning: ${dataJson[0]?.meanings[0]?.definitions[0]?.definition}`

    searchWord.value =''
}


button.addEventListener('click', getData)
