import type { Translation } from '../i18n-types'
import en from '../en';

const it: Translation = {
	...en as Translation,
	message: 'Ciao Mondo',
};

export default it;
