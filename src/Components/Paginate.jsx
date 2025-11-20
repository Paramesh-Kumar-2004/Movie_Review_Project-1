import React, { useContext } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Store } from './ContextAPI';

export const Paginate = () => {
    const { page, setPage } = useContext(Store)

    return (
        <div className="text-white">
            <Stack spacing={2}>
                <Pagination
                    count={10}
                    page={page}
                    onChange={(e, value) => setPage(value)}
                    color="primary"
                    sx={{
                        '& .MuiPaginationItem-root': {
                            color: 'white',
                            fontSize: 18
                        },
                        '& .Mui-selected': {
                            backgroundColor: '#1d4ed8 !important',
                            color: 'white !important',
                        },
                        '& .MuiPaginationItem-root:hover': {
                            backgroundColor: '#3b82f6',
                            color: 'white',
                        }
                    }}
                />
            </Stack>
        </div>
    );
}