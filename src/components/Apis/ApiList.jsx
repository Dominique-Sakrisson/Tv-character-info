import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ApiItem from './ApiItem'
import PropTypes from 'prop-types'
import styles from './styleApi.css'
import rootStyles from '../../styles/style.css'
import {useTheme} from '../state/Themprovider'
const apis = ['ricknm', 'avatar'];
const ApiList = () => {
    const theme = useTheme();

 return(   <>
    <p>Choose your favorite show</p>
    <ul className={styles.apiList} aria-label='api-choices'>
        {apis.map((api) => (
            <li className={styles.listItem} key={api}>
                <Link to={`/${api}`} style={{textDecoration: 'none'}}>
                {api}
                </Link>
            </li>
        ))}
    </ul>
    </>
 )
}

export default ApiList;
