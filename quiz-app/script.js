var elements = document.querySelectorAll('[type=radio]');

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('change', function(e){
        let thick = e.target.value;
        if(thick == "correct"){

            let parentNode = e.target.parentNode;
            parentNode.style.color = "green";
       

        let els = parentNode.parentNode.querySelectorAll('[type=radio]');
        for(var n = 0; n < els.length; n++){
            els[n].disabled = true;
        } 
    }else if(thick == "incorrect"){
        
        let parentNode = e.target.parentNode;
        parentNode.style.color = "red";

        let els = parentNode.parentNode.querySelector('[type=radio]');
        for(var n = 0; n < els.length; n++){
            els[n].disabled = true;
    }

        let correctAnswer = parentNode.parentNode.querySelector('[value=correct]');
        correctAnswer.parentNode.style.color = "green"
        
    }
    })
}
