import {rollDice} from '../utilities/utility';

class PlayerActor {
    constructor(/* actorName, actorLevel, atr, atkStats, defStats, leftHandItem, rightHandItem, inventory */){
        this.actorName = "Actor";
        this.actorLevel = 1;
        this.atr = {
            maxHP: 1,
            curHP: 1,
            clues: 0,
            speed: {
                dice: 6,
                bonus: 0,
            },
            movement: 6
        };
        this.atkStats = {
            atkDieSize: 6,
            atkClassBonus: 0,
            atkWeaponBonus: 0,
            atkMagicItemBonus: 0,
            atkOtherBonus: 0,
            atkSumBonus: this.atkClassBonus+this.atkWeaponBonus+this.atkMagicItemBonus+this.atkOtherBonus,
            atkPenalties: 0,
            atkRoll: rollDice(this.atkDieSize)+this.atkSumBonus-this.atkPenalties,
        };
        this.defStats = {
            defDieSize: 6,
            defClassBonus: 0,
            defArmorBonus: 0,
            defShieldBonus: 0,
            defMagicItemBonus: 0,
            defOtherBonus: 0,
            defSumBonus: this.defClassBonus+this.defArmorBonus+this.defShieldBonus+this.defMagicItemBonus+this.defOtherBonus,
            defPenalties: 0,
            defRoll: rollDice(this.defDieSize)+this.defSumBonus-this.defPenalties,
        };
        this.inventory = {
            heldItems: {
                leftHand: [],
                rightHand: []
            },
            goldCoins: 0,
            treasure: [],
            maxBulk: 9,
            curBulk: 0,
        }
    }
    receiveDamage(damage) {
        if (damage >= this.atrCurHP) {
            this.atrCurHP = 0;
        } else {
            this.atrCurHP -= damage;
        }
    }
}

class HumanWarrior extends PlayerActor {
    constructor(actorName, actorLevel, atr, atkStats, defStats, inventory){
        super(actorLevel, atr, atkStats, defStats, inventory)
        this.actorName = "Human Warrior"
        this.identification = "HumWar"
        this.atr = {
            maxHP: 6+this.actorLevel,
            curHP: 6+this.actorLevel,
            clues: 0,
            movement: 6,
            speed: {
                dice: 6,
                bonus: Math.floor(this.actorLevel/2),
            },
        };
        this.atkStats.atkClassBonus = this.actorLevel
    }

}

/* class HumanFighter extends PlayerActor {
    constructor()

} */

export {PlayerActor, HumanWarrior};