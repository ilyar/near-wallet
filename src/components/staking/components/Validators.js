import React, { useState } from 'react'
import FormButton from '../../common/FormButton'
import { Translate } from 'react-localize-redux'
import ListWrapper from './ListWrapper'
import ValidatorBox from './ValidatorBox'

export default function Validators({ validators }) {
    const [validator, setValidator] = useState('')
    return (
        <>
            <h1><Translate id='staking.validators.title' /></h1>
            <h2><Translate id='staking.validators.desc' /></h2>
            <h4><Translate id='staking.validators.inputLabel' /></h4>
            <input placeholder='e.g. johndoe.near' value={validator} onChange={e => setValidator(e.target.value)} autoFocus spellCheck='false'/>
            <FormButton disabled={!validators.map(validator => validator.name).includes(validator)} linkTo={`/staking/${validator}`}><Translate id='staking.validators.button'/></FormButton>
            <h3><Translate id='staking.validators.available' /></h3>
            <ListWrapper>
                {validators.map((validator, i) => 
                    <ValidatorBox
                        key={i}
                        validator={validator.name}
                        fee={validator.fee.percentage}
                />
                )}
            </ListWrapper>
        </>
    )
}