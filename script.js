const textarea=document.getElementById('textarea');
const totalCharacters=document.getElementById('total-character');
const checkBox=document.getElementById('excludeSpaces');

textarea.addEventListener('keyup',calculateChar);
checkBox.addEventListener('change',calculateChar);

function calculateChar(){
    const textValue = textarea.value;
    const textLengthWithoutSpaces = textValue.replace(/\s/g, '').length;
    checkBox.checked ? totalCharacters.innerHTML=textLengthWithoutSpaces : totalCharacters.innerHTML=textarea.value.length;
}
// const wordCount = textValue.trim() === '' ? 0 : textValue.trim().split(/\s+/).length;

