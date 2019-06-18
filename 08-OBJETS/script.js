
let Character = {
    name: "",
    age: 10,
    item_to_give: ["Pampers","Chaussette"],
}
for(let val in Character){
    console.log(Character[val]);
}

function randomItem(){
    let randomNum = Math.round(Math.random() * (Character.item_to_give.length - 1));
    return Character.item_to_give[randomNum];
}

console.log(randomItem());

let axe = {
    title: "axe",
    physics: 6,
    magic: 0,
    minLevel: 1,
    available: false
}
let sword = {
    title: "sword",
    physics: 13,
    magic: 0,
    minLevel:5,
    available : true
}
let spear = {
    title:"spear",
    physics:20,
    magic:10,
    minLevel:8,
    available: true
}
let scepter = {
    title:"scepter",
    physics:2,
    magic:40,
    minLevel:15,
    available: true
}
let shop = {
    tab: [],
    callBack: function(onglet,value,func){
        for(let i = 0; i < this.tab.length;i++){
            if(this.tab[i][onglet]){
                func(this.tab[i][value]);
            }
        }
    },
    showObject: function(){
        for(let i = 0; i < this.tab.length;i++){
            console.log(this.tab[i]);
        }
    },

    showAvaibleObj: function(){
        this.callBack("available","title",function(obj){
            console.log(obj);
        })
    },

    showMinLevelObj: function(){
        this.callBack("minLevel","title",function(obj){
            if(obj >= 10){
                console.log(obj);
            }
        })
    }
}
shop.tab.push(axe);
shop.tab.push(sword);
shop.tab.push(spear);
shop.tab.push(scepter);

let mainCharacter = {
    name:"Yiru",
    level:5,
    life:100,
    weapon: {
        name:shop.tab[0].title,
        damage:shop.tab[0].physics
    },
    attack: function(){
        console.log(`${name} attaque avec l'arme ${this.weapon.name} les degats sont ${this.level * this.weapon.damage}`)
    }
}
mainCharacter.attack();

function bonus(){
    let character = {
        name: "",
        level: 0,
        life: 0,
        weapon: {
            name: "",
            damage: 0,
        },
        attack: function(target){
            console.log(`${this.name} attaque ${target.name}`);
            console.log(`avec l'arme ${this.weapon.name}`);
            console.log(`et lui inflige ${this.weapon.damage * this.level} de dégats`);
            target.receiveDamage(this.weapon.damage * this.level);
            console.log(`${target.name} a maintenant ${target.life} de vie`);
        },
        receiveDamage: function(damage){
            this.life -= damage;
        },
    }
    let opponentCharacter = Object.create(character);
    opponentCharacter.weapon.name = "Sword";
    opponentCharacter.weapon.damage = 10;
    opponentCharacter.life = 100;
    opponentCharacter.level = 2;
    opponentCharacter.name = "michel";

    let mainCharacter = Object.create(character);
    mainCharacter.weapon.name = "Sceptre";
    mainCharacter.weapon.damage = 20;
    mainCharacter.level = 4;
    mainCharacter.name = "Jean";
    mainCharacter.life = 100;

    mainCharacter.attack(opponentCharacter);
}