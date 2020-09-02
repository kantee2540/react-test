

import React from 'react'

export default function Language() {
    return (
        <div>
            <div className="head-title">Language</div>
            <div className="">
                <div className="setting-block">
                    <div className="setting-detail">
                        <div className="setting-title">Country</div>
                        <div className="setting-description">Choose country which you lived or want to display news</div>
                    </div>
                    <div className="toggle-content">
                        <select>
                            <option>English(United State)</option>
                            <option>Thai</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
