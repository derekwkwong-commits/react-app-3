import React, { Fragment, MouseEvent, useState } from 'react';

function ListGroup() {

    let items = [
        'Daddy',
        'A second item',
        'A third item',
        'A fourth item',
        'And a fifth one'
    ];

    // items = [];

    const [selectedIndex, setSelectedIndex] = useState(-1);

    items.map((item, index) => {
        return (
            <li key={index} className="list-group-item">{item}</li>
        );
    });

    if (items.length === 0)
        return <h1>No items found</h1>;

    const getMessage = () => {
        return items.length === 0 ? <h1>No items found</h1> : null;
    }

    const handleClick = (e: MouseEvent) => {
        console.log(e);
        setSelectedIndex(e.currentTarget.getAttribute('data-index') as unknown as number);
    };


    return (
        <Fragment>
            <h1>List Group</h1>
            {getMessage()}
            <ul className="list-group">
                {
                    items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={index === selectedIndex ? 'list-group-item active' : 'list-group-item'}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    );
}

export default ListGroup;