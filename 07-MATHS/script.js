let character = {
    name:"Jean",
    age:40,
    item_to_give: [],
}
function giveItem(perso){
    let index = Math.random() * perso.item_to_give.length;
    let save = perso.item_to_give[index];
    perso.item_to_give[index] = "";
    return save;
}

for(property in character){
    console.log(character[property]);
}

let sword = {
    title: "Sword",
    physics: 10,
    magic: 0,
    minLevel: 1,
    avaible: true,
}
let hache = {
    title: "Axe",
    physics: 20,
    magic: 0,
    minLevel: 4,
    avaible: true,
}
let sceptre = {
    title: "Scepter",
    physics: 2,
    magic: 40,
    minLevel: 6,
    avaible: true,
}
let spear = {
    title: "Spear",
    physics: 15,
    magic: 0,
    minLevel: 1,
    avaible: true,
}

let shop = {
    sell: [sword,hache,sceptre,spear],
    show: function() {
        for(let i = 0;i < sell.length;i++){
            console.log(sell[i].name);
        }
        console.log(this.sell.length);
    },
    showAvaible: function(){
        for(let i = 0; i < this.sell.length;i++){
            if(this.sell[i].avaible){
                console.log(this.sell[i].name);
            }
        }
    },
    showLowLevel: function(){
        for(let i = 0; i < this.sell.length;i++){
            if(this.sell[i].level <= 10){
                console.log(this.sell[i].name);
            }
        }
    }
}   

shop.show();

let mainCharacter = {
    title: "",
    level: 10,
    life: 100,
    weapon: {
        name: "",
        damage: 20,
    },
    attack:function(){
        console.log(`${name} attaque avec l'arme ${weapon.name} les degâts sont ${weapon.damage * level}`)
    },
}