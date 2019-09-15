import React from 'react';
import Context from "./ContextBuild.jsx";
import DefaultTheme from "./DefaultTheme.jsx";

class Provider extends React.Component {
    constructor(props){
        super(props);
        
        this.functions = {
            changeState: this.handleState
        };

        this.state = {
            oubliTheme: DefaultTheme,
            ...this.functions
        };
    }

    handleState = ( newState ) => {
        if( this.state !== newState )
            this.setState( {...newState, ...this.functions} )
    };

    render() {
        const {children} = this.props;
        return (
            <Context.Provider value={{...this.state}}>
                { children }
            </Context.Provider>
        );
    }
}

export default Provider
