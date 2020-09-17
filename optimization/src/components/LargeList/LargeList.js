import React from 'react';
import { FixedSizeList as List } from 'react-window';
import './LargeList.css';

const Row = ({ index, style }) => (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
        Row {index}
    </div>
);

const LargeList = () => {

    return (
        <List
            className="List"
            height={300}
            itemCount={200000}
            itemSize={40}
            width={400}
        // layout="horizontal"
        >
            {Row}
        </List>
    );
}





export default LargeList;