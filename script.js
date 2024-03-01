/*
const dropSwitch = document.getElementById("DropSwitch");
const formFont = document.getElementById("formFont");
const fontSelect = document.getElementById("font");
const formSwitch = document.getElementById("FormSwitch");
const switchCheckbox = document.getElementById("swtich");
const labelForSwitch = document.getElementById("labelForSwitch");
const searchSection = document.getElementById("searchSection");
const searchForm = document.getElementById("searchForm");
const searchSubmit = document.getElementById("submit");
const wordSection = document.getElementById("wordSection");
const wordDiv = document.getElementById("wordDiv");
const audioElement = document.querySelector("audio");
const speechTypeSection = document.getElementById("SectionSpeechType");
const speechTypeParagraph = document.getElementById("SpeechType");
const meaningOverlay = document.getElementById("meaningOverlay");
const synonymsParagraph = document.getElementById("synonyms");
const speechTypeSectionTwo = document.getElementById("SectionSpeechTypeTwo");
const speechTypeParagraphTwo = document.getElementById("SpeechTypeTwo");
const secondWordSection = document.getElementById("secondWordSection");
const meaningHeading = document.querySelector("secondWordSection");
const definitionParagraphTwo = document.getElementById("definitionTwo");
const exampleParagraphTwo = document.getElementById("exampleTwo");
*/
const wordHeading = document.getElementById("word");
const wordPhonetics = document.getElementById("wordPhonetics");
const audioDiv = document.getElementById("audioDiv");
const speechTypeParagraph = document.getElementById("SpeechType");
const definitionParagraph = document.getElementById("definition");
const exampleParagraph = document.getElementById("example");


async function dictionary(){
    try{
        const searchInput = "keyboard";
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`;
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            wordHeading.innerHTML=(data[0].word);
            wordPhonetics.innerHTML =(data[0].phonetic)
            audioDiv.src = data[0].phonetics[2].audio;
            definitionParagraph.innerHTML = data[0].meanings[0].definitions[0].definition
            exampleParagraph.innerHTML = data[0].meanings[0].definitions[0].example
            console.log(data);



            return data;
        }

    } catch (error){
        console.error("error", error);
        throw error
    }
}
dictionary()