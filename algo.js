var mostCommonWord = function(paragraph, banned) {
    var string = "";
    paragraph = paragraph.replace(/[.,'\/#!$%\^?&\*;:{}=\-_`~()]/g,"");
    paragraph = paragraph.replace(/\\"/g, '');
    paragraph = paragraph.toLowerCase();
   console.log(paragraph);
    var object = {};
    let sentence = paragraph.split(" ");
    for( var i = sentence.length-1; i>=0; i--){
        for(x in banned){
            if(sentence[i] == banned[x]){
                sentence.splice(i, 1);
            }
        }
    }
    for(z in sentence){
        if(!object[sentence[z]]){
             object[sentence[z]] = 1;
        }
        else{
            object[sentence[z]] = object[sentence[z]] + 1;
        }
       
    }
   
    var counter = 0;
    var answer = [];
    for(index in object){
        if(object[index] >= counter){
            counter = object[index];
           
        }
    }
    console.log(object);
    for(x in object){
        if (object[x] == counter){
            answer.push(x);
        }
    }
    
    for(y in answer){
        if(answer.length == 1){
            string = answer[y];
        }
        else{
            string = string +" " + answer[y];
        }
    }
    return string;
};