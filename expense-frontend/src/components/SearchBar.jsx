import React from "react";
import {
    Card,
    CardContent,
    TextField,
    InputAdornment
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ search, setSearch }) {

    return (

        <Card
            elevation={4}
            sx={{
                mt: 3,
                mb: 3,
                borderRadius: 3
            }}
        >

            <CardContent>

                <TextField

                    fullWidth

                    placeholder="Search by title or category..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="primary" />
                            </InputAdornment>
                        )
                    }}

                />

            </CardContent>

        </Card>

    );

}

export default SearchBar;