import React, { useState } from 'react';
import SearchComponent from '../SearchComponent/SearchComponent'
import axios from 'axios';
import { Button, List } from '@material-ui/core';
import ListComponent from '../ListItem/ListComponent';

const styles = {
    container: {
        height: '50vh',
        margin: '0 auto',
        width: '50%',
        flexDirection: 'row',
        textAlign: 'center'
    },
    logoutButton: {
        margin: 20
    }
}

export const Home = props => {

    const APIKEY = '32d8a08847650a0ccab21fea0aedd2c6';

    const [city, setCity] = useState('');
    const [data, setData] = useState(null);

    const loadData = async (e) => {
        e.preventDefault();
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);
        const data = await result.data;
        setData(data);
        console.log(data)
    }

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const getCelsius = (kelvin) => {
        return ((kelvin - 272.15).toFixed(0) + '°C');
    }

    return (
        <div style={styles.container}>
            <SearchComponent
                handleChange={handleChange}
                city={city}
                handleSubmit={loadData} />
            <Button
                variant='outlined'
                onClick={() => { props.history.push('/') }}
                style={styles.logoutButton}
            >
                Logout
            </Button>
            {data ? (
                <div style={{ display: 'flex' }}>
                    <List style={{ flex: 1, backgroundColor: 'lightblue', borderRadius: 20}}>
                        <ListComponent title={data.weather[0].main} value={'Weather'}/>
                        <ListComponent title={data.weather[0].description} value={'Description'}/>
                        <ListComponent title={getCelsius(data.main.temp)} value={'Temperature'}/>
                        <ListComponent title={data.main.humidity + ' %'} value={'Humidity'}/>
                        <ListComponent title={data.main.pressure + ' mbar'} value={'Pressure'}/>
                    </List>
                </div>
            ) : null}

        </div>
    )
}
