'use client';

import { ContactButton } from '@/components/common/contact-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ContactCTAProps {
	title?: string;
	description?: string;
	buttonText?: string;
	linkText?: string;
	linkHref?: string;
}

export function ContactCTA({
	title = 'Ready to Transform Your Space?',
	description = 'Cecilia Home can help you implement these design trends in your home. Our expert team specializes in kitchen and bathroom remodeling projects throughout California.',
	buttonText = 'Get a Free Consultation',
	linkText = 'View Remodeling Services',
	linkHref = '/services/interior-remodeling',
}: ContactCTAProps) {
	return (
		<div className="my-12 bg-primary/5 border border-primary/10 rounded-lg p-6">
			<h4 className="text-xl font-semibold mb-3 text-primary">{title}</h4>
			<p className="text-stone-700 mb-4">{description}</p>
			<div className="flex flex-col items-center sm:flex-row gap-3">
				<ContactButton buttonText={buttonText} className="w-full sm:w-auto" />
				{linkText && linkHref && (
					<Button asChild variant="ghost" className="w-full sm:w-auto">
						<Link href={linkHref}>{linkText}</Link>
					</Button>
				)}
			</div>
		</div>
	);
}
