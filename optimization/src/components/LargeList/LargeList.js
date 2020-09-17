import React, { PureComponent, forwardRef } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import './LargeList.css';

const Row = ({ index, style }) => (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style} onClick={() => console.log(index + ' Clicked')}>
        Row {index}
    </div>
);


function clickHandlor(event) {
    // Your handler goes here ...
    console.log("using outerElementType", event.type);
}

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onClick={clickHandlor} {...props} />
));

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
                    // layout="horizontal"
                    outerElementType={outerElementType}
                >
                    {Row}
                </List>
            )}
        </AutoSizer>
    </>
    );
}
export default LargeList;




//lazy loading of list
const LOADING = 1;
const LOADED = 2;
let itemStatusMap = {};

const isItemLoaded = index => !!itemStatusMap[index];
const loadMoreItems = (startIndex, stopIndex) => {
    for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMap[index] = LOADING;
    }
    return new Promise(resolve =>
        setTimeout(() => {
            for (let index = startIndex; index <= stopIndex; index++) {
                itemStatusMap[index] = LOADED;
            }
            resolve();
        }, 2500)
    );
};

class ListRow extends PureComponent {
    render() {
        const { index, style } = this.props;
        let label;
        if (itemStatusMap[index] === LOADED) {
            label = `Row ${index}`;
        } else {
            label = "Loading...";
        }
        return (
            <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
                {label}
            </div>
        );
    }
}

export const LazyLoadLargeList = () => {

    return (
        <>
            <p className="Note">
                This demo app mimics loading remote data with a 2.5s timer. While rows
                are "loading" they will display a "Loading..." label. Once data has been
                "loaded" the row number will be displayed. Start scrolling the list to
                automatically load data.
          </p>
            <InfiniteLoader
                isItemLoaded={isItemLoaded}
                itemCount={1000}
                loadMoreItems={loadMoreItems}
            >
                {({ onItemsRendered, ref }) => (
                    <List
                        className="List"
                        height={300}
                        itemCount={1000}
                        itemSize={35}
                        onItemsRendered={onItemsRendered}
                        ref={ref}
                        width={400}
                    >
                        {ListRow}
                    </List>
                )}
            </InfiniteLoader>
        </>
    );
}
