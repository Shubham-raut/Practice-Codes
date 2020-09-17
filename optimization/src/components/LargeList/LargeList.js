import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import './LargeList.css';

const Row = ({ index, style }) => (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
        Row {index}
    </div>
);

const LargeList = () => {

    return (<>
        <AutoSizer>
            {({ height, width }) => (
                <List
                    className="List"
                    height={height}
                    itemCount={1000}
                    itemSize={35}
                    width={width}
                >
                    {Row}
                </List>
            )}
        </AutoSizer>
        {/* <List
            className="List"
            height={300}
            itemCount={1000}
            itemSize={35}
            width={400}
        >
            {Row}
        </List> */}
    </>
        // layout="horizontal"

    );
}





export default LargeList;