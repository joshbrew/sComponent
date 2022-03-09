import { Component } from 'react'
import {StateManager} from 'anotherstatemanager'

export const state = new StateManager({ }); //globally available state object

//alt to linker. These components share their state with the global state, and changes propagate both directions with setState
export class sComponent extends Component {

    statemgr=state
    UPDATED=[]

    constructor(
        props={
            state:state //can apply a new state other than the global state so you can have states for certain pages for example
        }
    ) {
        super(props);

        if(props.state)
            this.statemgr = props.state;

        //lets overload setState
        let react_setState = this.setState.bind(this);
        
        this.setState = (s={}) => {

            this.UPDATED = Object.keys(s);
            react_setState(s);
            if(typeof s === 'object') {            
               state.setState(s); //now relay through statemanager
            }
        }

        //so this runs AFTER the inherited constructor
        setTimeout(()=>{
            let found = {};
            for(const prop in this.state) { //for all props in state, subscribe to changes in the global state
                this.statemgr.subscribeTrigger(prop,(res)=>{
                    let c = this;
                    if(typeof c === 'undefined'){
                        this.statemgr.unsubscribeTrigger(prop);
                    }
                    else {
                        let wasupdated = this.UPDATED.indexOf(prop);
                        if( wasupdated > -1) {
                            this.UPDATED.splice(wasupdated,1);
                        }
                        else {
                             react_setState({[prop]:res});//only updates one prop at a time rn
                        }
                    }
                });
            }
            if(Object.keys(found).length > 0) react_setState(found); //override defaults
        },0.001);
        
    }

}
