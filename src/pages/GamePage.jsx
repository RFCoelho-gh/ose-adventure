import {useState, useEffect} from 'react'
import {PlayerActor, HumanWarrior} from '../library/CharacterClasses'
import { HumanWarriorDescription } from '../library/ClassesDescription';
import "./GlobalStyle.css";

function GamePage() {

    //Flags
    const [onCharSelection, setOnCharSelection] = useState(true);
    const [phase, setphase] = useState(1);

    //CharacterSelection
    const [exibit, setExibit] = useState(new PlayerActor)
    const [viewDescription, setViewDescription] = useState(null)

    //Viewed Class Handler
    function handleExibit() {
        const pickedToView = document.getElementById("pickedClass").value;

        switch (pickedToView) {
            case 'HumanWarrior':
                setExibit(new HumanWarrior);
                setViewDescription(HumanWarriorDescription)
                break;
        };
    }


  return (
    <div>

        <h1>Character Selection</h1>
        <form>
            <p>Viewed Class:</p>
            <input id="pickedClass" list="characterClasses" onChange={handleExibit} />
            <datalist id="characterClasses">
                <option value="HumanWarrior">Human Fighter</option>
                <option value="HumanCleric">Human Cleric</option>
                <option value="HumanRogue">Human Rogue</option>
                <option value="HumanWizard">Human Wizard</option>
                <option value="HumanBarbarian">Human Barbarian</option>
                <option value="ElfHunter">Elf Hunter</option>
                <option value="DwarfFighter">Dwarf Fighter</option>
                <option value="HalflingScoundrel">Halfling Scoundrel</option>
            </datalist>


        </form>

        <h3>Character Details</h3>
        <p><span className='text-bold'>Character Class:</span> {exibit.actorName}</p>
        {viewDescription && <article>
            {viewDescription.fullDescription}
            <p><strong>Special Features:</strong></p>
            {viewDescription.featuresList.map(function(element, index){
                return <article key={index}>{element}</article>
            })}
        </article>}
        <p><strong>Attributes:</strong></p>
        <ul>
            <li><strong>Level:</strong> {exibit.actorLevel}</li>
            <li><strong>Hit Points:</strong> {exibit.atr.curHP} / {exibit.atr.maxHP}</li>
            <li><strong>Speed:</strong> d{exibit.atr.speed.dice} + ½ level ({exibit.atr.speed.bonus})</li>
            <li><strong>Movement:</strong> {exibit.atr.movement} blocks</li>
        </ul>


        {!onCharSelection && <div>
            <h1>We are in Char Selection</h1>
            <button onClick={console.log("Hello")}>Select Char</button>
        </div>}

        {/* {!onCharSelection && <div>
                <h1>You have chosen your Character</h1>
        </div>}; */}

    </div>
  )
}

export default GamePage