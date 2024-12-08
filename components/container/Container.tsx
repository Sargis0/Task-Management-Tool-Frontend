import {FC} from 'react';

import {IContainer} from './types';

const Container: FC<IContainer> = ({children}) => {
    return (
        <section>
            {children}
        </section>
    )
}

export default Container;
