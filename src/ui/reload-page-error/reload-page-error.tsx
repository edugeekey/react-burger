import React, { ReactElement } from 'react';
import { Error } from '../error';

export const ERROR_TEXT = 'Попробуйте перезагрухить страницу. Если это не поможет обратитесь в службу поддержки.';

export const ReloadPageError = (): ReactElement => {
    return (
        <Error text={ERROR_TEXT} title='Обновить' callback={(): void => window.location.reload()} />
    );
};
