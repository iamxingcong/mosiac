import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { data } from './data';
import G6 from '@antv/g6';



function Gs() {
    // eslint-disable-next-line
    const ref = React.useRef(null);
    var graph = null;

    useEffect(() => {
        if (!graph) {
            graph = new G6.Graph({
                container: ReactDOM.findDOMNode(ref.current),
                width: 1200,
                height: 800,
                modes: {
                    default: ['drag-canvas'],
                },
                layout: {
                    type: 'dagre',
                    direction: 'LR',
                },
                defaultNode: {
                    type: 'node',
                    labelCfg: {
                        style: {
                            fill: '#000000A6',
                            fontSize: 10,
                        },
                    },
                    style: {
                        stroke: '#72CC4A',
                        width: 150,
                    },
                },
                defaultEdge: {
                    type: 'polyline',
                },
            });
        }
        graph.data(data);
        graph.render();
    }, []);

    return <div ref={ref}></div>;
}

export default Gs;