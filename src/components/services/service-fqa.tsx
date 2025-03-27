'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export type QuestionType = {
	id: number;
	question: string;
	answer: string;
};

interface ServiceFAQProps {
	title: string;
	description: string;
	questions: QuestionType[];
}

export default function ServiceFAQ({
	title,
	description,
	questions,
}: ServiceFAQProps) {
	const [openId, setOpenId] = useState<number | null>(null);
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

	return (
		<section className="py-20 bg-background">
			<div className="container mx-auto px-4 max-w-[1440px]">
				<div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-24 ">
					<div className="space-y-4 lg:space-y-8 mt-6">
						<div className="space-y-4">
							<h2 className="text-6xl font-bold">{title}</h2>
							<p className="text-xl text-gray-600 leading-relaxed">
								{description}
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
					</div>
				</div>
			</div>
		</section>
	);
}
