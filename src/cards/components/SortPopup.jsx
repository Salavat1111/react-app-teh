import React from 'react';
import './sort.css';


function SortPopup({ items }) {
    const [visiblePopup, setVisiblePopup] = React.useState(false);

    const onSelector = () => {
        setVisiblePopup(!visiblePopup)
    };

    return (
        <>
            <div className="sortpopup__block">
                <input onClick={onSelector} />
            </div>
            {visiblePopup && <div className='sortpopup__wrapper'>
                <ul>
                    <li>
                        {items.map((name) => (
                            <li>{name}</li>
                        ))}
                    </li>
                </ul>
            </div>}
        </>
    );
};


export default SortPopup;