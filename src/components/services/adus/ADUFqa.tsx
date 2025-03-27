'use client';

import { ContactButton } from '@/components/common/contact-button';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

type QuestionType = {
	id: number;
	question: string;
	answer: string;
};

const questions: QuestionType[] = [
	{
		id: 1,
		question: 'What is an Accessory Dwelling Unit (ADU)?',
		answer:
			'An Accessory Dwelling Unit (ADU) is a secondary housing unit on a single-family residential lot. It has its own kitchen, bathroom, and sleeping area, and can be attached to or detached from the main house. ADUs are also known as granny flats, in-law suites, or backyard cottages.',
	},
	{
		id: 2,
		question: 'Why should I consider building an ADU?',
		answer:
			'Building an ADU can increase your property value, generate rental income, provide housing for family members, or offer flexible living space. It&apos;s a smart investment in California&apos;s competitive housing market.',
	},
	{
		id: 3,
		question: 'What are the typical costs of designing and building an ADU?',
		answer:
			'ADU costs vary widely depending on size, complexity, finishes, and location. Design and permit fees can range from $5,000 to $15,000+, and construction costs can range from $100,000 to $300,000+. We provide detailed cost breakdowns and transparent pricing during our consultation.',
	},
	{
		id: 4,
		question: 'How long does it take to design and build an ADU?',
		answer:
			'The timeline for an ADU project depends on design complexity, permit processing times, and construction duration. Design and permitting can take 2-6 months, and construction can take 4-9 months. We provide estimated timelines during the planning phase and keep you updated throughout the project.',
	},
	{
		id: 5,
		question: 'What permits are required for ADU construction in California?',
		answer:
			'ADU construction requires building permits, and may also involve planning, zoning, and utility permits depending on local regulations. We handle the entire permit application process, ensuring compliance and a smooth approval.',
	},
];

const QuestionItem = ({
	question,
	isOpen,
	onToggle,
}: {
	question: QuestionType;
	isOpen: boolean;
	onToggle: () => void;
}) => {
	return (
		<div className="border-b  border-gray-200 last:border-none">
			<button
				onClick={onToggle}
				className="w-full  cursor-pointer py-6 px-3  flex items-center justify-between text-left"
			>
				<span className="text-lg font-medium">{question.question}</span>
				<Plus
					className={`h-5 w-5 transition-transform duration-200 flex-shrink-0 ${
						isOpen ? 'rotate-45' : ''
					}`}
				/>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="overflow-hidden"
					>
						<p className="pb-6 px-3 text-gray-600 leading-relaxed">
							{question.answer}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default function ADUFAQ() {
	const [openId, setOpenId] = useState<number | null>(null);

	return (
		<section className="py-20 bg-background">
			<div className="container mx-auto px-4 max-w-[1440px]">
				<div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-24 items-center">
					<div className="space-y-4 lg:space-y-8 self-center">
						<div className="space-y-4">
							<h2 className="text-6xl font-bold">Frequently Asked Questions</h2>
							<p className="text-xl text-gray-600 leading-relaxed">
								Find answers to frequently asked questions about our services,
								process, and more. We&apos;re here to help you understand every
								aspect of your project.
							</p>
						</div>
					</div>
					<div className="max-w-3xl">
						{questions.map((question) => (
							<QuestionItem
								key={question.id}
								question={question}
								isOpen={openId === question.id}
								onToggle={() =>
									setOpenId(openId === question.id ? null : question.id)
								}
							/>
						))}
						<div className="mt-10 text-center">
							<ContactButton
								className="lg:hidden"
								buttonText="Let's have a quick talk"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
