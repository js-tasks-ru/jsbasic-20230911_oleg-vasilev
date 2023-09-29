const table = document.querySelector(".js-teachers");
function highlight(table) {
    
    for (let tr of table.children[1].rows) {
        let status = tr.cells[3];
        
        if (status.hasAttribute('data-available')) {
            switch (status.dataset.available) {
                case 'true' : 
                tr.classList.add('available');
                break;
                case 'false' :
                    tr.classList.add('unavailable');
                    break;
            } 
        } else {
            tr.setAttribute('hidden', 'true') 
        }

        let gender = tr.cells[2];

        if (gender.textContent === 'm') {
            tr.classList.add('male');
        } else if (gender.textContent === 'f') {
            tr.classList.add('female');
        }

        let age = tr.cells[1];

        if (Number(age.textContent) < 18) {
            tr.style="text-decoration: line-through";
        }
     }
    
}


highlight(table)

