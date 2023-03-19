import React from "react";
import { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const trafficLight = () => {

    const [active, setActiveColor] = useState(null);
    const [Purple, setPurple] = useState(false);
    const Colors = ['red', 'yellow', 'green', 'purple'];

    function AddPurple(){
         if (Purple) { 
            if (active === 'purple'){
                setActiveLight('red');
            }
            setPurple(false);
        } else {
            setPurple(true);
        }
           
    }
   
    

    function ChangeLight() {
        const currentIndex = Colors.indexOf(active);
        const nextIndex = (currentIndex + 1) % Colors.length;
        setActiveColor(Colors[nextIndex]);
    }
    return (<>
        <div className="container mt-2">
            <div className="Light">
                <div className={`light red m-2 ${active === 'red' ? 'glow' : ''}`}
                    onClick={() => setActiveColor('red')}>
    
                </div>
                <div className={`light yellow m-2 ${active === 'yellow' ? 'glow' : ''}`}
                    onClick={() => setActiveColor('yellow')}>
    
                </div>
    
                <div className={`light green m-2 ${active === 'green' ? 'glow' : ''}`}
                    onClick={() => setActiveColor('green')}>
    
                </div>

                {Purple ? (
                    <div
                    className={`light purple ${active === 'purple' ? 'glow' : ''}`}
                    onClick={() => setActiveColor('purple')}
                    />
                 ) : null}
                    
            </div>
        </div>
        <div className="mt-3 d-flex justify-content-center">
            <button className="me-2 btn btn-success" onClick={ChangeLight}>ChangeLight</button>
            <button className="me-2 btn btn-warning" onClick={AddPurple}> {Purple ? 'Remove Purple' : 'Add Purple'} </button>
                
                
    
    
        </div>
        </>
    );
}


export default trafficLight;
