const textToMorse = {
  // English
  "A":".-","B":"-...","C":"-.-.","D":"-..","E":".","F":"..-.","G":"--.","H":"....","I":"..","J":".---","K":"-.-","L":".-..","M":"--","N":"-.","O":"---","P":".--.","Q":"--.-","R":".-.","S":"...","T":"-","U":"..-","V":"...-","W":".--","X":"-..-","Y":"-.--","Z":"--..",
  // Ukrainian
  "А":".-","Б":"-...","В":".--","Г":"--.","Д":"-..","Е":".","Ж":"...-","З":"--..","И":"..","Й":".---","К":"-.-","Л":".-..","М":"--","Н":"-.","О":"---","П":".--.","Р":".-.","С":"...","Т":"-","У":"..-","Ф":"..-.","Х":"....","Ц":"-.-.","Ч":"---.","Ш":"----","Щ":"--.-","Ъ":"--.--","Ы":"-.--","Ь":"-..-","Э":"..-..","Ю":"..--","Я":".-.-","Ї":".---.","Є":"..-..","І":"..","Ґ":"--.",
  // Numbers
  "0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....","7":"--...","8":"---..","9":"----.",
  // Symbols
  ".":".-.-.-",",":"--..--","?":"..--..","'":".----.","!":"-.-.--","/":"-..-.","(":"-.--.",")":"-.--.-","&":".-...",":":"---...",";":"-.-.-.","=":"-...-","+":".-.-.","-":"-....-","_":"..--.-",'"':".-..-.","$":"...-..-","@":".--.-.","¿":"..-.-","¡":"--...-"," ":"/","\n":"\n"
};



textarea = document.getElementById('textarea');
let morse;

textarea.addEventListener('input', function() {
  text = textarea.value;
  console.log(text);

  morse = '';
  for (let index = 0; index < text.length; index++) {
      morse += (textToMorse[text[index].toUpperCase()] ? textToMorse[text[index].toUpperCase()] : '#') + ' ';
  };
  document.getElementById('morsearea').value = morse;
});


morsearea = document.getElementById('morsearea');
let text;

morsearea.addEventListener('input', function() {
  morse = (morsearea.value).split(' ');
  console.log(morse);

  text = '';
  for (let index = 0; index < morse.length; index++) {
      text += Object.keys(textToMorse).find(key => textToMorse[key] === morse[index]) ? Object.keys(textToMorse).find(key => textToMorse[key] === morse[index]) : '#';
  };
  document.getElementById('textarea').value = text;
});
