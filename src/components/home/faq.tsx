'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { ContactButton } from '../common/contact-button';

type QuestionType = {
	id: number;
	question: string;
	answer: string;
};

const questions: QuestionType[] = [
	{
		id: 1,
		question: 'What services do you offer?',
		answer:
			'We offer comprehensive design and construction services including ADU design, foundation assessment and repair, interior remodeling (kitchens, bathrooms, bedrooms), load-bearing wall modifications, accessory structure design (decks, patios, pergolas, retaining walls), permit application services, new construction design, house additions, commercial design, and wildfire damage reconstruction.',
	},
	{
		id: 2,
		question: 'How does the design process work?',
		answer:
			'Our design process begins with a free consultation to understand your needs and vision. We then move through concept development, detailed design, 3D visualization, and construction documentation. Throughout the process, we collaborate closely with you to ensure the final design meets both your aesthetic preferences and functional requirements.',
	},
	{
		id: 3,
		question: 'What is your pricing structure?',
		answer:
			'Our pricing is project-based and depends on the scope, complexity, and scale of work required. We provide detailed cost breakdowns and transparent pricing during the initial consultation. For standard projects, we offer competitive fixed-price packages, while custom projects are quoted based on specific requirements.',
	},
	{
		id: 4,
		question: 'How long does a typical project take?',
		answer:
			'Project timelines vary based on scope and complexity. Small renovations might take 4-8 weeks, while larger projects like ADUs or complete home remodels can take 3-6 months. We provide detailed timelines during the planning phase and keep you updated throughout the process.',
	},
	{
		id: 5,
		question: 'Can you work within my budget?',
		answer:
			"Yes, we work with various budget ranges and can help optimize design solutions to meet your financial goals. During the initial consultation, we'll discuss your budget constraints and provide honest feedback on what can be achieved within your budget while maintaining quality standards.",
	},
	{
		id: 6,
		question: 'How can I get started with your services?',
		answer:
			"Getting started is easy! Simply contact us through our website or call us to schedule a free consultation. We'll discuss your project needs, timeline, and budget, then develop a customized plan that works for you. We also offer virtual consultations for your convenience.",
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

export default function FAQ() {
	const [openId, setOpenId] = useState<number | null>(null);

	return (
		<section className="py-16 md:py-20 bg-background">
			<div className="container mx-auto px-4 max-w-[1440px]">
				<div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-24">
					<div className="space-y-4 lg:space-y-8">
						<div className="space-y-4">
							<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
								Frequently Asked Questions
							</h2>
							<p className="text-gray-600 text-lg">
								Find answers to frequently asked questions about our services,
								process, and more. We&apos;re here to help you understand every
								aspect of your project.
							</p>
						</div>

						<div className="space-y-6 hidden lg:block w-full">
							<p className="text-gray-600">
								Haven&apos;t found what you&apos;re looking for?
							</p>
							<ContactButton
								className=""
								buttonText="Contact Us To Get A Free Consultation"
							/>
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
