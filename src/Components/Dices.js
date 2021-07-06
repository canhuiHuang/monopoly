import React,{useEffect, useRef} from 'react';

function Dices({dicesValues, rollIt}) {

        let rollTimeout;
        
        const setVal = (num, val) => {
          var dices = document.querySelectorAll('.dice');
          var dice = dices.item(num - 1);
          if (!dice) return;
          dice.setAttribute('data-val', val);
        }
        
        function toggleRoll() {
          setVal(1, 0);
          setVal(2, 0);
        }
        
        function setVals(dice1Value,dice2Value) {

            setVal(1, dice1Value);
            setVal(2, dice2Value);
            
        }
      
        function rollDice(dice1Value,dice2Value) {
            if (rollTimeout) clearTimeout(rollTimeout);
            toggleRoll();
            rollTimeout = setTimeout(function() {
                setVals(dice1Value,dice2Value);
            }, 1000);
        }

        const mounted = useRef();
        useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            // do componentDidUpdate logic
            if (rollIt){
                rollDice(dicesValues.value1, dicesValues.value2);
            }
        }
        });

    return (
        <div className="dices-component">
            <div className="container">
            <div className="dice dice_1">
                <div className="cube">
                <div className="side side_1">
                    <span className="dot dot_5"></span>
                </div>
                <div className="side side_2">
                    <span className="dot dot_3"></span><span className="dot dot_7"></span>
                </div>
                <div className="side side_3">
                    <span className="dot dot_3"></span><span className="dot dot_5"></span><span className="dot dot_7"></span>
                </div>
                <div className="side side_4">
                    <span className="dot dot_1"></span><span className="dot dot_3"></span><span className="dot dot_7"></span><span className="dot dot_9"></span>
                </div>
                <div className="side side_5">
                    <span className="dot dot_1"></span><span className="dot dot_3"></span><span className="dot dot_5"></span><span className="dot dot_7"></span><span className="dot dot_9"></span>
                </div>
                <div className="side side_6">
                    <span className="dot dot_1"></span><span className="dot dot_4"></span><span className="dot dot_7"></span><span className="dot dot_3"></span><span className="dot dot_6"></span><span className="dot dot_9"></span>
                </div>
                </div>
            </div>

            <div className="dice dice_2">
                <div className="cube">
                <div className="side side_1">
                    <span className="dot dot_5"></span>
                </div>
                <div className="side side_2">
                    <span className="dot dot_3"></span><span className="dot dot_7"></span>
                </div>
                <div className="side side_3">
                    <span className="dot dot_3"></span><span className="dot dot_5"></span><span className="dot dot_7"></span>
                </div>
                <div className="side side_4">
                    <span className="dot dot_1"></span><span className="dot dot_3"></span><span className="dot dot_7"></span><span className="dot dot_9"></span>
                </div>
                <div className="side side_5">
                    <span className="dot dot_1"></span><span className="dot dot_3"></span><span className="dot dot_5"></span><span className="dot dot_7"></span><span className="dot dot_9"></span>
                </div>
                <div className="side side_6">
                    <span className="dot dot_1"></span><span className="dot dot_4"></span><span className="dot dot_7"></span><span className="dot dot_3"></span><span className="dot dot_6"></span><span className="dot dot_9"></span>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dices;
