import React, {useState, useEffect} from 'react'
import ApiList from '../../components/Apis/ApiList.jsx'
import Header from '../../components/header/Header'
import styles from '../../styles/style.css'
import {useTheme} from '../../components/state/Themprovider'

const ApiPage = () => {
    const theme = useTheme();
    return (
    <div>
        
        <ApiList />
    </div>
    )
}

export default ApiPage;
