import React, { useContext } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Store } from './ContextAPI';



export const Paginate = () => {
    const { page, setPage } = useContext(Store)
    return (
        <Stack spacing={2}>
            <Pagination
                count={10}
                page={page}
                onChange={(e, value) => setPage(value)}
                color="primary"
            />
        </Stack>
    );
}