'use client';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useForm, ValidationError } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog';

// TODO: 后续添加reCAPTCHA支持
// declare global {
// 	interface Window {
// 		grecaptcha: {
// 			ready: (callback: () => void) => void;
// 			execute: (siteKey: string, options: { action: string }) => Promise<string>;
// 		};
// 	}
// }

interface ContactButtonProps {
	className?: string;
	buttonText?: string;
	icon?: React.ReactNode;
}

// 定义美国电话号码验证正则表达式
const usPhoneRegex =
	/^(\+1|1)?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;

// 定义表单验证模式
const formSchema = z.object({
	name: z.string().min(2, { message: 'Name is required (min 2 characters)' }),
	email: z.string().email({ message: 'Please enter a valid email address' }),
	phone: z.string().regex(usPhoneRegex, {
		message: '(e.g. 123-456-7890)',
	}),
	address: z.string().min(5, {
		message: '123 Main St, San Jose',
	}),
	service: z.string({
		required_error: 'Please select a service you are interested in',
	}),
	message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function ContactForm() {
	// Formspree 表单初始化 - 替换为您的表单ID
	const [formspreeState, handleFormspreeSubmit] = useForm('xbldaqak');
	const router = useRouter();

	// React Hook Form 用于表单验证
	const form = useReactHookForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			address: '',
			service: '',
			message: '',
		},
	});

	// 如果表单提交成功，重定向到感谢页面
	React.useEffect(() => {
		if (formspreeState.succeeded) {
			router.push('/thank-you');
		}
	}, [formspreeState.succeeded, router]);

	// 结合 React Hook Form 和 Formspree
	const onSubmit = async (data: FormValues) => {
		// 提交到 Formspree
		await handleFormspreeSubmit(data);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 sm:space-y-6"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="space-y-1 sm:space-y-2">
								<FormLabel className="flex items-center text-sm sm:text-base">
									Name <span className="text-red-500 ml-1">*</span>
								</FormLabel>
								<FormControl>
									<Input
										placeholder="Your full name"
										{...field}
										className="h-9 sm:h-10 text-sm focus:ring-2 focus:ring-primary/20"
									/>
								</FormControl>
								<FormMessage className="text-xs sm:text-sm" />
								<ValidationError
									prefix="Name"
									field="name"
									errors={formspreeState.errors}
								/>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="space-y-1 sm:space-y-2">
								<FormLabel className="flex items-center text-sm sm:text-base">
									Email <span className="text-red-500 ml-1">*</span>
								</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="your.email@example.com"
										{...field}
										className="h-9 sm:h-10 text-sm focus:ring-2 focus:ring-primary/20"
									/>
								</FormControl>
								<FormMessage className="text-xs sm:text-sm" />
								<ValidationError
									prefix="Email"
									field="email"
									errors={formspreeState.errors}
								/>
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem className="space-y-1 sm:space-y-2">
							<FormLabel className="flex items-center text-sm sm:text-base">
								Phone <span className="text-red-500 ml-1">*</span>
							</FormLabel>
							<FormControl>
								<Input
									type="tel"
									placeholder="(123) 456-7890"
									{...field}
									className="h-9 sm:h-10 text-sm focus:ring-2 focus:ring-primary/20"
								/>
							</FormControl>
							<FormMessage className="text-xs sm:text-sm" />
							<ValidationError
								prefix="Phone"
								field="phone"
								errors={formspreeState.errors}
							/>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="address"
					render={({ field }) => (
						<FormItem className="space-y-1 sm:space-y-2">
							<FormLabel className="flex items-center text-sm sm:text-base">
								Address <span className="text-red-500 ml-1">*</span>
							</FormLabel>
							<FormControl>
								<Input
									placeholder="123 Main St, City"
									{...field}
									className="h-9 sm:h-10 text-sm focus:ring-2 focus:ring-primary/20"
								/>
							</FormControl>
							<FormMessage className="text-xs sm:text-sm" />
							<ValidationError
								prefix="Address"
								field="address"
								errors={formspreeState.errors}
							/>
							<p className="text-xs text-muted-foreground mt-0.5">
								Street address and city only
							</p>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="service"
					render={({ field }) => (
						<FormItem className="space-y-1 sm:space-y-2">
							<FormLabel className="flex items-center text-sm sm:text-base">
								Service Interested In{' '}
								<span className="text-red-500 ml-1">*</span>
							</FormLabel>
							<FormControl>
								<select
									{...field}
									className="w-full rounded-md border border-input bg-background px-3 py-1 sm:py-2 text-sm ring-offset-background focus:ring-2 focus:ring-primary/20 focus:outline-none h-9 sm:h-10"
								>
									<option value="">Select a service</option>
									<option value="adu">ADU Design</option>
									<option value="foundation">
										Foundation Assessment & Repair
									</option>
									<option value="remodeling">Interior Remodeling</option>
									<option value="wall">Load-Bearing Wall Demolition</option>
									<option value="accessory">Accessory Structure Design</option>
									<option value="permit">Permit Application Services</option>
									<option value="new">New Construction Design</option>
									<option value="demolition">
										House Demolition & Addition
									</option>
									<option value="commercial">Commercial Design</option>
									<option value="wildfire">Wildfire Damage Repair</option>
									<option value="other">Other Services</option>
								</select>
							</FormControl>
							<FormMessage className="text-xs sm:text-sm" />
							<ValidationError
								prefix="Service"
								field="service"
								errors={formspreeState.errors}
							/>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem className="space-y-1 sm:space-y-2">
							<FormLabel className="text-sm sm:text-base">
								Message (Optional)
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Tell us about your project or any specific requirements"
									rows={3}
									{...field}
									className="text-sm focus:ring-2 focus:ring-primary/20 resize-none"
								/>
							</FormControl>
							<FormMessage className="text-xs sm:text-sm" />
							<ValidationError
								prefix="Message"
								field="message"
								errors={formspreeState.errors}
							/>
						</FormItem>
					)}
				/>

				<div className="flex flex-col space-y-2">
					<Button
						type="submit"
						className="w-full md:w-auto px-4 sm:px-8 py-2.5 sm:py-6 bg-primary hover:bg-primary/90 text-white text-sm sm:text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
						disabled={formspreeState.submitting}
					>
						{formspreeState.submitting ? (
							<>
								<Loader2 className="mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
								Sending...
							</>
						) : (
							'Send Message'
						)}
					</Button>
					<p className="text-xs text-muted-foreground text-center md:text-left mt-1">
						Fields marked with <span className="text-red-500">*</span> are
						required
					</p>
				</div>
			</form>
		</Form>
	);
}

export function ContactButton({
	className,
	buttonText,
	icon,
}: ContactButtonProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className={cn(
						'px-4 sm:px-6 py-3 sm:py-6 bg-button-background text-white font-medium rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base',
						className
					)}
					size="lg"
				>
					{buttonText}
					{icon && <span className="ml-2">{icon}</span>}
				</Button>
			</DialogTrigger>
			<DialogContent className="w-[90vw] max-w-md sm:max-w-md md:max-w-lg lg:max-w-xl p-3 sm:p-4 md:p-6 max-h-[80vh] sm:max-h-[85vh] md:max-h-[90vh] overflow-y-auto rounded-lg">
				<DialogHeader className="space-y-1.5 sm:space-y-2 md:space-y-3">
					<DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-center">
						Request Your Free Consultation
					</DialogTitle>
					<DialogDescription className="text-center text-xs sm:text-sm md:text-base">
						Complete the form below and our team will contact you to schedule
						your free consultation. We&apos;ll discuss your project needs and
						provide expert guidance.
					</DialogDescription>
				</DialogHeader>
				<div className="mt-2 sm:mt-3 md:mt-4">
					<ContactForm />
				</div>
			</DialogContent>
		</Dialog>
	);
}
