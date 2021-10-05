function create(elementType, elementClass ){
    let newElement = document.createElement(elementType);
    newElement.classList.add(elementClass);
    // let parent = document.querySelector(elementParent)
    // parent.append(newElement)
    return newElement
    
  }

        // ======= CREATION ARRAY=====///
let allCards = [];

window.addEventListener('load', init) 
function init(){
    
    let addButton = document.querySelector('.addButton');
    addButton.addEventListener('click', createCard);
     function createCard(){



        // ===== первый блок
       let card = create('div', 'card', '.container')
        
        

        // let card = document.createElement('div');
        // card.classList.add('card');

        // let nameDate = document.createElement('div');
        // nameDate.classList.add('nameDate');
        // card.append(nameDate);
        let nameDate =   create("div", "nameDate")
        card.append(nameDate)

        // let goalName = document.createElement('input')
        // goalName.classList.add('goalName');
        
        let goalName = create("input", "goalName")
        nameDate.append(goalName);

        // let date = document.createElement('input');
        // date.type = 'date'
        // date.classList.add('date');
        
        let date = create('input', 'date')
        date.type = "date"
        nameDate.append(date);


        // let expand = document.createElement('div');
        // expand.classList.add('expand');
        // expand.style.color = "black"
        // expand.style.border ='1px solid black'
        
        let expand = create('div','expand')
        expand.innerHTML = 'V'
        nameDate.append(expand);
        

        // // ==== второй блок 

        // let cardInner = document.createElement('div');
        // cardInner.classList.add('cardInner');
        
        let cardInner = create('div','cardInner')
        card.append(cardInner);

        // let amounts = document.createElement('div');
        // amounts.classList.add('amounts');
        
        let amounts = create('div','amounts')
        cardInner.append(amounts);

        // let delButton = document.createElement('button')
        // delButton.classList.add('delButton');
        
        let delButton = create('button', 'delButton')
        cardInner.append(delButton);

        // let requiredAmount = document.createElement('div');
        // requiredAmount.classList.add('requiredAmount');
        // let reqInput = document.createElement('input');
        
        let requiredAmount = create('div', 'requiredAmount')
        let reqInput = create('input')
        requiredAmount.append(reqInput);
        amounts.append(requiredAmount);

        // let startAmount = document.createElement('div');
        // startAmount.classList.add('startAmount');
        // let startAmountInput = document.createElement('input');
        
        let startAmount = create('div', 'startAmount')
        let startAmountInput = create('input')
        startAmount.append(startAmountInput);
        amounts.append(startAmount)
        
        // let regAmount = document.createElement('div')
        // regAmount.classList.add('regAmount')
        // let regAmountResult = document.createElement('div')
        // regAmountResult.classList.add('regAmountResult')
        
        let regAmount = create('div','regAmount')
        let regAmountResult = create ('div', 'regAmountResult')
        regAmount.append(regAmountResult)
        amounts.append(regAmount)

        document.querySelector('.container').append(card);


        // ====== OBJECTS CREATION====//
        
        let cardObj = {
            name: "",
            date: "",
            startAmount:"",
            reqAmount:"",
            regAmount:""
            
            
        }
        allCards.push(cardObj)
     }
    

    }
                                            /////finish koda Pasha
