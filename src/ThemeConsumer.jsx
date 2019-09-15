import React from 'react';
import Context from './ContextBuild.jsx'

const Consumer = (Component) => {
    class withContext extends React.Component{

        render() {
            let { oubliTheme } = this.context;
            return <Component {...this.props} oubliTheme={ oubliTheme || this.context } />
        }
    }

    withContext.contextType = Context;

    return withContext;
};

export default Consumer
