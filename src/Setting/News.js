import React from 'react'
import { Link } from 'react-router-dom'

const country = [{name: 'Argentina', code: 'ar'}, {name: 'Australia', code: 'au'},
{name: 'Austria', code: 'at'}, {name: 'Belgium', code: 'be'},
{name: 'Brazil', code: 'br'}, {name: 'Bulgaria', code: 'bg'},
{name: 'Canada', code: 'ca'}, {name: 'China', code: 'cn'},
{name: 'Colombia', code: 'co'}, {name: 'Cuba', code: 'cu'},
{name: 'Czech Republic', code: 'cz'}, {name: 'Egypt', code: 'eg'},
{name: 'France', code: 'fr'}, {name: 'Germany', code: 'de'},
{name: 'Greece', code: 'gr'}, {name: 'Hong Kong', code: 'hk'},
{name: 'Hungary', code: 'hu'}, {name: 'India', code: 'in'},
{name: 'Indonesia', code: 'id'}, {name: 'Ireland', code: 'ie'},
{name: 'Israel', code: 'il'}, {name: 'Italy', code: 'it'},
{name: 'Japan', code: 'jp'}, {name: 'Latvia', code: 'lv'},
{name: 'Lithuania', code: 'lt'}, {name: 'Malaysia', code: 'my'},
{name: 'Mexico', code: 'mx'}, {name: 'Morocco', code: 'ma'},
{name: 'Netherlands', code: 'nl'}, {name: 'New Zealand', code: 'nz'},
{name: 'Nigeria', code: 'ng'}, {name: 'Norway', code: 'no'},
{name: 'Philippines', code: 'ph'}, {name: 'Poland', code: 'pl'},
{name: 'Portugal', code: 'pt'}, {name: 'Romania', code: 'ro'},
{name: 'Russia', code: 'ru'}, {name: 'Saudi Arabia', code: 'sa'},
{name: 'Serbia', code: 'rs'}, {name: 'Singapore', code: 'sg'},
{name: 'Slovakia', code: 'sk'}, {name: 'Slovenia', code: 'si'},
{name: 'South Africa', code: 'za'}, {name: 'South Korea', code: 'kr'},
{name: 'Sweden', code: 'se'}, {name: 'Switzerland', code: 'ch'},
{name: 'Taiwan', code: 'tw'}, {name: 'Thailand', code: 'th'},
{name: 'Turkey', code: 'tr'}, {name: 'UAE', code: 'ae'},
{name: 'Ukraine', code: 'ua'}, {name: 'United Kingdom', code: 'gb'},
{name: 'United States', code: 'us'}, {name: 'Venuzuela', code: 've'}];

function setCountry(country){
    var countryCode = country.target.value;
    localStorage.setItem('news_country', countryCode);
}

export default function News() {
    var selectedCode = localStorage.getItem('news_country') || "us";
    return (
        <div>
            <div className="head-title">
                <Link to="/" className="setting-back d-inline d-md-none"><i class="fas fa-arrow-left"></i></Link>
                News
            </div>
            <div className="news-content">
                <div className="setting-block">
                    <div className="setting-detail">
                        <div className="setting-title">Country</div>
                        <div className="setting-description">Choose country which you lived or want to display news</div>
                    </div>
                    <div className="toggle-content">
                        <select onChange={setCountry} defaultValue={selectedCode}>
                            {country.map((item, key) => 
                                <option key={key} value={item.code}>{item.name}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className="setting-block">
                    <div className="setting-description">
                        The news language is depends on primary language for each countries. Default news country are from US.<br/>
                        All News data are contains from <a href="https://newsapi.org/">newsapi.org</a> read the license term <a href="https://newsapi.org/terms">here</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
