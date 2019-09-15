import React from 'react';
import Context from './ContextBuild.jsx'

const Consumer = (Component) => {
    class withContext extends React.Component{
        render() {
            const { oubliTheme } = this.context;
            return <Component {...this.props} oubliTheme={ oubliTheme } />
        }
    }

    withContext.contextType = Context;

    return withContext;
};

export default Consumer
