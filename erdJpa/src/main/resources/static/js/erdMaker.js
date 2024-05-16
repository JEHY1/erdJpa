const addRelationButton = document.getElementById('addRelation-btn');

if(addRelationButton){
    addRelationButton.addEventListener('click', () => {
        let relationBody = document.createElement('div');
        relationBody.setAttribute('class', '');
        let relationNameForm = document.createElement('div');
    });
}

const entityName = document.getElementById('entityName');

if(entityName){
    entityName.addEventListener('change', () => {
        entityName.parentElement.nextElementSibling.children[0].value = setTableName(entityName.value) + '_tb';
    });
}

function setTableName(str) {
    let uppercasePattern = /[A-Z]/g;
    let matches = [...str.matchAll(uppercasePattern)];
    let indexs = matches.map(match => match.index);

    str = str.toLowerCase();

    indexs.forEach((strIndex, index) => {
        if(strIndex !== 0){
            str = str.substring(0, strIndex + index - 1) + '_' + str.substring(strIndex + index - 1);
            console.log(index);
            index++;

        }
    });
    return str;
}

