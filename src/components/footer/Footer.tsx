import React from 'react'
import { useTranslation } from 'react-i18next';

export function Footer() {
	const { t } = useTranslation();
	return (
		<div>
			<footer className="bg-gray-900 py-4">
					<div className="text-white font-medium">{t('footer.copyrightLabel')}</div>
			</footer>
		</div>
	)
}

export default Footer
