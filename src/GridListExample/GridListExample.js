import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

import FontIconExample from '../FontIconExample/FontIconExample';

const styles = {
    imgeInput: {
        CurSor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0
    }
};

const FlatButtonExampleComplex = () => (
    <div>
        <FlatButton label="选择图片" labelPosition={'before'}>
            <input type="file" style={styles.imgeInput} />
        </FlatButton>
        <FlatButton
            label="前置" labelPosition="before"
            primary={true}
            style={styles.button}
            icon={<ActionAndroid />}
            />
        <FlatButton
            href="https://github.com/callemall/material-ui"
            target="_blank"
            label="Github Material-ui主页"
            secondary={true}
            style={styles.button}
            icon={<FontIcon className="material-icons">home</FontIcon>}
            />
        <FontIconExample />
    </div>
);

export default FlatButtonExampleComplex;