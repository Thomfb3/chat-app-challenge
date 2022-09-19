import React from "react";
import { v4 as uuidv4 } from 'uuid';

function DummyContent() {
    const NUM_OF_BLOCKS = 10;
    const dummyBlocks = Array.from(Array(NUM_OF_BLOCKS).keys())
    return (
        <>
            <div className="DummyContent">
            {dummyBlocks.map(b => (
                <div
                    key={uuidv4()}
                    className="DummyBlock"
                >
                    {b + 1}
                </div>
            ))}
            </div>
        </>
    )
}

export default DummyContent;
