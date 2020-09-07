/*jslint plusplus: true, evil: true*/
/*global console, alert, prompt*/

let numberOfTasks = 0,
    numberOfCompeleted = 0;

function addNote() {
    'use strict';

    let theBefore = document.getElementById('before');

    let myMainDiv = document.createElement('div'),
        secondDiv = document.createElement('div'),
        paragraph = document.createElement('p'),
        classShow = document.createAttribute('class'),
        theID = document.createAttribute('id');

    let myTasks = document.getElementById('tasksNum'),
        myCompeleted = document.getElementById('compeletNum');

    /*Deleting*/
    let deleteButton = document.createElement('p'),
        deleteWord = document.createTextNode('Delete'),
        deleteClass = document.createAttribute('class');
    /*Deleting*/
    
    /*Completing*/
    let compeletButton = document.createElement('p'),
        compeletWord = document.createTextNode('Compeleted'),
        compeletClass = document.createAttribute('class');
    /*Completing*/
    
    'use strict';
    
    // Create the html body
    document.body.insertBefore(myMainDiv, theBefore);
    myMainDiv.appendChild(secondDiv);
    secondDiv.appendChild(paragraph);

    // Add the class name 
    classShow.value = 'Show1';
    theID.value = 'tasksAdd';
    
    // Add the class to the div and p
    myMainDiv.setAttributeNode(classShow);
    paragraph.setAttributeNode(theID);
    
    // Start The Work
    var clickT = document.getElementById('clickTest');
    
    if (clickT.onclick && document.querySelector('input').value != "") {
        
        let theInput = document.querySelector('input').value;
        paragraph.innerHTML = theInput;
        document.querySelector('input').value = "";
        
        numberOfTasks++;
        myTasks.innerHTML = numberOfTasks;
        
        ////////////////////// Making Delet Button /////////////////////////
        secondDiv.appendChild(deleteButton);
        deleteButton.appendChild(deleteWord);
        
        deleteClass.value = 'deleting';
        
        deleteButton.setAttributeNode(deleteClass);
        ////////////////////// Making Delet Button /////////////////////////
        
        ////////////////////// Making compelet Button /////////////////////////
        secondDiv.appendChild(compeletButton);
        compeletButton.appendChild(compeletWord);
        
        compeletClass.value = 'compeleting';
        
        compeletButton.setAttributeNode(compeletClass);
        ////////////////////// Making compelet Button /////////////////////////
        
    } else {
        alert('Please Enter Your Note')
        myMainDiv.classList.add('hidden');
    }
    
    deleteButton.onclick = function() {
        
        myMainDiv.classList.add('hidden');
        
        if (paragraph.classList.contains('marked')) {
            numberOfCompeleted--;
            myCompeleted.innerHTML = numberOfCompeleted;
        } else {
            numberOfTasks--;
            myTasks.innerHTML = numberOfTasks;
        }
        
    }
    
    compeletButton.onclick = function() {
        
        paragraph.classList.toggle('marked')
        
        if (paragraph.classList.contains('marked')) {
            numberOfCompeleted++;
            myCompeleted.innerHTML = numberOfCompeleted;
            
            if (numberOfTasks > 0) {
                numberOfTasks--;
                myTasks.innerHTML = numberOfTasks;
            }
                
        } else {
                numberOfCompeleted --;
                myCompeleted.innerHTML = numberOfCompeleted
            
            numberOfTasks ++;
            myTasks.innerHTML = numberOfTasks;
        }
    
    }
    
}


