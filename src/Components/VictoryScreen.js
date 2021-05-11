import React,{useState, useEffect} from 'react';
import Confetti from 'react-confetti';
import {useWindowSize,useAudio} from 'react-use';

function VictoryScreen({users,winnerUUID}) {
    const { width, height } = useWindowSize()
    const [conffetiOpacity, setConffetiOpacity] = useState(1);
    const [winner, setWinner] = useState(users[winnerUUID]);

    const conffeti_duration = 2850;
    
    useEffect(() => {
        setTimeout(()=>{
            let i = 1;
            var tid = setInterval(()=>{
                setConffetiOpacity(i);
                if (i <= 0){
                    clearInterval(tid);
                }
                i -= 0.01;
            }, 38)
        }, conffeti_duration)
    }, [])

    return (
        <div className="victoryScreen">
            {conffetiOpacity > 0 && <Confetti
                width= {width}
                height= {height}
                opacity= {conffetiOpacity}
            />}
            <h1>{winner.name} is victorious!</h1>
            <div className="piece">
                <img src={winner.piece_id} alt="" />
            </div>
            <button 
                className="btn btn-gameOver" 
                onClick={()=> window.location.reload()} 
                style={{visibility:
                    conffetiOpacity <= 0? 'visible': 'hidden'
            }}>
                Done
            </button>
        </div>
    )
}

export default VictoryScreen;
