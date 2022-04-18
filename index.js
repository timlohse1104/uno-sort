class UnoHandSort {
    constructor() {
        // Hand des Spielers
        this.hand = [];
        // Deck erstellen
        this.stack = [];
    }
    start(cardAmount) {
        // Stapel erzeugen und mischen
        this.generateStack();
        console.log("-Anzahl-------------------------------------------------------------");
        console.log(this.stack.length);
        console.log("-Gemischt-----------------------------------------------------------");
        console.dir(this.stack, { depth: null });
        // Anzahl Karten ziehen
        this.pickCards(cardAmount);
        console.log("-Spielerhand-unsortiert---------------------------------------------");
        console.log(this.hand);
        // Hand sortieren
        this.sortHand();
        console.log("-Spielerhand-sortiert-----------------------------------------------");
        console.log(this.hand);
    }
    generateStack() {
        // Stapelkonfiguration
        const config = {
            numberCards: [
                {
                    amount: 1,
                    number: 0,
                    color: "red",
                },
                {
                    amount: 2,
                    number: 1,
                    color: "red",
                },
                {
                    amount: 2,
                    number: 2,
                    color: "red",
                },
                {
                    amount: 2,
                    number: 3,
                    color: "red",
                },
                {
                    amount: 2,
                    number: 4,
                    color: "red",
                },
                {
                    amount: 2,
                    number: 5,
                    color: "red",
                },
                {
                    amount: 2,
                    number: 6,
                    color: "red",
                },
                {
                    amount: 2,
                    number: 7,
                    color: "red",
                },
                {
                    amount: 2,
                    number: 8,
                    color: "red",
                },
                {
                    amount: 2,
                    number: 9,
                    color: "red",
                },
                {
                    amount: 1,
                    number: 0,
                    color: "yellow",
                },
                {
                    amount: 2,
                    number: 1,
                    color: "yellow",
                },
                {
                    amount: 2,
                    number: 2,
                    color: "yellow",
                },
                {
                    amount: 2,
                    number: 3,
                    color: "yellow",
                },
                {
                    amount: 2,
                    number: 4,
                    color: "yellow",
                },
                {
                    amount: 2,
                    number: 5,
                    color: "yellow",
                },
                {
                    amount: 2,
                    number: 6,
                    color: "yellow",
                },
                {
                    amount: 2,
                    number: 7,
                    color: "yellow",
                },
                {
                    amount: 2,
                    number: 8,
                    color: "yellow",
                },
                {
                    amount: 2,
                    number: 9,
                    color: "yellow",
                },
                {
                    amount: 1,
                    number: 0,
                    color: "green",
                },
                {
                    amount: 2,
                    number: 1,
                    color: "green",
                },
                {
                    amount: 2,
                    number: 2,
                    color: "green",
                },
                {
                    amount: 2,
                    number: 3,
                    color: "green",
                },
                {
                    amount: 2,
                    number: 4,
                    color: "green",
                },
                {
                    amount: 2,
                    number: 5,
                    color: "green",
                },
                {
                    amount: 2,
                    number: 6,
                    color: "green",
                },
                {
                    amount: 2,
                    number: 7,
                    color: "green",
                },
                {
                    amount: 2,
                    number: 8,
                    color: "green",
                },
                {
                    amount: 2,
                    number: 9,
                    color: "green",
                },
                {
                    amount: 1,
                    number: 0,
                    color: "blue",
                },
                {
                    amount: 2,
                    number: 1,
                    color: "blue",
                },
                {
                    amount: 2,
                    number: 2,
                    color: "blue",
                },
                {
                    amount: 2,
                    number: 3,
                    color: "blue",
                },
                {
                    amount: 2,
                    number: 4,
                    color: "blue",
                },
                {
                    amount: 2,
                    number: 5,
                    color: "blue",
                },
                {
                    amount: 2,
                    number: 6,
                    color: "blue",
                },
                {
                    amount: 2,
                    number: 7,
                    color: "blue",
                },
                {
                    amount: 2,
                    number: 8,
                    color: "blue",
                },
                {
                    amount: 2,
                    number: 9,
                    color: "blue",
                },
            ],
            actionCards: [
                {
                    amount: 2,
                    action: "skip",
                    color: "red",
                },
                {
                    amount: 2,
                    action: "reverse",
                    color: "red",
                },
                {
                    amount: 2,
                    action: "double",
                    color: "red",
                },
                {
                    amount: 2,
                    action: "skip",
                    color: "yellow",
                },
                {
                    amount: 2,
                    action: "reverse",
                    color: "yellow",
                },
                {
                    amount: 2,
                    action: "double",
                    color: "yellow",
                },
                {
                    amount: 2,
                    action: "skip",
                    color: "green",
                },
                {
                    amount: 2,
                    action: "reverse",
                    color: "green",
                },
                {
                    amount: 2,
                    action: "double",
                    color: "green",
                },
                {
                    amount: 2,
                    action: "skip",
                    color: "blue",
                },
                {
                    amount: 2,
                    action: "reverse",
                    color: "blue",
                },
                {
                    amount: 2,
                    action: "double",
                    color: "blue",
                },
            ],
            specialActionCards: [
                {
                    amount: 4,
                    action: "quad",
                },
                {
                    amount: 4,
                    action: "choose",
                },
            ],
        };
        // Nummerkarten erzeugen
        config.numberCards.forEach((numberCard) => {
            for (let i = 1; i <= numberCard.amount; i++) {
                this.stack.push(new NumberCard(numberCard.color, numberCard.number));
            }
        });
        // Aktionskarten erzeugen
        config.actionCards.forEach((actionCard) => {
            for (let i = 1; i <= actionCard.amount; i++) {
                this.stack.push(new ActionCard(actionCard.color, actionCard.action));
            }
        });
        // Spezial Aktionskarten erzeugen
        config.specialActionCards.forEach((specialActionCard) => {
            for (let i = 1; i <= specialActionCard.amount; i++) {
                this.stack.push(new SpecialActionCard(specialActionCard.action));
            }
        });
        // Stapel mischen
        this.stack.sort((a, b) => {
            return 0.5 - Math.random();
        });
    }
    pickCards(cardAmount) {
        // Ziehe Anzahl der Karten vom Stapel und lege sie in die Hand des Spielers
        for (let i = 1; i <= cardAmount; i++) {
            // Unnötig, da man bei Uni die Karten auch nicht zufällig aus der Mitte nimmt!
            // const randomNumber = Math.floor(Math.random() * this.stack.length);
            // this.hand.push(this.stack.splice(randomNumber, 1)[0]);
            this.hand.push(this.stack.pop());
        }
    }
    sortHand() {
        // Die Karten in der Spielerhand sollen jetzt sortiert werden, um Papa zu zeigen wie man es richtig macht.
        const sortedHand = {
            red: [],
            yellow: [],
            green: [],
            blue: [],
            black: [],
        };
        // Sortiere Karten anhand ihrer Farbe
        this.hand.forEach((card) => {
            sortedHand[card.getColor()].push(card);
        });
        // Sortiere Karten in Farbe nach Wert
        for (const colorKey in sortedHand) {
            sortedHand[colorKey].sort((a, b) => a.value - b.value);
        }
        let sortedHandArray = Object.values(sortedHand);
        // Sortiere Farben nach Gesamtwert
        sortedHandArray.sort((a, b) => {
            let aValue = 0;
            let bValue = 0;
            a.forEach((card) => (aValue += card.getValue()));
            b.forEach((card) => (bValue += card.getValue()));
            return aValue - bValue;
        });
        // Sortiere Farben nach Anzahl der Karten
        sortedHandArray.sort((a, b) => a.length - b.length);
        // Füge sortierte Karten zur ursprünglichen Hand hinzu
        this.hand = [];
        sortedHandArray.forEach((colorCard) => this.hand.push(...colorCard));
    }
}
class Card {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    getValue() {
        return this.value;
    }
}
class NumberCard extends Card {
    constructor(color, number) {
        super(color);
        this.number = number;
        this.value = number;
    }
    getNumber() {
        return this.number;
    }
}
class ActionCard extends Card {
    constructor(color, action) {
        super(color);
        this.action = action;
        this.value = 20;
    }
    getAction() {
        return this.action;
    }
}
class SpecialActionCard extends Card {
    constructor(action) {
        super("black");
        this.action = action;
        this.value = 50;
    }
    getAction() {
        return this.action;
    }
}
// Start Game
const unoGame = new UnoHandSort();
unoGame.start(7);