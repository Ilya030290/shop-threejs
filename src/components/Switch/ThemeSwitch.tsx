import React from 'react';
import * as Switch from '@radix-ui/react-switch';

import useUserStore from '../../stores/userStore';
import './styles.css';

const ThemeSwitch = () => {

    const isDarkMode = useUserStore(state => state.isDarkMode);
    const toggleMode = useUserStore(state => state.toggleMode);

    return (
        <div className="Wrapper max-lg:pl-3 max-lg:py-2">
            <Switch.Root className="SwitchRoot" id={`${isDarkMode ? 'dark-mode-checked' : 'dark-mode-unchecked'}`} onCheckedChange={toggleMode}>
                <Switch.Thumb className={`${isDarkMode ? 'SwitchThumb-checked' : ''} SwitchThumb`} />
            </Switch.Root>
            <label className={`${isDarkMode ? 'WhiteLabel' : 'Label'}`} htmlFor="dark-mode">
                dark mode
            </label>
        </div>
    );
};

export default ThemeSwitch;
