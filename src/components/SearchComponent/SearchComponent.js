
import React from 'react';
import { TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '66.6%',
        margin: '0 auto'
    },
    searchIcon: {
        paddingTop: '25%'
    },
    searchField: {
        width: 250
    }
}

const SearchComponent = ({ handleChange, city, handleSubmit }) => (
    <div style={styles.container}>
        <form>
            <TextField
                placeholder="Search Location"
                type="text"
                onChange={handleChange}
                value={city}
                label="Search Location"
                style={styles.searchField}
            />
            <Button type="submit" onClick={handleSubmit} >
                <SearchIcon style={styles.searchIcon} />
            </Button>
        </form>
    </div>
);

export default SearchComponent;