var count=1;
    var data = {};
    $(document).ready(function() {
        $.getJSON('questions.json', function(file) {
            data = file;
            for(let i = 0; i < data.categories.length; i++) {
                for(let j = 0; j < data.categories[i].questions.length; j++) {
                    for(let k = 0; k < data.categories[i].questions[j].answers.length; k++) {
                       $('#question-box').append('<p id="q">['+data.categories[i].name+'] '+count+'<br>'+data.categories[i].questions[j].question+'<br></p>');count++;
                       for(let v = 0; v<data.categories[i].questions[j].answers.length; v++){

                           if(data.categories[i].questions[j].values[v] == true){
                            $('#question-box').append('<p id="agood"><span>'+data.categories[i].questions[j].answers[v]+'</span></p>');
                           }else{
                            $('#question-box').append('<p id="abad"><span>'+data.categories[i].questions[j].answers[v]+'</span></p>');
                           }
                       }
                    }

                }
            }
        });
    });