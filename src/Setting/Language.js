import React from 'react'
import { Link } from 'react-router-dom'

export default function Language() {
    return (
        <div>
            <div className="head-title"><Link to="/" className="setting-back d-inline d-md-none"><i class="fas fa-arrow-left"></i></Link>Language</div>
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
