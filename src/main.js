function create(elementType, elementClass) {
    let newElement = document.createElement(elementType);
    if (elementClass) {
        newElement.classList.add(elementClass);
    }
    // let parent = document.querySelector(elementParent)
    // parent.append(newElement)
    return newElement

}

// ======= CREATION ARRAY=====///
let allCards = [];
let id = 0;

window.addEventListener('load', init)

function init() {
    createCard()
    let addButton = document.querySelector('.addButton');
    addButton.addEventListener('click', createCard);

    function createCard() {



        // ===== первый блок
        let card = create('div', 'card', '.container')
        card.id = id



        // let card = document.createElement('div');
        // card.classList.add('card');

        // let nameDate = document.createElement('div');
        // nameDate.classList.add('nameDate');
        // card.append(nameDate);
        let nameDate = create("div", "nameDate")
        card.append(nameDate)

        // let goalName = document.createElement('input')
        // goalName.classList.add('goalName');

        let goalName = create("input", "goalName")
        goalName.placeholder = "Название цели"
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

        let expand = create('button', 'expand')
        expand.innerHTML = "Ʌ"

        nameDate.append(expand);


        // // ==== второй блок 

        // let cardInner = document.createElement('div');
        // cardInner.classList.add('cardInner');

        let cardInner = create('div', 'cardInner')
        card.append(cardInner);

        // let amounts = document.createElement('div');
        // amounts.classList.add('amounts');

        // let amounts = create('div','amounts')
        // cardInner.append(amounts);

        // let delButton = document.createElement('button')
        // delButton.classList.add('delButton');



        // let requiredAmount = document.createElement('div');
        // requiredAmount.classList.add('requiredAmount');
        // let reqInput = document.createElement('input');

        let requiredAmount = create('div', 'requiredAmount')
        requiredAmount.type = "number"
        let reqInput = create('input', 'reqInput');
        let tagReqP = document.createElement("p");
        tagReqP.innerText = "Требуемая сумма (₽):"
        requiredAmount.append(tagReqP);
        requiredAmount.append(reqInput);

        cardInner.append(requiredAmount);

        // let startAmount = document.createElement('div');
        // startAmount.classList.add('startAmount');
        // let startAmountInput = document.createElement('input');

        let startAmount = create('div', 'startAmount')
        let tagStartP = document.createElement("p")
        tagStartP.innerText = "Стартовая сумма (₽):"
        let startAmountInput = create('input', 'startAmountInput')
        startAmount.append(tagStartP)
        startAmount.append(startAmountInput);
        cardInner.append(startAmount)

        // let regAmount = document.createElement('div')
        // regAmount.classList.add('regAmount')
        // let regAmountResult = document.createElement('div')
        // regAmountResult.classList.add('regAmountResult')

        let regAmount = create('div', 'regAmount')
        let tagRegP = document.createElement('p')
        let regAmountResult = create('div', 'regAmountResult')
        regAmountResult.innerText = "0₽"
        tagRegP.innerText = "Размер регулярных пополнений:"
        regAmount.append(tagRegP)
        regAmount.append(regAmountResult)
        cardInner.append(regAmount);

        let delButton = create('button', 'delButton')
        card.append(delButton);
        delButton.innerText = "X"

        document.querySelector('.container').append(card);


        // ====== OBJECTS CREATION====//

        let cardObj = {
            name: "",
            date: "",
            startAmount: "",
            reqAmount: "",
            regAmount: "",
            id: id
        }
        allCards.push(cardObj)
        goalName.addEventListener('keyup', changeObj)
        reqInput.addEventListener('keyup', changeObj)
        startAmountInput.addEventListener('keyup', changeObj)
        date.addEventListener('change', changeObj)
        id++
    }


}

function changeObj(event) {
    let currentCard = allCards.find(element => {
        return +event.currentTarget.parentElement.parentElement.id === element.id
    })
    switch (event.currentTarget.className) {
        case 'goalName': currentCard.name = event.currentTarget.value;
        break;

        case 'reqInput': currentCard.reqAmount = event.currentTarget.value;
        break;
        
        case 'startAmountInput': currentCard.startAmount = event.currentTarget.value;
        break;

        case 'date': currentCard.date = event.currentTarget.value;
        break;
    }
    console.log(allCards)
}


/////finish koda Pasha