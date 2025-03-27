import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
	title: 'Thank You | Cecilia Home',
	description:
		'Thank you for contacting Cecilia Home. We appreciate your interest in our design and construction services.',
};

export default function ThankYouPage() {
	return (
		<div className="container max-w-4xl mx-auto px-4 py-16 md:py-24">
			<div className="bg-white border border-primary/10 rounded-xl p-8 md:p-12 shadow-sm">
				<div className="flex flex-col items-center text-center">
					<div className="relative h-24 w-24 mb-6">
						<CheckCircle2 className="h-24 w-24 text-primary animate-in fade-in-50 duration-500" />
					</div>

					<h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
						Thank You for Contacting Us!
					</h1>

					<div className="max-w-2xl">
						<p className="text-stone-700 text-lg mb-6">
							We&apos;ve received your message and a member of our team will get
							back to you within 24 hours. In the meantime, feel free to explore
							our projects and services.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
							<Button asChild size="lg" className="w-full">
								<Link href="/showcase">View Our Projects</Link>
							</Button>

							<Button asChild variant="outline" size="lg" className="w-full">
								<Link href="/">Return to Home</Link>
							</Button>
						</div>
					</div>

					<div className="mt-12 pt-8 border-t border-gray-100 w-full">
						<h2 className="text-xl font-semibold mb-4">What Happens Next?</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-primary/5 rounded-lg p-4">
								<div className="font-semibold text-primary mb-2">
									1. Initial Consultation
								</div>
								<p className="text-sm text-stone-600">
									We&apos;ll schedule a call or meeting to discuss your needs in
									detail.
								</p>
							</div>

							<div className="bg-primary/5 rounded-lg p-4">
								<div className="font-semibold text-primary mb-2">
									2. Project Proposal
								</div>
								<p className="text-sm text-stone-600">
									Our team will prepare a custom proposal based on your
									requirements.
								</p>
							</div>

							<div className="bg-primary/5 rounded-lg p-4">
								<div className="font-semibold text-primary mb-2">
									3. Project Kickoff
								</div>
								<p className="text-sm text-stone-600">
									Once approved, we&apos;ll begin the design and planning
									process.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
