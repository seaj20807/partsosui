import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'

export default function AddPart(props) {

    const [open, setOpen] = React.useState(false)
    const [part, setPart] = React.useState({ partId: '', name: '', surfaceArea: '', baseMaterial: '' })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleInputChange = (event) => {
        setPart({ ...part, [event.target.name]: event.target.value })
    }

    const addPart = () => {
        props.addPart(part)
        handleClose()
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add a Part
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                area-aria-labelledby='alert-dialog-title'
            >
                <DialogTitle id='alert-dialog-title'>
                    New Part
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="partId"
                        value={part.partId}
                        onChange={event => handleInputChange(event)}
                        label="Part ID"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="name"
                        value={part.name}
                        onChange={event => handleInputChange(event)}
                        label="Name"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="surfaceArea"
                        value={part.surfaceArea}
                        onChange={event => handleInputChange(event)}
                        label="Surface Area"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="baseMaterial"
                        value={part.baseMaterial}
                        onChange={event => handleInputChange(event)}
                        label="Base Material"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addPart} autoFocus>Save</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}