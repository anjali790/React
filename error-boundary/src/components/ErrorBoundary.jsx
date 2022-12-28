import React from 'react'
import { Counter } from './Counter';
import { Dummy } from './Dummy';
import { UIBackup } from './UIBackup';

export function ErrorBoundary() {
    return (
        <>
            <div>ErrorBoundary</div>
            <UIBackup>
                <Dummy country="india" />
            </UIBackup>
            <UIBackup>
                <Dummy country="usa" />
            </UIBackup>
            <UIBackup>
                <Dummy country="russia" />
            </UIBackup>
            <UIBackup>
                <Counter name="Aarav"/>
            </UIBackup>
        </>
    )
}