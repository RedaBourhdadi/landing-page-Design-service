'use client';

import { useEffect, useRef, useState } from 'react';

// 定义统计数据类型
type StatItem = {
	value: string;
	label: string;
	numericValue: number;
	suffix?: string;
};

// 统计数据 - 更新基于新提供的信息
const stats: StatItem[] = [
	{
		value: '20 Years',
		numericValue: 20,
		label: 'California Registered Civil Engineer',
	},
	{
		value: '2000+',
		numericValue: 2000,
		suffix: '+',
		label: 'Projects Completed',
	},
	{
		value: '95%',
		numericValue: 95,
		suffix: '%',
		label: 'Permit Approval Rate',
	},
	{
		value: '50+',
		numericValue: 50,
		suffix: '+',
		label: 'Professional Team Members',
	},
];

// 数字计数动画组件
function AnimatedCounter({
	targetValue,
	suffix = '',
	prefix = '',
	duration = 2000, // 动画持续时间，毫秒
}: {
	targetValue: number;
	suffix?: string;
	prefix?: string;
	duration?: number;
}) {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const counterRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// 创建Intersection Observer
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !isVisible) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 } // 当10%的元素可见时触发
		);

		// 捕获当前ref值
		const currentRef = counterRef.current;

		// 监听元素
		if (currentRef) {
			observer.observe(currentRef);
		}

		// 清理
		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [isVisible]);

	useEffect(() => {
		// 只有当元素可见时才启动动画
		if (!isVisible) return;

		let startTime: number | null = null;
		let animationFrameId: number;

		// 动画函数
		const animateCount = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress = timestamp - startTime;
			const percentage = Math.min(progress / duration, 1);

			// 使用easeOutQuad缓动函数使动画更自然
			const easeOutPercentage = 1 - (1 - percentage) * (1 - percentage);

			// 计算当前值
			const currentValue = Math.floor(easeOutPercentage * targetValue);
			setCount(currentValue);

			// 如果动画未完成，继续
			if (percentage < 1) {
				animationFrameId = requestAnimationFrame(animateCount);
			}
		};

		// 开始动画
		animationFrameId = requestAnimationFrame(animateCount);

		// 清理
		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, [isVisible, targetValue, duration]);

	return (
		<div
			ref={counterRef}
			className="text-6xl md:text-7xl lg:text-8xl font-bold transition-all"
		>
			{prefix}
			{count}
			{suffix}
		</div>
	);
}

export const States = () => {
	return (
		<section className="py-16 md:py-20 bg-background">
			<div className="container mx-auto px-6 md:px-10">
				<div className="mb-16 max-w-3xl">
					<h2 className="text-3xl md:text-5xl font-bold text-gray-900">
						Design and Engineering Services Throughout California
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-300 pt-12">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="border-r last:border-r-0 border-gray-300 pr-6 last:pr-0"
						>
							<AnimatedCounter
								targetValue={stat.numericValue}
								suffix={stat.suffix}
								prefix={
									stat.label === 'California Registered Civil Engineer'
										? ''
										: ''
								}
							/>
							<p className="text-lg text-gray-700 mt-2">{stat.label}</p>
						</div>
					))}
				</div>

				<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<p className="text-lg text-gray-700">
							At Cecilia Home, we believe in providing clear and transparent
							architectural services that you can trust. Our experienced
							engineers and designers are committed to offering personalized
							solutions, whether you&apos;re dealing with complex home
							additions, seeking assistance with ADU designs, or managing
							residential remodeling projects. We simplify the architectural
							process, making it easy to understand and navigate.
						</p>
					</div>
					<div>
						<p className="text-lg text-gray-700">
							Our team ensures that every client receives the most effective
							architectural strategies, all while building long-term
							relationships focused on achieving the best possible outcomes.
							With our California registered civil engineers and a 95% permit
							approval rate, we have successfully completed over 2,000 projects
							throughout California with exceptional results and unparalleled
							customer satisfaction.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
