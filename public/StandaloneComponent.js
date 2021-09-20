'use strict';

const e = React.createElement;

class StandaloneComponent extends React.Component {

    render() {
        return (
            <div>
                Hello World
            </div>
            //TODO: Do something more impressive here
        );
    }
}

const domContainer = document.querySelector('#myReactContainer');
ReactDOM.render(e(StandaloneComponent), domContainer);
