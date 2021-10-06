
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

        let nameDate = create("div", "nameDate")
        card.append(nameDate)

        let goalName = create("input", "goalName")
        goalName.placeholder = "Название цели"
        nameDate.append(goalName);

        let date = create('input', 'date')
        date.type = "date"
        nameDate.append(date);

        let expand = create('button', 'expand')
        expand.innerHTML = "Ʌ"

        nameDate.append(expand);

        // // ==== второй блок 

        let cardInner = create('div', 'cardInner')
        card.append(cardInner);

        let requiredAmount = create('div', 'requiredAmount')
        requiredAmount.type = "number"
        let reqInput = create('input', 'reqInput');
        let tagReqP = document.createElement("p");
        tagReqP.innerText = "Требуемая сумма (₽):"
        requiredAmount.append(tagReqP);
        requiredAmount.append(reqInput);

        cardInner.append(requiredAmount);

        let startAmount = create('div', 'startAmount')
        let tagStartP = document.createElement("p")
        tagStartP.innerText = "Стартовая сумма (₽):"
        let startAmountInput = create('input', 'startAmountInput')
        startAmount.append(tagStartP)
        startAmount.append(startAmountInput);
        cardInner.append(startAmount)

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

        //V-----------Shadow Box-----------V

        delButton.addEventListener('mouseover', (event) => {
            const shadowBox = document.createElement('div');
            shadowBox.classList.add('shadowBox');
            delButton.style.color = '#602b7a';
            delButton.style.backgroundColor = '#ffd847'
            card.append(shadowBox);
            delButton.addEventListener('mouseout', (event) => {
                shadowBox.remove();
                delButton.style.removeProperty('color');
                delButton.style.removeProperty('background-color');
            })
        })
        //------------------------------------
        //V-------------Expand-------------V
        expand.addEventListener('mouseover', (event) => {
            expand.style.color = '#602b7a';
            expand.style.backgroundColor = '#ffd847'
            expand.addEventListener('mouseout', (event) => {
                expand.style.removeProperty('color');
                expand.style.removeProperty('background-color');
            })
        })

        expand.addEventListener('click', (event) => {
            if (expand.innerHTML == "Ʌ") {
                cardInner.style.display = 'none';
                delButton.style.display = 'none';
                expand.innerHTML = "V";
                expand.style.borderBottomRightRadius = '5px';
                expand.style.border = 'none';
            } else if (expand.innerHTML == "V") {
                expand.innerHTML = "Ʌ";
                cardInner.style.removeProperty('display');
                delButton.style.removeProperty('display');
                expand.style.removeProperty('border-bottom-right-radius');
                expand.style.removeProperty('border')
            }
        })
        //-----------------------------------

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
