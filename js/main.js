$(function(){

    const speech = new webkitSpeechRecognition();
    speech.lang = 'ja-JP';   
    const table = document.getElementsByClassName('table');
    

    $('#btn').click(function(){
        speech.start();
    });

    speech.onresult = function(e){
        speech.stop();
        if(e.results[0].isFinal){
            var autotext =  e.results[0][0].transcript          
            var row = table[0].insertRow(-1);
            var cell1 = row.insertCell(-1);
            cell1.innerHTML = autotext;
            table.innerHTML +=autotext;
    
         }
    
    };

    speech.onend = () => { 
        speech.start() 
     };


});




